(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const html = document.documentElement;
  const lang = () => (html.lang === "en" ? "en" : "cs");
  const locale = () => (lang() === "en" ? "en-GB" : "cs-CZ");
  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const formatDate = (iso) => (iso ? new Date(iso + "T12:00:00").toLocaleDateString(locale(), { day: "numeric", month: "long", year: "numeric" }) : "");

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (v === undefined || v === null || v === false) return;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v === true ? "" : v);
    });
    [].concat(children).forEach((c) => c && node.append(c));
    return node;
  }

  /* ===== Motiv ===== */
  function applyTheme(theme) {
    html.setAttribute("data-bs-theme", theme);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#121212" : "#FAFAFA");
    $$(".theme-toggle").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(theme === "light"));
      const icon = $("i", btn);
      if (icon) icon.className = theme === "dark" ? "bi bi-sun" : "bi bi-moon-stars";
    });
  }

  $$(".theme-toggle").forEach((btn) =>
    btn.addEventListener("click", () => {
      const next = html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", next); } catch (e) {}
      applyTheme(next);
    })
  );
  applyTheme(html.getAttribute("data-bs-theme") === "light" ? "light" : "dark");

  /* ===== Animace při scrollu ===== */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    $$("[data-reveal]").forEach((node) => {
      node.classList.add("reveal");
      io.observe(node);
    });
  }

  /* ===== Fotky: společné ===== */
  const PHOTOS = typeof FOTKY !== "undefined" ? FOTKY : null;
  const photoTitle = (p) => (p.title ? p.title[lang()] || p.title.cs : p.id);
  const catLabel = (id) => {
    const c = PHOTOS && PHOTOS.categories.find((x) => x.id === id);
    return c ? c.label[lang()] || c.label.cs : id;
  };

  function photoTile(p, list, index) {
    const btn = el("button", { type: "button", class: "photo-tile", "aria-label": `${t("photo.open")}: ${photoTitle(p)}` }, [
      el("img", { src: p.thumb || p.src, width: p.tw || p.w, height: p.th || p.h, alt: photoTitle(p), loading: "lazy" }),
    ]);
    btn.addEventListener("click", () => openPhoto(list, index));
    return btn;
  }

  /* ===== Modal: detail fotky ===== */
  const photoModalEl = $("#photoModal");
  const photoModal = photoModalEl ? bootstrap.Modal.getOrCreateInstance(photoModalEl) : null;
  let modalList = [];
  let modalIndex = 0;

  function renderPhotoModal() {
    const p = modalList[modalIndex];
    if (!p) return;
    $("#photoModalTitle").textContent = photoTitle(p);
    $("#photoModalCategory").textContent = catLabel(p.category);
    const media = $("#photoModalMedia");
    media.replaceChildren(el("img", { src: p.src, width: p.w, height: p.h, alt: photoTitle(p) }));

    const rows = [["exif.date", formatDate(p.date)]];
    if (p.place) rows.push(["exif.place", p.place[lang()] || p.place.cs]);
    rows.push(
      ["exif.camera", p.camera], ["exif.lens", p.lens], ["exif.aperture", p.aperture],
      ["exif.shutter", p.shutter], ["exif.iso", p.iso], ["exif.focal", p.focal]
    );
    $("#photoModalExif").replaceChildren(
      ...rows.map(([k, v]) => el("div", {}, [el("dt", { text: t(k) }), el("dd", { text: v || t("exif.unknown") })]))
    );
    const multi = modalList.length > 1;
    $("#photoPrev").classList.toggle("invisible", !multi);
    $("#photoNext").classList.toggle("invisible", !multi);
  }

  function openPhoto(list, index) {
    if (!photoModal) return;
    modalList = list;
    modalIndex = index;
    renderPhotoModal();
    photoModal.show();
  }

  function stepPhoto(delta) {
    modalIndex = (modalIndex + delta + modalList.length) % modalList.length;
    renderPhotoModal();
  }

  if (photoModalEl) {
    $("#photoPrev").addEventListener("click", () => stepPhoto(-1));
    $("#photoNext").addEventListener("click", () => stepPhoto(1));
    photoModalEl.addEventListener("keydown", (e) => {
      if (modalList.length < 2) return;
      if (e.key === "ArrowLeft") stepPhoto(-1);
      if (e.key === "ArrowRight") stepPhoto(1);
    });
  }

  /* ===== Homepage: výběr fotek ===== */
  const featuredGrid = $("#featuredGrid");
  function renderFeatured() {
    if (!featuredGrid || !PHOTOS) return;
    let list = PHOTOS.gallery.filter((p) => p.featured);
    if (list.length < 12) list = list.concat(PHOTOS.gallery.filter((p) => !p.featured));
    list = list.slice(0, 8);
    featuredGrid.replaceChildren(
      ...list.map((p, i) => el("div", { class: i < 6 ? "col" : "col d-none d-md-block d-lg-none" }, [photoTile(p, list, i)]))
    );
  }

  /* ===== Galerie: filtry + masonry ===== */
  const gallery = $("#gallery");
  const filters = $("#galleryFilters");
  let activeCat = "all";

  function renderGallery() {
    if (!gallery || !PHOTOS) return;
    const cats = [{ id: "all", label: t("photo.all") }].concat(PHOTOS.categories.map((c) => ({ id: c.id, label: catLabel(c.id) })));
    filters.replaceChildren(
      ...cats.map((c) => {
        const btn = el("button", {
          type: "button",
          class: `btn btn-sm btn-outline-light-subtle${c.id === activeCat ? " active" : ""}`,
          "aria-pressed": String(c.id === activeCat),
          text: c.label,
        });
        btn.addEventListener("click", () => { activeCat = c.id; renderGallery(); });
        return btn;
      })
    );

    const list = PHOTOS.gallery.filter((p) => activeCat === "all" || p.category === activeCat);
    gallery.replaceChildren(
      ...list.map((p, i) => el("figure", { class: "masonry-item m-0 mb-3" }, [photoTile(p, list, i), el("figcaption", { text: photoTitle(p) })]))
    );
    $("#galleryCount").textContent = t("photo.count", { n: list.length });
  }

  /* ===== DataTables ===== */
  const tables = {};

  function initTable(id, options) {
    const table = document.getElementById(id);
    if (!table || typeof DataTable === "undefined") return;
    if (tables[id]) {
      tables[id].destroy();
      table.replaceChildren();
    }
    tables[id] = new DataTable(table, Object.assign({ responsive: true, pageLength: 10, lengthMenu: [5, 10, 25, 50], language: DT_LANG[lang()] }, options));
  }

  function initPhotoTable() {
    if (!PHOTOS) return;
    const list = PHOTOS.gallery;
    initTable("photoTable", {
      data: list,
      order: [[3, "desc"]],
      columns: [
        { data: null, title: t("exif.preview"), orderable: false, searchable: false, className: "all",
          render: (d, type, p) => (type === "display" ? `<img class="dt-thumb" src="${escapeHtml(p.thumb)}" width="64" height="44" alt="" loading="lazy">` : "") },
        { data: null, title: t("exif.title"), className: "all",
          render: (d, type, p) => (type === "display"
            ? `<button type="button" class="btn btn-link p-0 text-start" data-photo="${escapeHtml(p.id)}">${escapeHtml(photoTitle(p))}</button>`
            : photoTitle(p)) },
        { data: "category", title: t("exif.category"), render: (d) => catLabel(d) },
        { data: "date", title: t("exif.date"), defaultContent: "", render: (d, type) => (type === "display" || type === "filter" ? formatDate(d) : d || "") },
        { data: "camera", title: t("exif.camera"), defaultContent: "–" },
        { data: "lens", title: t("exif.lens"), defaultContent: "–" },
        { data: "aperture", title: t("exif.aperture"), defaultContent: "–" },
        { data: "shutter", title: t("exif.shutter"), defaultContent: "–" },
        { data: "iso", title: t("exif.iso"), defaultContent: "–" },
        { data: "focal", title: t("exif.focal"), defaultContent: "–" },
      ],
      createdRow: (row) => row.classList.add("row-clickable"),
    });
  }

  const photoTableEl = $("#photoTable");
  if (photoTableEl && PHOTOS) {
    photoTableEl.addEventListener("click", (e) => {
      if (e.target.closest(".dtr-control, li[data-dtr-index]") && !e.target.closest("[data-photo]")) return;
      const tr = e.target.closest("tbody tr");
      if (!tr || tr.classList.contains("child") || !tables.photoTable) return;
      const data = tables.photoTable.row(tr).data();
      if (!data) return;
      openPhoto(PHOTOS.gallery, PHOTOS.gallery.indexOf(data));
    });
  }

  function initRepertoireTable() {
    if (typeof REPERTOAR === "undefined") return;
    const stateClass = { hraju: "badge-skill badge-accent", ucim: "badge-skill", drive: "badge-skill" };
    initTable("repTable", {
      data: REPERTOAR,
      order: [[0, "asc"]],
      columns: [
        { data: "skladba", title: t("rep.piece"), className: "all",
          render: (d, type, r) => {
            const note = r.pozn ? t("note." + r.pozn) : "";
            if (type !== "display") return note ? `${d} ${note}` : d;
            return escapeHtml(d) + (note ? `<small class="d-block text-secondary">${escapeHtml(note)}</small>` : "");
          } },
        { data: "autor", title: t("rep.author") },
        { data: "nastroj", title: t("rep.instrument"), render: (d) => t("rep." + d) },
        { data: "zanr", title: t("rep.period"), defaultContent: "", render: (d) => (d ? t("genre." + d).replace(/^genre\./, "") : "") },
        { data: "obtiznost", title: t("rep.level"),
          render: (d, type) => (type === "display"
            ? `<span class="level-dots" role="img" aria-label="${d} / 5">${[1, 2, 3, 4, 5].map((i) => `<span class="${i <= d ? "on" : ""}"></span>`).join("")}</span>`
            : d) },
        { data: "stav", title: t("rep.state"),
          render: (d, type) => (type === "display" ? `<span class="${stateClass[d] || "badge-skill"}">${escapeHtml(t("rep." + d))}</span>` : t("rep." + d)) },
      ],
    });
  }

  /* ===== Projekty: karty + modal ===== */
  const PROJECTS = typeof PROJEKTY !== "undefined" ? PROJEKTY : null;
  let currentProject = null;

  const techBadges = (list) => list.map((name) => el("span", { class: "badge-skill", text: name }));

  function renderProjectCards() {
    if (!PROJECTS) return;
    $$("[data-project-field]").forEach((node) => {
      const [id, field] = node.dataset.projectField.split(".");
      node.textContent = PROJECTS[id][lang()][field];
    });
    $$("[data-project-tech]").forEach((node) => node.replaceChildren(...techBadges(PROJECTS[node.dataset.projectTech].tech)));
  }

  function renderProjectModal() {
    const p = PROJECTS && PROJECTS[currentProject];
    if (!p) return;
    const text = p[lang()];
    $("#projectModalIcon").className = `bi ${p.icon}`;
    $("#projectModalTitle").textContent = text.title;
    $("#projectModalMeta").textContent = text.meta;
    $("#projectModalBody").replaceChildren(...text.detail.map((para) => el("p", { text: para })));
    $("#projectModalTech").replaceChildren(...techBadges(p.tech));
    $("#projectModalLinks").replaceChildren(
      ...p.links.map((l) => el("a", { class: "btn btn-primary", href: l.url, target: "_blank", rel: "noopener" }, [el("i", { class: `bi ${l.icon}`, "aria-hidden": "true" }), l.label]))
    );
  }

  const projectModalEl = $("#projectModal");
  if (projectModalEl) {
    projectModalEl.addEventListener("show.bs.modal", (e) => {
      currentProject = e.relatedTarget ? e.relatedTarget.dataset.project : currentProject;
      renderProjectModal();
    });
  }

  /* ===== Formulář ===== */
  const form = $("#contactForm");
  if (form) {
    const message = $("#message");
    const counter = $("#charCounter");
    const max = Number(message.getAttribute("maxlength"));
    const updateCounter = () => {
      const len = message.value.length;
      counter.textContent = `${len} / ${max}`;
      counter.classList.toggle("near-limit", len > max * 0.9);
    };
    message.addEventListener("input", updateCounter);

    const today = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    $("#eventDate").min = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

    const typeFeedback = $("#typeFeedback");
    const consentFeedback = $("#consentFeedback");
    const syncGroupFeedback = () => {
      if (!form.classList.contains("was-validated")) return;
      typeFeedback.classList.toggle("d-block", !form.querySelector('input[name="type"]:checked'));
      consentFeedback.classList.toggle("d-block", !$("#consent").checked);
    };
    form.addEventListener("change", syncGroupFeedback);

    const clearValidation = () => {
      form.classList.remove("was-validated");
      typeFeedback.classList.remove("d-block");
      consentFeedback.classList.remove("d-block");
      setTimeout(updateCounter);
    };
    form.addEventListener("reset", clearValidation);

    const labelFor = (input) => {
      const label = form.querySelector(`label[for="${input.id}"]`);
      return label ? label.textContent.trim() : input.value;
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.classList.add("was-validated");
      syncGroupFeedback();
      if (!form.checkValidity()) {
        const firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const val = (id) => $("#" + id).value.trim();
      const type = form.querySelector('input[name="type"]:checked');
      const topic = $("#topic");
      const interests = $$('input[name="interests"]:checked', form).map(labelFor);
      const budget = val("budget");
      const rows = [
        [t("form.name"), `${val("firstName")} ${val("lastName")}`],
        [t("form.email"), val("email")],
        [t("form.phone"), val("phone") ? `+420 ${val("phone")}` : ""],
        [t("form.type"), type ? labelFor(type) : ""],
        [t("form.topic"), topic.options[topic.selectedIndex].text],
        [t("form.budget"), budget ? `${Number(budget).toLocaleString(locale())} Kč` : ""],
        [t("form.date"), formatDate(val("eventDate"))],
        [t("form.website"), val("website") ? `https://${val("website")}` : ""],
        [t("form.interests"), interests.join(", ")],
        [t("form.message"), val("message")],
      ];
      $("#summaryList").replaceChildren(...rows.flatMap(([k, v]) => [el("dt", { text: k }), el("dd", { text: v || t("form.none") })]));
      bootstrap.Modal.getOrCreateInstance($("#summaryModal")).show();
      form.reset();
    });
    updateCounter();
  }

  /* ===== Jazyk: překreslení dynamického obsahu ===== */
  document.addEventListener("langchange", () => {
    renderFeatured();
    renderGallery();
    renderProjectCards();
    if (currentProject) renderProjectModal();
    if (photoModalEl && photoModalEl.classList.contains("show")) renderPhotoModal();
    initPhotoTable();
    initRepertoireTable();
  });

  setLang(getLang(), false);
})();
