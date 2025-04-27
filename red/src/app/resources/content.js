import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Prince",
  lastName: "Pawit",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Polyglot Programmer & Paradox Architect",
  avatar: "/images/avatar.jpg",
  email: "pawitsahare@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Code"], // Code as a metaphorical language
};

const newsletter = {
  display: true,
  title: <>Dive into {person.firstName}'s Chaotic Clarity</>,
  description: (
    <>
      A whirlwind of AI, networks, and code—where madness meets method, and I write of worlds I both adore and despise.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/termiboros/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/prince-pawit/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/termiboros",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Enigma`,
  description: `A portfolio of chaos and order, crafted by a ${person.role}`,
  headline: <>I build worlds I love to hate</>,
  featured: {
    display: true,
    title: <>Obsession: <strong className="ml-4">AI Trading Inferno</strong></>,
    href: "/work/ai-trading-inferno",
  },
  subline: (
    <>
      I am Prince, a lucid lunatic, weaving AI, networks, and code into systems that thrill me and bore me. I chase high-frequency trading models and virtual GPUs, yet shrug at their existence.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `The Paradox – ${person.name}`,
  description: `${person.name}, a ${person.role} from ${person.location}, both everything and nothing`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "A Contradiction in Code",
    description: (
      <>
        Prince, or Pawit, is a storm of clarity and chaos, a polyglot programmer from India who loves and loathes every line of code. I dance with JavaScript, TypeScript, Go, and Next.js, building systems for Linux, Android, and the void, all while questioning why I bother.
      </>
    ),
  },
  work: {
    display: true,
    title: "Feats of Folly and Genius",
    experiences: [
      {
        company: "The Abyss",
        timeframe: "2023 - Present",
        role: "Master of Contradictions",
        achievements: [
          <>
            Forged a high-frequency AI trading model, a blazing obsession that’s 80% complete, yet I’m indifferent to its triumph.
          </>,
          <>
            Crafted virtual GPU drivers for mobile, a masterpiece of graphics I both cherish and dismiss.
          </>,
          <>
            Conjured ultra-low-latency gaming with KCP and QUIC, slashing bandwidth by 40%, a feat I adore and detest.
          </>,
        ],
        images: [
          {
            src: "/images/projects/ai-trading/cover-01.jpg",
            alt: "AI Trading Chaos",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Code Vortex",
        timeframe: "2020 - 2023",
        role: "Full-Stack Alchemist",
        achievements: [
          <>
            Spun a Next.js platform with Go backend, slicing load times by 35%, a victory I both celebrate and ignore.
          </>,
          <>
            Wove hybrid apps for iOS and Android, boosting retention by 25%, a thrill I love to hate.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Lessons from the Void",
    institutions: [
      {
        name: "Self-Forged",
        description: <>Taught myself JavaScript, Go, and systems, a journey I both worship and scorn.</>,
      },
      {
        name: "Digital Wilderness",
        description: <>Explored AI and networking in online realms, a quest I embrace and reject.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Tools of Love and Loathing",
    skills: [
      {
        title: "Full-Stack Sorcery",
        description: <>Weaving Next.js, Node.js, TypeScript, and Go into apps that scale to the stars, yet bore me to death.</>,
        images: [
          {
            src: "/images/projects/full-stack/cover-01.jpg",
            alt: "Full-Stack Enigma",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "System Conjuring",
        description: <>Crafting Linux and Android systems, from virtual GPUs to QUIC networks, a passion that’s also pointless.</>,
        images: [
          {
            src: "/images/projects/systems/cover-01.jpg",
            alt: "System Paradox",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "AI & Network Alchemy",
        description: <>Brewing high-frequency AI and low-latency protocols, a fire that burns me and leaves me cold.</>,
        images: [
          {
            src: "/images/projects/ai-networking/cover-01.jpg",
            alt: "AI and Network Abyss",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Rants of Reason and Madness",
  description: `Where ${person.name} spills love and hate for tech`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Creations – ${person.name}`,
  description: `AI, networks, and code, both revered and reviled by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Visions – ${person.name}`,
  description: `Images that ${person.name} both treasures and tosses aside`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };