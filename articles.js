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
    title:   "Access that follows people: a desired-state engine for joiners, movers and leavers",
    href:    "access-that-follows-people.html",
    date:    "September 2026",
    read:    "10 min read",
    summary: "A PowerShell engine that reads HR records, computes the access each person should hold, and changes only the difference — taken through hire, role change, transfer and termination against a live Active Directory domain."
  },

  {
    title:   "An HTTP 200 is not a delivery receipt: building a contact form that cannot lie",
    href:    "honest-contact-form.html",
    date:    "August 2026",
    read:    "11 min read",
    summary: "A serverless contact form for a static site on Amazon SES and a Lambda Function URL — one IAM action, no stored credentials, and the duplicated CORS header that broke it without losing a single message."
  },


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
   THE PROJECT LIST — one entry per project, with its dossier.
   ============================================================

   This one list drives three places:
     - dossiers.html          every dossier, 20 per page
     - projects.html          every project, with its article and dossier
     - the "Project details"  section on the home page and articles.html
                              (the five newest, automatically)

   TO PUBLISH A NEW PROJECT
   ------------------------
   1. Create the dossier's .html file (copy an existing one), and the
      article, if there is one.
   2. Copy the block below, paste the copy at the TOP of the list,
      and edit its fields.
   3. Upload the files. Nothing else to change.

     {
       title:   "Project name",
       href:    "my-project.html",           // the dossier
       article: "my-project-article.html",   // optional: leave "" if none
       kind:    "Serverless · Engineering dossier",
       date:    "August 2026",
       status:  "Live in production",
       stack:   "AWS Lambda · S3 · CloudFront",
       summary: "One or two sentences. Keep it under about 40 words."
     },

   NEWEST FIRST, same as the articles. Only title, href, kind and
   summary are required; the others simply don't show if left out.
   ============================================================ */

const PROJECTS = [

  {
    title:   "Employee Identity Lifecycle Automation",
    href:    "employee-identity-lifecycle.html",
    article: "access-that-follows-people.html",
    kind:    "Identity & Access · Engineering dossier",
    date:    "September 2026",
    status:  "AD path validated in lab; cloud connectors implemented",
    stack:   "PowerShell · Active Directory · Microsoft Graph · Entra ID · Intune · Azure Virtual Desktop",
    summary: "A desired-state PowerShell engine for joiners, movers and leavers. 983 lines, 30 functions, one audited write path, and four lifecycle events verified 14 of 14 against a live Active Directory domain."
  },

  {
    title:   "Serverless Contact Form",
    href:    "serverless-contact-form.html",
    article: "honest-contact-form.html",
    kind:    "Serverless · Engineering dossier",
    date:    "August 2026",
    status:  "Live in production",
    stack:   "Amazon SES · AWS Lambda · Function URL · IAM · S3 · CloudFront",
    summary: "A contact pipeline for a static site on Amazon SES and AWS Lambda. Zero stored credentials, one IAM action, a success contract that never trusts a 200, and a full CORS incident analysis."
  },

  {
    title:   "Autonomous Cybersecurity Multi-Agent System",
    href:    "cybersecurity-multi-agent-system.html",
    article: "autonomous-cybersecurity-agents.html",
    kind:    "Agentic AI · Engineering dossier",
    date:    "July 2026",
    status:  "IBM SkillsBuild capstone",
    stack:   "IBM watsonx.ai · watsonx Orchestrate · LangGraph · Llama 3.3 70B · Vector RAG · Python",
    summary: "Six deployed AI services on IBM watsonx. Five specialist agents chained under a supervising orchestrator, grounded by trusted hybrid retrieval, executed as a deterministic single pass."
  },

  {
    title:   "Recruiter Verification Gateway",
    href:    "recruiter-verification-gateway.html",
    article: "identity-gated-scheduling.html",
    kind:    "Serverless · Engineering dossier",
    date:    "July 2026",
    status:  "Live in production",
    stack:   "AWS Lambda · API Gateway · S3 · CloudFront · IAM · CloudWatch · LinkedIn OIDC · Node.js",
    summary: "A serverless identity gate on AWS. Six services, one public route, a five-test tri-state policy engine proven across all 162 of its states, and signed fifteen-minute approval credentials."
  },

  {
    title:   "Fridge2Meal",
    href:    "fridge2meal.html",
    article: "deterministic-by-design.html",
    kind:    "Full-stack · Engineering dossier",
    date:    "July 2026",
    status:  "Full-stack prototype · Computer Science capstone",
    stack:   "React · Node.js · Express · PostgreSQL · Keycloak · Docker Compose",
    summary: "An ingredient-first meal platform. Five orchestrated services, 16 normalized tables, weighted compatibility ranking, Keycloak identity, and a containerized runtime that starts from one command."
  }

];


/* ============================================================
   RENDERING — you do not need to edit anything below this line.
   ============================================================ */

(function () {
  "use strict";

  var PER_PAGE_HOME = 5;     // how many show on the home page
  var PER_PAGE_ARCHIVE = 20; // how many show per archive page

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function articleHTML(a) {
    return '<a class="entry" href="' + esc(a.href) + '">' +
             '<div class="date">' + esc(a.date) +
               (a.read ? ' &middot; ' + esc(a.read) : '') + '</div>' +
             '<h2>' + esc(a.title) + '</h2>' +
             '<p>' + esc(a.summary) + '</p>' +
           '</a>';
  }

  function dossierHTML(p) {
    return '<a class="entry" href="' + esc(p.href) + '">' +
             '<div class="date">' + esc(p.kind) + '</div>' +
             '<h2>' + esc(p.title) + '</h2>' +
             '<p>' + esc(p.summary) + '</p>' +
           '</a>';
  }

  /* A project record: the dossier title and summary, plus links to
     both the article and the dossier. "detailed" adds status, date
     and stack, and is used on projects.html. */
  function projectHTML(p, detailed) {
    var html = '<div class="project">' +
      '<div class="date">' + esc(p.kind) +
        (!detailed && p.date ? ' &middot; ' + esc(p.date) : '') + '</div>' +
      '<h2><a href="' + esc(p.href) + '">' + esc(p.title) + '</a></h2>' +
      '<p>' + esc(p.summary) + '</p>';

    if (detailed) {
      var rows = [];
      if (p.status) { rows.push(['Status', esc(p.status)]); }
      if (p.date)   { rows.push(['Published', esc(p.date)]); }
      if (p.stack)  { rows.push(['Stack', esc(p.stack)]); }
      if (rows.length) {
        html += '<dl class="project-meta">' + rows.map(function (r) {
          return '<div><dt>' + r[0] + '</dt><dd>' + r[1] + '</dd></div>';
        }).join("") + '</dl>';
      }
    }

    html += '<p class="project-links">';
    if (p.article) {
      html += '<a href="' + esc(p.article) + '">Read the article</a>';
    }
    html += '<a href="' + esc(p.href) + '">Read the dossier</a></p></div>';
    return html;
  }

  /* Paged archive shared by articles.html, dossiers.html and projects.html */
  function renderArchive(opts) {
    var el = document.getElementById(opts.listId);
    if (!el) { return; }

    var params = new URLSearchParams(window.location.search);
    var total = opts.items.length;
    var pages = Math.max(1, Math.ceil(total / PER_PAGE_ARCHIVE));

    var page = parseInt(params.get("page"), 10);
    if (!page || page < 1) { page = 1; }
    if (page > pages) { page = pages; }

    var start = (page - 1) * PER_PAGE_ARCHIVE;
    var slice = opts.items.slice(start, start + PER_PAGE_ARCHIVE);
    el.innerHTML = slice.map(opts.render).join("");

    var count = document.getElementById(opts.countId);
    if (count) {
      var first = total === 0 ? 0 : start + 1;
      var last = start + slice.length;
      count.textContent = total === 0
        ? "Nothing published yet."
        : "Showing " + first + "\u2013" + last + " of " + total +
          (pages > 1 ? " \u00b7 page " + page + " of " + pages : "");
    }

    var pager = document.getElementById(opts.pagerId);
    if (pager) {
      var html = "";
      if (page < pages) {
        html += '<a class="pager-link" rel="next" href="' + opts.file + '?page=' +
                (page + 1) + '">&larr; Older ' + opts.noun + '</a>';
      } else {
        html += '<span class="pager-link is-off">&larr; Older ' + opts.noun + '</span>';
      }
      if (page > 1) {
        var prev = page - 1;
        html += '<a class="pager-link" rel="prev" href="' + opts.file +
                (prev === 1 ? '' : '?page=' + prev) + '">Newer ' + opts.noun + ' &rarr;</a>';
      } else {
        html += '<span class="pager-link is-off">Newer ' + opts.noun + ' &rarr;</span>';
      }
      pager.innerHTML = html;
      pager.hidden = (pages < 2);
    }

    if (page > 1) {
      document.title = opts.heading + " \u2014 page " + page +
                       " \u2014 Esmeralda C. Cabrera Ventura";
    }
  }

  var hasProjects = (typeof PROJECTS !== "undefined");

  /* ---------- home page: newest five articles ---------- */
  var home = document.getElementById("latest-articles");
  if (home) {
    home.innerHTML = ARTICLES.slice(0, PER_PAGE_HOME).map(articleHTML).join("");
    var more = document.getElementById("more-articles");
    if (more && ARTICLES.length > PER_PAGE_HOME) { more.hidden = false; }
  }

  /* ---------- project details: newest five, on every page that asks ---------- */
  var latestProjects = document.getElementById("latest-projects");
  if (latestProjects && hasProjects) {
    latestProjects.innerHTML = PROJECTS.slice(0, PER_PAGE_HOME).map(function (p) {
      return projectHTML(p, false);
    }).join("");
    var moreProjects = document.getElementById("more-projects");
    if (moreProjects && PROJECTS.length > PER_PAGE_HOME) { moreProjects.hidden = false; }
  }

  /* ---------- archives ---------- */
  renderArchive({
    listId: "all-articles", countId: "article-count", pagerId: "pager",
    items: ARTICLES, render: articleHTML,
    file: "articles.html", noun: "articles", heading: "Articles"
  });

  if (hasProjects) {
    renderArchive({
      listId: "all-dossiers", countId: "dossier-count", pagerId: "dossier-pager",
      items: PROJECTS, render: dossierHTML,
      file: "dossiers.html", noun: "dossiers", heading: "Dossiers"
    });

    renderArchive({
      listId: "all-projects", countId: "project-count", pagerId: "project-pager",
      items: PROJECTS, render: function (p) { return projectHTML(p, true); },
      file: "projects.html", noun: "projects", heading: "Project details"
    });
  }
})();
