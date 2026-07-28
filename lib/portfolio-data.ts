export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  liveUrl: string;
  techStack: string[];
  category: 'Frontend' | 'React & Next.js' | 'All';
  featured: boolean;
  imageBgGradient: string;
  keyFeatures: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Tools' | 'Other';
  iconName: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrOrg: string;
  content: string;
  rating: number;
  avatarUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Freskim Hyseni",
  title: "Frontend Developer & Student",
  age: 15,
  location: "Lipjan, Kosovo",
  school: "Digital School Lipjan",
  phone: "+383 45 109 733",
  whatsapp: "38345109733",
  email: "freskimhyseni6@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  heroHeadline: "Hi, I'm Freskim Hyseni",
  heroSubheadline: "Frontend Developer & Student",
  heroDescription: "I build fast, modern, responsive websites using HTML, CSS, JavaScript, React, and Next.js.",
  aboutText: `I am Freskim Hyseni, a 15-year-old student from Lipjan, Kosovo, studying at Digital School Lipjan. I am passionate about frontend web development and enjoy creating modern, responsive, and user-friendly websites. I have learned HTML, CSS, JavaScript, React, and Next.js, and I continue improving my skills by building real-world projects. My goal is to create clean, fast, and visually appealing websites that provide a great user experience.`,
  experienceText: `Although I am still a student, I actively build real-world frontend projects and continuously improve my knowledge through practice and self-learning. Every project helps me develop stronger design, coding, and problem-solving skills.`
};

export const PROJECTS: Project[] = [
  {
    id: "sach-pizza",
    title: "Sach Pizza",
    description: "A modern pizza restaurant website featuring an attractive design, responsive layout, smooth navigation, and an enjoyable browsing experience.",
    longDescription: "Sach Pizza is a modern restaurant web interface designed for seamless menu browsing, online order inquiries, interactive meal showcases, and a responsive mobile layout built with pure frontend fundamentals.",
    liveUrl: "https://sachpizza.freskimhyseni6.workers.dev/",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    featured: true,
    imageBgGradient: "from-amber-600 via-orange-600 to-red-700",
    keyFeatures: [
      "Interactive digital food menu",
      "Mobile-optimized responsive design",
      "Smooth scroll transitions & animations",
      "Customer contact & location section"
    ]
  },
  {
    id: "final-school-project",
    title: "Final School Project",
    description: "A complete frontend project built as a school assignment showcasing responsive layouts, clean UI, and modern web development techniques.",
    longDescription: "Created as the comprehensive capstone project at Digital School Lipjan. Demonstrates clean semantic markup, custom CSS styling, stateful JavaScript interaction, and modern UI components.",
    liveUrl: "https://freskimhyseni-finalprojekt.netlify.app/",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    featured: true,
    imageBgGradient: "from-blue-600 via-cyan-600 to-teal-700",
    keyFeatures: [
      "Multi-section responsive web architecture",
      "Custom UI components and layout grid",
      "Dynamic DOM manipulation via vanilla JS",
      "Optimized assets and fast loading times"
    ]
  },
  {
    id: "local-tour",
    title: "LocalTour",
    description: "A travel and tourism website built with Next.js featuring reusable React components, modern routing, responsive design, and a polished interface.",
    longDescription: "LocalTour is an immersive tourism showcase application built with Next.js and React. It helps travelers explore local spots, tour packages, and travel guides with fast page transitions and modular UI architecture.",
    liveUrl: "https://localtour-nextjs.vercel.app/",
    techStack: ["React", "Next.js"],
    category: "React & Next.js",
    featured: true,
    imageBgGradient: "from-emerald-600 via-teal-600 to-cyan-700",
    keyFeatures: [
      "Next.js App Router navigation",
      "Reusable React component hierarchy",
      "Interactive destination cards",
      "Optimized images and responsive layout"
    ]
  },
  {
    id: "ujvara-aquapark",
    title: "Ujvara Aquapark",
    description: "A modern aquapark website with an elegant design showcasing attractions, services, pricing, and visitor information.",
    longDescription: "Ujvara Aquapark provides a vibrant online experience for visitors of the waterpark. It features attraction details, ticket pricing cards, opening hours schedule, interactive FAQs, and visitor contact details.",
    liveUrl: "https://ujvara-aquapark.vercel.app/",
    techStack: ["React", "Next.js"],
    category: "React & Next.js",
    featured: true,
    imageBgGradient: "from-indigo-600 via-purple-600 to-pink-700",
    keyFeatures: [
      "Interactive pricing & attraction cards",
      "Modern React component design",
      "Sleek dark/light aesthetic accents",
      "Visitor guide & location information"
    ]
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "HTML5", level: 95, category: "Frontend", iconName: "Code", description: "Semantic markup, accessibility standard structure" },
  { name: "CSS3", level: 90, category: "Frontend", iconName: "Palette", description: "Flexbox, Grid, animations, responsive design" },
  { name: "JavaScript (ES6+)", level: 85, category: "Frontend", iconName: "FileCode", description: "DOM manipulation, async/await, modern syntax" },
  { name: "React", level: 85, category: "Frontend", iconName: "Atom", description: "Hooks, component architecture, state management" },
  { name: "Next.js", level: 80, category: "Frontend", iconName: "Zap", description: "App router, SSR/SSG, fast routing, optimization" },
  
  // Tools
  { name: "Git", level: 82, category: "Tools", iconName: "GitBranch", description: "Version control, branching, committing" },
  { name: "GitHub", level: 85, category: "Tools", iconName: "Github", description: "Repositories, collaboration, page hosting" },
  { name: "Vercel", level: 88, category: "Tools", iconName: "Cloud", description: "Next.js deployment, CI/CD, domain management" },
  { name: "Netlify", level: 85, category: "Tools", iconName: "Globe", description: "Static site hosting, serverless functions" },
  { name: "VS Code", level: 92, category: "Tools", iconName: "Terminal", description: "Extensions, debugging, modern workspace workflow" },

  // Other Skills
  { name: "Responsive Web Design", level: 92, category: "Other", iconName: "Smartphone", description: "Mobile-first layouts across all device screen sizes" },
  { name: "UI/UX Basics", level: 82, category: "Other", iconName: "Layout", description: "Visual hierarchy, spacing math, color theory, legibility" },
  { name: "Performance Optimization", level: 80, category: "Other", iconName: "Gauge", description: "Asset compression, fast load speeds, Lighthouse scores" },
  { name: "SEO Basics", level: 78, category: "Other", iconName: "Search", description: "Meta tags, structured data, search engine visibility" },
];

export const SERVICES: Service[] = [
  {
    id: "responsive-websites",
    title: "Responsive Business Websites",
    description: "Custom, mobile-friendly websites that showcase your business professionally on all screen sizes.",
    icon: "Building2",
    features: ["100% Mobile & Desktop Responsive", "Fast Loading Speed", "Clean Modern Layout", "Contact Form Integration"]
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "High-converting, visually striking landing pages designed to capture leads and showcase products.",
    icon: "Sparkles",
    features: ["Eye-Catching Hero Section", "Call to Action Focus", "Interactive Features", "Optimized Layout"]
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    description: "Personal portfolios tailored for developers, designers, students, and creative freelancers.",
    icon: "Briefcase",
    features: ["Project Showcase Gallery", "About & Resume Sections", "Custom Animations", "Social Media Links"]
  },
  {
    id: "react-applications",
    title: "React Applications",
    description: "Dynamic and interactive web applications built with modern React components and clean state management.",
    icon: "Atom",
    features: ["Component-Based Architecture", "State Management", "Fast User Interactions", "Scalable Codebase"]
  },
  {
    id: "nextjs-websites",
    title: "Next.js Websites",
    description: "SEO-friendly, ultra-fast websites built with Next.js App Router for optimal web performance.",
    icon: "Zap",
    features: ["Server-Side Rendering (SSR)", "SEO & Meta Tag Setup", "Lightning-Fast Load Times", "Modern Routing"]
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    description: "Converting design wireframes (Figma, Adobe XD) into pixel-perfect, clean HTML/CSS/JS code.",
    icon: "Code2",
    features: ["Pixel-Perfect Conversion", "Clean & Readable Code", "Cross-Browser Compatibility", "Accessible Components"]
  },
  {
    id: "website-redesigns",
    title: "Website Redesigns",
    description: "Revamping outdated websites into modern, sleek, and highly functional digital web experiences.",
    icon: "RefreshCw",
    features: ["Modern UI Aesthetics", "Improved Mobile Usability", "Speed & Performance Boost", "Updated Tech Stack"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Digital School Mentor",
    role: "Lead Web Instructor",
    companyOrOrg: "Digital School Lipjan",
    content: "Freskim is one of our most dedicated and hardworking students. His speed of learning HTML, CSS, JavaScript, React, and Next.js is impressive. He pays great attention to detail in every project.",
    rating: 5
  },
  {
    id: "2",
    name: "Restaurant Management",
    role: "Sach Pizza Project",
    companyOrOrg: "Sach Pizza Showcase",
    content: "Freskim designed an exceptional website for Sach Pizza! It is fast, easy to navigate, looks awesome on mobile phones, and presents our menu cleanly.",
    rating: 5
  },
  {
    id: "3",
    name: "Aquapark Visitor Lead",
    role: "Project Evaluator",
    companyOrOrg: "Ujvara Aquapark Website",
    content: "The Ujvara Aquapark platform designed with Next.js is super crisp and modern. Great animations, simple pricing guides, and high aesthetic quality.",
    rating: 5
  }
];

export const STATS = [
  { label: "Projects Completed", value: 4, suffix: "+", description: "Real-world web projects built and deployed" },
  { label: "Years Old", value: 15, suffix: "", description: "Passionate young developer from Kosovo" },
  { label: "Technologies Learned", value: 5, suffix: "+", description: "HTML, CSS, JS, React, Next.js & Git" },
  { label: "Passion for Coding", value: 100, suffix: "%", description: "Dedicated to creating great user experiences" }
];

export const TIMELINE = [
  {
    year: "2024 - Present",
    title: "Web Development Student",
    organization: "Digital School Lipjan",
    description: "Mastering advanced web development concepts, including HTML5, CSS3, JavaScript ES6+, React, Next.js, and modern UI frameworks. Building real-world capstone projects."
  },
  {
    year: "2025 - Present",
    title: "Frontend Developer & Freelance Creator",
    organization: "Independent Projects",
    description: "Designing and building live production web applications like Sach Pizza, LocalTour, Ujvara Aquapark, and school projects hosted on Vercel, Netlify, and Cloudflare Workers."
  },
  {
    year: "Ongoing",
    title: "Skill Expansion & Problem Solving",
    organization: "Self-Learning & Open Source",
    description: "Continuously refining performance optimization, responsive layouts, UI design systems, and SEO best practices to create world-class frontend interfaces."
  }
];
