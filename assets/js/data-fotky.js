// Generováno skriptem tools/optimize-images.py – needitovat ručně.
const FOTKY = {
 "categories": [
  {
   "id": "noc",
   "label": {
    "cs": "Noc",
    "en": "Night"
   }
  },
  {
   "id": "priroda",
   "label": {
    "cs": "Příroda",
    "en": "Nature"
   }
  },
  {
   "id": "mesto",
   "label": {
    "cs": "Město",
    "en": "City"
   }
  },
  {
   "id": "zvirata",
   "label": {
    "cs": "Zvířata",
    "en": "Animals"
   }
  },
  {
   "id": "zatisi",
   "label": {
    "cs": "Zátiší",
    "en": "Still life"
   }
  }
 ],
 "carousel": [
  {
   "src": "assets/img/carousel/img_1972_ps1.webp",
   "w": 2000,
   "h": 1333,
   "id": "carousel-img_1972_ps1"
  },
  {
   "src": "assets/img/carousel/img_6453.webp",
   "w": 2000,
   "h": 1333,
   "date": "2024-01-06",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/3.5",
   "shutter": "15 s",
   "iso": 1600,
   "focal": "18 mm",
   "id": "carousel-img_6453"
  },
  {
   "src": "assets/img/carousel/img_7862_ps.webp",
   "w": 2000,
   "h": 1333,
   "id": "carousel-img_7862_ps"
  },
  {
   "src": "assets/img/carousel/img_9283.webp",
   "w": 2000,
   "h": 1333,
   "date": "2022-09-02",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/5",
   "shutter": "1/500 s",
   "iso": 100,
   "focal": "40 mm",
   "id": "carousel-img_9283"
  }
 ],
 "portret": [
  {
   "src": "assets/img/portret/img_0406.webp",
   "w": 800,
   "h": 754,
   "date": "2024-03-30",
   "camera": "Canon EOS 4000D",
   "aperture": "f/5.6",
   "shutter": "1/160 s",
   "iso": 400,
   "focal": "55 mm",
   "id": "portret-img_0406"
  }
 ],
 "projekty": [],
 "gallery": [
  {
   "src": "assets/img/galerie/mesto/img_2355.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/mesto/img_2355-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2025-07-30",
   "camera": "Canon EOS 4000D",
   "lens": "EF75-300mm f/4-5.6",
   "aperture": "f/6.3",
   "shutter": "1/500 s",
   "iso": 100,
   "focal": "180 mm",
   "id": "galerie-mesto-img_2355",
   "title": {
    "cs": "Hodiny na věži",
    "en": "Tower clocks"
   },
   "category": "mesto"
  },
  {
   "src": "assets/img/galerie/mesto/img_2380.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/mesto/img_2380-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2025-07-30",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/6.3",
   "shutter": "1/640 s",
   "iso": 100,
   "focal": "27 mm",
   "id": "galerie-mesto-img_2380",
   "title": {
    "cs": "Gotické okno",
    "en": "Gothic window"
   },
   "featured": true,
   "category": "mesto"
  },
  {
   "src": "assets/img/galerie/priroda/img_2187.webp",
   "w": 1067,
   "h": 1600,
   "thumb": "assets/img/galerie/priroda/img_2187-thumb.webp",
   "tw": 400,
   "th": 600,
   "date": "2025-07-29",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/5.6",
   "shutter": "1/250 s",
   "iso": 200,
   "focal": "18 mm",
   "id": "galerie-priroda-img_2187",
   "title": {
    "cs": "Skalní stěna",
    "en": "Rock face"
   },
   "category": "priroda"
  },
  {
   "src": "assets/img/galerie/priroda/img_2189.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/priroda/img_2189-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2025-07-29",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/5.6",
   "shutter": "1/250 s",
   "iso": 200,
   "focal": "18 mm",
   "id": "galerie-priroda-img_2189",
   "title": {
    "cs": "Vápencová skála",
    "en": "Limestone cliff"
   },
   "category": "priroda"
  },
  {
   "src": "assets/img/galerie/priroda/img_2250.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/priroda/img_2250-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2025-07-29",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/8",
   "shutter": "1/400 s",
   "iso": 100,
   "focal": "40 mm",
   "id": "galerie-priroda-img_2250",
   "title": {
    "cs": "Vinice",
    "en": "Vineyard"
   },
   "category": "priroda"
  },
  {
   "src": "assets/img/galerie/mesto/img_2050.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/mesto/img_2050-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2025-07-26",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/4",
   "shutter": "1/500 s",
   "iso": 100,
   "focal": "18 mm",
   "id": "galerie-mesto-img_2050",
   "title": {
    "cs": "Střechy starého města",
    "en": "Old town rooftops"
   },
   "featured": true,
   "category": "mesto"
  },
  {
   "src": "assets/img/galerie/mesto/img_2051.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/mesto/img_2051-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2025-07-26",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/4",
   "shutter": "1/500 s",
   "iso": 100,
   "focal": "18 mm",
   "id": "galerie-mesto-img_2051",
   "title": {
    "cs": "Věž nad střechami",
    "en": "Spire above the rooftops"
   },
   "category": "mesto"
  },
  {
   "src": "assets/img/galerie/mesto/img_2054.webp",
   "w": 1067,
   "h": 1600,
   "thumb": "assets/img/galerie/mesto/img_2054-thumb.webp",
   "tw": 400,
   "th": 600,
   "date": "2025-07-26",
   "camera": "Canon EOS 4000D",
   "lens": "EF75-300mm f/4-5.6",
   "aperture": "f/5",
   "shutter": "1/400 s",
   "iso": 100,
   "focal": "200 mm",
   "id": "galerie-mesto-img_2054",
   "title": {
    "cs": "Gotická věž z dálky",
    "en": "Gothic spire from afar"
   },
   "category": "mesto"
  },
  {
   "src": "assets/img/galerie/mesto/img_2061.webp",
   "w": 1067,
   "h": 1600,
   "thumb": "assets/img/galerie/mesto/img_2061-thumb.webp",
   "tw": 400,
   "th": 600,
   "date": "2025-07-26",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/4",
   "shutter": "1/320 s",
   "iso": 100,
   "focal": "18 mm",
   "id": "galerie-mesto-img_2061",
   "title": {
    "cs": "Průčelí katedrály",
    "en": "Cathedral facade"
   },
   "category": "mesto"
  },
  {
   "src": "assets/img/galerie/mesto/img_2064.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/mesto/img_2064-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2025-07-26",
   "camera": "Canon EOS 4000D",
   "lens": "EF75-300mm f/4-5.6",
   "aperture": "f/4.5",
   "shutter": "1/320 s",
   "iso": 100,
   "focal": "100 mm",
   "id": "galerie-mesto-img_2064",
   "title": {
    "cs": "Kamenní světci",
    "en": "Stone saints"
   },
   "featured": true,
   "category": "mesto"
  },
  {
   "src": "assets/img/galerie/priroda/img_2069.webp",
   "w": 1067,
   "h": 1600,
   "thumb": "assets/img/galerie/priroda/img_2069-thumb.webp",
   "tw": 400,
   "th": 600,
   "date": "2025-07-26",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/4",
   "shutter": "1/250 s",
   "iso": 400,
   "focal": "25 mm",
   "id": "galerie-priroda-img_2069",
   "title": {
    "cs": "Vodopád",
    "en": "Waterfall"
   },
   "category": "priroda"
  },
  {
   "src": "assets/img/galerie/noc/img_1589.webp",
   "w": 948,
   "h": 1600,
   "thumb": "assets/img/galerie/noc/img_1589-thumb.webp",
   "tw": 356,
   "th": 600,
   "date": "2024-08-11",
   "camera": "Canon EOS 4000D",
   "aperture": "f/4",
   "shutter": "48 s",
   "iso": 1600,
   "focal": "18 mm",
   "id": "galerie-noc-img_1589",
   "title": {
    "cs": "Hvězdné nebe",
    "en": "Starry sky"
   },
   "category": "noc"
  },
  {
   "src": "assets/img/galerie/noc/img_6451.webp",
   "w": 1600,
   "h": 1066,
   "thumb": "assets/img/galerie/noc/img_6451-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2024-01-06",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/3.5",
   "shutter": "15 s",
   "iso": 1600,
   "focal": "18 mm",
   "id": "galerie-noc-img_6451",
   "title": {
    "cs": "Orion nad krajinou",
    "en": "Orion above the landscape"
   },
   "category": "noc"
  },
  {
   "src": "assets/img/galerie/noc/img_6453.webp",
   "w": 1600,
   "h": 1066,
   "thumb": "assets/img/galerie/noc/img_6453-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2024-01-06",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/3.5",
   "shutter": "15 s",
   "iso": 1600,
   "focal": "18 mm",
   "id": "galerie-noc-img_6453",
   "title": {
    "cs": "Zimní noc nad obzorem",
    "en": "Winter night above the horizon"
   },
   "category": "noc"
  },
  {
   "src": "assets/img/galerie/noc/img_9283.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/noc/img_9283-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2022-09-02",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/5",
   "shutter": "1/500 s",
   "iso": 100,
   "focal": "40 mm",
   "id": "galerie-noc-img_9283",
   "title": {
    "cs": "Západ slunce v trávě",
    "en": "Sunset through the grass"
   },
   "featured": true,
   "category": "noc"
  },
  {
   "src": "assets/img/galerie/zvirata/b-img_7219.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/zvirata/b-img_7219-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2022-06-18",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/4",
   "shutter": "1/500 s",
   "iso": 400,
   "focal": "27 mm",
   "id": "galerie-zvirata-b-img_7219",
   "title": {
    "cs": "Štěně v trávě",
    "en": "Puppy in the grass"
   },
   "category": "zvirata"
  },
  {
   "src": "assets/img/galerie/priroda/img_5337.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/priroda/img_5337-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2022-03-01",
   "id": "galerie-priroda-img_5337",
   "title": {
    "cs": "Suché listí",
    "en": "Dry leaves"
   },
   "category": "priroda"
  },
  {
   "src": "assets/img/galerie/zatisi/img_5162.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/zatisi/img_5162-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2022-02-13",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/9",
   "shutter": "1/500 s",
   "iso": 100,
   "focal": "47 mm",
   "id": "galerie-zatisi-img_5162",
   "title": {
    "cs": "Citrony v misce",
    "en": "Lemons in a bowl"
   },
   "category": "zatisi"
  },
  {
   "src": "assets/img/galerie/zatisi/img_5179.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/zatisi/img_5179-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2022-02-13",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/4.5",
   "shutter": "1/80 s",
   "iso": 800,
   "focal": "29 mm",
   "id": "galerie-zatisi-img_5179",
   "title": {
    "cs": "Citron na modré látce",
    "en": "Lemon on blue fabric"
   },
   "featured": true,
   "category": "zatisi"
  },
  {
   "src": "assets/img/galerie/priroda/img_20220124_142221.webp",
   "w": 1600,
   "h": 738,
   "thumb": "assets/img/galerie/priroda/img_20220124_142221-thumb.webp",
   "tw": 600,
   "th": 277,
   "date": "2022-01-24",
   "id": "galerie-priroda-img_20220124_142221",
   "title": {
    "cs": "Strom na zasněženém poli",
    "en": "Tree in a snowy field"
   },
   "category": "priroda"
  },
  {
   "src": "assets/img/galerie/priroda/voda_kratka_zaverka2.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/priroda/voda_kratka_zaverka2-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2021-10-04",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/5.6",
   "shutter": "1/3200 s",
   "iso": 400,
   "focal": "55 mm",
   "id": "galerie-priroda-voda_kratka_zaverka2",
   "title": {
    "cs": "Jez, krátká závěrka",
    "en": "Weir, fast shutter"
   },
   "category": "priroda"
  },
  {
   "src": "assets/img/galerie/priroda/rybiz_slunce.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/priroda/rybiz_slunce-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2021-07-23",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/29",
   "shutter": "1/125 s",
   "iso": 800,
   "focal": "40 mm",
   "id": "galerie-priroda-rybiz_slunce",
   "title": {
    "cs": "Rybíz v protisvětle",
    "en": "Currants against the sun"
   },
   "featured": true,
   "category": "priroda"
  },
  {
   "src": "assets/img/galerie/priroda/img_0492.webp",
   "w": 1600,
   "h": 1070,
   "thumb": "assets/img/galerie/priroda/img_0492-thumb.webp",
   "tw": 600,
   "th": 401,
   "date": "2021-07-15",
   "id": "galerie-priroda-img_0492",
   "title": {
    "cs": "Šišky",
    "en": "Pine cones"
   },
   "category": "priroda"
  },
  {
   "src": "assets/img/galerie/priroda/img_0529.webp",
   "w": 1600,
   "h": 1115,
   "thumb": "assets/img/galerie/priroda/img_0529-thumb.webp",
   "tw": 600,
   "th": 418,
   "date": "2021-07-15",
   "id": "galerie-priroda-img_0529",
   "title": {
    "cs": "Hřib v mechu",
    "en": "Mushroom in the moss"
   },
   "featured": true,
   "category": "priroda"
  },
  {
   "src": "assets/img/galerie/priroda/voda_dlouha_zaverka.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/priroda/voda_dlouha_zaverka-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2021-07-12",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/29",
   "shutter": "2 s",
   "iso": 100,
   "focal": "30 mm",
   "id": "galerie-priroda-voda_dlouha_zaverka",
   "title": {
    "cs": "Lesní potok, dlouhá závěrka",
    "en": "Forest stream, long exposure"
   },
   "featured": true,
   "category": "priroda"
  },
  {
   "src": "assets/img/galerie/priroda/img_0112.webp",
   "w": 1571,
   "h": 1149,
   "thumb": "assets/img/galerie/priroda/img_0112-thumb.webp",
   "tw": 600,
   "th": 439,
   "date": "2021-07-11",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/4.5",
   "shutter": "1/125 s",
   "iso": 100,
   "focal": "34 mm",
   "id": "galerie-priroda-img_0112",
   "title": {
    "cs": "Fialový květ",
    "en": "Purple bloom"
   },
   "featured": true,
   "category": "priroda"
  },
  {
   "src": "assets/img/galerie/zvirata/miky_plysak.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/zvirata/miky_plysak-thumb.webp",
   "tw": 600,
   "th": 400,
   "date": "2021-04-16",
   "camera": "Canon EOS 4000D",
   "lens": "EF-S18-55mm f/3.5-5.6 III",
   "aperture": "f/4",
   "shutter": "1/50 s",
   "iso": 3200,
   "focal": "27 mm",
   "id": "galerie-zvirata-miky_plysak",
   "title": {
    "cs": "Miky s plyšákem",
    "en": "Miky with a plush toy"
   },
   "featured": true,
   "category": "zvirata"
  },
  {
   "src": "assets/img/galerie/noc/img_1489-edit.webp",
   "w": 1083,
   "h": 1600,
   "thumb": "assets/img/galerie/noc/img_1489-edit-thumb.webp",
   "tw": 406,
   "th": 600,
   "id": "galerie-noc-img_1489-edit",
   "title": {
    "cs": "Mléčná dráha nad lesem",
    "en": "Milky Way above the forest"
   },
   "featured": true,
   "category": "noc"
  },
  {
   "src": "assets/img/galerie/noc/img_1972_ps1.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/noc/img_1972_ps1-thumb.webp",
   "tw": 600,
   "th": 400,
   "id": "galerie-noc-img_1972_ps1",
   "title": {
    "cs": "Star trails nad stromy",
    "en": "Star trails above the trees"
   },
   "featured": true,
   "category": "noc"
  },
  {
   "src": "assets/img/galerie/noc/img_7862_ps.webp",
   "w": 1600,
   "h": 1067,
   "thumb": "assets/img/galerie/noc/img_7862_ps-thumb.webp",
   "tw": 600,
   "th": 400,
   "id": "galerie-noc-img_7862_ps",
   "title": {
    "cs": "Mléčná dráha",
    "en": "Milky Way"
   },
   "featured": true,
   "category": "noc"
  }
 ]
};
