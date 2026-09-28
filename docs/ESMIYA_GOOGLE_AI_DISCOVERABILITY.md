# Εσμιγιά — Google & AI Discoverability Guide

## Purpose

This is a standalone technical/editorial guide for making the Εσμιγιά website easier for Google, search engines, and AI systems to crawl, index, understand, and retrieve.

The objective is **not to manipulate rankings or "hack AI"**. The objective is to make the public identity of Εσμιγιά clear, factual, internally consistent, semantically structured, and machine-readable.

---

# 1. Crawl → Index → Understand → Retrieve

```text
Public Website
      ↓
Crawling
      ↓
Indexing
      ↓
Entity / Semantic Understanding
      ↓
Search & AI Retrieval
      ↓
Human-readable answer
```

A crawler finding a page does not automatically mean that it understands all relationships between Εσμιγιά, its musicians, instruments, recordings, videos, and Cretan musical tradition.

The site should therefore provide both:

1. excellent human-readable content;
2. explicit machine-readable structure.

---

# 2. Current Site Foundation

The current site already exposes useful information such as:

- Εσμιγιά
- Cretan music
- new compositions
- Cretan musical tradition
- lyra
- laouto
- flute
- percussion
- double bass
- recordings
- video
- photographs
- musician names
- instruments
- contact information

Preserve this foundation and make the relationships between these entities clearer.

---

# 3. The Main Entity

The most important semantic fact should be:

> **Εσμιγιά is a contemporary Cretan music ensemble / musical group.**

The website should establish:

```text
Εσμιγιά
│
├── type → MusicGroup
├── genre → Cretan music
├── artistic context → Cretan musical tradition
├── creates/performs → contemporary compositions
├── includes → Cretan lyra
├── includes → laouto
├── includes → flute
├── includes → percussion
├── includes → double bass
├── member → Musician 1
├── member → Musician 2
├── member → Musician 3
├── member → Musician 4
└── member → Musician 5
```

This semantic graph is more useful than repeating keywords.

---

# 4. URL Fragment / #top

The homepage may appear as:

`https://esmiya.gr/#top`

The `#top` part is a fragment within the same document.

The canonical homepage should be:

`https://esmiya.gr/`

Navigation anchors such as:

- `#music`
- `#musicians`
- `#contact`

can remain anchors in the single-page architecture.

Do not create duplicate canonical identities for each anchor.

---

# 5. Avoid Keyword Stuffing

Do not repeatedly insert phrases such as:

```text
Cretan music
Cretan music
Cretan music
Cretan music
```

Instead establish meaningful relationships:

```text
Εσμιγιά
→ Cretan music ensemble
→ new compositions
→ Cretan tradition
→ lyra
→ laouto
→ flute
→ percussion
→ double bass
→ named musicians
→ recordings
→ videos
```

---

# 6. Semantic HTML

Use real semantic headings:

```html
<h1>Εσμιγιά</h1>

<h2>Η Εσμιγιά</h2>
<h2>Η μουσική</h2>
<h2>Ο ήχος της Εσμιγιάς</h2>
<h2>Η παράδοση</h2>
<h2>Μουσικοί</h2>
<h2>Μουσική / Ηχογραφήσεις</h2>
<h2>Video</h2>
<h2>Live</h2>
<h2>Φωτογραφίες</h2>
<h2>Επικοινωνία</h2>
```

Do not use headings only for visual sizing.

---

# 7. Keep Important Content in Crawlable HTML

Important identity and descriptive text should be present in rendered HTML.

Do not make critical information available only after:

- JavaScript interaction,
- modal opening,
- client-side API loading,
- canvas rendering,
- inaccessible application state.

Interactive UI is fine, but the underlying important information should remain discoverable.

This especially applies to:

- ensemble description
- musician names
- instrument names
- recording titles
- recording descriptions
- video titles
- contact information

---

# 8. Schema.org / JSON-LD

Implement Schema.org structured data using JSON-LD:

```html
<script type="application/ld+json">
...
</script>
```

The primary types should be:

- `MusicGroup`
- `Person`
- `MusicRecording`
- `AudioObject`
- `VideoObject`
- `WebSite`
- `WebPage`

Schema.org defines `MusicGroup` for musical groups and supports properties such as `genre` and `track`. `MusicRecording` supports properties such as `byArtist`, `duration`, `audio`, `video`, `encoding`, `recordingOf`, `name`, and `url`.

References:

- https://schema.org/MusicGroup
- https://schema.org/MusicRecording
- https://schema.org/VideoObject

---

# 9. Recommended Main JSON-LD

Use one coherent `@graph` where possible.

Replace all placeholders with verified values.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "WebSite",
      "@id": "https://esmiya.gr/#website",
      "url": "https://esmiya.gr/",
      "name": "Εσμιγιά",
      "description": "Επίσημη ιστοσελίδα της Εσμιγιάς."
    },

    {
      "@type": "WebPage",
      "@id": "https://esmiya.gr/#webpage",
      "url": "https://esmiya.gr/",
      "name": "Εσμιγιά — Κρητική μουσική",
      "isPartOf": {
        "@id": "https://esmiya.gr/#website"
      },
      "about": {
        "@id": "https://esmiya.gr/#musicgroup"
      },
      "mainEntity": {
        "@id": "https://esmiya.gr/#musicgroup"
      }
    },

    {
      "@type": "MusicGroup",
      "@id": "https://esmiya.gr/#musicgroup",

      "name": "Εσμιγιά",
      "alternateName": "Esmiya",

      "url": "https://esmiya.gr/",

      "description": "Σύγχρονη κρητική μουσική με αφετηρία την κρητική μουσική παράδοση, μέσα από νέες συνθέσεις και μουσικές επεξεργασίες.",

      "genre": [
        "Cretan music",
        "Greek traditional music",
        "Contemporary Cretan music"
      ],

      "image": [
        "REPLACE-WITH-REAL-IMAGE-URL"
      ],

      "sameAs": [
        "REPLACE-WITH-OFFICIAL-YOUTUBE-URL",
        "REPLACE-WITH-OFFICIAL-INSTAGRAM-URL",
        "REPLACE-WITH-OFFICIAL-FACEBOOK-URL",
        "REPLACE-WITH-OFFICIAL-SPOTIFY-URL"
      ],

      "member": [
        { "@id": "https://esmiya.gr/#member-manos-molympakis" },
        { "@id": "https://esmiya.gr/#member-abraam-avramidis" },
        { "@id": "https://esmiya.gr/#member-nikos-katrizidakis" },
        { "@id": "https://esmiya.gr/#member-iakovos-molympakis" },
        { "@id": "https://esmiya.gr/#member-nikos-kafetzis" }
      ],

      "track": [
        { "@id": "https://esmiya.gr/#recording-maleviziotis" },
        { "@id": "https://esmiya.gr/#recording-syrtoi" }
      ],

      "subjectOf": [
        { "@id": "https://esmiya.gr/#video-1" }
      ]
    },

    {
      "@type": "Person",
      "@id": "https://esmiya.gr/#member-manos-molympakis",
      "name": "Μανώλης Μολυμπάκης",
      "alternateName": "Μολυμπής",
      "jobTitle": "Μουσικός",
      "description": "Κρητική λύρα",
      "memberOf": {
        "@id": "https://esmiya.gr/#musicgroup"
      }
    },

    {
      "@type": "Person",
      "@id": "https://esmiya.gr/#member-abraam-avramidis",
      "name": "Αβραάμ Αβραμίδης",
      "jobTitle": "Μουσικός",
      "description": "Κρητικό και στεριανό λαούτο, ούτι",
      "memberOf": {
        "@id": "https://esmiya.gr/#musicgroup"
      }
    },

    {
      "@type": "Person",
      "@id": "https://esmiya.gr/#member-nikos-katrizidakis",
      "name": "Νίκος Κατριτζιδάκης",
      "jobTitle": "Μουσικός",
      "memberOf": {
        "@id": "https://esmiya.gr/#musicgroup"
      }
    },

    {
      "@type": "Person",
      "@id": "https://esmiya.gr/#member-iakovos-molympakis",
      "name": "Ιάκωβος Μολυμπάκης",
      "jobTitle": "Μουσικός",
      "memberOf": {
        "@id": "https://esmiya.gr/#musicgroup"
      }
    },

    {
      "@type": "Person",
      "@id": "https://esmiya.gr/#member-nikos-kafetzis",
      "name": "Νίκος Καφετζής",
      "jobTitle": "Μουσικός",
      "memberOf": {
        "@id": "https://esmiya.gr/#musicgroup"
      }
    },

    {
      "@type": "MusicRecording",
      "@id": "https://esmiya.gr/#recording-maleviziotis",
      "name": "Μαλεβυζιώτης",
      "url": "https://esmiya.gr/#recording-maleviziotis",
      "byArtist": {
        "@id": "https://esmiya.gr/#musicgroup"
      },
      "duration": "PT3M36S",
      "genre": [
        "Cretan music",
        "Cretan dance music"
      ],
      "description": "Ένας χαρακτηριστικός χορευτικός ρυθμός της Κρήτης, ιδωμένος μέσα από τον ήχο της Εσμιγιάς.",
      "audio": {
        "@type": "AudioObject",
        "contentUrl": "REPLACE-WITH-REAL-AUDIO-URL",
        "encodingFormat": "audio/mpeg"
      }
    },

    {
      "@type": "MusicRecording",
      "@id": "https://esmiya.gr/#recording-syrtoi",
      "name": "Πρώτος συρτός, Μαδάρες, Λουσακιανός συρτός",
      "url": "https://esmiya.gr/#recording-syrtoi",
      "byArtist": {
        "@id": "https://esmiya.gr/#musicgroup"
      },
      "duration": "PT7M40S",
      "genre": [
        "Cretan music",
        "Cretan dance music"
      ],
      "audio": {
        "@type": "AudioObject",
        "contentUrl": "REPLACE-WITH-REAL-AUDIO-URL",
        "encodingFormat": "audio/mpeg"
      }
    },

    {
      "@type": "VideoObject",
      "@id": "https://esmiya.gr/#video-1",
      "name": "REPLACE-WITH-REAL-VIDEO-TITLE",
      "description": "REPLACE-WITH-REAL-VIDEO-DESCRIPTION",
      "thumbnailUrl": [
        "REPLACE-WITH-REAL-THUMBNAIL-URL"
      ],
      "uploadDate": "YYYY-MM-DD",
      "duration": "PT0M00S",
      "contentUrl": "REPLACE-WITH-REAL-VIDEO-URL",
      "embedUrl": "REPLACE-WITH-REAL-EMBED-URL",
      "musicBy": {
        "@id": "https://esmiya.gr/#musicgroup"
      }
    }

  ]
}
</script>
```

### Important

The final implementation must **not** blindly copy placeholders.

Every URL, description, duration, instrument, date and profile must be verified.

---

# 10. `sameAs`

Use `sameAs` to connect the official Εσμιγιά identity across the web:

- YouTube
- Instagram
- Facebook
- Spotify
- Bandcamp
- Apple Music
- other official music platforms

Only include real official profiles.

Do not include search-result URLs, fan pages, unrelated profiles, or guessed URLs.

---

# 11. Musician Entities

Each musician should have a stable `@id`.

Example:

```json
{
  "@type": "Person",
  "@id": "https://esmiya.gr/#member-abraam-avramidis",
  "name": "Αβραάμ Αβραμίδης",
  "jobTitle": "Μουσικός",
  "description": "Κρητικό και στεριανό λαούτο, ούτι",
  "memberOf": {
    "@id": "https://esmiya.gr/#musicgroup"
  }
}
```

Use actual verified information.

Do not invent biographies.

If a musician has an official professional profile:

```json
"sameAs": [
  "REAL-OFFICIAL-PROFILE-URL"
]
```

---

# 12. MusicRecording

Each important recording should eventually have a `MusicRecording` entity.

Example:

```json
{
  "@type": "MusicRecording",
  "@id": "https://esmiya.gr/#recording-maleviziotis",
  "name": "Μαλεβυζιώτης",
  "url": "https://esmiya.gr/#recording-maleviziotis",
  "byArtist": {
    "@id": "https://esmiya.gr/#musicgroup"
  },
  "duration": "PT3M36S",
  "audio": {
    "@type": "AudioObject",
    "contentUrl": "REAL-AUDIO-URL",
    "encodingFormat": "audio/mpeg"
  }
}
```

Only use `audio/mpeg` if the actual file is MP3.

The structured data must describe content that visitors can actually access.

---

# 13. VideoObject

For official videos:

```json
{
  "@type": "VideoObject",
  "@id": "https://esmiya.gr/#video-1",
  "name": "REAL VIDEO TITLE",
  "description": "REAL DESCRIPTION",
  "thumbnailUrl": [
    "REAL-THUMBNAIL-URL"
  ],
  "uploadDate": "YYYY-MM-DD",
  "duration": "PT1M30S",
  "contentUrl": "REAL-VIDEO-URL",
  "embedUrl": "REAL-EMBED-URL",
  "musicBy": {
    "@id": "https://esmiya.gr/#musicgroup"
  }
}
```

Only include known values.

---

# 14. Stable IDs

Use stable identifiers such as:

```text
https://esmiya.gr/#musicgroup

https://esmiya.gr/#member-manos-molympakis

https://esmiya.gr/#member-abraam-avramidis

https://esmiya.gr/#recording-maleviziotis

https://esmiya.gr/#recording-syrtoi

https://esmiya.gr/#video-1
```

Do not generate random IDs on every load.

---

# 15. Canonical

Use:

```html
<link rel="canonical" href="https://esmiya.gr/" />
```

Do not use:

```text
https://esmiya.gr/#top
```

as the canonical homepage URL.

---

# 16. Sitemap

Provide:

```text
https://esmiya.gr/sitemap.xml
```

For the current single-page site, a minimal sitemap can contain the homepage.

If dedicated pages are later created, include those canonical URLs.

---

# 17. robots.txt

Provide:

```text
https://esmiya.gr/robots.txt
```

A basic configuration:

```text
User-agent: *
Allow: /

Sitemap: https://esmiya.gr/sitemap.xml
```

Do not accidentally block CSS, JavaScript, images, media, or public content needed for rendering.

---

# 18. Google Search Console

Verify the domain in Google Search Console.

Recommended:

1. Verify domain.
2. Submit sitemap.
3. Inspect homepage.
4. Request indexing after major structural changes.
5. Monitor indexing.
6. Monitor Core Web Vitals.
7. Monitor search queries.
8. Review structured-data-related reports where available.

Do not request indexing after every tiny content change.

---

# 19. Image Discoverability

Use descriptive alt text.

Bad:

```html
alt="photo1"
```

Better:

```html
alt="Εσμιγιά σε ζωντανή εμφάνιση με κρητική λύρα, λαούτο, φλάουτο, κρουστά και κοντραμπάσο"
```

For a verified musician:

```html
alt="Αβραάμ Αβραμίδης της Εσμιγιάς με κρητικό λαούτο"
```

Alt text should describe the image, not become a keyword list.

Prefer meaningful filenames such as:

```text
esmiya-live-ensemble.jpg
esmiya-abraam-avramidis-laouto.jpg
esmiya-manos-molympakis-lyra.jpg
```

---

# 20. Audio Discoverability

Prefer meaningful audio filenames:

```text
maleviziotis.mp3
protos-syrtos-madares-lousakianos.mp3
```

instead of:

```text
track01.mp3
final_mix_v8.mp3
new_song2.mp3
```

Keep public URLs stable after publication where possible.

---

# 21. Individual Music Pages — Future

Eventually consider:

```text
/music/maleviziotis/
/music/protos-syrtos-madares-lousakianos/
```

Each page can contain:

- title
- description
- audio
- video
- musicians
- rhythm
- musical context
- credits
- photographs

Do this only when enough substantive content exists.

Avoid thin pages.

---

# 22. Individual Musician Pages — Future

Potentially:

```text
/musicians/manolis-molympakis/
/musicians/avraam-avramidis/
```

Only create them when each profile contains meaningful information.

---

# 23. Event Pages — Future

For real performances:

```text
/events/event-name/
```

Potential fields:

- event name
- date
- venue
- location
- description
- poster
- photographs
- video
- official links

If appropriate, use Schema.org `Event`.

Never create fake or placeholder events.

---

# 24. Multilingual Identity

The actual group name remains:

```text
Εσμιγιά
```

Use:

```json
"name": "Εσμιγιά",
"alternateName": "Esmiya"
```

where useful.

Do not translate the group's name.

If separate language URLs eventually exist, use proper `hreflang`.

Example:

```html
<link rel="alternate"
      hreflang="el"
      href="https://esmiya.gr/" />

<link rel="alternate"
      hreflang="en"
      href="https://esmiya.gr/en/" />
```

Only implement this when the English page actually exists at that URL.

---

# 25. AI Discoverability

There is no single "AI SEO" switch.

Different AI systems may use:

- web search
- their own crawlers
- search indexes
- retrieval systems
- structured data
- public websites
- external knowledge sources

Therefore the best strategy is:

```text
Accurate content
+
Clear entity identity
+
Strong semantic structure
+
Structured data
+
Stable URLs
+
Official external profiles
+
Good crawlability
+
Useful original content
```

---

# 26. Make AI Answers Easy to Construct

The website should make these questions easy to answer:

### What is Εσμιγιά?

Because the site explicitly identifies it as a contemporary Cretan music ensemble.

### What instruments does Εσμιγιά use?

Because the site connects the ensemble with:

- lyra
- laouto
- flute
- percussion
- double bass

### Who are the members?

Because each musician is explicitly identified.

### What music does Εσμιγιά perform?

Because recordings and repertoire have clear descriptions.

### What is the relationship with Cretan tradition?

Because the artistic description explains it.

---

# 27. Factual Musical Metadata

Do not add musicological metadata merely because it sounds authoritative.

For example, do not claim:

```text
meter = 7/8
mode = Rast
region = X
```

unless verified.

Traditional-music classification can be nuanced.

Prefer:

> verified fact

over:

> impressive-looking metadata

---

# 28. Structured Data Must Match Visible Content

If JSON-LD says:

```json
"name": "Εσμιγιά"
```

the page should visibly identify the ensemble.

If JSON-LD identifies a musician as a member, the visible page should also identify that musician as a member.

If a recording is marked as 3:36, the actual recording should be approximately 3:36.

Structured data must describe reality.

---

# 29. Do Not Do These Things

Do not:

- fabricate Schema.org properties;
- invent biographies;
- invent social URLs;
- invent musical classifications;
- create fake events;
- create fake ratings/reviews;
- add hidden SEO text;
- hide keywords;
- excessively duplicate text;
- create hundreds of thin pages;
- mark up inaccessible content;
- mark up facts not represented by the visible site;
- assume structured data guarantees a rich result;
- optimize for algorithms at the expense of people.

---

# 30. Recommended Implementation Priorities

## Priority 1 — Foundation

1. Verify crawlability.
2. Confirm HTTPS.
3. Confirm canonical.
4. Verify title and meta description.
5. Verify semantic headings.
6. Add/verify robots.txt.
7. Add sitemap.xml.
8. Connect Google Search Console.

## Priority 2 — Entity

9. Add MusicGroup JSON-LD.
10. Add WebSite JSON-LD.
11. Add WebPage JSON-LD.
12. Add Person entities.
13. Add verified `sameAs` profiles.

## Priority 3 — Music

14. Add MusicRecording entities.
15. Add AudioObject metadata.
16. Add VideoObject metadata.
17. Connect recordings to Εσμιγιά.
18. Connect videos to Εσμιγιά.

## Priority 4 — Content

19. Expand ensemble description.
20. Add musical identity.
21. Add instrumentation explanation.
22. Add recording descriptions.
23. Add musician biographies.
24. Add Cretan tradition context.

## Priority 5 — Advanced

25. Individual music pages.
26. Individual musician pages.
27. Event pages.
28. Additional structured data.
29. Multilingual URLs and hreflang if needed.

---

# 31. Long-Term Entity Graph

The mature website can conceptually represent:

```text
                         ┌──────────────┐
                         │   Εσμιγιά    │
                         │ MusicGroup   │
                         └──────┬───────┘
                                │
             ┌──────────────────┼──────────────────┐
             │                  │                  │
          members             tracks             videos
             │                  │                  │
       ┌─────┴─────┐      ┌────┴────┐        ┌────┴────┐
       │           │      │         │        │         │
     Person      Person  Recording Recording Video   Video
       │           │
   instrument   instrument
```

This is the semantic target.

---

# 32. Success Test

After implementation, ask:

### Entity
Can a crawler determine what Εσμιγιά is?

### People
Can it determine who the musicians are?

### Instruments
Can it determine which instruments belong to the ensemble?

### Music
Can it determine which recordings belong to Εσμιγιά?

### Video
Can it associate official videos with the ensemble?

### Tradition
Can it understand the relationship with Cretan music?

### Identity
Can it connect the website with official external profiles?

### Navigation
Can it crawl important content without unnecessary interaction?

### Technical
Are canonical, sitemap and robots.txt correct?

### Structured data
Is the JSON-LD valid and consistent with visible content?

---

# 33. Final Instruction to the Website Agent

**Treat Google and AI discoverability as a semantic architecture problem, not a keyword-optimization problem.**

The desired result is that an external system can confidently reconstruct this statement from the public website:

> **Εσμιγιά is a contemporary Cretan music ensemble rooted in Cretan musical tradition. The ensemble brings together Cretan lyra, laouto, flute, percussion and double bass, and presents new compositions and musical treatments through the individual voices of its musicians.**

The exact wording may evolve with the ensemble's artistic direction, but the underlying factual relationships should be explicit, consistent and machine-readable.

Do not optimize for algorithms at the expense of the human visitor.

The hierarchy should remain:

```text
Human experience
      ↓
Clear musical identity
      ↓
Excellent content
      ↓
Semantic HTML
      ↓
Structured data
      ↓
Search / AI discoverability
```

---

# References

Schema.org:

- MusicGroup: https://schema.org/MusicGroup
- MusicRecording: https://schema.org/MusicRecording
- VideoObject: https://schema.org/VideoObject
- Schema.org Validator: https://validator.schema.org/

Google:

- Google Search Central: https://developers.google.com/search

Use current Google documentation when validating implementation details because supported structured-data features and search-result behavior can change independently of Schema.org.
