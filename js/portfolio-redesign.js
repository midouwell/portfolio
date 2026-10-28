const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
    });
  });
}, { rootMargin: '-35% 0px -55%', threshold: 0 });

document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));

(() => {
  const modal = document.getElementById('technology-modal');
  if (!modal) return;
  const panel = modal.querySelector('.technology-modal__panel');
  const closeButton = modal.querySelector('[data-modal-close]');
  const logo = modal.querySelector('.technology-modal__logo');
  const title = modal.querySelector('#technology-modal-title');
  const description = modal.querySelector('.technology-modal__description');
  const frenchDescriptions = new Map();
  let trigger = null;

  document.querySelectorAll('.skill-card').forEach(card => {
    const nameElement = card.querySelector('h3');
    const image = card.querySelector(':scope > img');
    const details = card.querySelector('details');
    if (!nameElement || !image) return;
    const name = nameElement.textContent.trim();
    const frenchDescription = details?.querySelector('p')?.textContent.trim();
    if (frenchDescription) frenchDescriptions.set(name, frenchDescription);

    const iconButton = document.createElement('button');
    iconButton.type = 'button';
    iconButton.className = 'technology-icon-button';
    iconButton.dataset.technology = name;
    iconButton.setAttribute('aria-haspopup', 'dialog');
    iconButton.setAttribute('aria-label', `${name} — ${document.documentElement.lang === 'en' ? 'View description' : 'Voir la description'}`);
    card.appendChild(iconButton);
    details?.remove();
  });

  function updateModal() {
    if (!modal.classList.contains('is-open') || !trigger) return;
    const name = trigger.dataset.technology;
    const language = window.PortfolioI18n?.getLanguage() || document.documentElement.lang;
    const englishDescription = window.PortfolioI18n?.getTechnologyDescription(name);
    title.textContent = name;
    description.textContent = language === 'en' && englishDescription ? englishDescription : frenchDescriptions.get(name) || '';
    closeButton.setAttribute('aria-label', language === 'en' ? `Close ${name} description` : `Fermer la description de ${name}`);
    trigger.setAttribute('aria-label', language === 'en' ? `${name} — View description` : `${name} — Voir la description`);
    document.querySelectorAll('.technology-icon-button').forEach(button => {
      const buttonName = button.dataset.technology;
      button.setAttribute('aria-label', language === 'en' ? `${buttonName} — View description` : `${buttonName} — Voir la description`);
    });
  }

  function openModal(button) {
    trigger = button;
    const card = button.closest('.skill-card');
    const image = card?.querySelector(':scope > img');
    if (image) {
      logo.src = image.src;
      logo.alt = image.alt;
    }
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    updateModal();
    closeButton.focus();
  }

  function closeModal() {
    if (!modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    const previousTrigger = trigger;
    trigger = null;
    previousTrigger?.focus();
  }

  document.querySelectorAll('.technology-icon-button').forEach(button => button.addEventListener('click', () => openModal(button)));
  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });

  document.addEventListener('keydown', event => {
    if (!modal.classList.contains('is-open')) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = [...panel.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')].filter(element => !element.hidden);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  document.addEventListener('portfolio-language-change', updateModal);
})();
