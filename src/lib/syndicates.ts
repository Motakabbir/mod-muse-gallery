import placeholderLogo from "../assets/logo/logo-4.jpeg";

export const getLiveSyndicates = async () => {
  // Simulate network delay and DB fetch
  await new Promise(resolve => setTimeout(resolve, 100));

  return [
    {
      title: "syndicatedrestomod Sierra Cosworth RS500",
      img: '/src/assets/RS500_Studio_showcase.png', // In a real DB, this would be a URL
      allocation: [
        "£25,000 Platinum Allocation",
        "£5,000 Silver Allocation"
      ],
      stats: "10 Platinum Allocations • 20 Silver Allocations",
      return: "Potential Return: 77.1%*",
      isPlaceholder: false,
      waitlist: false,
    },
    {
      title: "Next Build being assessed for Syndication",
      img: '/src/assets/SynModBuild-Round-WEB.png',
      allocation: ["TBD"],
      stats: "TBD",
      return: "TBD",
      isPlaceholder: false,
      waitlist: true,
      containImg: true,
    },
    {
      title: "Something special in the longterm pipeline",
      img: '/src/assets/SynModBuild-Round-WEB.png',
      allocation: ["TBD"],
      stats: "TBD",
      return: "TBD",
      isPlaceholder: false,
      waitlist: true,
      containImg: true,
    },
  ];
};

export const getRecentlyFunded = async () => {
  return [
    {
      title: "Lamborghini Gallardo SE",
      img: "/src/assets/build-process.jpg", // Representing a dynamic image path
      date: "Funded Date — Dec 25",
      val: "Funded Value — £82,000",
      members: "Syndicate Members — 14",
    },
    {
      title: "Aston Martin V12 Vantage",
      img: "/src/assets/build-process.jpg",
      date: "Funded Date — Sep 25",
      val: "Funded Value — £66,000",
      members: "Syndicate Members — 21",
    },
    {
      title: "Porsche 996 GT3 RS",
      img: "/src/assets/build-process.jpg",
      date: "Funded Date — May 25",
      val: "Funded Value — £165,000",
      members: "Syndicate Members — 22",
    },
  ];
};

export const getEvents = async () => {
  return [
    {
      type: "Syndicate Member Invitation",
      title: "Coventry Metalcraft",
      tag: "INVITE ONLY",
      description: "An opportunity to meet the UK's leading coach building company and syndicatedrestomod build partner",
      date: "TBA",
    },
    {
      type: "Syndicate Member Invitation",
      title: "Digital Manufacturing Centre - Silverstone",
      tag: "INVITE ONLY",
      description: "Emersion in Additive Manufacturing at this bleeding edge manufacturing facility in the heart of motorsport",
      date: "TBA",
    },
    {
      type: "THE CARCROWD SYNDICATE GATHERING",
      title: "Secret Meet 2026",
      tag: "INVITE ONLY",
      description: "",
      date: "TBA",
    },
  ];
};

export const getPillars = async () => {
  return [
    {
      n: "01",
      title: "One of One Build",
      video: "/src/assets/PILLAR_01_ONE_OF_ONE_BUILD.mp4",
      img: "/src/assets/pillar-one-of-one.jpg",
      body: "There will never be another. Car #148 — the 148th of 500 RS500s ever built — reborn as a unique, documented, investment-grade restomod.",
    },
    {
      n: "02",
      title: "World-Class Build Partners",
      video: "/src/assets/PILLAR_03_WROLD_CLASS.mp4",
      img: "/src/assets/pillar-partners.jpg",
      body: "The very best in innovative manufacturing and artisan craft — from coachbuilding to bleeding-edge additive manufacturing.",
    },
    {
      n: "03",
      title: "Exclusive Access & Experience",
      video: "/src/assets/PILLAR_03_EXCLUSIVE_ACCESS.mp4",
      img: "/src/assets/pillar-experience.jpg",
      body: "Designed so syndicate members experience the finished car and the journey: build visits, drive events, private invitations.",
    },
  ];
};

export const getProcess = async () => {
  return [
    { n: "01", title: "Acquisition & Strip", items: ["Base vehicle selection", "Full teardown", "Digital scanning"] },
    { n: "02", title: "Design & Engineering", items: ["CAD modelling", "Structural optimisation", "Performance upgrades"] },
    { n: "03", title: "Manufacturing", items: ["Fabrication", "Additive manufacturing", "Precision assembly"] },
    { n: "04", title: "Finishing & Validation", items: ["Paint & livery", "Road & track testing", "Final sign-off"] },
  ];
};

export const getPartners = async () => {
  return [
    { name: "T3DMC", role: "3D Scanning & Digital Twin" },
    { name: "ASM Auto Recycling", role: "Chassis Dismantling & Cataloguing" },
    { name: "Coventry Metalcraft", role: "Chassis prep, alignment & Precision Coach building" },
    { name: "Digital Manufacturing Centre - Silverstone", role: "Assembly & Additive Manufacturing" },
    { name: "BAMD Composites", role: "Composite Structures" },
    { name: "MAHLE Group", role: "Engine Rebuild & Performance" },
    { name: "Cornerstone Technologies", role: "Non-structural Skillsets" },
    { name: "HGL / VenueServe", role: "Membership Platform & Fan Portal" },
  ];
};

export const getSyndicateSteps = async () => {
  return [
    { n: 1, title: "Syndicate Formation", body: "A fixed number of participants secure allocation." },
    { n: 2, title: "Build Phase", body: "Full transparency through content and direct access." },
    { n: 3, title: "Experience Phase", body: "Driving events, track days, private access." },
    { n: 4, title: "Exit Opportunity", body: "Potential sale of the asset at premium." },
  ];
};

export const getBenefits = async () => {
  return [
    { icon: "⬡", title: "Build Access", items: ["Workshop visits", "Engineering insight"] },
    { icon: "◎", title: "Driving Access", items: ["Road drives", "Track sessions"] },
    { icon: "✦", title: "Events", items: ["Launch", "Private experiences"] },
    { icon: "◈", title: "Knowledge", items: ["Learn the build", "Understand the engineering"] },
  ];
};
