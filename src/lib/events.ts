export const getPageEvents = async () => {
  return [
    {
      date: "October 2026",
      title: "Build Facility Open Day",
      desc: "Exclusive behind-the-scenes access for confirmed syndicate members. See the chassis in progress, meet the fabrication team, and review panel fitment firsthand.",
      location: "Silverstone Park, UK",
      status: "Members Only",
      longDesc: "An exclusive invitation to go behind the closed doors of our main build facility at Silverstone. You will stand next to the stripped chassis of RS500 #148, inspect the structural enhancements and CAD alignments, and discuss the chassis preparation directly with our lead fabricators. Lunch and refreshments will be provided.",
      schedule: [
        "09:30 AM - Welcome & Registration",
        "10:00 AM - Keynote from Build Director",
        "10:45 AM - Chassis #148 Live Walkthrough",
        "12:00 PM - Lunch & Networking",
        "01:30 PM - Live Metalwork Demonstration",
        "03:00 PM - Closing Q&A"
      ],
      capacity: "Capped at 25 participants",
      requirements: "Active membership required. Closed-toe footwear is mandatory for the workshop floor."
    },
    {
      date: "July 2027",
      title: "Goodwood Members' Meeting",
      desc: "Syndicate will have a dedicated paddock presence. Syndicate members receive hospitality passes and grid walk access.",
      location: "Goodwood Circuit, UK",
      status: "Public + Members",
      longDesc: "Join us at one of the most prestigious events in the historic motorsport calendar. Syndicate will have a dedicated paddock presence showcasing our build progress, components, and design materials. Members receive full weekend hospitality passes, access to the Syndicate enclosure, and an exclusive grid walk opportunity before the main historic touring car race.",
      schedule: [
        "Saturday 08:00 AM - Paddock Access & Morning Tea",
        "Saturday 11:30 AM - Syndicate Enclosure Lunch",
        "Saturday 03:00 PM - Grid Walk Experience",
        "Sunday 09:00 AM - Historic Race Commentary",
        "Sunday 01:00 PM - Members Dining Experience",
        "Sunday 05:00 PM - Event Wrap-up"
      ],
      capacity: "12 Member passes available",
      requirements: "Goodwood dress code applies (jacket & tie for gentlemen). Grid walk passes must be booked 30 days in advance."
    },
    {
      date: "SEP 2026",
      title: "Design Review Weekend",
      desc: "Final design sign-off event. Members vote on remaining specification choices: wheel finish, interior stitch colour, and livery details.",
      location: "Silverstone Park, UK",
      status: "Members Only",
      longDesc: "A critical milestone in the syndicatedrestomod project. This weekend, members gather at Silverstone to review the finalized exterior surface scan, touch material samples, and cast votes on final customization choices. Make your mark on the build: vote on wheel finishes, interior leather stitching patterns, and custom livery details.",
      schedule: [
        "10:00 AM - Morning Briefing & CAD Twin Showcase",
        "11:00 AM - Material Samples Touch & Feel Session",
        "12:30 PM - Buffet Lunch",
        "02:00 PM - Voting and Customization Debate",
        "04:00 PM - Voting Results Announcement",
        "06:00 PM - Member Dinner"
      ],
      capacity: "All members invited",
      requirements: "Member portal authentication required for voting."
    },
    {
      date: "Nov 2027",
      title: "Track Day Silverstone Anglesey Circuit",
      desc: "First shakedown and member track experience. Professional instruction provided. Photography and videography included.",
      location: "Silverstone, UK",
      status: "Members Only",
      longDesc: "The first official driving event for the Syndicate RS500. This Anglesey track day will serve as the initial high-speed shakedown. Members will have the opportunity to ride alongside our professional test drivers, experience the YB turbo engine at full throttle, and receive track driving instruction on the iconic coastal circuit. Full media coverage (photo/video) is included for all attendees.",
      schedule: [
        "08:00 AM - Arrival & Safety Briefing",
        "09:00 AM - Track Opens & Instructor Laps",
        "10:30 AM - Member Co-Pilot Sessions",
        "12:30 PM - Lunch & Debrief",
        "01:30 PM - High-Speed Testing and Telemetry Review",
        "04:30 PM - Track Closes & Champagne Toast"
      ],
      capacity: "Strictly members only",
      requirements: "Valid driving license required for track instruction. Helmets provided."
    }
  ];
};

export const getFaqs = async () => {
  return [
    {
      q: "What is a syndicated restomod?",
      a: "A dedicated and limited Syndicate is created with the purpose to support the build of a moderised version of a classic icon. The Syndicate members will gain access to a managed usage of the car when complete.  ",
    },
    {
      q: "How much does allocation cost?",
      a: "The Sydnicate has two entry levels",
    },
    {
      q: "How many shares are available?",
      a: "10 - Founder Members & 20 Associate Members",
    },
    {
      q: "Can I sell my share?",
      a: "Yes, you can sell the share should you wish to.",
    },
    {
      q: "What happens if the build goes over budget?",
      a: "The build has been professionally costed and will be forensically managed to ensure no cost overrun, however if unforeseen circumstances additional funds are required the Trust will be informed and an action plan implemented.",
    },
    {
      q: "Do I get to drive the car?",
      a: "Founder Members receive 16 days per yer allocation to drive the car. Associate members will have the opportunity to have accompanied drives at the designated track days.",
    },
    {
      q: "Where is the car stored?",
      a: "The car will be  stored securely and maintained within the management agreement of the Trust.",
    },
    {
      q: "How do I apply?",
      a: "You can apply directly through this website or at TheCarcrowd.co.uk",
    },
  ];
};
