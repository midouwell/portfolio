(() => {
  const translations = {
    fr: {},
    en: {
      metaDescription: "Ahmed Mechtouf's professional portfolio, programmer analyst and full-stack web developer in Montreal.",
      title: "Ahmed Mechtouf | Full Stack Developer",
      skipToContent: "Skip to content", navigation: "Main navigation", home: "Home", openMenu: "Open menu",
      navAbout: "About", navSkills: "Skills", navExperience: "Experience", navProjects: "Projects", navContact: "Contact",
      languageSwitcher: "Language selection",
      available: "Available for new opportunities",
      role: "Programmer analyst & full-stack web developer",
      summary: "I design robust, maintainable web applications focused on users' needs.",
      discoverProjects: "Discover my projects", downloadCV: "Download my CV",
      portrait: "Portrait of Ahmed Mechtouf",
      aboutKicker: "01 / About", aboutTitle: "A complete approach to development",
      aboutLead: "As a full-stack developer, I have contributed to many web development projects, from design through deployment.",
      about1: "Mastering the programming languages and frameworks required to create modern, high-performance applications, my front-end experience has enabled me to build user-friendly and responsive interfaces with technologies such as Vue.js and Angular. I have extensive knowledge of web standards and best practices in design and development.",
      about2: "My expertise in back-end technologies such as Java with Spring Boot, PHP with Laravel, and ASP.NET Core has enabled me to develop robust, secure APIs and efficiently manage databases including SQL Server and MySQL.",
      profile: "Technical profile", fullStack: "Full Stack", profileSpan: "Modern web applications & APIs", frontend: "Front-end", frontendTech: "HTML · CSS · JavaScript · Angular · Vue.js", backend: "Back-end", backendTech: "Java · PHP · C# · Spring Boot · Laravel · ASP.NET Core", data: "Data", aiCategory: "Artificial Intelligence (AI)",
      skillsKicker: "02 / Skills", skillsTitle: "Technologies & tools", skillsSummary: "A range of front-end, back-end, data and DevOps skills.",
      frontendCategory: "Front-end languages", backendCategory: "Back-end languages", frontendFrameworks: "Front-end frameworks", backendFrameworks: "Back-end frameworks", databases: "Databases", tools: "Tools",
      discoverTechnology: "Explore",
      experienceKicker: "03 / Journey", experienceTitle: "Education & continuous learning",
      courseTitle: "Udemy — completed courses",
      downloadResume: "Download CV", downloadCoverLetter: "Cover letter",
      projectsKicker: "04 / Projects", projectsTitle: "Selected work", projectsSummary: "Projects completed during my training and professional experience.",
      training: "Training", professional: "Professional",
      medicalClinic: "Medical clinic",
      medicalBullets: ["Registration and sign-in as an administrator or patient.", "Online appointment booking and email notification.", "Appointment modification or cancellation.", "Patient and appointment management by the administrator."],
      flightTracking: "Flight tracking", flightBullets: ["Tracking air flights for departures and arrivals.", "Sending notifications to clients for the selected flight.", "Authentication and authorization with ASP.NET Core Identity Security."],
      authTitle: "Authentication and authorization", authBullets: ["Application using Spring Security.", "Application testing with Postman.", "Front end developed with Angular."],
      onlineOrderApi: "Online ordering API", orderApiBullets: ["Online ordering for customers.", "Online payment.", "API administration and database management."],
      onlineOrderFrontend: "Online ordering front end", onlineOrderSummary: "Front-end interface developed for the professional online ordering application.",
      githubProjects: "View my projects on GitHub",
      contactKicker: "05 / Contact", contactTitle: "Let's work together", contactSummary: "Have a project or opportunity you would like to discuss?",
      sendEmail: "Send an email", backToTop: "Back to top",
      degreeObjectProgramming: "Object-Oriented Programming and Web Technologies",
      degreeNetworks: "Internet Telecommunications Networks",
      degreeEquivalent: "Technical program — MICC equivalency",
      collegeRosemont: "Collège de Rosemont, Montreal", cegepSaintLaurent: "Cégep de Saint-Laurent, Montreal",
      immigrationMinistry: "Ministry of Immigration and Cultural Communities"
    }
  };

  const technologyDescriptions = {
    HTML: "HTML (HyperText Markup Language) is the standard markup language used to structure content on web pages. It defines elements such as headings, paragraphs, links, images, and tables so browsers can display a page correctly.",
    JavaScript: "JavaScript is a programming language used to create interactive and dynamic behavior in web pages, as well as in server-side and desktop applications.",
    CSS: "CSS (Cascading Style Sheets) controls the visual presentation of HTML content, including colors, typography, layout, spacing, and responsive behavior.",
    Bootstrap: "Bootstrap is a front-end toolkit that provides reusable CSS components and layouts for building modern, responsive websites and applications quickly.",
    "Vue.js": "Vue.js is a progressive JavaScript framework for building interactive, reusable, and reactive user interface components.",
    Angular: "Angular is a TypeScript-based framework developed by Google for building structured, scalable, and maintainable single-page applications.",
    Java: "Java is a portable, object-oriented programming language used to build web applications, enterprise software, mobile applications, and distributed systems.",
    PHP: "PHP is an open-source server-side scripting language commonly used to build dynamic websites and web applications.",
    "C#": "C# is an object-oriented programming language developed by Microsoft as part of the .NET platform for modern web, cloud, desktop, and mobile applications.",
    Laravel: "Laravel is a PHP framework that provides conventions, tools, and security features for building robust and maintainable web applications.",
    "Spring Boot": "Spring Boot is a Java framework that simplifies application configuration and development, including REST APIs, cloud services, and microservices.",
    "ASP.NET Core": "ASP.NET Core is Microsoft's open-source, cross-platform framework for building modern web applications, APIs, and cloud services with .NET.",
    "SQL Server": "Microsoft SQL Server is a relational database management system used to store, secure, query, and manage application data.",
    MySQL: "MySQL is an open-source relational database management system widely used to power web applications and other data-driven systems.",
    Git: "Git is a distributed version-control system used to track source-code changes, manage branches, and collaborate on software projects.",
    Bitbucket: "Bitbucket is a Git-based source-code hosting platform that supports collaboration, pull requests, permissions, and continuous integration workflows.",
    GitHub: "GitHub is a Git-based development platform for hosting and collaborating on source code, managing repositories, issues, and pull requests.",
    Docker: "Docker is a container platform used to package applications and their dependencies into portable environments for consistent development and deployment.",
    "Jira Scrum": "Jira Scrum is an agile project-management approach that uses Jira to plan sprints, manage backlogs, track work, and report team progress.",
    "CI / CD": "Continuous Integration and Continuous Delivery automate code integration, testing, packaging, and deployment to deliver software reliably and frequently.",
    GitLab: "GitLab is a DevOps platform that provides source-code management, issue tracking, continuous integration, delivery, and deployment tools."
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  function applyTranslations(language) {
    document.documentElement.lang = language;
    document.title = language === 'fr' ? "Ahmed Mechtouf | Développeur Full Stack" : translations.en.title;
    const meta = $('meta[name="description"]');
    if (meta) meta.setAttribute('content', language === 'fr' ? "Portfolio professionnel d'Ahmed Mechtouf, analyste programmeur et développeur web full stack à Montréal." : translations.en.metaDescription);

    $$('[data-i18n]').forEach(element => {
      if (!originalFrench.has(element)) originalFrench.set(element, element.innerHTML);
      const key = element.dataset.i18n;
      if (language === 'fr') element.innerHTML = originalFrench.get(element);
      else if (translations.en[key] !== undefined) element.textContent = translations.en[key];
    });
    $$('[data-i18n-aria]').forEach(element => {
      const key = element.dataset.i18nAria;
      element.setAttribute('aria-label', language === 'fr' ? (element.dataset.fr || element.getAttribute('aria-label')) : translations.en[key]);
    });
    $$('[data-i18n-alt]').forEach(element => {
      const key = element.dataset.i18nAlt;
      element.setAttribute('alt', translations.en[key]);
    });

    if (language === 'en') translatePageToEnglish();
    else restoreFrenchContent();

    $$('[data-language]').forEach(button => {
      const active = button.dataset.language === language;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  const originalFrench = new Map();
  function saveFrench(element) {
    if (!originalFrench.has(element) && !element.dataset.i18n) originalFrench.set(element, element.innerHTML);
  }

  function restoreFrenchContent() {
    originalFrench.forEach((html, element) => { element.innerHTML = html; });
  }

  function translatePageToEnglish() {
    const t = translations.en;
    const mappings = [
      ['.skip-link', 'skipToContent'], ['.eyebrow', 'available'], ['.hero-role', 'role'], ['.hero-summary', 'summary'],
      ['.button-primary[href="#projects"]', 'discoverProjects'], ['.hero-summary', 'summary'], ['.portrait-ring img', 'portrait', null, 'alt'],
      ['.about .kicker', 'aboutKicker'], ['.about h2', 'aboutTitle'], ['.about-story .lead', 'aboutLead'], ['.about-story p:nth-child(2)', 'about1'], ['.about-story p:nth-child(3)', 'about2'],
      ['.stat-panel>p', 'profile'], ['.stat-panel>strong', 'fullStack'], ['.stat-panel>span', 'profileSpan'], ['.stat-list div:nth-child(1) b', 'frontend'], ['.stat-list div:nth-child(1) span', 'frontendTech'], ['.stat-list div:nth-child(2) b', 'backend'], ['.stat-list div:nth-child(2) span', 'backendTech'], ['.stat-list div:nth-child(3) b', 'data'],
      ['.skills-section .kicker', 'skillsKicker'], ['.skills-section h2', 'skillsTitle'], ['.skills-section .section-heading>p:last-child', 'skillsSummary'],
      ['.experience .section-heading .kicker', 'experienceKicker'], ['.experience .section-heading h2', 'experienceTitle'], ['.courses>.kicker', 'courseTitle'],
      ['.projects .section-heading .kicker', 'projectsKicker'], ['.projects .section-heading h2', 'projectsTitle'], ['.projects .section-heading>p:last-child', 'projectsSummary'],
      ['.contact .kicker', 'contactKicker'], ['.contact h2', 'contactTitle'], ['.contact-panel>p:not(.kicker)', 'contactSummary'],
      ['.site-footer .brand', 'backToTop', null, 'aria'], ['.hero .button-secondary', 'downloadCV']
    ];
    mappings.forAll = undefined;
    mappings.forEach(([selector, key, _unused, mode]) => {
      const element = $(selector);
      if (!element || t[key] === undefined) return;
      if (mode === 'alt') element.setAttribute('alt', t[key]);
      else if (mode === 'aria') element.setAttribute('aria-label', t[key]);
      else {
        saveFrench(element);
        element.childNodes.forEach(node => { if (node.nodeType === Node.TEXT_NODE) node.textContent = ''; });
        element.textContent = t[key];
      }
    });

    const secondaryButtons = $$('.document-actions .button-secondary');
    if (secondaryButtons[0]) setMappedText(secondaryButtons[0], t.downloadResume);
    if (secondaryButtons[1]) setMappedText(secondaryButtons[1], t.downloadCoverLetter);
    const emailButton = $('.contact-actions .button-primary');
    const phoneButton = $('.contact-actions .button-secondary');
    if (emailButton) setMappedText(emailButton, t.sendEmail);

    $$('.skill-card').forEach(card => {
      const name = $('.skill-card h3', card)?.textContent.trim();
      const category = $('.skill-card>p', card);
      const summary = $('summary', card);
      const description = $('details>p', card);
      if (!name) return;
      saveFrench(category); saveFrench(summary); saveFrench(description);
      if (category) {
        const french = category.textContent.trim();
        category.textContent = french.includes('frontend') ? (french.includes('Frameworks') ? t.frontendFrameworks : t.frontendCategory)
          : french.includes('backend') ? (french.includes('Frameworks') ? t.backendFrameworks : t.backendCategory)
          : french.includes('Bases') ? t.databases : t.tools;
      }
      if (summary) summary.textContent = `${t.discoverTechnology} ${name}`;
      if (description && technologyDescriptions[name]) description.textContent = technologyDescriptions[name];
    });

    const timeline = $$('.timeline-card');
    if (timeline[0]) setMappedText($('h3', timeline[0]), t.degreeObjectProgramming);
    if (timeline[1]) setMappedText($('h3', timeline[1]), t.degreeNetworks);
    if (timeline[2]) setMappedText($('h3', timeline[2]), t.degreeEquivalent);
    if (timeline[0]) setMappedText($('div>p:last-child', timeline[0]), t.collegeRosemont);
    if (timeline[1]) setMappedText($('div>p:last-child', timeline[1]), t.cegepSaintLaurent);
    if (timeline[2]) setMappedText($('div>p:last-child', timeline[2]), t.immigrationMinistry);

    const projectCards = $$('.project-card');
    const projectTitles = [t.medicalClinic, t.flightTracking, t.authTitle, t.onlineOrderApi, t.onlineOrderFrontend];
    projectCards.forEach((card, index) => {
      setMappedText($('h3', card), projectTitles[index]);
      if ($('.project-meta span:first-child', card)?.textContent === 'Formation') setMappedText($('.project-meta span:first-child', card), t.training);
      if ($('.project-meta span:first-child', card)?.textContent === 'Professionnel') setMappedText($('.project-meta span:first-child', card), t.professional);
    });
    [t.medicalBullets, t.flightBullets, t.authBullets, t.orderApiBullets].forEach((items, cardIndex) => {
      $$('li', projectCards[cardIndex]).forEach((li, itemIndex) => setMappedText(li, items[itemIndex]));
    });
    setMappedText($('p.project-wide, .project-wide>p', projectCards[4]), t.onlineOrderSummary);
    setMappedText($('.project-wide .text-link', projectCards[4]), t.githubProjects);
  }

  function setMappedText(element, text) {
    if (!element) return;
    saveFrench(element);
    const icon = element.querySelector(':scope > i');
    if (icon) {
      element.textContent = text;
      element.prepend(document.createTextNode(' '));
      element.prepend(icon);
    } else {
      element.textContent = text;
    }
  }

  function frenchButtonLabel(element, icon) {
    return element;
  }

  const savedLanguage = localStorage.getItem('portfolioLanguage');
  const initialLanguage = savedLanguage === 'en' ? 'en' : 'fr';

  document.addEventListener('DOMContentLoaded', () => applyTranslations(initialLanguage));
  $$('[data-language]').forEach(button => button.addEventListener('click', () => {
    const language = button.dataset.language;
    localStorage.setItem('portfolioLanguage', language);
    applyTranslations(language);
  }));

  if (document.readyState !== 'loading') applyTranslations(initialLanguage);
})();
