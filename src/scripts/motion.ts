/**
 * Restrained motion: a composed hero entrance, quiet fade-and-rise reveals,
 * drawn hairlines and gentle image settles. Nothing is scroll-jacked or
 * scrubbed. Skipped entirely for prefers-reduced-motion and `?still`.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const root = document.documentElement;

if (root.classList.contains('motion-ready') && !root.classList.contains('motion-fallback')) {
  gsap.registerPlugin(ScrollTrigger);
  root.classList.add('motion-live');

  const ease = 'power3.out';

  // Hero entrance
  const heroItems = gsap.utils.toArray<HTMLElement>('[data-hero-item]');
  const heroMedia = document.querySelector<HTMLElement>('[data-hero-media]');
  const heroImg = heroMedia?.querySelector('img');
  const ribbon = document.querySelector<HTMLElement>('[data-hero-ribbon]');
  const seal = document.querySelector<HTMLElement>('[data-hero-seal]');

  const intro = gsap.timeline({ defaults: { ease } });
  if (heroMedia) {
    intro.fromTo(
      heroMedia,
      { clipPath: 'inset(0 0 100% 0)' },
      { clipPath: 'inset(0 0 0% 0)', duration: 1.25, ease: 'power4.inOut' },
      0,
    );
  }
  if (heroImg) {
    intro.fromTo(heroImg, { scale: 1.08 }, { scale: 1, duration: 1.8 }, 0);
  }
  if (ribbon) {
    intro.fromTo(
      ribbon,
      { scaleY: 0, transformOrigin: 'top center' },
      { scaleY: 1, duration: 1.1, ease: 'power4.inOut' },
      0.1,
    );
  }
  if (heroItems.length) {
    intro.fromTo(
      heroItems,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.09 },
      0.35,
    );
  }
  if (seal) {
    intro.fromTo(
      seal,
      { opacity: 0, rotate: -18, scale: 0.92 },
      { opacity: 1, rotate: 0, scale: 1, duration: 1.2 },
      0.75,
    );
  }

  // Section reveals: one trigger per element, batched for natural staggering.
  // After a long jump, elements already scrolled past are shown at once and the
  // stagger is capped, so on-screen content never waits behind off-screen items.
  gsap.set('[data-reveal]', { opacity: 0, y: 22 });
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (els) => {
      const passed = els.filter((el) => el.getBoundingClientRect().bottom <= 0);
      const onScreen = els.filter((el) => el.getBoundingClientRect().bottom > 0);
      if (passed.length) gsap.set(passed, { opacity: 1, y: 0, overwrite: true });
      if (onScreen.length) {
        gsap.to(onScreen, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease,
          stagger: Math.min(0.08, 0.6 / onScreen.length),
          overwrite: true,
        });
      }
    },
  });

  // Hairlines draw from the left.
  gsap.utils.toArray<HTMLElement>('[data-rule]').forEach((el) => {
    gsap.fromTo(
      el,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      },
    );
  });

  // Images settle gently into their frames.
  gsap.utils.toArray<HTMLElement>('[data-settle]').forEach((frame) => {
    const img = frame.querySelector('img');
    if (!img) return;
    gsap.fromTo(
      img,
      { scale: 1.06 },
      {
        scale: 1,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: frame, start: 'top 85%', once: true },
      },
    );
  });

  // Fonts can shift layout slightly after load; recalculate trigger points.
  // A refresh can interrupt the browser's own scroll to a #fragment, so if a
  // deep link has not reached its target, bring it into view once settled.
  const settleFragment = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    const top = target.getBoundingClientRect().top;
    if (top < 0 || top > window.innerHeight * 0.5) {
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  };
  document.fonts?.ready.then(() => {
    ScrollTrigger.refresh();
    settleFragment();
  });
}
