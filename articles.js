/* ============================================================
   THE ARTICLE LIST — this is the only file you edit to publish.
   ============================================================

   Both the home page (newest 5) and articles.html (20 per page,
   with Older/Newer paging) are built from this one list. Add an
   entry here and both places update themselves.

   TO PUBLISH A NEW ARTICLE
   ------------------------
   1. Create the article's .html file (copy an existing one).
   2. Copy the block below, paste the copy at the TOP of the list,
      and edit its five fields.
   3. Upload both files. Done — nothing else to change, ever.

     {
       title:   "The headline, exactly as it should read",
       href:    "my-new-article.html",
       date:    "August 2026",
       read:    "7 min read",
       summary: "One or two sentences. Keep it under about 40 words."
     },

   NEWEST FIRST. The order in this file is the order on the site.
   Never delete an entry when the list grows — older items simply
   roll onto page 2 of articles.html by themselves.

   Watch the commas: every entry ends with a comma except, ideally,
   the last one. A missing or stray comma is the one thing that will
   stop the list rendering, so if the page looks empty, check here.
   ============================================================ */

const ARTICLES = [

  {
    title:   "Agents as services, not prompts: engineering a deterministic multi-agent SOC analyst",
    href:    "autonomous-cybersecurity-agents.html",
    date:    "July 2026",
    read:    "9 min read",
    summary: "Five specialist agents, each deployed as its own addressable inference endpoint on IBM watsonx.ai, chained under a supervising orchestrator — and the decision to trade open-ended agent autonomy for a deterministic single-pass pipeline."
  },

  {
    title:   "Proof of identity, not proof of humanity: a serverless gate for a public calendar",
    href:    "identity-gated-scheduling.html",
    date:    "July 2026",
    read:    "9 min read",
    summary: "Engineering an identity-gated scheduling system on AWS Lambda, API Gateway, S3 and CloudFront — with a three-state policy engine whose admission rules are configuration and whose verdicts are proven across the entire input space."
  },

  {
    title:   "Inside Fridge2Meal: a deterministic recipe engine built to reduce food waste",
    href:    "deterministic-by-design.html",
    date:    "July 2026",
    read:    "8 min read",
    summary: "Why I engineered the core matching intelligence directly in PostgreSQL and Node.js, and designed the generative AI layer to sit beside it as an optional enhancement rather than a dependency."
  }

];


/* ============================================================
   THE PROJECT LIST — engineering dossiers.
   ============================================================

   Works exactly like the article list above. The home page and
   articles.html each show the five newest entries from this list.

   TO PUBLISH A NEW DOSSIER
   ------------------------
   1. Create the dossier's .html file (copy an existing one).
   2. Copy the block below, paste the copy at the TOP of the list,
      and edit its four fields.
   3. Upload both files. Nothing else to change.

     {
       title:   "Project name",
       href:    "my-project.html",
       kind:    "Serverless · Engineering dossier",
       summary: "One or two sentences. Keep it under about 40 words."
     },

   NEWEST FIRST, same as the articles.
   ============================================================ */

const PROJECTS = [

  {
    title:   "Autonomous Cybersecurity Multi-Agent System",
    href:    "cybersecurity-multi-agent-system.html",
    kind:    "Agentic AI · Engineering dossier",
    summary: "Six deployed AI services on IBM watsonx. Five specialist agents chained under a supervising orchestrator, grounded by trusted hybrid retrieval, executed as a deterministic single pass."
  },

  {
    title:   "Recruiter Verification Gateway",
    href:    "recruiter-verification-gateway.html",
    kind:    "Serverless · Engineering dossier",
    summary: "A serverless identity gate on AWS. Six services, one public route, a five-test tri-state policy engine proven across all 162 of its states, and signed fifteen-minute approval credentials."
  },

  {
    title:   "Fridge2Meal",
    href:    "fridge2meal.html",
    kind:    "Full-stack · Engineering dossier",
    summary: "An ingredient-first meal platform. Five orchestrated services, 16 normalized tables, weighted compatibility ranking, Keycloak identity, and a containerized runtime that starts from one command."
  }

];


/* ============================================================
   RENDERING — you do not need to edit anything below this line.
   ============================================================ */

(function () {
  "use strict";

  var PER_PAGE_HOME = 5;    // how many show on the home page
  var PER_PAGE_ARCHIVE = 20; // how many show per page of articles.html

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function entryHTML(a) {
    return '<a class="entry" href="' + esc(a.href) + '">' +
             '<div class="date">' + esc(a.date) +
               (a.read ? ' &middot; ' + esc(a.read) : '') + '</div>' +
             '<h2>' + esc(a.title) + '</h2>' +
             '<p>' + esc(a.summary) + '</p>' +
           '</a>';
  }

  function renderList(el, items) {
    el.innerHTML = items.map(entryHTML).join("");
  }

  /* ---------- home page: newest five ---------- */
  var home = document.getElementById("latest-articles");
  if (home) {
    renderList(home, ARTICLES.slice(0, PER_PAGE_HOME));
    var more = document.getElementById("more-articles");
    if (more && ARTICLES.length > PER_PAGE_HOME) {
      more.hidden = false;
    }
  }

  /* ---------- project detail: newest five, on every page that asks ---------- */
  var projects = document.getElementById("latest-projects");
  if (projects && typeof PROJECTS !== "undefined") {
    projects.innerHTML = PROJECTS.slice(0, PER_PAGE_HOME).map(function (p) {
      return '<a class="entry" href="' + esc(p.href) + '">' +
               '<div class="date">' + esc(p.kind) + '</div>' +
               '<h2>' + esc(p.title) + '</h2>' +
               '<p>' + esc(p.summary) + '</p>' +
             '</a>';
    }).join("");
  }

  /* ---------- archive page: 20 per page, with paging ---------- */
  var archive = document.getElementById("all-articles");
  if (archive) {
    var params = new URLSearchParams(window.location.search);
    var total = ARTICLES.length;
    var pages = Math.max(1, Math.ceil(total / PER_PAGE_ARCHIVE));

    var page = parseInt(params.get("page"), 10);
    if (!page || page < 1) { page = 1; }
    if (page > pages) { page = pages; }

    var start = (page - 1) * PER_PAGE_ARCHIVE;
    var slice = ARTICLES.slice(start, start + PER_PAGE_ARCHIVE);
    renderList(archive, slice);

    var count = document.getElementById("article-count");
    if (count) {
      var first = total === 0 ? 0 : start + 1;
      var last = start + slice.length;
      count.textContent = total === 0
        ? "No articles yet."
        : "Showing " + first + "\u2013" + last + " of " + total +
          (pages > 1 ? " \u00b7 page " + page + " of " + pages : "");
    }

    var pager = document.getElementById("pager");
    if (pager) {
      var html = "";
      if (page < pages) {
        html += '<a class="pager-link" rel="next" href="articles.html?page=' +
                (page + 1) + '">&larr; Older articles</a>';
      } else {
        html += '<span class="pager-link is-off">&larr; Older articles</span>';
      }
      if (page > 1) {
        var prev = page - 1;
        html += '<a class="pager-link" rel="prev" href="articles.html' +
                (prev === 1 ? '' : '?page=' + prev) + '">Newer articles &rarr;</a>';
      } else {
        html += '<span class="pager-link is-off">Newer articles &rarr;</span>';
      }
      pager.innerHTML = html;
      pager.hidden = (pages < 2);
    }

    document.title = (page > 1)
      ? "Articles \u2014 page " + page + " \u2014 Esmeralda C. Cabrera Ventura"
      : "Articles \u2014 Esmeralda C. Cabrera Ventura";
  }
})();
