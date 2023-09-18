const companies = [
  {
    _id: 1,
    company: "Google",
    role: "Lead Engineer",
    duration: "July - December 2017",
    description: {
      line_1: `Deliver high-quality, robust production code for a
            diverse array of projects for clients including
            Harvard Business School, Everytown for Gun Safety,
            Pratt Institute, Koala Health, Vanderbilt University,
            The 19th News, and more`,
      line_2: `Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements`,
      line_3 : `Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders`,
      line_4 : `Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship`
    },
  },
  {
    _id: Math.random(Date.now().toString(2) + 1),
    company: "Facebook",
    role: "Backend Engineer",
    duration : "May 2018 - Present",
    description: {
      line_1: `Developed and styled interactive web applications for Apple Music using Ember and SCSS`,
      line_2: `Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations`,
      line_3 : `Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback`,
      line_4 : `Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications`
    },
  },
  {
    _id: Math.random(Date.now().toString(2) + 1),
    company: "iNeuron.ai",
    role: "Frontend Engineer",
    duration : "April 2019 - Present",
    description: {
      line_1: `Deliver high-quality, robust production code for a
            diverse array of projects for clients including
            Harvard Business School, Everytown for Gun Safety,
            Pratt Institute, Koala Health, Vanderbilt University,
            The 19th News, and more`,
      line_2: `Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements`,
      line_3 : `Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders`,
      line_4 : `Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship`
    },
  },
  {
    _id: Math.random(Date.now().toString(2) + 1),
    company: "Apple",
    role: "Fullstack Engineer",
    duration : "June 2022 - Present",
    description: {
      line_1: `Deliver high-quality, robust production code for a
            diverse array of projects for clients including
            Harvard Business School, Everytown for Gun Safety,
            Pratt Institute, Koala Health, Vanderbilt University,
            The 19th News, and more`,
      line_2: `Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements`,
      line_3 : `Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders`,
      line_4 : `Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship`
    },
  },
];

export default companies;
