const PROJEKTY = {
  viademy: {
    icon: "bi-headset-vr",
    tech: ["Unity", "C#", "Meta Quest 3 / 3S", "VR"],
    links: [{ url: "https://viademy.com", icon: "bi-box-arrow-up-right", label: "viademy.com" }],
    cs: {
      title: "Viademy",
      meta: "Head of VR · startup · [DOPLNIT: od roku] – dosud",
      short: "Výuka dějepisu ve virtuální realitě pro základní školy. Vyvíjím VR aplikaci v Unity pro Meta Quest 3 a 3S.",
      detail: [
        "Viademy je startup, který vyvíjí edukativní VR platformu pro základní školy. Žáci v týmech procházejí historické světy ve virtuální realitě. Jeden člen týmu je v headsetu a ostatní mu pomáhají s pracovními listy a tabletem. Učitel řídí hodinu z prohlížeče. První hotová lekce zavede třídu do starověkého Egypta.",
        "Jako Head of VR mám na starosti vývoj samotné VR aplikace v Unity. Cílíme primárně na headsety Meta Quest 3 a 3S.",
        "Jsme čtyřčlenný tým: CEO, kolega, který má na starosti komunikaci se školami a webovou platformu, grafik a já na VR aplikaci."
      ]
    },
    en: {
      title: "Viademy",
      meta: "Head of VR · startup · [DOPLNIT: since year] – present",
      short: "History lessons in virtual reality for primary schools. I build the VR app in Unity for Meta Quest 3 and 3S.",
      detail: [
        "Viademy is a startup building an educational VR platform for primary schools. Students explore historical worlds in teams: one of them wears the headset while the others help with worksheets and a tablet, and the teacher runs the lesson from a browser. The first finished lesson takes the class to Ancient Egypt.",
        "As Head of VR I am responsible for developing the VR application itself in Unity. Our primary targets are the Meta Quest 3 and 3S headsets.",
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
  }
};
