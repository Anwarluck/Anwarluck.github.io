// Imperative animations ported from the original single-file site.
// Runs once after App mounts; App never re-renders, so direct DOM work here is safe.
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { TESTIMONIALS } from './data.js';

gsap.registerPlugin(ScrollTrigger);

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

let started = false;

export function initEffects() {
  if (started) return;
  started = true;

  const lenis = initLenis();
  initThree();
  heroIntro();
  scrollReveals();
  testimonials();
  projectFilter();
  projectTilt();
  projectHeadingChars();
  cardTilt('.exp-card');
  cardTilt('.cert-card');
  cardTilt('.stat-card');
  parallax('.proj-card', [-24, -40]);
  parallax('.exp-card', [-16, -28, -12]);
  parallax('.cert-card', [-10, -18, -12, -20, -8]);
  scrollProgress(lenis);
  scrollSpy();
  contentProtection();
  counters();
}

function initLenis() {
  let lenis;
  try {
    // driven by gsap.ticker only; a second rAF loop double-steps Lenis each frame
    lenis = new Lenis({ lerp: 0.12 });
  } catch (e) { return null; /* native scroll */ }
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

function initThree() {
  const canvas = $('#hero-canvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(1); // faint background: full retina resolution isn't visible, but costs 2.25x the pixels
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 2000);
  camera.position.z = 400;

  const COUNT = 180;
  const pos = new Float32Array(COUNT * 3);
  const col = new Float32Array(COUNT * 3);
  const palette = [new THREE.Color(0x0077aa), new THREE.Color(0x7722dd), new THREE.Color(0x009955)];
  for (let i = 0; i < COUNT; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 900;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 700;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 500;
    const c = palette[Math.floor(Math.random() * palette.length)];
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const points = new THREE.Points(geo, new THREE.PointsMaterial({
    size: 2.5, vertexColors: true, transparent: true, opacity: 0.55, sizeAttenuation: true,
  }));
  scene.add(points);

  const tk = new THREE.Mesh(
    new THREE.TorusKnotGeometry(90, 22, 120, 16),
    new THREE.MeshBasicMaterial({ color: 0x0077aa, wireframe: true, transparent: true, opacity: 0.12 }),
  );
  tk.position.set(220, -40, -80);
  scene.add(tk);

  const ic = new THREE.Mesh(
    new THREE.IcosahedronGeometry(70, 1),
    new THREE.MeshBasicMaterial({ color: 0x7722dd, wireframe: true, transparent: true, opacity: 0.14 }),
  );
  ic.position.set(-220, 60, -60);
  scene.add(ic);

  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  let mx = 0, my = 0;
  window.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Rendering this full-screen scene every frame is what made scrolling stutter, so it pauses
  // while the page scrolls and resumes once scrolling stops.
  let lastScroll = 0;
  window.addEventListener('scroll', () => { lastScroll = performance.now(); }, { passive: true });
  window.addEventListener('wheel', () => { lastScroll = performance.now(); }, { passive: true });
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  (function loop(now) {
    requestAnimationFrame(loop);
    if (still || now - lastScroll < 200) return;
    points.rotation.y += 0.0008;
    points.rotation.x += 0.0004;
    tk.rotation.x += 0.004; tk.rotation.y += 0.005;
    ic.rotation.x -= 0.006; ic.rotation.z += 0.004;
    camera.position.x += (mx * 25 - camera.position.x) * 0.025;
    camera.position.y += (-my * 18 - camera.position.y) * 0.025;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  })(0);
  if (still) renderer.render(scene, camera);
}

function heroIntro() {
  gsap.timeline({ delay: 0.2 })
    .from('#h-mcid', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' })
    .from('#h-avatar', { scale: 0.8, opacity: 0, duration: 0.7, ease: 'back.out(1.7)' }, '-=0.3')
    .from('#h-name', { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.4')
    .from('#h-role', { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
    .from('#h-pills .hero-pill', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08 }, '-=0.4')
    .from('#h-badge', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    .from('.hero-scroll', { opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.1');
}

function scrollReveals() {
  $$('.reveal').forEach(el => {
    gsap.fromTo(el, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });
  gsap.fromTo('.cert-card', { y: 40, opacity: 0, scale: 0.95 }, {
    y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out', stagger: 0.07,
    scrollTrigger: { trigger: '.cert-grid', start: 'top 80%', once: true },
  });
  gsap.fromTo('.s-tag', { y: 20, opacity: 0 }, {
    y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', stagger: 0.03,
    scrollTrigger: { trigger: '.skills-grid', start: 'top 80%', once: true },
  });
  gsap.fromTo('.contact-wrap', { y: 60, opacity: 0, scale: 0.97 }, {
    y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '.contact-wrap', start: 'top 80%', once: true },
  });
}

function testimonials() {
  const deckEl = $('#atestDeck');
  if (!deckEl) return;
  const nameEl = $('#atestName'), roleEl = $('#atestRole'), quoteEl = $('#atestQuote');
  const cards = [...deckEl.querySelectorAll('.atest-av')];
  const dots = [...$$('#atestDots .rec-dot')];
  const n = TESTIMONIALS.length;
  let cur = 0, animating = false;

  function layoutDeck(active) {
    cards.forEach((c, i) => {
      const off = i - active, abs = Math.abs(off);
      if (abs === 0) gsap.set(c, { zIndex: 20, rotation: 0, x: 0, scale: 1, opacity: 1 });
      else if (abs === 1) gsap.set(c, { zIndex: 10, rotation: off > 0 ? -10 : 10, x: off > 0 ? 16 : -16, scale: 0.92, opacity: 0.55 });
      else if (abs === 2) gsap.set(c, { zIndex: 5, rotation: off > 0 ? -18 : 18, x: off > 0 ? 26 : -26, scale: 0.84, opacity: 0.28 });
      else gsap.set(c, { zIndex: 1, rotation: 0, x: 0, scale: 0.78, opacity: 0 });
    });
  }

  function revealText(idx) {
    const r = TESTIMONIALS[idx];
    quoteEl.innerHTML = r.q.split(' ').map(w => `<span class="atest-word">${w}</span>`).join(' ');
    gsap.fromTo(quoteEl.querySelectorAll('.atest-word'),
      { filter: 'blur(7px)', opacity: 0, y: 5 },
      { filter: 'blur(0px)', opacity: 1, y: 0, duration: 0.2, stagger: 0.013, ease: 'power2.out' });
    nameEl.textContent = r.n;
    roleEl.textContent = r.r;
    gsap.fromTo(nameEl, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.32, ease: 'power2.out', delay: 0.15 });
    gsap.fromTo(roleEl, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.32, ease: 'power2.out', delay: 0.22 });
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  function goTo(idx) {
    if (animating || idx === cur) return;
    animating = true;
    const dir = idx > cur ? 1 : -1;
    const old = cur;
    cur = idx;
    gsap.to(cards[old], {
      rotation: dir * -22, x: dir * -90, opacity: 0, scale: 0.84, duration: 0.3, ease: 'power2.in',
      onComplete() {
        layoutDeck(cur);
        revealText(cur);
        gsap.fromTo(cards[cur],
          { rotation: dir * 14, x: dir * 55, opacity: 0, scale: 0.84 },
          { rotation: 0, x: 0, opacity: 1, scale: 1, duration: 0.42, ease: 'power3.out', onComplete() { animating = false; } });
      },
    });
  }

  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
  $('#atestPrev').addEventListener('click', () => goTo((cur - 1 + n) % n));
  $('#atestNext').addEventListener('click', () => goTo((cur + 1) % n));

  let tx = 0;
  const swipe = deckEl.parentElement;
  swipe.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  swipe.addEventListener('touchend', e => {
    const dx = tx - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 48) goTo(dx > 0 ? (cur + 1) % n : (cur - 1 + n) % n);
  });

  layoutDeck(0);
  revealText(0);
}

function projectFilter() {
  const btns = $$('.proj-filter-btn');
  const cards = $$('.proj-card');
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('pf-active'));
    btn.classList.add('pf-active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.co === filter) {
        card.style.display = '';
        gsap.fromTo(card, { opacity: 0, y: 18, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out' });
      } else {
        gsap.to(card, { opacity: 0, scale: 0.95, duration: 0.2, ease: 'power2.in', onComplete() { card.style.display = 'none'; } });
      }
    });
  }));
}

function projectTilt() {
  $$('.proj-card').forEach(card => {
    card.addEventListener('mouseenter', () => gsap.to(card, { y: -6, duration: 0.35, ease: 'power2.out', overwrite: 'auto' }));
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--sx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--sy', (e.clientY - r.top) + 'px');
      const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      gsap.to(card, { rotateY: dx * 12, rotateX: -dy * 8, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
    }, { passive: true });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--sx', '-999px');
      card.style.setProperty('--sy', '-999px');
      gsap.to(card, { rotateX: 0, rotateY: 0, y: 0, duration: 0.55, ease: 'power3.out', overwrite: 'auto' });
    });
  });
}

function projectHeadingChars() {
  const section = $('#projects-section');
  if (!section) return;
  // Arabic letters must stay joined, so animate whole words there
  const arabic = document.documentElement.lang === 'ar';
  const split = el => {
    const parts = arabic ? el.textContent.split(/(\s+)/) : el.textContent.split('');
    el.innerHTML = parts.map(ch => !ch.trim()
      ? ch
      : `<span class="proj-char" style="opacity:0;transform:translateY(22px)">${ch}</span>`).join('');
    return el.querySelectorAll('.proj-char');
  };
  const eChars = split(section.querySelector('.section-eyebrow'));
  const tChars = split(section.querySelector('.section-title'));
  ScrollTrigger.create({
    trigger: section, start: 'top 80%', once: true,
    onEnter() {
      gsap.to(eChars, { opacity: 1, y: 0, duration: 0.5, stagger: 0.03, ease: 'power3.out' });
      gsap.to(tChars, { opacity: 1, y: 0, duration: 0.55, stagger: 0.022, ease: 'power3.out', delay: 0.18 });
    },
  });
}

function cardTilt(selector) {
  $$(selector).forEach(card => {
    card.addEventListener('mouseenter', () => gsap.to(card, { y: -6, duration: 0.35, ease: 'power2.out', overwrite: 'auto' }));
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      gsap.to(card, { rotateY: dx * 10, rotateX: -dy * 6, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
    }, { passive: true });
    card.addEventListener('mouseleave', () => gsap.to(card, { rotateX: 0, rotateY: 0, y: 0, duration: 0.55, ease: 'power3.out', overwrite: 'auto' }));
  });
}

function parallax(selector, depths) {
  $$(selector).forEach((card, i) => {
    gsap.to(card, {
      y: depths[i % depths.length], ease: 'none',
      scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 0.3 },
    });
  });
}

function scrollProgress(lenis) {
  const bar = $('#scroll-progress');
  if (!bar) return;
  const update = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (total > 0) bar.style.width = (window.scrollY / total * 100).toFixed(2) + '%';
  };
  window.addEventListener('scroll', update, { passive: true });
  if (lenis) lenis.on('scroll', update);
}

function scrollSpy() {
  const links = $$('.nav-links a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => a.classList.toggle('nav-active', a.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-25% 0px -55% 0px' });
  links.forEach(a => {
    const el = document.getElementById(a.getAttribute('href').slice(1));
    if (el) observer.observe(el);
  });
}

function contentProtection() {
  document.addEventListener('contextmenu', e => e.preventDefault());
  $$('img').forEach(img => img.addEventListener('dragstart', e => e.preventDefault()));
  document.addEventListener('keydown', e => {
    const ctrl = e.ctrlKey || e.metaKey;
    const k = e.key.toLowerCase();
    if ((ctrl && ['s', 'u', 'a', 'p'].includes(k)) || (ctrl && e.shiftKey && ['i', 'j', 'c'].includes(k)) || e.key === 'F12') {
      e.preventDefault();
    }
  });
}

function counters() {
  $$('.counter').forEach(el => {
    const target = parseInt(el.dataset.to, 10);
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: () => gsap.fromTo(el, { innerText: 0 }, {
        innerText: target, duration: 1.4, ease: 'power2.out', snap: { innerText: 1 },
        onUpdate() { el.innerText = Math.round(parseFloat(el.innerText)); },
      }),
    });
  });
}
