// All site content lives here so pages stay presentational.

export const site = {
  name: 'Joshua Ayotope Adeyefa',
  short: 'Joshua',
  role: 'Web & Mobile Developer',
  location: 'Lagos, Nigeria',
  email: 'maceyjoshua07@gmail.com',
  resume:
    'https://drive.google.com/file/d/1ka-JcDgZp03tm4OOp38jiI8u-JSZ9V8A/view?usp=drive_link',
  url: 'https://ayopium07.github.io/portfolio',
};

export const nav = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/ayopium07' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/Ayotope%20Joshua' },
  { label: 'X', href: 'https://twitter.com/Thatuglyboy_7' },
  { label: 'Instagram', href: 'https://www.instagram.com/temisann7' },
];

export const facts = [
  { value: '7+', label: 'Projects shipped' },
  { value: '2+', label: 'Years building' },
  { value: 'iOS & Android', label: 'Platforms' },
  { value: '0', label: 'Missed deadlines' },
];

export const clients = [
  'TEACcH',
  'SWIP',
  'Festival of Change',
  'Rekora',
  'The OAK',
  'AlphaCare',
  'FutureSkills',
  'The Brooks',
  'Oasis Bank',
  'SDG 9',
  'Shopmammy',
];

export const tech = [
  'React Native', 'Next.js', 'TypeScript', 'Node.js', 'React', 'Flutter',
  'Dart', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'Cybersecurity',
];

export const services = [
  {
    id: 'web',
    no: '01',
    title: 'Web Development',
    short: 'Fast, responsive and scalable platforms built with React and Next.js.',
    body:
      'I build fast, responsive, and scalable web platforms using modern tools like React, Next.js, TypeScript, and TailwindCSS. Focus on accessible, pixel-perfect user interfaces and solid backend integration with Node.js.',
    pills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS'],
  },
  {
    id: 'mobile',
    no: '02',
    title: 'Mobile Apps',
    short: 'Intuitive cross-platform experiences using Flutter, Dart and React Native.',
    body:
      'Creating intuitive and seamless cross-platform mobile experiences using Flutter, Dart, and React Native. One codebase delivering native performance on both iOS and Android.',
    pills: ['React Native', 'Flutter', 'Dart', 'Expo'],
  },
  {
    id: 'security',
    no: '03',
    title: 'Cybersecurity',
    short: 'Security best practices that protect your applications and user data.',
    body:
      'Implementing security best practices to protect your applications and user data from modern threats. Ensuring secure authentication, data encryption, and robust application architectures.',
    pills: ['App Security', 'Data Protection', 'Secure Coding'],
  },
];

export const steps = [
  {
    title: 'Understand before building',
    body: 'I start by understanding your users, your goals, and your constraints — then I design a solution, not just write code.',
  },
  {
    title: 'Clean, scalable code',
    body: 'Each feature is built to last. Readable, well-structured code that your future self (or team) will thank you for.',
  },
  {
    title: 'Iterate & collaborate',
    body: 'I share progress frequently, stay open to feedback, and refine until the result feels exactly right.',
  },
  {
    title: 'Ship & support',
    body: "Delivery doesn't mean disappearing. I ensure smooth launches and am available for follow-up fixes and improvements.",
  },
];

// `logo: true` = transparent logo artwork, shown contained on a tinted tile.
export const projects = [
  {
    title: 'Festival of Change 25',
    blurb: 'Global event platform bringing together educators, technologists, and innovators. Designed for scale and discoverability.',
    img: '/images/FOC25.jpg',
    href: 'https://www.festivalofchange.org/',
    domain: 'festivalofchange.org',
    tags: ['web'],
    kind: 'Event platform',
    year: '2025',
    featured: true,
  },
  {
    title: 'Sustainable World Impact Program',
    blurb: 'Youth-led sustainability organization from Nigeria placing SDG 17 at the center of their operational model.',
    img: '/images/swiplo.jpg',
    href: 'https://www.theswip.org/',
    domain: 'theswip.org',
    tags: ['web'],
    kind: 'Non-profit',
    year: '2024',
    featured: true,
  },
  {
    title: 'The OAK',
    blurb: 'A sex educators platform delivering accurate, inclusive, and science-backed health information to young people.',
    img: '/images/loname.png',
    logo: true,
    href: 'https://www.theoaking.com/',
    domain: 'theoaking.com',
    tags: ['web'],
    kind: 'Health education',
    year: '2024',
    featured: true,
  },
  {
    title: 'TEACcH',
    blurb: 'A Social Innovation Hub built to empower communities and foster a better tomorrow through education and technology.',
    img: '/images/TEACcHlo.png',
    logo: true,
    href: 'https://www.teacch.co/',
    domain: 'teacch.co',
    tags: ['web'],
    kind: 'Innovation hub',
  },
  {
    title: 'Rekora Initiatives',
    blurb: 'STEM program site focused on empowering students through hands-on technology education and mentorship.',
    img: '/images/rekoralo.jpg',
    href: 'https://www.rekora.org/',
    domain: 'rekora.org',
    tags: ['web'],
    kind: 'STEM education',
  },
  {
    title: 'AlphaCare Rehabilitation',
    blurb: 'A safe, structured home where every individual finds belonging, respect, and the chance to rebuild.',
    img: '/images/apclogonob.svg',
    logo: true,
    href: 'https://alphacare.care',
    domain: 'alphacare.care',
    tags: ['web'],
    kind: 'Healthcare',
  },
  {
    title: 'FutureSkills EdTech Platform',
    blurb: 'An edtech company building the judgment infrastructure for how students, educators, and decision-makers think and act in AI-assisted environments.',
    img: '/images/FSB.png',
    href: 'https://futureskills-rust.vercel.app/',
    domain: 'futureskills-rust.vercel.app',
    tags: ['web'],
    kind: 'EdTech',
  },
  {
    title: 'The Brooks Ministry',
    blurb: 'A non-denominational Christian ministry with a singular focus: raising frontliners and pioneers for the kingdom of God.',
    img: '/images/brooks.png',
    logo: true,
    href: 'https://thebrooks.vercel.app/',
    domain: 'thebrooks.vercel.app',
    tags: ['web'],
    kind: 'Ministry',
  },
  {
    title: 'Oasis Bank',
    blurb: 'Modern digital banking web platform featuring enterprise-grade security, seamless account management, and real-time transaction workflows.',
    img: '/images/Oasis.png',
    logo: true,
    href: 'https://oasis-one-sage.vercel.app/',
    domain: 'oasis-one-sage.vercel.app',
    tags: ['web', 'security'],
    kind: 'Fintech',
  },
  {
    title: 'SDG 9',
    blurb: 'Interactive web platform dedicated to UN Sustainable Development Goal 9 — championing resilient infrastructure, inclusive industrialization, and innovation.',
    img: '/images/sdg9.svg',
    logo: true,
    href: 'https://sdg9.vercel.app/',
    domain: 'sdg9.vercel.app',
    tags: ['web'],
    kind: 'Sustainability',
  },
  {
    title: 'Shopmammy E-commerce App',
    blurb: 'Full-featured e-commerce platform for seamless shopping and order management, including a unique community cart-sharing model.',
    img: '/images/shopmammy.png',
    logo: true,
    href: 'https://github.com/ayopium07/shopmammy_users',
    domain: 'github.com/ayopium07/shopmammy_users',
    repo: true,
    tags: ['mobile'],
    kind: 'E-commerce',
  },
  {
    title: 'Shopmammy Rider App',
    blurb: 'Delivery management app for riders with real-time GPS tracking, secure payment processing, and location-aware security features.',
    img: '/images/shopmammy-rider.png',
    logo: true,
    href: 'https://github.com/ayopium07/shopmammy_rider',
    domain: 'github.com/ayopium07/shopmammy_rider',
    repo: true,
    tags: ['mobile'],
    kind: 'Logistics',
  },
  {
    title: 'OasisBank Mobile App',
    blurb: 'Modern banking app with enterprise-grade encryption, secure transactions, and advanced fraud detection capabilities.',
    img: '/images/Oasis.png',
    logo: true,
    href: 'https://github.com/ayopium07/oasisbankapp',
    domain: 'github.com/ayopium07/oasisbankapp',
    repo: true,
    tags: ['mobile', 'security'],
    kind: 'Fintech',
  },
  {
    title: 'Focus AI Coach',
    blurb: 'AI-powered productivity app that helps users improve focus with personalized coaching, privacy-first data handling, and smart insights.',
    img: '/images/focus-ai.png',
    logo: true,
    tags: ['mobile'],
    kind: 'Productivity',
  },
  {
    title: 'Shopmammy Vendor App',
    blurb: 'Vendor-focused management app for products, orders, and sales analytics, with secure data transmission and role-based access controls.',
    img: '/images/applogo.png',
    logo: true,
    href: 'https://github.com/ayopium07/shopmammy_vendor',
    domain: 'github.com/ayopium07/shopmammy_vendor',
    repo: true,
    tags: ['mobile'],
    kind: 'E-commerce',
  },
  {
    title: 'Fitness Tracking App',
    blurb: 'Personalized workout planning and progress tracking app built with a strong emphasis on user privacy and secure health data storage.',
    img: '/images/mobile-app-icon.png',
    logo: true,
    tags: ['mobile'],
    kind: 'Health',
  },
];

export const experience = [
  {
    when: 'Nov 2024 – Present',
    role: 'Web Developer & Mobile App Developer',
    org: 'TEACcH',
    body: 'Spearhead development of native and cross-platform mobile applications for iOS and Android using Flutter and React Native. Design and deploy responsive web applications using HTML, CSS, JavaScript, and TypeScript. Partner with cross-functional teams to deliver user-focused features and drive technical excellence through code reviews and best practices.',
  },
  {
    when: 'Oct 2025 – Present',
    role: 'Web Developer – CTO & Tech Lead',
    org: 'SWIP – Sustainable World Impact Program',
    body: "Manage the organization's website and full tech infrastructure, ensuring seamless operations, uptime, and digital visibility for a youth-led sustainability NGO operating with global reach.",
  },
  {
    when: 'May 2023 – Nov 2023',
    role: 'Intern – Network & Hardware Technician',
    org: 'Nigerian Ports Authority',
    body: 'Assisted in the configuration and maintenance of enterprise network infrastructure. Supported the hardware team with troubleshooting and issue resolution. Gained hands-on exposure to both hardware and software diagnostics in a high-stakes environment.',
  },
];

export const education = [
  {
    when: 'Graduated 2024',
    role: 'B.Sc. Cyber Security',
    org: 'Caleb University, Nigeria',
    body: 'Specialized in network security, penetration testing, and secure software development practices. Completed major projects in vulnerability assessment and enterprise security implementation — a foundation that shapes my approach to every line of code I write.',
  },
  {
    when: 'Graduated 2020',
    role: 'Secondary Education',
    org: 'French Village International College',
    body: 'Completed my secondary school education here, building a strong academic foundation before pursuing a degree in Cyber Security.',
  },
];

export const skillGroups = [
  { title: 'Mobile Development', pills: ['React Native', 'Flutter', 'Expo', 'Dart', 'iOS', 'Android'] },
  { title: 'Web Development', pills: ['HTML / CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS'] },
  { title: 'Cybersecurity', pills: ['Network Security', 'Penetration Testing', 'Vulnerability Assessment', 'Secure Coding'] },
];

export const faqs = [
  {
    q: 'Are you available for new work?',
    a: "Yes — I'm open to freelance projects, full-time roles and collaborations. Send a message from the contact page and tell me what you're building.",
  },
  {
    q: 'Do you work remotely?',
    a: "I'm based in Lagos, Nigeria and available for remote work with teams anywhere. I share progress frequently so you always know where things stand.",
  },
  {
    q: 'Can you build both the website and the mobile app?',
    a: 'Yes. I build web platforms with React and Next.js, and cross-platform mobile apps for iOS and Android with Flutter and React Native.',
  },
  {
    q: 'How does your cybersecurity background help my project?',
    a: 'Security considerations, data integrity and user trust are built into everything I ship from day one — secure authentication, encryption and robust architecture, not bolt-ons.',
  },
  {
    q: 'How quickly do you reply?',
    a: 'I reply to every serious message within 24 hours.',
  },
];
