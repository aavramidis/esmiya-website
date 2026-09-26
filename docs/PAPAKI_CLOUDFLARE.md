# Papaki + Cloudflare — Esmiya website

Operator guide for putting the band site live. Same pattern as ReperDo (`01 ReperDo/docs/howto/PAPAKI_CLOUDFLARE_WEBSITE.md`), with Astro build settings and three `.gr` domains instead of `.com` + `.gr`.

The site is this repo (Astro). Production branch is `main` on GitHub: `aavramidis/esmiya-website`.

Papaki mail-on-Cloudflare DNS, if you add a mailbox later: [Connect your email with the DNS service](https://support.papaki.com/help/connect-your-email-with-the-dns-service/?lang=en) (Scenario 2).

---

## Architecture


| Piece                   | Provider                  | Role                                                                       |
| ----------------------- | ------------------------- | -------------------------------------------------------------------------- |
| **Registrar**           | Papaki                    | You **own** `esmiya.gr`, `esmigia.gr`, and `esmiyia.gr` (pay / renew here) |
| **DNS**                 | Cloudflare                | After the nameserver change, records are edited **only** in Cloudflare     |
| **Website**             | Cloudflare **Pages**      | Builds this repo from GitHub `main` and serves `dist/`                     |
| **Mailbox** (optional)  | Papaki (`info@esmiya.gr`) | Only if you want the address on the contact section to receive mail        |
| **Mail DNS** (optional) | Cloudflare                | MX / SPF / DKIM / DMARC from Papaki, entered in the `esmiya.gr` zone       |


**Keep the domains at Papaki. Point nameservers to Cloudflare.** Do not buy Papaki shared hosting for the site.

**Primary domain:** `https://esmiya.gr` (apex, no `www`). Greek is the default page. English is `https://esmiya.gr/en/`.

**Redirects (301):**

- `www.esmiya.gr` → `https://esmiya.gr` (same path)
- `esmigia.gr` and `www.esmigia.gr` → `https://esmiya.gr` (same path)
- `esmiyia.gr` and `www.esmiyia.gr` → `https://esmiya.gr` (same path)

Use the **same Cloudflare account** as ReperDo.

---



## How this differs from ReperDo


|                      | ReperDo                              | Esmiya                                               |
| -------------------- | ------------------------------------ | ---------------------------------------------------- |
| What Pages publishes | Static files in `website/`, no build | Astro: `npm run build` → `dist/`                     |
| Root directory       | `website`                            | `/` (repo root)                                      |
| Canonical host       | `reperdo.com`                        | `esmiya.gr`                                          |
| Extra domains        | `reperdo.gr` → `.com`                | `esmigia.gr` and `esmiyia.gr` → `esmiya.gr`          |
| Support mail         | `support@reperdo.com`                | `info@esmiya.gr` is on the page; mailbox is optional |


---



## Before you start

Commit and push the latest `main`. Pages deploys whatever is on GitHub, not uncommitted files on your Mac.

Local check:

```bash
npm run build
npm run preview
```

---



## Phase A — Domains on Cloudflare



### A1 — Cloudflare account

1. Sign in at [dash.cloudflare.com](https://dash.cloudflare.com) (the ReperDo account).
2. Free plan is enough.



### A2 — Add `esmiya.gr`

1. **Account home** → **Add a domain** (not “Create app” / Workers).
2. Enter `esmiya.gr` (no `https://`, no `www`).
3. Plan: **Free**.
4. DNS import may show **0 records**. That is expected. **Do not** add A or MX records yet. Continue past the “no records / may not resolve” warning.
5. Copy the two nameserver **hostnames** Cloudflare assigns. ReperDo’s pair was `aaron.ns.cloudflare.com` and `diana.ns.cloudflare.com`. Yours may match if the account is the same, but always copy what this screen shows.



### A3 — Point Papaki nameservers (`esmiya.gr`)

In the Papaki client area (`controlpanel.papaki.com`), open **esmiya.gr** under **Your products** → nameservers (`/domains/dns.html`, **Nameservers change**). Confirm the domain name on that page before saving. Do not submit this form for `reperdo.com` or `reperdo.gr`.

Papaki’s form has a hostname column and a required IP column. An empty IP shows **Wrong IP format**. Fill both. One IPv4 per row. Do not paste several addresses into one box, and do not use IPv6.

For the Cloudflare pair on this account:

| | Hostname | IP address |
|--|----------|------------|
| DNS1 | `aaron.ns.cloudflare.com` | `108.162.195.150` |
| DNS2 | `diana.ns.cloudflare.com` | `172.64.34.23` |

Leave DNS3–DNS6 empty. These addresses were resolved on 26 Sep 2026. Each nameserver also has other IPv4 addresses (`aaron`: `162.159.44.150`, `172.64.35.150`; `diana`: `108.162.194.23`, `162.159.38.23`). Any one IPv4 for that hostname is enough if Papaki rejects the first.

The notice that a custom configuration deactivates Papaki services on this domain is expected. It means Papaki stops hosting DNS here. That is what you want for the Esmiya names.

In Cloudflare, click **I updated my nameservers**. Status becomes **Active** in minutes to 48 hours.

### A4 — Repeat for the other two names

Add `esmigia.gr` and `esmiyia.gr` as separate Cloudflare zones (Free plan each). In Papaki, set each domain’s nameservers to the same two hostnames and the same IPv4 addresses as in A3.

After all three zones are **Active**, DNS lives in Cloudflare. Papaki is registrar and renewals (and the mailbox, if you create one).

---



## Phase B — Cloudflare Pages (GitHub)

**Wrong place:** a domain → **Workers Routes**. That maps URLs to Workers. Skip it.

**Right place:** **Account home** → **Workers & Pages** → **Pages** (not Worker).

Cloudflare’s create wizard often opens **Worker** first (`npx wrangler deploy`). That has no Astro build and will not publish `dist/`.

1. **Create application**.
2. If you see **Create a Worker**, click **Looking to deploy Pages? Get started**.
3. **Connect to Git** → GitHub → repo **esmiya-website**.
4. Build settings:

  | Field                  | Value           |
  | ---------------------- | --------------- |
  | Project name           | `esmiya`        |
  | Production branch      | `main`          |
  | Framework preset       | **Astro**       |
  | Build command          | `npm run build` |
  | Build output directory | `dist`          |
  | Root directory         | `/` (repo root) |

5. **Save and Deploy.**
6. Open the preview, usually `https://esmiya.pages.dev`. Confirm the Greek homepage, `/en/`, the player, and the video before attaching the real domain. Write down the exact `*.pages.dev` hostname. The redirect zones in Phase D must point at it.

**If the build fails on Node:** Pages project → **Settings** → **Environment variables** → `NODE_VERSION` = `22`, then retry the deployment. Astro 5 needs a current Node 20 or 22.

**Sanity check**


| Good (Pages)                       | Bad (Worker)                                |
| ---------------------------------- | ------------------------------------------- |
| Framework **Astro**, output `dist` | `npx wrangler deploy`                       |
| Root directory `/`                 | Root directory `website` (that was ReperDo) |


Each **git push** to `main` redeploys.

---



## Phase C — `esmiya.gr` and `www`



### Attach the apex

Pages project → **Custom domains** → add `esmiya.gr`. Accept the DNS record Cloudflare offers. It must be **proxied** (orange cloud). HTTPS is issued automatically.

### Attach `www`, then send it to the apex

1. Pages → **Custom domains** → add `www.esmiya.gr`.
2. On the `esmiya.gr` **zone** (not the other two): **Rules → Redirect Rules → Create rule**.


| Field                 | Value                                                |
| --------------------- | ---------------------------------------------------- |
| Name                  | `www to apex`                                        |
| Match                 | Custom filter expression                             |
| Expression            | `http.host eq "www.esmiya.gr"`                       |
| Then                  | **Dynamic**                                          |
| Expression / URL      | `concat("https://esmiya.gr", http.request.uri.path)` |
| Status code           | **301**                                              |
| Preserve query string | Off is fine                                          |


Do **not** redirect `esmiya.gr` itself. That loops.

The site’s canonical tags and `astro.config.mjs` (`site: 'https://esmiya.gr'`) use the apex. `www` should not stay as a second public URL.

### Check (private window, HTTPS, padlock)

- `https://esmiya.gr/`
- `https://esmiya.gr/en/`
- `https://www.esmiya.gr/` → `https://esmiya.gr/`
- `https://www.esmiya.gr/en/` → `https://esmiya.gr/en/`

If the browser shows `DNS_PROBE_FINISHED_NXDOMAIN` while `dig @1.1.1.1 esmiya.gr` already returns Cloudflare addresses, flush the Mac cache:

```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

Then try a private window, or a phone on mobile data. Cloudflare’s “recommended records” box can lag. Trust the DNS table and a fresh browser.

---



## Phase D — Redirect `esmigia.gr` and `esmiyia.gr`

Do this **twice**: once in the `esmigia.gr` zone, once in the `esmiyia.gr` zone. Not in the `esmiya.gr` zone.

Do **not** add these names as Pages custom domains. They are not a second copy of the site. They only need to resolve so the 301 can run.

### D1 — `esmigia.gr`

**Rules → Redirect Rules → Create:**


| Field       | Value                                                          |
| ----------- | -------------------------------------------------------------- |
| Name        | `Redirect to esmiya.gr`                                        |
| Match       | Custom filter expression                                       |
| Expression  | `(http.host eq "esmigia.gr" or http.host eq "www.esmigia.gr")` |
| Then        | **Dynamic**                                                    |
| URL         | `concat("https://esmiya.gr", http.request.uri.path)`           |
| Status code | **301**                                                        |


**DNS** in the same zone, so traffic hits Cloudflare first:


| Type  | Name  | Target             | Proxy            |
| ----- | ----- | ------------------ | ---------------- |
| CNAME | `@`   | `esmiya.pages.dev` | Proxied (orange) |
| CNAME | `www` | `esmiya.pages.dev` | Proxied (orange) |


Replace `esmiya.pages.dev` with the hostname from Phase B if Pages named the project differently. Cloudflare flattens the apex CNAME. Both records stay proxied.

### D2 — `esmiyia.gr`

Same redirect rule and the same two CNAMEs, with this expression:

```
(http.host eq "esmiyia.gr" or http.host eq "www.esmiyia.gr")
```

Target is still `https://esmiya.gr` plus the path. Target of the CNAMEs is still the Pages hostname.

### Test (private window)


| Visit                     | Should land on          |
| ------------------------- | ----------------------- |
| `https://esmigia.gr/`     | `https://esmiya.gr/`    |
| `https://esmigia.gr/en/`  | `https://esmiya.gr/en/` |
| `https://www.esmigia.gr/` | `https://esmiya.gr/`    |
| `https://esmiyia.gr/`     | `https://esmiya.gr/`    |
| `https://esmiyia.gr/en/`  | `https://esmiya.gr/en/` |
| `https://www.esmiyia.gr/` | `https://esmiya.gr/`    |


These zones can take a few extra minutes on some ISPs. Same local-cache flush as Phase C if needed.

---



## Phase E — `info@esmiya.gr` (optional)

The contact section already shows `info@esmiya.gr`. Until this phase is done, that address does not receive mail. Skip this whole phase if you only need the website.

**Do not** enable **Cloudflare Email Routing** on `esmiya.gr` if you use Papaki mail. Routing and Papaki mail both want MX, and they conflict. ReperDo uses Papaki’s mailbox, not Email Routing.

### E1 — Create the mailbox

1. Papaki Email Manager (Papaki **Email**, or `mail.controlpanel.pro`).
2. **MAILBOX** tab → create `info` on `esmiya.gr` → `info@esmiya.gr`.
3. Strong password; save it somewhere that is not the git repo.
4. One mailbox is enough. Do not create a second one unless the Papaki plan includes it.

MX is not listed under mailbox **ACTIONS**. Use Papaki’s [external DNS article](https://support.papaki.com/help/connect-your-email-with-the-dns-service/?lang=en) (Scenario 2). **SPF** / **DKIM** in ACTIONS confirm the strings to copy.

### E2 — Mail records in Cloudflare (`esmiya.gr` only)

All mail records: **DNS only** (grey cloud). The website records that point at Pages stay **proxied** (orange).

These are the values that worked for ReperDo in August 2026. If Papaki’s panel shows different strings, use **Papaki’s exact values**.


| Type  | Name                     | Content                                    | Priority | Proxy    |
| ----- | ------------------------ | ------------------------------------------ | -------- | -------- |
| MX    | `@`                      | `mail-gr.securemail.pro`                   | 10       | DNS only |
| TXT   | `@`                      | `v=spf1 a mx include:spf.webapps.net ~all` | —        | DNS only |
| CNAME | `key-paki001._domainkey` | `key-paki001._domainkey.securemail.pro`    | —        | DNS only |
| CNAME | `key-paki002._domainkey` | `key-paki002._domainkey.securemail.pro`    | —        | DNS only |


There will be two TXT records on `@` if you also add DMARC later: SPF on `@`, DMARC on `_dmarc`. Do not put mail records on `esmigia.gr` or `esmiyia.gr`. Those names only redirect.

Papaki’s SPF popup may omit `a mx`. Prefer the form above unless Papaki’s current article shows a newer string.

Wait 15–60 minutes.

### E3 — Test

1. Papaki **webmail** → log in as `info@esmiya.gr`.
2. Send **to** `info@esmiya.gr` from a personal account.
3. Send **from** webmail to a personal account. **From:** should be `info@esmiya.gr`.
4. Check spam on the first test.

```bash
dig esmiya.gr MX +short @1.1.1.1
# expect: 10 mail-gr.securemail.pro.
```



### E4 — DMARC (monitoring)

Papaki **ACTIONS → DMARC → CREATE** often does not write a record when DNS is on Cloudflare. Add the TXT yourself.

Start with `p=none` (monitor only). Do not start with quarantine or reject.

Cloudflare → `esmiya.gr` → **DNS → Add record**:


| Type | Name     | Content                                                  | Proxy    |
| ---- | -------- | -------------------------------------------------------- | -------- |
| TXT  | `_dmarc` | `v=DMARC1; p=none; rua=mailto:YOUR_PERSONAL@example.com` | DNS only |


Use a real inbox you read for the reports. Do not commit that address into git if you would rather keep it private; the DNS record is enough.

```bash
dig _dmarc.esmiya.gr TXT +short @1.1.1.1
```

Move to `quarantine` later only if the reports look clean.

### Apple Mail / iOS (IMAP)

Official: [How do I set up my email on a MAC?](https://support.papaki.com/help/how-do-i-set-up-my-email-on-a-mac/?lang=en)


| Setting          | Value                                             |
| ---------------- | ------------------------------------------------- |
| Email / username | `info@esmiya.gr` (full address)                   |
| Password         | Papaki mailbox password                           |
| Type             | **IMAP** (not POP)                                |
| Incoming         | `mail-gr.securemail.pro` · port **993** · SSL/TLS |
| Outgoing         | `smtp-gr.securemail.pro` · port **465** · SSL/TLS |
| SMTP auth        | Same username + password                          |


If SMTP 465 fails, try **587** with STARTTLS. iPhone: **Settings → Mail → Accounts → Other**.

---



## Phase F — Search Console (after the site answers on HTTPS)

1. [Google Search Console](https://search.google.com/search-console) → add property `https://esmiya.gr/`.
2. Verify with the DNS TXT record Google gives you, added in the `esmiya.gr` Cloudflare zone (DNS only).
3. Submit `https://esmiya.gr/sitemap.xml`.
4. You do not need separate properties for `esmigia.gr` and `esmiyia.gr` if they 301 to the canonical host. An optional URL-prefix property for `https://esmiya.gr/en/` is enough if you want to watch the English page on its own.

---



## Day-to-day


| Task                   | Where                                                        |
| ---------------------- | ------------------------------------------------------------ |
| Edit copy, photos, CSS | This repo → commit → push `main`                             |
| See deploy status      | Cloudflare Pages → **Deployments**                           |
| Change DNS             | Cloudflare zone (`esmiya.gr`, `esmigia.gr`, or `esmiyia.gr`) |
| Renew domains          | Papaki                                                       |
| Read / send `info@`    | Papaki webmail or Mail, after Phase E                        |
| Local preview          | `npm run dev`                                                |


---



## Gotchas

1. **Papaki’s nameserver form requires an IPv4 next to each hostname.** Use the pair in Phase A3. One address per row. Do not change ReperDo’s domains on that screen.
2. **0 DNS records** when you create a zone is fine. Site and mail records come later.
3. **Workers Routes is not Pages.** Use account-level **Pages**, and “Get started” if the wizard opens a Worker.
4. **Do not set root directory to** `website`**.** That folder is ReperDo. This repo builds from `/` into `dist`.
5. **NXDOMAIN after Cloudflare is Active** is often the Mac DNS cache. Flush it, or test on mobile data.
6. **Redirect zones need both the rule and proxied CNAMEs** to the `*.pages.dev` hostname. A rule alone does nothing if the name does not resolve.
7. **Do not attach** `esmigia.gr` **/** `esmiyia.gr` **as Pages custom domains.** The redirect rule in each of those zones is what sends people to `esmiya.gr`.
8. **Do not redirect the apex** `esmiya.gr`**.** Only `www` on that zone.
9. **Papaki mail and Cloudflare Email Routing cannot both own MX.** Pick Papaki.
10. **Mail records: grey cloud. Site records: orange cloud.**
11. **DMARC “CREATE” in Papaki** may show nothing. Add `_dmarc` in Cloudflare.
12. **Pages deploys GitHub** `main`, not unsaved editor buffers.

