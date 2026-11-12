import Potus from "./assets/images/potus.gif";
import DiceMerge from "./assets/images/dice-merge.png";
import Myntist from "./assets/images/myntist.png";

export type Track = "games" | "web" | "desktop";

export type Role = {
  company: string;
  short?: string;
  title: string;
  place: string;
  track: Track;
  start: string;
  end?: string;
  points: string[];
  stack: string;
};

export type Project = {
  name: string;
  summary: string;
  stack: string;
  image?: string;
  links?: { label: string; url: string }[];
};

export const TRACKS: Track[] = ["games", "web", "desktop"];

export const ROLES: Role[] = [
  {
    company: "Reboot Technologies",
    short: "Reboot",
    title: "Game Developer",
    place: "Lahore",
    track: "games",
    start: "2021-01",
    end: "2021-09",
    points: ["Digital board games and car-simulation games in Unity, from concept to release."],
    stack: "Unity · C#",
  },
  {
    company: "Crosshair Technologies",
    short: "Crosshair",
    title: "Game Developer",
    place: "Lahore",
    track: "games",
    start: "2021-09",
    end: "2022-06",
    points: [
      "Built Pixel Potus, an online multiplayer trading-card game with collectible trading.",
      "Designed the game architecture and real-time networking with Photon.",
    ],
    stack: "Unity · C# · Photon",
  },
  {
    company: "Mushroom Studios",
    short: "Mushroom",
    title: "Co-Founder & Lead Game Developer",
    place: "Lahore",
    track: "games",
    start: "2022-06",
    end: "2023-04",
    points: [
      "Co-founded the studio and shipped puzzle, board and racing games to Google Play.",
      "Owned game architecture, gameplay systems, monetisation and mobile performance.",
    ],
    stack: "Unity · C# · Blender",
  },
  {
    company: "Coding Cops",
    title: "Software Engineer",
    place: "Lahore",
    track: "web",
    start: "2023-03",
    end: "2024-11",
    points: [
      "Full-stack MERN applications with JWT-secured REST APIs.",
      "Deployed and ran services on AWS (EC2, S3, Fargate) with CircleCI pipelines.",
      "Wallet and smart-contract integrations with Solidity and Web3.js.",
    ],
    stack: "MongoDB · Express · React · Node · AWS · Solidity",
  },
  {
    company: "Kewordal",
    title: "Software Engineer",
    place: "London",
    track: "web",
    start: "2025-05",
    end: "2025-11",
    points: [
      "Built and maintained responsive React product features.",
      "Turned user feedback into UI/UX improvements and helped shape the roadmap.",
    ],
    stack: "React · TypeScript",
  },
  {
    company: "HVN Labs",
    title: "Software Engineer",
    place: "Bristol",
    track: "desktop",
    start: "2025-11",
    points: [
      "Lead developer on the light-show suite: Electron apps for authoring and live playback on a shared engine.",
      "Built the keyframe timeline, a Three.js viewport over Skybrush flight paths, and frame streaming to LED controllers over DDP.",
      "Multi-tenant fleet operations platform with RBAC, audit logging and a typed CLI for automation.",
    ],
    stack: "Electron · React · TypeScript · Three.js · Next.js · Strapi · Postgres",
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Drone light-show suite",
    summary:
      "A keyframe timeline and 3D viewport for designing shows, and a playback app that streams frames to the drones' LEDs in sync with the flight.",
    stack: "Electron · React · Three.js · DDP",
  },
  {
    name: "Fleet operations platform",
    summary:
      "Multi-tenant platform for fleets, batteries, maintenance, flight logs and show checklists. 40+ entities, role-based access and an audit trail.",
    stack: "Next.js · Strapi · Postgres",
  },
  {
    name: "Pixel Potus",
    summary: "Online multiplayer trading-card game with real-time matches and collectible trading.",
    stack: "Unity · C# · Photon",
    image: Potus,
    links: [{ label: "pixelpotus.com", url: "https://www.pixelpotus.com/" }],
  },
  {
    name: "Mobile puzzle games",
    summary: "Offline-first puzzle games with 1000+ levels each, tuned to run smoothly on low-end phones.",
    stack: "Unity · C# · Google Play",
    image: DiceMerge,
    links: [
      { label: "Dice Merge", url: "https://play.google.com/store/apps/details?id=com.dicedom.mergepuzzlegames.peachupacha" },
      { label: "Ball Sort", url: "https://play.google.com/store/apps/details?id=com.ball.sortout.puzzle.game" },
      {
        label: "Water Sort",
        url: "https://play.google.com/store/apps/details?id=com.peachupachagames.water.sort3d.puzzle.color.sorting.free",
      },
    ],
  },
  {
    name: "Myntist",
    summary: "Marketplace for buying and selling digital assets with its own MYNT token. I worked on the Web3 integration.",
    stack: "React · Node · Solidity",
    image: Myntist,
    links: [{ label: "myntist.com", url: "https://www.myntist.com/" }],
  },
];

export const SKILLS = [
  ["Frontend", "React 19, Next.js 15, Three.js, Vite, Ant Design"],
  ["Backend & data", "Node, Express, Strapi, FastAPI, Postgres, MongoDB, SQLite"],
  ["Desktop & real-time", "Electron, keyframe animation, UDP/DDP streaming, WLED on ESP32"],
  ["Cloud & DevOps", "AWS, Railway, Docker, GitHub Actions, Turborepo, Bun"],
  ["Languages", "TypeScript, Python, C#, SQL, Solidity"],
  ["Games & 3D", "Unity, Photon, Blender"],
];

export const LINKS = {
  github: "https://github.com/sagittariusHere",
  linkedin: "https://www.linkedin.com/in/abdullah-khalid-a8a27515b/",
  email: "mailto:sagittarius.here@gmail.com",
};
