// ── BASE PATH ── (domínio próprio ativo — raiz limpa)
const BASE = '';

// ── NAV ITEMS ──
const NAV = [
  { label: 'Ecossistema',   href: BASE + '/',                    key: 'inicio' },
  { label: 'Núcleos',       href: BASE + '/organizacao/',        key: 'organizacao' },
  { label: 'EU⁺ Empresa',   href: BASE + '/plataformas/',        key: 'plataformas' },
  { label: 'Liderança',     href: BASE + '/fundador/',           key: 'fundador' },
];

const CONTACT = {
  nome:     'Bruno Vieira',
  email:    'brunorsvieira@gmail.com',
  emailCorp:'eumaisempresa@gmail.com',
  phone:    '(27) 99813-1806',
  linkedin: 'https://www.linkedin.com/company/eumaisempresa/?viewAsMember=true',
};

// ── BUILD NAV ──
function buildNav(activeKey) {
  const links = NAV.map(item =>
    `<li><a href="${item.href}" class="${item.key === activeKey ? 'active' : ''}">${item.label}</a></li>`
  ).join('');

  document.getElementById('topnav').innerHTML = `
    <div class="container">
      <a href="${BASE}/" class="nav-logo">EU<sup class="plus">+</sup></a>
      <ul class="nav-links" id="nav-links">${links}</ul>
      <div class="nav-cta">
        <a href="${BASE}/faleconosco/">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="1" y="2.5" width="10" height="7" rx="1" stroke="currentColor" stroke-width="1.1"/>
            <path d="M1 3.5l5 3.5 5-3.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
          </svg>
          Fale conosco
        </a>
      </div>
      <button class="nav-burger" id="nav-burger" aria-label="Menu" aria-expanded="false" aria-controls="nav-links">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
        </svg>
      </button>
    </div>`;

  const burger = document.getElementById('nav-burger');
  const navList = document.getElementById('nav-links');

  burger?.addEventListener('click', (e) => {
    e.stopPropagation();
    navList?.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(navList?.classList.contains('open')));
  });

  // Fechar ao clicar em qualquer link do menu
  navList?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navList.classList.remove('open');
      burger?.setAttribute('aria-expanded', 'false');
    });
  });

  // Fechar ao clicar fora do menu
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.topnav')) {
      navList?.classList.remove('open');
      burger?.setAttribute('aria-expanded', 'false');
    }
  });
}

// ── BUILD FOOTER ──
function buildFooter() {
  document.getElementById('site-footer').innerHTML = `
    <div class="container">
      <div class="footer-grid">

        <div class="footer-brand">
          <a href="${BASE}/" class="footer-brand-name">EU<sup class="plus">+</sup></a>
          <p>Ecossistema que organiza conhecimento, processos e tecnologia para ampliar a capacidade de pessoas e organizações.</p>
          <span class="footer-tagline">Clareza, estrutura e evolução responsável.</span>
        </div>

        <div class="footer-nav">
          <div class="footer-nav-title">Ecossistema</div>
          <div class="footer-nav-links">
            <a href="${BASE}/">Início</a>
            <a href="${BASE}/organizacao/">Núcleos</a>
            <a href="${BASE}/fundador/">Liderança</a>
            <a href="${BASE}/plataformas/">EU⁺ Empresa</a>
            <a href="https://ails.eumaisempresa.com.br/">AILs</a>
          </div>
        </div>

        <div class="footer-contact">
          <div class="footer-contact-title">Conexões</div>

          <a href="mailto:${CONTACT.email}" class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1.5" y="3" width="11" height="8" rx="1" stroke="currentColor" stroke-width="1.2"/>
              <path d="M1.5 4l5.5 4 5.5-4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
            <span>${CONTACT.email}</span>
          </a>

          <a href="mailto:${CONTACT.emailCorp}" class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1.5" y="3" width="11" height="8" rx="1" stroke="currentColor" stroke-width="1.2"/>
              <path d="M1.5 4l5.5 4 5.5-4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
            <span>${CONTACT.emailCorp}</span>
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
            <span>Ecossistema EU⁺ · LinkedIn</span>
          </a>

        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copy">© 2026 Ecossistema EU⁺ · www.eumaisempresa.com.br · Todos os direitos reservados</p>
        <p class="footer-purpose">Você é o EU. O + soma com você.</p>
      </div>
    </div>`;
}

// ── DOC TOGGLE ──
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

// ── SCROLL REVEAL ──
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
