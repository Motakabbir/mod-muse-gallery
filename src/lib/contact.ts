import { createServerFn } from '@tanstack/react-start';

export const getDirectLines = createServerFn({ method: 'GET' }).handler(async () => {
  return [
    { label: "General Inquiries", email: "hello@synmod.build" },
    { label: "Syndicate Applications", email: "apply@synmod.build" },
    { label: "Press & Media", email: "press@synmod.build" },
    { label: "Partnerships", email: "partners@synmod.build" },
  ];
});

export const getWorkshopAddress = createServerFn({ method: 'GET' }).handler(async () => {
  return [
    "Syndicate Build Facility",
    "Unit 7, Silverstone Park",
    "Northamptonshire, NN12 8TN",
    "United Kingdom"
  ];
});
