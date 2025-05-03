// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-our-paper-titled-infomasker-preventing-eavesdropping-using-phoneme-based-noise-got-accepted-in-ndss-23",
          title: 'Our paper titled “InfoMasker: Preventing Eavesdropping using Phoneme-Based Noise” got accepted in NDSS...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-alif-low-cost-adversarial-audio-attacks-on-black-box-speech-platforms-using-linguistic-features-got-accepted-in-ieee-s-amp-amp-p-24",
          title: 'Our paper titled “ALIF: Low-Cost Adversarial Audio Attacks on Black-Box Speech Platforms Using...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-text-crs-a-generalized-certified-robustness-framework-against-textual-adversarial-attacks-got-accepted-in-ieee-s-amp-amp-p-24",
          title: 'Our paper titled “Text-CRS: A Generalized Certified Robustness Framework against Textual Adversarial Attacks”...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-phoneme-based-proactive-anti-eavesdropping-with-controlled-recording-privilege-got-accepted-in-ieee-tdsc",
          title: 'Our paper titled “Phoneme-Based Proactive Anti-Eavesdropping with Controlled Recording Privilege” got accepted in...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-secheadset-a-practical-privacy-protection-system-for-real-time-voice-communication-got-accepted-in-mobisys-25-acceptance-rate-18-0-42-233",
          title: 'Our paper titled “SecHeadset: A Practical Privacy Protection System for Real-time Voice Communication”...',
          description: "",
          section: "News",},{
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
          window.open("/feed.xml", "_blank");
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
