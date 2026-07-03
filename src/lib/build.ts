import { createServerFn } from '@tanstack/react-start';

export const getPhases = createServerFn({ method: 'GET' }).handler(async () => {
  return [
    {
      n: "01",
      t: "Acquisition & Strip",

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
      t: "Manufacturing",
      video: "/src/assets/Manufacturing_001.mp4",
      body: "Additive manufacturing meets traditional coachbuilding. Carbon-composite panels and billet components are produced alongside hand-formed steelwork.",
      bullets: ["Fabrication", "Additive manufacturing", "Composite layup", "Precision assembly"],
      partner: "Coventry Metalcraft • DMC Silverstone",
    },
    {
      n: "04",
      t: "Finishing & Validation",
      video: "/src/assets/FINSHING_AND_VALIDATION_001.mp4",
      body: "Engine rebuild, paint, and final assembly come together. The car is validated on road and track before final sign-off and the first syndicate drive day.",
      bullets: ["Engine rebuild", "Paint & livery", "Road & track testing", "Final sign-off"],
      partner: "MAHLE Group • DMC",
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
