const BASE = '/Eumais';

const NAV = [
  { label: 'Início',           href: BASE + '/index.html',             key: 'inicio' },
  { label: 'Plataformas EU+',  href: BASE + '/frentes/index.html',     key: 'frentes' },
  { label: 'Institucional',    href: BASE + '/documentos/index.html',  key: 'institucional' },
  { label: 'Organização',      href: BASE + '/organizacao/index.html', key: 'organizacao' },
  { label: 'Governança',       href: BASE + '/governanca/index.html',  key: 'governanca' },
  { label: 'Frameworks',       href: BASE + '/frameworks/index.html',  key: 'frameworks' },
  { label: 'Laboratório',      href: BASE + '/laboratorio/index.html', key: 'laboratorio' },
  { label: 'Roadmap',          href: BASE + '/roadmap/index.html',     key: 'roadmap' },
];

const CONTACT = {
  nome:     'Bruno Vieira',
  email:    'eumaisempresa@gmail.com',
  phone:    '(27) 99813-1806',
  linkedin: 'https://www.linkedin.com/in/brunorsantosvieira',
  drive:    'https://drive.google.com',
};

function buildNav(activeKey) {
  const links = NAV.map(item =>
    `<li><a href="${item.href}" class="${item.key === activeKey ? 'active' : ''}">${item.label}</a></li>`
  ).join('');

  document.getElementById('topnav').innerHTML = `
    <div class="container">
      <a href="${BASE}/index.html" class="nav-logo">EU<sup class="plus">+</sup></a>
      <ul class="nav-links" id="nav-links">${links}</ul>
      <div class="nav-cta">
        <a href="mailto:${CONTACT.email}">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="1" y="2.5" width="10" height="7" rx="1" stroke="currentColor" stroke-width="1.1"/>
            <path d="M1 3.5l5 3.5 5-3.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
          </svg>
          Contato
        </a>
      </div>
      <button class="nav-burger" id="nav-burger" aria-label="Menu">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
        </svg>
      </button>
    </div>`;

  document.getElementById('nav-burger')?.addEventListener('click', () => {
    document.getElementById('nav-links')?.classList.toggle('open');
  });
}

function buildFooter() {
  const navLinks = NAV.map(item =>
    `<a href="${item.href}">${item.label}</a>`
  ).join('');

  document.getElementById('site-footer').innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="${BASE}/index.html" class="footer-brand-name">EU<sup class="plus">+</sup></a>
          <p>Ecossistema de inteligência aplicada. Removendo barreiras da complexidade técnica e da sobrecarga operacional através de uma arquitetura de inteligência acessível e resiliente.</p>
          <span class="footer-tagline">Agentes livres. Conhecimento preservado.</span>
        </div>
        <div class="footer-nav">
          <div class="footer-nav-title">Portal</div>
          <div class="footer-nav-links">${navLinks}</div>
        </div>
        <div class="footer-contact">
          <div class="footer-contact-title">Presidência</div>
          <a href="mailto:${CONTACT.email}" class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1.5" y="3" width="11" height="8" rx="1" stroke="currentColor" stroke-width="1.2"/>
              <path d="M1.5 4l5.5 4 5.5-4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
            <span>${CONTACT.email}</span>
          </a>
          <a href="tel:+5527998131806" class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 2.5h3l1 2.5-1.5 1.5a7 7 0 002.5 2.5L9 7.5l2.5 1v3a1 1 0 01-1 1A10 10 0 011.5 3.5a1 1 0 011-1z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>${CONTACT.phone}</span>
          </a>
          <a href="${CONTACT.linkedin}" target="_blank" rel="noopener" class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1.5" y="1.5" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.2"/>
              <path d="M4 6v4M4 4.5v.01M6.5 10V8a1.5 1.5 0 013 0v2M6.5 7v3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
            <span>${CONTACT.nome} · LinkedIn</span>
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© 2026 Grupo EU⁺ · Documentos sob versionamento controlado · Acesso público</p>
        <p class="footer-purpose">Autonomia integral. Patrimônio permanente.</p>
      </div>
    </div>`;
}

function toggleDoc(btn) {
  const content = btn.nextElementSibling;
  const isOpen  = btn.classList.contains('open');
  document.querySelectorAll('.doc-trigger.open').forEach(b => {
    b.classList.remove('open');
    b.setAttribute('aria-expanded', 'false');
    if (b.nextElementSibling) b.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    content.classList.add('open');
    setTimeout(() => btn.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  }
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => obs.observe(el));
  setTimeout(() => {
    document.querySelectorAll('.page-hero .reveal, .home-hero .reveal').forEach(el => el.classList.add('visible'));
  }, 60);
}

window.addEventListener('DOMContentLoaded', initReveal);
