// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/gramed-lab/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gramed-lab/research/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gramed-lab/team/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gramed-lab/publications/";
          },
        },{id: "nav-software",
          title: "Software",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gramed-lab/software/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gramed-lab/teaching/";
          },
        },{id: "nav-outreach",
          title: "Outreach",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gramed-lab/outreach/";
          },
        },{id: "nav-join-us",
          title: "Join Us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gramed-lab/join-us/";
          },
        },{id: "news-dr-zhao-is-going-to-join-the-university-of-nebraska-lincoln-as-an-assistant-professor-in-august-2025-and-is-actively-seeking-enthusiastic-students-to-join",
          title: 'Dr. Zhao is going to join the University of Nebraska, Lincoln as an...',
          description: "",
          section: "News",},{id: "news-welcome-lumanti-shakya-to-join-our-group",
          title: 'Welcome Lumanti Shakya to join our group!',
          description: "",
          section: "News",},{id: "news-we-are-actively-looking-for-1-2-highly-motivated-students-to-join-our-group-as-phd-students-check-here-to-learn-more",
          title: 'we are actively looking for 1-2 highly motivated students to join our group...',
          description: "",
          section: "News",},{id: "teachings-cee-4405-introduction-to-geotechnical-engineering",
          title: 'CEE 4405 Introduction to Geotechnical Engineering',
          description: "Fundamentals of soil properties and geotechnical engineering practice with laboratory sessions.",
          section: "Teachings",handler: () => {
              window.location.href = "/gramed-lab/teachings/cee-4405-intro-geotechnical-engineering.html";
            },},{id: "teachings-cive-481-881-computational-problem-solving-in-civil-engineering",
          title: 'CIVE 481/881 Computational Problem Solving in Civil Engineering',
          description: "Introduction to numerical methods for solving civil engineering problems, including ODEs, PDEs, and machine learning approaches.",
          section: "Teachings",handler: () => {
              window.location.href = "/gramed-lab/teachings/cive-481-881-computational-problem-solving.html";
            },},{id: "teachings-mech-325-mechanics-of-elastic-bodies",
          title: 'MECH 325 Mechanics of Elastic Bodies',
          description: "Mechanics of solid materials within the range of elastic deformation with applications to science and engineering.",
          section: "Teachings",handler: () => {
              window.location.href = "/gramed-lab/teachings/mech-325-mechanics-elastic-bodies.html";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/gramed-lab/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/gramed-lab/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
