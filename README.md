# Personal site + blog

Static site. No build step, no dependencies, no framework. Edit the HTML, commit, done.

## Files in this folder

```
index.html                      home page (About, five newest articles, five newest projects)
articles.html                   the full article archive, 20 per page
dossiers.html                   the full dossier archive, 20 per page ("Dossiers" tab)
projects.html                   every project with its article and dossier ("Project details" tab)
articles.js                     THE ARTICLE LIST + THE PROJECT LIST — the only file you edit to publish
demo.mp4                        10-min walkthrough embedded in the dossier (8.5 MB)
access-that-follows-people.html blog post — Employee Identity Lifecycle Automation
honest-contact-form.html        blog post — Serverless Contact Form (Amazon SES)
autonomous-cybersecurity-agents.html  blog post — multi-agent SOC analyst (watsonx)
identity-gated-scheduling.html  blog post — Recruiter Verification Gateway
deterministic-by-design.html    blog post — Fridge2Meal recipe engine
fridge2meal.html                engineering dossier — Fridge2Meal (self-contained)
recruiter-verification-gateway.html
                                engineering dossier — Recruiter Verification Gateway
cybersecurity-multi-agent-system.html
                                engineering dossier — Autonomous Cybersecurity Multi-Agent System
serverless-contact-form.html    engineering dossier — Serverless Contact Form
employee-identity-lifecycle.html
                                engineering dossier — Employee Identity Lifecycle Automation
style.css                       shared styles for every page
images/                         screenshots used by the blog posts
README.md                       this file (safe to delete before uploading)
```

## How the article list works

There are two places articles appear, and **both are generated from
`articles.js`** — you never hand-edit a list again.

- **The home page** shows the **five newest** articles under the Articles
  heading. When a sixth is published, the oldest drops off the home page by
  itself; nothing needs deleting.
- **`articles.html`** shows **every** article, twenty to a page, newest first.
  Once there are more than twenty, an "Older articles" link appears at the
  bottom and paging continues automatically — `articles.html?page=2`,
  `?page=3`, and so on, as far as the list grows.

Both the **Articles** link in the navigation bar and the **Articles** heading
on the home page lead to `articles.html`, so a visitor who wants the full list
is one click away from anywhere on the site.

Each article file keeps its own permanent URL forever. Rolling off the home
page, or onto page 3 of the archive, changes nothing about the article itself.

## How the project list works

The `PROJECTS` list further down `articles.js` has one entry per project, and
it drives three places:

- **`dossiers.html`** (the **Dossiers** tab) lists every dossier, twenty to a
  page, with the same Older/Newer paging as the article archive.
- **`projects.html`** (the **Project details** tab) lists every project with
  its status, publication date and stack, and links to both its article and
  its dossier.
- The **Project details** section on the home page and at the bottom of
  `articles.html` shows the **five newest** projects, each with an article link
  and a dossier link. When a sixth is added the oldest drops off by itself.

Each entry has these fields:

```js
  {
    title:   "Project name",
    href:    "my-project.html",           // the dossier
    article: "my-project-article.html",   // leave "" if there is no article
    kind:    "Serverless · Engineering dossier",
    date:    "August 2026",
    status:  "Live in production",
    stack:   "AWS Lambda · S3 · CloudFront",
    summary: "One or two sentences. Keep it under about 40 words."
  },
```

Only `title`, `href`, `kind` and `summary` are required; the others simply
don't show if left out. The same comma rule applies: every entry ends with `},`
except the last, which ends with `}`.

## The navigation

Every page carries the same tabs: **About**, **Articles**, **Dossiers**,
**Project details**, **Portfolio** and **LinkedIn**. The home page repeats the
internal ones as links under the headline. On the archive pages the current tab
is underlined (`aria-current="page"` in the HTML). The dossiers have their own
top bar with the same links, written inline because they don't use
`style.css`.

---

# Deploying to GitHub Pages

## Before you start

Nothing to edit. All links to esmeraldaspace.com, LinkedIn and GitHub are already
in place across every page, and there are no placeholders left in the files.

The only choice to make: `README.md` is optional. Upload it and GitHub renders it
beneath your file list as notes to yourself; leave it out and nothing breaks.

---

## Step 1 — Create a GitHub account

1. Go to **https://github.com**
2. Click **Sign up** (top right).
3. Enter email, password, and a username.
   **Your username becomes your web address**, so pick carefully —
   `ecabreraventura` gives you `ecabreraventura.github.io`.
   Lowercase letters, numbers and hyphens only.
4. Verify your email when GitHub sends the confirmation.
5. Choose the **Free** plan.

Skip to Step 2 if you already have an account.

---

## Step 2 — Create the repository

1. Log in to GitHub.
2. Click the **+** icon in the top-right corner of any page.
3. Click **New repository**.
4. **Owner** — leave as your username.
5. **Repository name** — type exactly:

   ```
   YOUR-USERNAME.github.io
   ```

   Substitute your real username. If your username is `ecabreraventura`,
   the repo name is `ecabreraventura.github.io`. The `.github.io` part is
   literal — type it in. This exact naming is what makes it a user site.
6. **Description** — optional.
7. Select **Public**. This is required — branch deployment is disabled for
   private repositories on free accounts.
8. Leave "Add a README file" **unchecked**. You're uploading your own files.
9. Click **Create repository**.

---

## Step 3 — Upload the files

You'll land on an empty repository page.

1. Find the line "Get started by creating a new file or **uploading an existing file**".
   Click **uploading an existing file**.
   (If you don't see it: click **Add file** → **Upload files**.)
2. Open this `site` folder on your computer.
3. Select **the contents**, not the folder:
   - `index.html`
   - `articles.html`
   - `dossiers.html`
   - `projects.html`
   - `articles.js`
   - `access-that-follows-people.html`
   - `honest-contact-form.html`
   - `autonomous-cybersecurity-agents.html`
   - `identity-gated-scheduling.html`
   - `deterministic-by-design.html`
   - `fridge2meal.html`
   - `recruiter-verification-gateway.html`
   - `cybersecurity-multi-agent-system.html`
   - `serverless-contact-form.html`
   - `employee-identity-lifecycle.html`
   - `style.css`
   - `demo.mp4`
   - the `images` folder (keep this one as a folder — drag it in whole)
4. Drag them into the upload area in your browser.

   **This is the step people get wrong.** If you drag the `site` folder itself,
   your site ends up at `username.github.io/site/` instead of
   `username.github.io/`. The files must sit at the top level of the repo.
   You should see `index.html` listed on its own, not nested under anything.

5. Wait for all uploads to finish — `fridge2meal.html` is about 1.1 MB and takes
   a moment.
6. Scroll to the bottom, in "Commit changes" type something like
   `Add site files`.
7. Click **Commit changes**.

---

## Step 4 — Turn on GitHub Pages

1. On your repository page, click the **Settings** tab (top row, right side,
   next to Insights — it has a gear icon).
2. In the left sidebar, under **Code and automation**, click **Pages**.
3. Under **Build and deployment** → **Source**, open the dropdown and select
   **Deploy from a branch**.
4. Under **Branch**, open the dropdown that currently says `None` and select
   **main**.
5. Leave the folder dropdown as **/ (root)**.
6. Click **Save**.

---

## Step 5 — Visit your site

1. Wait 1–2 minutes. It can take up to 10 minutes on a first deploy.
2. Refresh the Settings → Pages screen. A box appears at the top reading
   "Your site is live at https://YOUR-USERNAME.github.io/".
3. Click **Visit site**.

Done. That address is permanent and free.

---

## Step 6 — Link it from your profile (optional, worth doing)

1. Go to your repository home page.
2. On the right, next to **About**, click the gear icon.
3. Tick **Use your GitHub Pages website**.
4. Click **Save changes**.

For LinkedIn, see **Putting the blog on LinkedIn as a button** further down —
there are four placements and they behave quite differently.

---

# Updating the site later

1. Go to your repository.
2. Click the file you want to change.
3. Click the pencil icon (top right of the file view).
4. Edit, scroll down, click **Commit changes**.

Changes go live in about a minute. To add a new file, use
**Add file** → **Upload files** the same way as Step 3.

## Publishing a new article

Two files change: the article itself, and `articles.js`. That's the whole job.

**Step 1 — write the article.**

1. Duplicate `autonomous-cybersecurity-agents.html` on your computer and rename
   it — lowercase, hyphens, no spaces. **The filename becomes the URL**, so
   `zero-trust-networking.html` gives you
   `yourname.github.io/zero-trust-networking.html`. Once published, never
   rename it; anyone who shared the old link would get a 404.
2. Replace the `<title>`, the `<meta name="description">`, all three `og:` tags,
   the `.kicker`, the `<h1>`, the `.standfirst`, the `.byline`, and the body.
3. If the post has screenshots, save them into `images/` and reference them from
   `<figure>` blocks the same way the existing posts do. Prefix the filenames
   with something short and specific to the post so the folder stays navigable.
4. Point the `og:image` tag at one of those images. That is the picture LinkedIn
   shows when the article is shared, so pick the clearest one — a diagram
   usually reads better than a screenshot at preview size.

**Step 2 — add it to the list.**

Open `articles.js`. At the very top of the list, paste a copy of an existing
block and edit its five fields:

```js
  {
    title:   "The headline, exactly as it should read",
    href:    "zero-trust-networking.html",
    date:    "August 2026",
    read:    "7 min read",
    summary: "One or two sentences. Keep it under about 40 words."
  },
```

Newest goes at the top — the order in that file is the order on the site.
**Never delete an entry.** Older articles roll off the home page and onto later
archive pages on their own, which is the entire point of the setup.

Mind the commas: every entry ends with `},` except the last one in the list,
which ends with `}`. A missing or extra comma is the one thing that stops the
list rendering.

**Step 3 — upload.** The new `.html` file, any new images, and the edited
`articles.js`. Live in about a minute.

**Step 4 — check it.** Open the home page (the new article should be at the top
of the Articles section) and `articles.html` (it should be at the top there
too). If either list looks empty, go back to the commas in `articles.js`.

### Optional: the fallback lists

Both `index.html` and `articles.html` contain a short hand-written copy of the
article list inside an HTML comment explaining what it is. That copy only ever
appears for the small number of visitors browsing with JavaScript switched off.
You can leave it alone permanently and nothing will look wrong to anyone else.
If you'd like it to stay accurate for those visitors too, update it the same way
you did before — but it is genuinely optional.

---

# Putting the blog on LinkedIn as a button

Your blog address is whatever GitHub gave you in Step 5 —
`https://YOUR-USERNAME.github.io/` — or your custom domain if you set one up
later. Keep the `https://` on the front in every field below; LinkedIn rejects
some entries without it.

**Which URL to use.** For every placement below, link the **home page**
(`https://YOUR-USERNAME.github.io/`). It leads with who you are and shows the
five newest articles, and anyone who wants the rest is one click from the full
archive. Only link `https://YOUR-USERNAME.github.io/articles.html` directly if
you specifically want to drop someone straight into the article list with no
introduction — for example from a comment on someone else's post. When you're
sharing one specific piece, link that article's own URL instead; the reason is
in "When you publish a new article" at the end of this section.

LinkedIn has no single thing called a "button", but it has four placements. The
first one is the closest to an actual button, and it is the one worth doing
first. Do 1 and 2 — together they take about five minutes and cover both the
people skimming your profile and the people reading it properly.

## 1. The link under your headline — the real button

This appears directly beneath your name and headline, at the very top of your
profile, with a small link icon and text you choose. It is the most clicked
placement on a profile by a wide margin.

1. Open your profile and click **Edit** (the pencil icon) on the top card.
2. Scroll down to **Add website** — on some accounts this reads **Website**
   or sits under a heading called **Links**.
3. **URL** — paste your blog address.
4. **Link text** — this is the button label, so make it do some work.
   Not "Website". Try one of:
   - `Read my engineering writing`
   - `Architecture write-ups`
   - `How I build things — articles`
5. Click **Save**.
6. View your own profile to confirm it renders. It should sit just under your
   headline as tappable text, not buried in Contact info.

If you do not see the field, your profile language may be set to a locale where
the feature has not rolled out. Change **Settings → Account preferences →
Language** to English, add the link, and change it back if you wish.

## 2. The Featured section — the big visual card

This is the placement that actually looks like a button: a large clickable tile
with a preview image, title and description. It sits high on the profile, above
Experience.

1. On your profile, click **Add profile section**.
2. Open **Recommended** → click **Add featured**.
3. Click the **+** in the Featured box → choose **Add a link**.
4. Paste your blog URL and wait a moment — LinkedIn fetches the page and pulls
   in the title, description and image on its own.
5. Edit the title and description if you want different wording. The image comes
   from the page's `og:image` tag, which is already set in each article.
6. Click **Save**.

You can feature more than one link, so a good pattern is: the blog home page
first, then your single strongest article beside it — a recruiter who only
clicks one thing then lands on a finished piece of writing rather than a list.
Drag the tiles to reorder, and swap the second tile whenever you publish
something stronger.

**If the tile shows no image**, LinkedIn has cached an older version of the page.
Paste the URL into the LinkedIn Post Inspector at
`https://www.linkedin.com/post-inspector/` and click **Inspect** — that forces a
refresh. Then remove and re-add the featured item.

## 3. Contact info — the quiet, permanent one

Less visible, but it is where people look when they are deliberately hunting for
your site, and it never expires.

1. On your profile, click **Contact info**.
2. Click the pencil icon.
3. Click **Add website**.
4. Paste the URL, and set the type dropdown to **Blog** (or **Personal**).
5. Click **Save**.

## 4. A real call-to-action button — company page only

Personal profiles cannot have a true LinkedIn button. Company pages can. If you
run a page for Apex Intelligent Systems, this gives you a proper filled button
at the top of the page.

1. Go to your company page and switch to **admin view**.
2. Click **Edit page** → **Buttons**.
3. Turn the custom button **on**.
4. Choose a label from the fixed list — **Learn more** and **Visit website**
   both suit a blog.
5. Paste your blog URL in the field beneath.
6. Click **Save**.

LinkedIn shows click counts for this button in the page analytics, which the
profile placements do not give you.

## When you publish a new article

Post **that article's own URL**, not the home page — LinkedIn builds the preview
card from the page's own `og:title`, `og:description` and `og:image` tags, so a
specific article gets a specific headline and picture, while the home page would
get the same generic card every time.

Write two or three sentences of your own above the link. A bare URL gets very
little reach, and LinkedIn's preview only renders when the link is the last
thing in the post body.

If the preview card looks wrong or stale, run the URL through the Post Inspector
mentioned above before you post, not after — once a post is published, its
preview card is frozen.

---

# Troubleshooting

**404 page.**
Most often the files got nested in a folder. Look at your repo's file list —
`index.html` must be visible at the top level, not inside `site/`. If it's
nested, delete the folder and re-upload the contents.

**Site loads but has no styling.**
`style.css` didn't upload, or the name doesn't match. GitHub Pages is
case-sensitive: `Style.css` will not load as `style.css`. Same applies to
every image filename.

**Images don't appear.**
Check that the `images` folder uploaded with its files inside, and that
filenames match exactly, including the number prefixes like `01-recipes.jpg`.

**"Deploy from a branch" is greyed out.**
The repository is private. Go to Settings → General → scroll to Danger Zone →
**Change visibility** → make it public.

**The demo video won't upload.**
GitHub's browser uploader caps at 25 MB per file. `demo.mp4` is 8.5 MB so it
uploads fine. If you ever replace it with a larger cut, either compress it
below 25 MB or host it on YouTube/Vimeo and swap the embed — there are
copy-paste instructions in an HTML comment directly above the video in
`fridge2meal.html`.

**The project list, the Dossiers page or the Project details page is empty.**
Same cause and same fix as the article list below — `PROJECTS` lives in the
same `articles.js` file and breaks in the same ways.

**The article list is empty, or an article is missing from it.**
`articles.js` has a syntax error, or didn't upload. Every entry in the list ends
with `},` except the last, which ends with `}` — a missing or duplicated comma
is the usual culprit. Check the filename is exactly `articles.js`, all lowercase.
To see the actual error, open the page, press `F12`, and look at the Console tab;
it will name the line.

**An article opens fine but doesn't appear in any list.**
The file uploaded but no entry was added to `articles.js`, or the `href` in that
entry doesn't match the filename character for character — including the `.html`
and the exact capitalization.

**Changes aren't showing.**
Hard-refresh the page: `Ctrl+Shift+R` on Windows, `Cmd+Shift+R` on Mac.
Deploys can also take a few minutes.

**Something odd with file names starting with an underscore.**
GitHub Pages runs Jekyll by default, which ignores those. To disable it:
**Add file** → **Create new file**, name it `.nojekyll` (leave the file empty),
and commit. Not needed for the current files, but harmless insurance.

---

# Custom domain (optional)

Hosting stays free; you only pay a registrar for the name, typically around
$10–15/year. Buy a domain, then go to **Settings → Pages → Custom domain**,
enter it, and follow the DNS records GitHub displays. Allow up to 48 hours
for DNS to propagate.

---

# Changing the look

All colors, fonts and spacing live at the top of `style.css` under `:root`.
Change a hex value there and every page updates.

Two width tokens sit alongside the colors:

- `--shell` (880px) — how much of the screen the page occupies. Raise it for a
  wider layout on large monitors, lower it for a narrower one.
- `--measure` (66ch) — the maximum line length for prose. This is a readability
  limit and should stay somewhere between 60ch and 75ch regardless of `--shell`.

They are deliberately separate: widening the page should not widen the text
column past the point where it becomes tiring to read.

The five dossiers are deliberately self-contained — each carries its own styles
so it can be sent or printed on its own. None uses `style.css`, so restyle
them separately if you change the palette. Each uses a different accent colour so
they read as siblings rather than duplicates: green for Fridge2Meal, violet
for the verification gateway, blue for the multi-agent system, teal for the
contact form, and plum for the identity lifecycle engine.

`fridge2meal.html` carries its images embedded in the file itself; the other four
link to the `images/` folder like the blog posts do, so keep that folder
alongside them. Images for the two newest projects are prefixed `cf-` (contact
form) and `eil-` (employee identity lifecycle).

The header navigation now has six items. Its spacing in `style.css`
(`.site-head nav`, a 16px gap) is tuned so the name and all six tabs stay on
one line at the 880px `--shell`. If you add a seventh tab or widen the name,
either reduce that gap slightly or raise `--shell`.
