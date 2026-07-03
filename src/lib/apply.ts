import { createServerFn } from '@tanstack/react-start';

export const getApplySteps = createServerFn({ method: 'GET' }).handler(async () => {
  return [
    { n: "01", t: "Register Interest", b: "Submit the form below. We respond within 48 hours." },
    { n: "02", t: "Discovery Call", b: "A 30-min call to walk through the syndicate model and answer questions." },
    { n: "03", t: "Allocation Offer", b: "Receive a formal allocation document outlining cost, structure, and timeline." },
    { n: "04", t: "Secure Position", b: "Sign and fund. You're in. Welcome to Syndicate." },
  ];
});
