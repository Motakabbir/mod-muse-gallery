import { createServerFn } from '@tanstack/react-start';

export const getPrinciples = createServerFn({ method: 'GET' }).handler(async () => {
  return [
    {
      num: "01",
      title: "Analog Soul",
      text: "We preserve mechanical connection. Hydraulic steering. Manual gearboxes. Driver-first ergonomics. Technology serves the experience, never replaces it.",
    },
    {
      num: "02",
      title: "Engineering Integrity",
      text: "Every component is traceable, tested, and validated. We partner with OEM-grade suppliers and motorsport specialists who share our obsession.",
    },
    {
      num: "03",
      title: "Open Collaboration",
      text: "The syndicate model means owners are participants, not spectators. From design votes to build-week visits, transparency is our default.",
    },
  ];
});

export const getArchitects = createServerFn({ method: 'GET' }).handler(async () => {
  return [
    { name: "IAN HOWE ", role: "Founder & Build Director", bio: "30 years experience in automotive & Fintech business", img: "/src/assets/Ian-Howe.png" },
    { name: "Simon Kiero Watson", role: "Commercial & Finance Oversight", bio: "Highly experienced Corporate Finance and Exchange Expert.", img: "/src/assets/Simon-KW.png" },
    { name: "Al Yasid Oozeear", role: "Digital Visualisor & Designer", bio: "Independent Automotive designer specialising in bespoke car design", img: "/src/assets/Al-Yasid.png" },
    { name: "Stuart Peach", role: "Project Co Founder", bio: "Partner in the vision148 project and original custodian of #148", img: "/src/assets/Stuart-Peach.png" },
  ];
});
