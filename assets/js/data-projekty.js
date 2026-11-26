const PROJEKTY = {
  viademy: {
    icon: "bi-headset-vr",
    tech: ["Unity", "C#", "Meta Quest 3 / 3S", "VR"],
    links: [{ url: "https://viademy.com", icon: "bi-box-arrow-up-right", label: "viademy.com" }],
    cs: {
      title: "Viademy",
      meta: "VR Engineer · startup · 2026 – dosud",
      short: "Výuka dějepisu ve virtuální realitě pro základní školy. Vyvíjím VR aplikaci v Unity pro Meta Quest 3 a 3S.",
      detail: [
        "Viademy je startup, který vyvíjí edukativní VR platformu pro základní školy. Žáci v týmech procházejí historické světy ve virtuální realitě. Jeden člen týmu je v headsetu a ostatní mu pomáhají s pracovními listy a tabletem. Učitel řídí hodinu z prohlížeče. První hotová lekce zavede třídu do starověkého Egypta.",
        "Jako VR Engineer mám na starosti vývoj samotné VR aplikace v Unity. Cílíme primárně na headsety Meta Quest 3 a 3S.",
        "Jsme čtyřčlenný tým: CEO, kolega, který má na starosti komunikaci se školami a webovou platformu, grafik a já na VR aplikaci."
      ]
    },
    en: {
      title: "Viademy",
      meta: "VR Engineer · startup · 2026 – present",
      short: "History lessons in virtual reality for primary schools. I build the VR app in Unity for Meta Quest 3 and 3S.",
      detail: [
        "Viademy is a startup building an educational VR platform for primary schools. Students explore historical worlds in teams: one of them wears the headset while the others help with worksheets and a tablet, and the teacher runs the lesson from a browser. The first finished lesson takes the class to Ancient Egypt.",
        "As a VR Engineer I am responsible for developing the VR application itself in Unity. Our primary targets are the Meta Quest 3 and 3S headsets.",
        "We are a team of four: the CEO, a colleague handling communication with schools and the web platform, a graphic designer, and me on the VR app."
      ]
    }
  },

  chat: {
    icon: "bi-chat-dots",
    tech: [".NET 9", "ASP.NET Core", "SignalR", "EF Core", "PostgreSQL", "React 19", "TypeScript", "Tailwind CSS", "Docker"],
    links: [{ url: "https://github.com/StringSlayyer/.NET-9-React-Chat-App", icon: "bi-github", label: "GitHub" }],
    cs: {
      title: "Chat App",
      meta: "Osobní projekt · 2025",
      short: "Chatovací aplikace v reálném čase s backendem v .NET 9, SignalR a frontendem v Reactu.",
      detail: [
        "Chatovací aplikace v reálném čase, kterou jsem postavil jako ukázkový projekt do portfolia. Uživatelé se registrují, hledají ostatní, zakládají konverzace a skupiny se správou účastníků a posílají si zprávy s potvrzením přečtení.",
        "Backend je ASP.NET Core Web API na .NET 9 rozdělené do vrstev Domain, Application, Infrastructure a API. Autentizace běží přes JWT, zprávy v reálném čase přes SignalR hub a data ukládám přes EF Core do PostgreSQL. Aplikace umí i nahrávání profilových obrázků a běží v Docker Compose.",
        "Frontend je v Reactu 19 s TypeScriptem, Vite a Tailwind CSS, s klientem SignalR a Axiosem."
      ]
    },
    en: {
      title: "Chat App",
      meta: "Personal project · 2025",
      short: "Real-time chat application with a .NET 9 and SignalR backend and a React frontend.",
      detail: [
        "A real-time chat application I built as a portfolio project. Users register, search for others, start conversations and groups with participant management, and exchange messages with read receipts.",
        "The backend is an ASP.NET Core Web API on .NET 9 split into Domain, Application, Infrastructure and API layers. Authentication uses JWT, real-time messaging goes through a SignalR hub, and data is stored via EF Core in PostgreSQL. It also supports profile picture uploads and runs in Docker Compose.",
        "The frontend is built with React 19, TypeScript, Vite and Tailwind CSS, using the SignalR client and Axios."
      ]
    }
  },

  meeting: {
    icon: "bi-calendar-check",
    tech: [".NET 10", "Blazor WebAssembly", "Radzen", "Clean Architecture", "CQRS", "FluentValidation", "EF Core", "SQL Server", "Docker"],
    links: [{ url: "https://github.com/StringSlayyer/MeetingSystem", icon: "bi-github", label: "GitHub" }],
    cs: {
      title: "MeetingSystem",
      meta: "Semestrální projekt do C# · Ostravská univerzita · ZS 2025/26",
      short: "Rezervační systém zasedaček a parkovacích míst pro firmy. .NET 10, Clean Architecture a Blazor WebAssembly.",
      detail: [
        "Rezervační systém pro firmy: správa firem, zasedacích místností a parkovacích míst, rezervace na časové sloty se stavy (čeká, potvrzeno, zrušeno) a uživatelský dashboard.",
        "Backend je postavený podle Clean Architecture (Domain, Application, Infrastructure, API, Contracts, SharedKernel) s CQRS přes vlastní dispatcher. Validaci (FluentValidation) a zpracování výjimek řeší dekorátory. Doménové eventy aktualizují statistiky firmy, souběžné úpravy hlídá optimistic concurrency. K tomu JWT autentizace, nahrávání obrázků a EF Core se SQL Serverem.",
        "Frontend je Blazor WebAssembly s komponentami Radzen. Celé řešení (API, klient i databáze) se spouští přes Docker Compose."
      ]
    },
    en: {
      title: "MeetingSystem",
      meta: "C# semester project · University of Ostrava · winter 2025/26",
      short: "Booking system for company meeting rooms and parking spots. .NET 10, Clean Architecture and Blazor WebAssembly.",
      detail: [
        "A booking system for companies: managing companies, meeting rooms and parking spots, time-slot reservations with states (pending, confirmed, cancelled) and a user dashboard.",
        "The backend follows Clean Architecture (Domain, Application, Infrastructure, API, Contracts, SharedKernel) with CQRS through a custom dispatcher. Validation (FluentValidation) and exception handling are done with decorators. Domain events update company statistics and optimistic concurrency guards simultaneous edits. Plus JWT authentication, image uploads and EF Core with SQL Server.",
        "The frontend is Blazor WebAssembly with Radzen components. The whole solution (API, client and database) runs via Docker Compose."
      ]
    }
  },

  lumberjack: {
    icon: "bi-controller",
    tech: ["Unity", "C#", "3D"],
    links: [{ url: "https://github.com/StringSlayyer/LumberjacksAdventure", icon: "bi-github", label: "GitHub" }],
    cs: {
      title: "Lumberjack's Adventure",
      meta: "Klauzurní práce · 3. ročník SŠ · 2024",
      short: "3D hra v Unity: dřevorubec plní úkoly ve třech úrovních, prodává dřevo a vylepšuje vybavení.",
      detail: [
        "3D hra z pohledu třetí osoby, kterou jsem vytvořil jako klauzurní práci ve 3. ročníku střední školy.",
        "Hráč jako dřevorubec plní úkoly ve třech úrovních: kácí stromy, prodává dřevo a v obchodě kupuje vylepšení. Může si pořídit pomocníka, který sám hledá nejbližší strom, pokácí ho a odnese dřevo do skladu. V noční úrovni potřebuje baterku s dobíjením a vylepšitelným dosahem.",
        "Ve hře je hlavní menu, pauza, statistiky a ukládání postupu mezi úrovněmi."
      ]
    },
    en: {
      title: "Lumberjack's Adventure",
      meta: "Final assignment · 3rd year of high school · 2024",
      short: "A 3D Unity game: a lumberjack completes tasks across three levels, sells wood and upgrades his gear.",
      detail: [
        "A third-person 3D game I made as my final assignment in the 3rd year of high school.",
        "As a lumberjack, the player completes tasks across three levels: cutting trees, selling wood and buying upgrades in the shop. You can hire an assistant who finds the nearest tree, cuts it down and carries the wood to storage on his own. The night level requires a flashlight with a rechargeable battery and upgradable range.",
        "The game has a main menu, pause screen, statistics and progress saved between levels."
      ]
    }
  },

  programatori: {
    icon: "bi-box-seam",
    tech: ["C#", "ASP.NET Core 8 MVC", "Playwright", "REST API", "JSON", "Shoptet", "Upgates"],
    links: [],
    cs: {
      title: "Programatori s.r.o. – Balíkuj",
      meta: "QA Specialist & Developer · červen – srpen 2024",
      short: "Doplněk Balíkuj pro e-shopy na Shoptetu a Upgates: E2E testy v Playwrightu, datové modely v C# a interní admin panel.",
      detail: [
        "V týmu, který vyvíjí doplněk Balíkuj pro e-commerce platformy Shoptet a Upgates, jsem začínal jako stážista a pak pokračoval v placené spolupráci.",
        "V C# jsem navrhoval datové modely pro parsování JSON odpovědí z externích API a hlídal správné mapování dat mezi objednávkami v e-shopech a systémem doplňku. V Playwrightu jsem psal E2E testy, které automatizovaly odesílání objednávek přes různé dopravce a ověřovaly, že data v UI odpovídají volanému API.",
        "Dělal jsem i manuální QA: simuloval jsem reálné scénáře v administraci Shoptetu a Upgates, testoval business pravidla pro expedici a dynamické e-mailové šablony a nesrovnalosti hlásil vývojářům. K tomu jsem spolupracoval na interním admin panelu v ASP.NET Core 8 MVC pro monitoring uživatelů a dohledávání chyb v objednávkách, který zrychlil technickou podporu."
      ]
    },
    en: {
      title: "Programatori s.r.o. – Balíkuj",
      meta: "QA Specialist & Developer · June – August 2024",
      short: "The Balíkuj add-on for Shoptet and Upgates e-shops: Playwright E2E tests, C# data models and an internal admin panel.",
      detail: [
        "I joined the team behind Balíkuj, an add-on for the Shoptet and Upgates e-commerce platforms, as an intern and then continued as a paid collaborator.",
        "In C# I designed data models for parsing JSON responses from external APIs and made sure order data was mapped correctly between the e-shops and the add-on. In Playwright I wrote E2E tests that automated sending orders through different carriers and checked that the data in the UI matched the API calls.",
        "I also did manual QA: simulating real scenarios in the Shoptet and Upgates admin, testing shipping business rules and dynamic e-mail templates, and reporting issues to the developers. On top of that I worked on an internal ASP.NET Core 8 MVC admin panel for monitoring users and tracking down order errors, which sped up technical support."
      ]
    }
  },

  dgstudio: {
    icon: "bi-brush",
    tech: ["HTML", "CSS", "Bootstrap", "Pug.js"],
    links: [],
    cs: {
      title: "DGstudio.cz",
      meta: "Frontend Developer · stáž · červen 2023",
      short: "Krátká stáž v digitální agentuře: kódování statických šablon podle grafických návrhů v Pug.js a Bootstrapu.",
      detail: [
        "Krátká stáž zaměřená na procesy v digitální agentuře a základy frontendového vývoje.",
        "Kódoval jsem statické šablony podle grafických návrhů a upravoval existující komponenty. Poprvé jsem si prakticky vyzkoušel šablonovací engine Pug.js a framework Bootstrap.",
        "Pochopil jsem, jak spolu pracují designéři a vývojáři, a právě tahle zkušenost mě nasměrovala k hlubšímu zájmu o backend."
      ]
    },
    en: {
      title: "DGstudio.cz",
      meta: "Frontend Developer · internship · June 2023",
      short: "A short internship at a digital agency: coding static templates from designs with Pug.js and Bootstrap.",
      detail: [
        "A short internship focused on how a digital agency works and on frontend basics.",
        "I coded static templates from graphic designs and adjusted existing components. It was my first hands-on experience with the Pug.js templating engine and the Bootstrap framework.",
        "It showed me how designers and developers work together, and it is what pushed me towards a deeper interest in backend development."
      ]
    }
  },

  clubiq: {
    icon: "bi-people",
    tech: [".NET 8", "ASP.NET Core", "REST API", "Clean Architecture", "xUnit", "Sentry", "Azure Blob Storage", "Docker Compose", "Ubuntu"],
    links: [],
    cs: {
      title: "ClubIQ",
      meta: "Maturitní projekt · Backend .NET Developer & Server Admin · 10/2024 – 6/2025",
      short: "Platforma pro zpětnou vazbu mezi trenéry a hráči hokejového klubu HC Robe Vsetín. Navrhl jsem REST API a aplikaci nasadil na server.",
      detail: [
        "Maturitní projekt tříčlenného týmu podle požadavků hokejového klubu HC Robe Vsetín. Platforma digitalizovala zpětnou vazbu mezi trenéry a hráči: vzájemné hodnocení, sdílení výukových materiálů a dlouhodobé statistiky v grafech.",
        "Navrhl a implementoval jsem REST API v .NET 8 podle principů Clean Architecture. Kvůli stabilitě a bezpečnosti jsem přidal rate limiting a vlastní middleware s action filtery pro pokročilou autorizaci. Chyby monitoroval Sentry a spolehlivost business logiky ověřovaly integrační testy v xUnit.",
        "Média se ukládala do Azure Blob Storage. Celou aplikaci jsem kontejnerizoval v Docker Compose a nasadil na produkční Ubuntu server."
      ]
    },
    en: {
      title: "ClubIQ",
      meta: "High school final project · Backend .NET Developer & Server Admin · 10/2024 – 6/2025",
      short: "A feedback platform for coaches and players of the HC Robe Vsetín hockey club. I designed the REST API and deployed the app to a server.",
      detail: [
        "A three-person final high school project built to the requirements of the HC Robe Vsetín hockey club. The platform digitised feedback between coaches and players: mutual ratings, shared training materials and long-term statistics in charts.",
        "I designed and implemented the REST API in .NET 8 following Clean Architecture. For stability and security I added rate limiting and custom middleware with action filters for advanced authorisation. Errors were monitored with Sentry, and integration tests in xUnit verified the business logic.",
        "Media were stored in Azure Blob Storage. I containerised the whole application with Docker Compose and deployed it to a production Ubuntu server."
      ]
    }
  },

  dod: {
    icon: "bi-door-open",
    tech: ["React", "MySQL", "Tailwind CSS", "Git"],
    links: [],
    cs: {
      title: "Den otevřených dveří 2025",
      meta: "Školní týmový projekt · 14 studentů · 2025",
      short: "Webová platforma pro návštěvníky školy. Navrhl jsem databázi kvízového systému v MySQL a stavěl rozhraní v Reactu.",
      detail: [
        "Webová platforma pro návštěvníky dne otevřených dveří, kterou jsme stavěli ve 14 studentech.",
        "I když jsem byl primárně na frontendu, převzal jsem klíčovou část datové vrstvy. V MySQL jsem navrhl relační schéma herního kvízového systému včetně ukládání otázek se strukturou odpovědí a jejich vyhodnocování.",
        "V Reactu a Tailwind CSS jsem implementoval rozhraní podle grafického manuálu, s důrazem na to, aby web bez problémů fungoval na mobilech."
      ]
    },
    en: {
      title: "Open Day 2025",
      meta: "School team project · 14 students · 2025",
      short: "A web platform for visitors of the school. I designed the quiz system database in MySQL and built the UI in React.",
      detail: [
        "A web platform for open day visitors, built by a team of 14 students.",
        "Although I was mainly on the frontend, I took over a key part of the data layer: I designed the relational MySQL schema for the quiz game, including storing questions with a defined answer structure and evaluating them.",
        "I built the UI in React and Tailwind CSS according to the brand manual, with a focus on making it work flawlessly on mobile devices."
      ]
    }
  },

  ateliery: {
    icon: "bi-film",
    tech: ["Next.js", "Tailwind CSS", "3D", "Git"],
    links: [],
    cs: {
      title: "Filmové ateliéry Zlín",
      meta: "Školní týmový projekt · 13 studentů · 2025",
      short: "Prezentační web s 3D prvky pro Filmové ateliéry Zlín. Kódoval jsem UI komponenty v Next.js a Tailwind CSS.",
      detail: [
        "Týmový projekt 13 studentů pro Filmové ateliéry Zlín. Cílem byla vizuálně atraktivní prezentace s náročnými 3D prvky.",
        "Měl jsem na starosti UI komponenty v Next.js. Hlídal jsem, aby web zůstal stabilní a rychlý i po integraci 3D modelů, které dodávali kolegové.",
        "Design jsem realizoval v Tailwind CSS, aby byl kód čistý a snadno rozšiřitelný."
      ]
    },
    en: {
      title: "Filmové ateliéry Zlín",
      meta: "School team project · 13 students · 2025",
      short: "A showcase website with 3D elements for the Zlín film studios. I coded the UI components in Next.js and Tailwind CSS.",
      detail: [
        "A team project of 13 students for Filmové ateliéry Zlín (Zlín Film Studios). The goal was a visually striking presentation with demanding 3D elements.",
        "I was responsible for the UI components in Next.js and made sure the site stayed stable and fast even after integrating the 3D models delivered by teammates.",
        "I implemented the design in Tailwind CSS to keep the code clean and easy to extend."
      ]
    }
  }
};
