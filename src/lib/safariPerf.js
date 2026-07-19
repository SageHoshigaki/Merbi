/**
 * Safari performance fix — import once in main.jsx:
 *
 *   import "./lib/safariPerf.js";
 *
 * Detects Safari, injects a <style> block that disables backdrop-filter
 * site-wide. WebKit repaints the blur region every frame when the element
 * or a parent is being transformed (GSAP ScrollTrigger, framer-motion
 * useScroll), which is the main source of Safari-specific jank on this
 * site. Background opacity is bumped so frosted-glass elements still
 * read without the live blur.
 *
 * Every other browser is completely untouched.
 */

const isSafari =
  typeof navigator !== "undefined" &&
  /Safari/.test(navigator.userAgent) &&
  !/Chrome|Chromium|CriOS|FxiOS|EdgiOS|Edg\/|OPR\//.test(
    navigator.userAgent
  );

if (isSafari) {
  const style = document.createElement("style");
  style.textContent = `
    [class*="backdrop-blur"] {
      -webkit-backdrop-filter: none !important;
      backdrop-filter: none !important;
    }
    [class*="backdrop-blur"][class*="bg-"] {
      --tw-bg-opacity: 0.92;
    }
  `;
  document.head.appendChild(style);
}
