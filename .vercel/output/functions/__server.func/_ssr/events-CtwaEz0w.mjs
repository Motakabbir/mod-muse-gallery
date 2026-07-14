import { c as createServerRpc } from "./createServerRpc-CMeGXPRC.mjs";
import { b as createServerFn } from "./server-C2oOh-WO.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const getPageEvents_createServerFn_handler = createServerRpc({
  id: "32ebfdeb12c784e01d43e641321f48eb4b3a23b1017f01ba2e406f7461e63a7e",
  name: "getPageEvents",
  filename: "src/lib/events.ts"
}, (opts) => getPageEvents.__executeServer(opts));
const getPageEvents = createServerFn({
  method: "GET"
}).handler(getPageEvents_createServerFn_handler, async () => {
  return [{
    date: "MAR 2026",
    title: "Build Facility Open Day",
    desc: "Exclusive behind-the-scenes access for confirmed syndicate members. See the chassis in progress, meet the fabrication team, and review panel fitment firsthand.",
    location: "Silverstone Park, UK",
    status: "Members Only",
    longDesc: "An exclusive invitation to go behind the closed doors of our main build facility at Silverstone. You will stand next to the stripped chassis of RS500 #148, inspect the structural enhancements and CAD alignments, and discuss the chassis preparation directly with our lead fabricators. Lunch and refreshments will be provided.",
    schedule: ["09:30 AM - Welcome & Registration", "10:00 AM - Keynote from Build Director", "10:45 AM - Chassis #148 Live Walkthrough", "12:00 PM - Lunch & Networking", "01:30 PM - Live Metalwork Demonstration", "03:00 PM - Closing Q&A"],
    capacity: "Capped at 25 participants",
    requirements: "Active membership required. Closed-toe footwear is mandatory for the workshop floor."
  }, {
    date: "JUN 2026",
    title: "Goodwood Members' Meeting",
    desc: "Syndicate will have a dedicated paddock presence. Syndicate members receive hospitality passes and grid walk access.",
    location: "Goodwood Circuit, UK",
    status: "Public + Members",
    longDesc: "Join us at one of the most prestigious events in the historic motorsport calendar. Syndicate will have a dedicated paddock presence showcasing our build progress, components, and design materials. Members receive full weekend hospitality passes, access to the Syndicate enclosure, and an exclusive grid walk opportunity before the main historic touring car race.",
    schedule: ["Saturday 08:00 AM - Paddock Access & Morning Tea", "Saturday 11:30 AM - Syndicate Enclosure Lunch", "Saturday 03:00 PM - Grid Walk Experience", "Sunday 09:00 AM - Historic Race Commentary", "Sunday 01:00 PM - Members Dining Experience", "Sunday 05:00 PM - Event Wrap-up"],
    capacity: "12 Member passes available",
    requirements: "Goodwood dress code applies (jacket & tie for gentlemen). Grid walk passes must be booked 30 days in advance."
  }, {
    date: "SEP 2026",
    title: "Design Review Weekend",
    desc: "Final design sign-off event. Members vote on remaining specification choices: wheel finish, interior stitch colour, and livery details.",
    location: "Silverstone Park, UK",
    status: "Members Only",
    longDesc: "A critical milestone in the Vision148 project. This weekend, members gather at Silverstone to review the finalized exterior surface scan, touch material samples, and cast votes on final customization choices. Make your mark on the build: vote on wheel finishes, interior leather stitching patterns, and custom livery details.",
    schedule: ["10:00 AM - Morning Briefing & CAD Twin Showcase", "11:00 AM - Material Samples Touch & Feel Session", "12:30 PM - Buffet Lunch", "02:00 PM - Voting and Customization Debate", "04:00 PM - Voting Results Announcement", "06:00 PM - Member Dinner"],
    capacity: "All members invited",
    requirements: "Member portal authentication required for voting."
  }, {
    date: "NOV 2026",
    title: "Track Day — Anglesey Circuit",
    desc: "First shakedown and member track experience. Professional instruction provided. Photography and videography included.",
    location: "Anglesey, Wales",
    status: "Members Only",
    longDesc: "The first official driving event for the Syndicate RS500. This Anglesey track day will serve as the initial high-speed shakedown. Members will have the opportunity to ride alongside our professional test drivers, experience the YB turbo engine at full throttle, and receive track driving instruction on the iconic coastal circuit. Full media coverage (photo/video) is included for all attendees.",
    schedule: ["08:00 AM - Arrival & Safety Briefing", "09:00 AM - Track Opens & Instructor Laps", "10:30 AM - Member Co-Pilot Sessions", "12:30 PM - Lunch & Debrief", "01:30 PM - High-Speed Testing and Telemetry Review", "04:30 PM - Track Closes & Champagne Toast"],
    capacity: "Strictly members only",
    requirements: "Valid driving license required for track instruction. Helmets provided."
  }];
});
const getFaqs_createServerFn_handler = createServerRpc({
  id: "84ac47e88e92c0a102a5f22e093fc9253feb648bc5fb9abad64c673167143404",
  name: "getFaqs",
  filename: "src/lib/events.ts"
}, (opts) => getFaqs.__executeServer(opts));
const getFaqs = createServerFn({
  method: "GET"
}).handler(getFaqs_createServerFn_handler, async () => {
  return [{
    q: "What is a syndicated restomod?",
    a: "Instead of one owner funding an entire build, a small group of enthusiasts co-invest in a single vehicle. Each member gets allocated drive time, event access, and equity in the appreciating asset — all managed by Syndicate."
  }, {
    q: "How much does allocation cost?",
    a: "Syndicate slots start at £48,000 per share for the Syndicate RS500 build. This covers your proportional build cost, insurance, storage, maintenance, and event access for the first 24 months."
  }, {
    q: "How many shares are available?",
    a: "Each build is strictly capped at 12 shares. This ensures meaningful access for every member while preserving the exclusivity that makes these cars special."
  }, {
    q: "Can I sell my share?",
    a: "Yes. Shares can be transferred to approved buyers through Syndicate at any time. We handle the valuation, documentation, and introduction to the buyer pool."
  }, {
    q: "What happens if the build goes over budget?",
    a: "Build costs are fixed at the point of allocation. Any overruns are absorbed by Syndicate and our partner network. Your share price will not change post-commitment."
  }, {
    q: "Do I get to drive the car?",
    a: "Absolutely. Every member receives an annual allocation of drive days, track sessions, and road tours. The schedule is coordinated democratically through the member portal."
  }, {
    q: "Where is the car stored?",
    a: "Vehicles are stored in a climate-controlled secure facility at Silverstone Park, maintained by our in-house team. Members can arrange visits by appointment."
  }, {
    q: "How do I apply?",
    a: "Submit an application through our Apply page. We review every application personally and aim to respond within 7 business days. A brief phone call is part of the process."
  }];
});
export {
  getFaqs_createServerFn_handler,
  getPageEvents_createServerFn_handler
};
