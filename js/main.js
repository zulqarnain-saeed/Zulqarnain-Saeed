/**
 * ZULQARNAIN SAEED PORTFOLIO - JAVASCRIPT INTERACTIONS
 * Handles mobile navigation, dynamic filtering, modal quick-view,
 * stats count-up, contact validation & toast notifications.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initStatsCounter();
  initProjectFilters();
  initExpandableSections();
  initProjectModal();
  initContactForm();
  initSmoothScroll();
});

/* ==========================================================================
   1. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   2. ANIMATED STATISTICS COUNTER
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(statEl => {
          const target = parseFloat(statEl.getAttribute('data-target') || '0');
          const decimals = Number(statEl.dataset.decimals ?? (statEl.dataset.decimal === 'true' ? '1' : '0'));
          if (statEl.dataset.staticNumber === 'true') return;
          animateValue(statEl, 0, target, 1600, decimals);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

function animateValue(element, start, end, duration, decimals) {
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease-out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = start + (end - start) * easeProgress;

    if (decimals > 0) {
      element.childNodes[0].nodeValue = current.toFixed(decimals);
    } else {
      if (end >= 1000) {
        const kValue = (current / 1000).toFixed(1);
        element.childNodes[0].nodeValue = kValue + 'K';
      } else {
        element.childNodes[0].nodeValue = Math.floor(current);
      }
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      if (end >= 1000) {
        element.childNodes[0].nodeValue = (end / 1000).toFixed(1) + 'K';
      } else {
        element.childNodes[0].nodeValue = decimals > 0 ? end.toFixed(decimals) : end;
      }
    }
  }

  requestAnimationFrame(update);
}

/* ==========================================================================
   3. PROJECT CATEGORY FILTERS
   ========================================================================== */
function initProjectFilters() {
  // Only filter Explore cards; the three featured projects always remain visible.
  const section = document.getElementById('explore');
  if (!section) return;
  const tabs = Array.from(section.querySelectorAll('.filter-tab'));
  const cards = Array.from(section.querySelectorAll('.project-card'));
  if (!tabs.length) return;

  function applyFilter(filter) {
    tabs.forEach(tab => {
      const active = tab.dataset.filter === filter;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => {
      const skills = (card.dataset.skills || card.dataset.category || '').split(/\s+/);
      const visible = filter === 'all' || skills.includes(filter);
      card.style.display = visible ? '' : 'none';
      card.style.opacity = '';
      card.style.transform = '';
    });
  }
  tabs.forEach(tab => tab.addEventListener('click', () => applyFilter(tab.dataset.filter)));
  applyFilter('all');
}

/* ==========================================================================
   3B. FEATURED-ONLY VIEW: REVEAL PROJECTS & CERTIFICATES ON DEMAND
   ========================================================================== */
function initExpandableSections() {
  const projectToggle = document.getElementById('toggleProjects');
  const additionalProjects = document.getElementById('explore');
  const certificateToggle = document.getElementById('toggleCertificates');
  const additionalCertificates = Array.from(document.querySelectorAll('[data-extra-certificate="true"]'));

  function setProjectsExpanded(expanded, scrollToResults = false) {
    if (!additionalProjects || !projectToggle) return;
    additionalProjects.hidden = !expanded;
    additionalProjects.style.display = expanded ? '' : 'none';
    projectToggle.setAttribute('aria-expanded', String(expanded));
    // Retain the original icon and the existing .btn styling.
    const textNode = Array.from(projectToggle.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
    if (textNode) textNode.textContent = expanded ? 'Show Fewer Projects ' : 'Explore All Projects ';
    if (scrollToResults) {
      const target = expanded ? additionalProjects : document.getElementById('projects');
      if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }

  projectToggle?.addEventListener('click', () => {
    setProjectsExpanded(additionalProjects.hidden, true);
  });

  // Open additional projects when a direct #explore link is clicked (footer/mobile).
  document.querySelectorAll('a[href="#explore"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      setProjectsExpanded(true, true);
    });
  });

  if (window.location.hash === '#explore') setProjectsExpanded(true);

  function setCertificatesExpanded(expanded) {
    if (!certificateToggle) return;
    additionalCertificates.forEach(card => {
      card.hidden = !expanded;
      card.style.display = expanded ? '' : 'none';
    });
    certificateToggle.setAttribute('aria-expanded', String(expanded));
    certificateToggle.textContent = expanded ? 'Show Fewer Certificates ↑' : 'See More Certificates ↓';
  }

  certificateToggle?.addEventListener('click', () => {
    const expanded = certificateToggle.getAttribute('aria-expanded') !== 'true';
    setCertificatesExpanded(expanded);
    if (!expanded) requestAnimationFrame(() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  });

  setProjectsExpanded(window.location.hash === '#explore');
  setCertificatesExpanded(false);
}

/* ==========================================================================
   4. INTERACTIVE PROJECT QUICK-VIEW MODAL
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  const close = modal.querySelector('.modal-close-btn');
  const live = modal.querySelector('.modal-live-btn');
  const repo = modal.querySelector('.modal-github-btn');
  let previousFocus = null;

  function openProject(card) {
    const title = card.querySelector('.project-title')?.textContent.trim() || 'Project';
    const category = card.querySelector('.project-category-badge')?.textContent.trim() || 'Project';
    const description = card.querySelector('.project-desc')?.textContent.trim() || '';
    const img = card.querySelector('.project-thumb img');
    const tags = Array.from(card.querySelectorAll('.project-tech-tag')).map(x => x.textContent.trim());
    const primary = card.querySelector('.project-view-btn');
    const source = card.querySelector('.project-links a');

    modal.querySelector('.modal-title').textContent = title;
    modal.querySelector('.modal-category').textContent = category;
    modal.querySelector('.modal-desc').textContent = description;
    const preview = modal.querySelector('.modal-img');
    if (img && preview) { preview.src = img.getAttribute('src'); preview.alt = img.alt; }
    const tagBox = modal.querySelector('.modal-tags');
    tagBox.replaceChildren();
    tags.forEach(name => {
      const element = document.createElement('span');
      element.className = 'project-tech-tag';
      element.textContent = name;
      tagBox.append(element);
    });

    const destination = primary?.getAttribute('href');
    if (live) {
      live.hidden = !destination || destination === '#';
      if (destination && destination !== '#') {
        live.href = destination;
        const text = destination.startsWith('mailto:') ? 'Request Demo' :
          destination.includes('github.com') ? 'View Project' : 'Visit Project';
        live.firstChild.textContent = text + ' ';
      }
    }
    // Do not suggest that the GitHub profile homepage is a project repository.
    const sourceUrl = source?.getAttribute('href');
    const exactRepo = sourceUrl && /github\.com\/zulqarnain-saeed\/[^/?#]+/.test(sourceUrl);
    if (repo) {
      repo.hidden = !exactRepo || sourceUrl === destination;
      if (exactRepo) repo.href = sourceUrl;
    }

    previousFocus = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    close?.focus();
  }

  function closeProject() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    previousFocus?.focus();
  }

  document.querySelectorAll('.project-card .project-thumb img').forEach(img => {
    const card = img.closest('.project-card');
    img.addEventListener('click', () => openProject(card));
    img.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProject(card);
      }
    });
  });
  close?.addEventListener('click', closeProject);
  modal.addEventListener('click', event => { if (event.target === modal) closeProject(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeProject();
  });
}

/* ==========================================================================
   5. CONTACT FORM & TOAST NOTIFICATION
   ========================================================================== */
function initContactForm() {
  // A static portfolio has no mail server. Open the visitor's email client instead.
  const form = document.getElementById('portfolioContactForm');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const message = String(data.get('message') || '').trim();
    const sender = String(data.get('email') || '').trim();
    if (!message) return;
    const body = [`From: ${name}`, `Reply email: ${sender}`, '', message].join('\n');
    const subject = encodeURIComponent('Portfolio inquiry from ' + (name || 'visitor'));
    window.location.href = `mailto:zulqarnainsaeed2005@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
  });
}

function showToast(msg) {
  let toast = document.getElementById('contactToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'contactToast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e5f926" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${msg}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/* ==========================================================================
   6. SMOOTH SCROLLING
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
