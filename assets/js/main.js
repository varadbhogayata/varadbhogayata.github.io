(function () {
  "use strict";

  /* ---------- Theme toggle ---------- */
  var root = document.documentElement;
  var themeToggle = document.getElementById("theme-toggle");
  var THEME_KEY = "theme";

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
  }

  function initTheme() {
    var stored = getStoredTheme();
    if (stored === "light" || stored === "dark") {
      applyTheme(stored);
    } else {
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(prefersDark ? "dark" : "light");
    }
  }

  function toggleTheme() {
    var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    var next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {
      /* ignore storage errors (e.g. private mode) */
    }
  }

  initTheme();
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  /* ---------- Mobile nav ---------- */
  var sidebar = document.getElementById("sidebar");
  var menuToggle = document.getElementById("menu-toggle");
  var overlay = document.getElementById("nav-overlay");

  function openNav() {
    sidebar.classList.add("open");
    overlay.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
  }

  function closeNav() {
    sidebar.classList.remove("open");
    overlay.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function toggleNav() {
    if (sidebar.classList.contains("open")) {
      closeNav();
    } else {
      openNav();
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleNav);
  }
  if (overlay) {
    overlay.addEventListener("click", closeNav);
  }
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeNav();
    }
  });

  /* ---------- Scrollspy via IntersectionObserver ---------- */
  var navLinks = document.querySelectorAll(".nav-links a[data-nav]");
  var sections = Array.prototype.slice
    .call(navLinks)
    .map(function (link) {
      return document.getElementById(link.getAttribute("href").slice(1));
    })
    .filter(Boolean);

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + id);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ---------- typed.js hero text ---------- */
  if (window.Typed) {
    new window.Typed(".typing", {
      strings: [
        "NLP Researcher",
        "Machine Learning Engineer",
        "AI Enablement Analyst",
        "fellow human being"
      ],
      loop: true,
      typeSpeed: 70,
      backSpeed: 35,
      backDelay: 1400
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
