import { createServerFn } from '@tanstack/react-start';

export const getPhases = createServerFn({ method: 'GET' }).handler(async () => {
  return [
    {
      n: "01",
      t: "Acquisition & Strip - Complete",

      video: "/src/assets/AQUISITION_001.mp4",
      body: "Car #148 — the 148th of 500 RS500s ever built — sourced, authenticated, and fully stripped to bare metal. Every component is catalogued and inspected.",
      bullets: ["Base vehicle selection", "Full teardown", "Component cataloguing", "Chassis inspection"],
      partner: "ASM Auto Recycling",
    },
    {
      n: "02",
      t: "Design & Engineering",
      video: "/src/assets/DESIGN_ENGINEERING_001.mp4",
      body: "Body shell is 3D scanned to sub-millimetre accuracy, producing a complete digital twin. Engineers iterate CAD designs for structural optimisation and modern performance.",
      bullets: ["3D scanning & digital twin", "CAD modelling", "Structural optimisation", "Aero & thermal sims"],
      partner: "T3DMC • BAMD Composites",
    },
    {
      n: "03",
      t: "Coach Building",
      video: "/src/assets/Manufacturing_001.mp4",
      body: "At the heart of the Vision148 build is to create a coach built Aluminium body  to showcase the artisan skills of our build partners.",
      bullets: ["Hand formed bodywork", "Lightweight aluminium", "Coach built techniques", "Hand built by craftsmen"],
      partner: "Coventry Metalcraft • Silverstone",
    },
    {
      n: "04",
      t: "Additive Manufacturing",
      video: "/src/assets/FINSHING_AND_VALIDATION_001.mp4",
      body: "The Vision148 build is designed to showcase the bleeding edge technology at our disposal through our manufacturing partners to deliver rapid prototyping to the build efficiency as well as the use of polymer and specialist metals.",
      bullets: ["Polymer plastics printing ", "Titanium alloy printing", "Interior & Exterior parts and components", "Rapid development"],
      partner: "DMC",
    },
  ];
});

export const getSpecs = createServerFn({ method: 'GET' }).handler(async () => {
  return [
    { l: "Base", v: "1987 Ford Sierra Cosworth RS500 #148" },
    { l: "Engine", v: "Reworked YB 2.0L turbocharged inline-4" },
    { l: "Target Power", v: "550+ bhp" },
    { l: "Bodywork", v: "Coachbuilt Aluminium + Composite" },
    { l: "Chassis", v: "Reinforced shell, modern suspension geometry" },
    { l: "Production", v: "1 of 1" },
  ];
});
