import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Arpan Gupta",
  initials: "Dev",
  url: "https://github.com/arpanhub",
  location: "U.P, India",
  locationLink: "https://www.google.com/maps/place/Uttar+Pradesh/",
  description:
    "Tech enthusiast passionate about building projects and bringing ideas to life.🚀",
  summary:
    "I’m a passionate tech enthusiast and pre-final year undergrad specializing in [full-stack development](#skills), and [UI Design](#projects). I love building scalable web solutions, solving real-world problems, and sharing insights on Twitter/X. Always eager to learn and take on new challenges, I’m actively seeking opportunities to apply my expertise and contribute to impactful [projects](#projects). I also founded The Logicgen, an agency helping creators and businesses scale online. Through my freelance work, I’ve collaborated with clients having 30K+ followers, optimizing their digital presence and business growth.",
  avatarUrl: "/arpan.png",

  skills: [
    "React.js", "Next.js", "Javascript", "Typescript", "Node.js",
    "MongoDB", "PostgreSQL", "Redis", "Golang", "C++", "Java", "SQL",
    "TailwindCSS", "Express.js", "Prisma", "Docker", "Kubernetes", "Git",
    "GitHub Actions", "Linux", "gRPC", "OpenAPI", "Three.js", "GSAP",
    "Shadcn UI", "Convex", "Langflow", "Astra DB", "WordPress"
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },

  ],

  contact: {
    email: "arpangupta644@gmail.com",
    tel: "+91 9307669216",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/arpanhub", icon: Icons.github, navbar: true },
      LinkedIn: { name: "LinkedIn", url: "https://www.linkedin.com/in/arpan-gupta-/", icon: Icons.linkedin, navbar: true },
      X: { name: "X", url: "https://x.com/arpanhub", icon: Icons.x, navbar: true },
      email: { name: "Send Email", url: "mailto:arpangupta644@gmail.com", icon: Icons.email, navbar: true },
    },
  },

  work: [
    {
      company: "The Logicgen",
      title: "Co-Founder",
      location: "Remote",
      logoUrl: "/tl.png", // use your logo or placeholder
      start: "Jan 2024",
      end: "Present",
      description:
        "Founded a digital agency helping creators and businesses scale their online presence. Delivered websites, marketing funnels, and automation for clients with 30K+ followers. Managed end-to-end client operations, from ideation to deployment and growth.",
    } ,
    {
      company: "Genesis Limited",
      href: "https://genesisfinance.in/",
      title: "Tech Lead",
      location: "Surat, Gujarat",
      logoUrl: "/gf.png",
      start: "Jun 2024",
      end: "Nov 2024",
      description:
        "Spearheaded the digital transformation of operations, achieving 80% increase in online engagement. Built a React + WordPress web platform that improved customer inquiries by 30%. Collaborated with cross-functional teams to boost brand visibility by 60%.",
    },
    {
      company: "Coding Blocks LPU",
      title: "Media Head",
      location: "Jalandhar, Punjab",
      logoUrl: "/cb.png",
      start: "May 2023",
      end: "Mar 2024",
      description:
        "Led media ops for large-scale tech events and workshops. Mentored 5 junior teammates, boosting project execution and collaboration.",
    },
    {
      company: "Open Source",
      title: "Contributor",
      href: "https://github.com/arpanhub",
      location: "Remote",
      logoUrl: "/github-mark.png",
      start: "2023",
      end: "Present",
      description:
        "Contributed to GSoC 2025 projects for Sprocket and Aussies orgs.Provided better solutions to the issues",
    },   
  ],

  education: [
    {
      school: "Lovely Professional University, Jalandhar",
      degree: "Bachelor of Technology, Computer Science and Engineering",
      logoUrl: "/lpu.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "St. Thomas School, Kanpur",
      degree: "12th with Science",
      logoUrl: "/school.png",
      start: "2021",
      end: "2022",
    },
  ],

  projects: [

    {
      title: "Smart URL Shortener",
      href: "",
      dates: "March 2025",
      active: true,
      description:
        "High-performance URL shortener built with Base62 encoding, Redis caching, and analytics dashboard. Supports 10K+ requests/sec.",
      technologies: ["Golang", "Redis", "PostgreSQL","Aceternity UI "],
      links: [],
      image: "/urll.png",
      video: "",
    },
    {
      title: "Payment Prototype",
      href: "",
      dates: "May 2024",
      active: true,
      description:
        "MERN-based payment clone app with debounced user search, session-based transactions, and token system.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCSS", "JWT"],
      links: [],
      image: "/payment.png",
      video: "",
    },
    {
      title: "Social Media Insight Generator",
      href: "",
      dates: "May 2024",
      active: true,
      description:
        "AI tool using Langflow, Astra DB, and Gemini API to analyze 100+ posts and generate monthly insights with 90% accuracy.",
      technologies: ["Langflow", "Astra DB", "Gemini API"],
      links: [],
      image: "",
      video: "",
    },
    
  ],

  hackathons: [
    {
      title: "iGEM 2024 - Gold Medalist",
      dates: "Oct 2024",
      location: "Paris, France",
      description:
        "Won Gold in the Web Development category leading the IISER Kolkata team. Built a scientific collaboration platform.",
      image: "/igem.png",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "Sep 2024",
      location: "Kolkata, India",
      description:
        "Developed a ship re-routing web app using traffic data to reduce delivery delays. Among top performers in internal round out of 600+ teams.",
      image: "/Smart-India-Hackathon-2023.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/arpanhub",
        },
      ],
    },
  ],
} as const;
