// Repertoár pro DataTable na stránce Hudba. Jeden řádek = jedna skladba na jednom nástroji.
// nastroj:  "klavir" | "harfa" | "kytara"
// stav:     "hraju" | "ucim" | "drive"
// obtiznost: 1–5
// zanr:     klíč žánru (překlad v i18n.js, "genre.*"); neznámý klíč se zobrazí tak, jak je
// pozn:     nepovinné – "doprovod" | "rytmika" | "bez-sol" | "cast" (překlad v i18n.js, "note.*")
const REPERTOAR = [
  { skladba: "Shallow", autor: "Lady Gaga", nastroj: "harfa", zanr: "pop", obtiznost: 2, stav: "hraju" },
  { skladba: "The Giving", autor: "Michael W. Smith", nastroj: "harfa", zanr: "christian", obtiznost: 2, stav: "hraju", pozn: "doprovod" },

  { skladba: "Nothing Else Matters", autor: "Metallica", nastroj: "harfa", zanr: "metal", obtiznost: 3, stav: "hraju" },
  { skladba: "Nothing Else Matters", autor: "Metallica", nastroj: "klavir", zanr: "metal", obtiznost: 3, stav: "hraju" },
  { skladba: "Nothing Else Matters", autor: "Metallica", nastroj: "kytara", zanr: "metal", obtiznost: 3, stav: "hraju" },
  { skladba: "Fade to Black", autor: "Metallica", nastroj: "klavir", zanr: "metal", obtiznost: 3, stav: "hraju" },

  { skladba: "Gott ist im Regen", autor: "Schwarzer Engel", nastroj: "harfa", zanr: "gothic", obtiznost: 3, stav: "hraju" },
  { skladba: "Gott ist im Regen", autor: "Schwarzer Engel", nastroj: "klavir", zanr: "gothic", obtiznost: 3, stav: "hraju" },

  { skladba: "Snuff", autor: "Slipknot", nastroj: "harfa", zanr: "metal", obtiznost: 2, stav: "hraju" },
  { skladba: "Snuff", autor: "Slipknot", nastroj: "klavir", zanr: "metal", obtiznost: 2, stav: "hraju" },
  { skladba: "Nero Forte", autor: "Slipknot", nastroj: "kytara", zanr: "metal", obtiznost: 3, stav: "hraju" },

  { skladba: "Bohemian Rhapsody", autor: "Queen", nastroj: "klavir", zanr: "rock", obtiznost: 4, stav: "hraju" },
  { skladba: "Dil Gaia", autor: "Omnia", nastroj: "harfa", zanr: "folk", obtiznost: 3, stav: "hraju" },
  { skladba: "Wind of Change", autor: "Scorpions", nastroj: "harfa", zanr: "rock", obtiznost: 2, stav: "hraju" },

  { skladba: "Minuet in G major", autor: "J. S. Bach", nastroj: "harfa", zanr: "baroque", obtiznost: 1, stav: "drive" },
  { skladba: "Jesu, Joy of Man's Desiring", autor: "J. S. Bach", nastroj: "harfa", zanr: "baroque", obtiznost: 3, stav: "drive" },
  { skladba: "Fairytale", autor: "Enya", nastroj: "harfa", zanr: "newage", obtiznost: 2, stav: "drive" },

  { skladba: "Square Hammer", autor: "Ghost", nastroj: "kytara", zanr: "rock", obtiznost: 2, stav: "hraju" },
  { skladba: "Witch Image", autor: "Ghost", nastroj: "kytara", zanr: "rock", obtiznost: 2, stav: "hraju" },
  { skladba: "Lachryma", autor: "Ghost", nastroj: "kytara", zanr: "rock", obtiznost: 3, stav: "hraju" },

  { skladba: "River Flows in You", autor: "Yiruma", nastroj: "klavir", zanr: "neoclassical", obtiznost: 3, stav: "hraju" },
  { skladba: "River Flows in You", autor: "Yiruma", nastroj: "harfa", zanr: "neoclassical", obtiznost: 3, stav: "hraju" },
  { skladba: "Sonata No. 16 in C major, K. 545 – 1st movement", autor: "W. A. Mozart", nastroj: "klavir", zanr: "classical", obtiznost: 3, stav: "ucim" },

  { skladba: "One More Light", autor: "Linkin Park", nastroj: "klavir", zanr: "altrock", obtiznost: 2, stav: "hraju" },
  { skladba: "Numb", autor: "Linkin Park", nastroj: "klavir", zanr: "altrock", obtiznost: 2, stav: "hraju" },

  { skladba: "Kickstart My Heart", autor: "Mötley Crüe", nastroj: "kytara", zanr: "glam", obtiznost: 3, stav: "hraju", pozn: "bez-sol" },
  { skladba: "Girls, Girls, Girls", autor: "Mötley Crüe", nastroj: "kytara", zanr: "glam", obtiznost: 2, stav: "hraju", pozn: "bez-sol" },
  { skladba: "Into the Void", autor: "Black Sabbath", nastroj: "kytara", zanr: "heavy", obtiznost: 2, stav: "hraju" },
  { skladba: "I Don't Wanna Stop", autor: "Ozzy Osbourne", nastroj: "kytara", zanr: "heavy", obtiznost: 2, stav: "hraju", pozn: "bez-sol" },
  { skladba: "Before I Forget", autor: "Slipknot", nastroj: "kytara", zanr: "metal", obtiznost: 3, stav: "hraju", pozn: "rytmika" },
  { skladba: "Compliments of Christ", autor: "Deicide", nastroj: "kytara", zanr: "death", obtiznost: 4, stav: "ucim", pozn: "rytmika" },

  { skladba: "Du hast", autor: "Rammstein", nastroj: "kytara", zanr: "ndh", obtiznost: 2, stav: "hraju" },
  { skladba: "Feuer frei!", autor: "Rammstein", nastroj: "kytara", zanr: "ndh", obtiznost: 2, stav: "hraju" },
  { skladba: "Ich tu dir weh", autor: "Rammstein", nastroj: "kytara", zanr: "ndh", obtiznost: 2, stav: "hraju" },
  { skladba: "Sonne", autor: "Rammstein", nastroj: "kytara", zanr: "ndh", obtiznost: 2, stav: "hraju" },
  { skladba: "Deutschland", autor: "Rammstein", nastroj: "kytara", zanr: "ndh", obtiznost: 2, stav: "hraju" },
  { skladba: "Ich will", autor: "Rammstein", nastroj: "kytara", zanr: "ndh", obtiznost: 2, stav: "hraju" },
  { skladba: "Du riechst so gut", autor: "Rammstein", nastroj: "kytara", zanr: "ndh", obtiznost: 2, stav: "hraju" },
  { skladba: "Waidmanns Heil", autor: "Rammstein", nastroj: "kytara", zanr: "ndh", obtiznost: 2, stav: "hraju" },

  { skladba: "Die Havarie", autor: "Kanonenfieber", nastroj: "kytara", zanr: "blackdeath", obtiznost: 3, stav: "hraju" },
  { skladba: "Kampf und Sturm", autor: "Kanonenfieber", nastroj: "kytara", zanr: "blackdeath", obtiznost: 3, stav: "hraju" }
];
