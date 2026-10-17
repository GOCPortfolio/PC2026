# Pureheart & Chukwuemeka · #PC2026 — Wedding Invitation

A mobile-first, animated wedding invitation (plain HTML, CSS and JavaScript, no build step, no libraries).
Guests open the WhatsApp link, tap the wax seal, and the envelope opens into the invitation.

```
index.html              page structure
styles.css              all styling (colours are variables at the top)
script.js               CONFIG object at the top = every name, date, venue, text, photo, link
google-apps-script.gs   paste into Google Sheets to collect RSVPs
assets/                 photos, florals, music, icons, preview image
```

Total size is about 1.1 MB. Before the guest taps, only about 200 KB loads (plus fonts), which is light on slow data.
Gallery images, florals and the music load later.

---

## 1. Edit the content (one place)

Open **`script.js`** and edit the **`CONFIG`** object at the very top. It holds names, parents, date, time,
venues and map links, colours, story text, gallery photos, toast text, RSVP settings, bank details, FAQ,
footer text and music path. Nothing below the CONFIG block needs touching.

**Still placeholders: please replace before sharing**

| What | Where in `CONFIG` |
|---|---|
| Contact person name | `contact.name` |
| Parking & accommodation answers | `faq[]` |
| RSVP Google Sheet link | `rsvp.endpoint` (section 3) |
| Music | replace `assets/music.mp3` (section 5) |
| Exact Google Maps pins (optional) | `venues.ceremony.mapsUrl`, `venues.reception.mapsUrl` |

The "Open in Google Maps" and "Get directions" buttons work out of the box from the address text.
If you want the exact pin, open the venue in Google Maps, tap Share, copy the link, and paste it into `mapsUrl`.

The countdown and calendar buttons read `event.dateISO` (`2026-11-22T10:00:00+01:00`, Lagos time).

### Personalised guest links

Add `?guest=Name` to the link and the guest is greeted by name (on the envelope and on the card), and the RSVP form is pre-filled:

```
https://pc2026.com/?guest=Mr.%20%26%20Mrs.%20Adeyemi    →  "Dear Mr. & Mrs. Adeyemi"
https://pc2026.com/?guest=Aunty%20Ngozi                  →  "Dear Aunty Ngozi"
```

Spaces are `%20` and `&` must be written `%26`. (Most phones and WhatsApp do this automatically if you paste the plain name.)
For testing, add `?nointro` to skip the envelope.

---

**Screen sizes:** phones get the single-column invitation; from 900px wide (tablets in landscape, laptops, desktops) the layout opens up: full-window envelope, photo-and-names hero, two-column venues, three-column story, wider gallery. All of it lives in the last block of `styles.css`.

---

## 2. Photos

Everything is in `assets/` and referenced from `CONFIG` (`story.items[].photo`, `gallery[]`) and `index.html` (hero).

* `hero.webp` is the silhouette photo, cropped to remove the watermark.
* `gallery-*.webp` (full size) and `gallery-*-sm.webp` (grid thumbnails). Keep both when swapping images.
* The G4EXMEDIA watermark is still visible on a few gallery photos, so a **"Photos: G4EXMEDIA Academy"** credit is in the footer
  (`footer.credit`). If you get the unwatermarked files, replace them in `assets/` using the same file names.
  To convert new photos: `cwebp -q 75 -resize 1400 0 photo.jpg -o gallery-x.webp` (or squoosh.app).
* `corner-florals*.webp` and `silk-drape*.webp` were cut out of your invitation card (transparent background).
  If you have the original transparent PNGs from your designer, drop them in with the same names for sharper edges.
* `trad-1.webp` to `trad-9.webp` (+ `-sm` thumbnails) are the traditional-attire photos. They are in the gallery, `trad-5`/`trad-7` are in Our Story, and `trad-9` is in the footer.
* `envelope-card.webp` is the photo that slides out of the envelope (a crop of `p-heart`). Swap it for any 6:7 photo of your choice.
* `p-*.webp` (+ `-sm`) are the newer couple photos in the gallery; `engagement.webp` is the engagement picture in Our Story.

**Other things in `CONFIG`:** `fatherOfDay` (Father of the Day), `vendors.list[]` (the vendors section), `story.closing` (the closing line), `gifts.accounts[]` (bank details), `rsvp.whatsappNumber` (WhatsApp chat) and `rsvp.tel` (Call to RSVP).

---

## 3. RSVP to a Google Sheet (free)

1. Create a Google Sheet, then **Extensions → Apps Script**.
2. Paste the contents of `google-apps-script.gs`. Save.
3. **Deploy → New deployment → Web app** → *Execute as: Me*, *Who has access: Anyone* → Deploy → approve permissions.
4. Copy the **Web app URL** and paste it into `CONFIG.rsvp.endpoint` in `script.js`.
5. Open your live site, send a test RSVP, and a row appears in the **RSVPs** tab.

Until the URL is set, the form politely tells guests to use the WhatsApp or Call buttons instead.
Those two buttons always work: **RSVP on WhatsApp** opens a chat to 08137679556 with a ready message, and **Call to RSVP** dials it.

---

## 4. Link preview on WhatsApp

`index.html` has Open Graph and Twitter tags. The preview image is `assets/og-image.jpg` (the sealed envelope, 1200×630).

**Important:** WhatsApp needs full web addresses. After you know your final domain, search `index.html` for
`https://pc2026.com` and replace it with your real address (there are 4 places: canonical, `og:url`, the `og:image` and the `twitter:image`).
If you ever change the image or title and WhatsApp still shows the old preview, paste your link into
<https://developers.facebook.com/tools/debug/> and press *Scrape Again*; WhatsApp uses the same cache.

---

## 5. Music

Replace `assets/music.mp3` with your song (for example *A Thousand Years* by Christina Perri, or an instrumental version). The file in there now is only a short, generated placeholder; I cannot supply a copyrighted song. Compress it first: `ffmpeg -i song.mp3 -b:a 80k -ac 2 -t 150 music.mp3` (this keeps the first 2.5 minutes, about 1.5 MB). Using a commercial song publicly can be flagged by hosts or platforms, so a licensed or royalty-free instrumental cover is the safest choice.
Tips: export as MP3 at 64–96 kbps mono/stereo (aim for under 1.5 MB), and loop-friendly if possible.
Music starts when the guest taps the seal (phones only allow audio after a tap), fades in, and the speaker button (top right)
mutes or unmutes it. The choice is remembered. Change the volume in `CONFIG.music.volume`.

---

## 6. Deploy free

First test locally: open the folder in VS Code and use the *Live Server* extension, or run `python3 -m http.server` in the folder and visit
`http://localhost:8000`. (Opening `index.html` by double-clicking works for most things, but a server is closer to the real site.)

### Option A: Netlify (easiest: drag and drop)
1. Go to <https://app.netlify.com/drop> (create a free account).
2. Drag the **whole project folder** onto the page. You get a live link like `https://something.netlify.app` within seconds.
3. **Site configuration → Domain management → Add a domain** → enter `pc2026.com`.
4. Either let Netlify manage DNS (it shows 4 nameservers to enter at your registrar), or keep your DNS and add the records Netlify shows
   (typically an **A** record for `@` and a **CNAME** for `www` → `your-site.netlify.app`). HTTPS is automatic.
5. To update: drag the folder again (or connect a GitHub repo for automatic updates).

### Option B: Vercel
1. Create a free account at <https://vercel.com>, install the CLI (`npm i -g vercel`) and run `vercel` inside the folder (accept the defaults;
   it is a static site, so "no framework"). Or import a GitHub repo from the dashboard.
2. **Project → Settings → Domains → Add** `pc2026.com`. Vercel shows the DNS records: usually an **A** record for `@` and a
   **CNAME** for `www` → `cname.vercel-dns.com`.
3. Deploy updates with `vercel --prod`.

### Option C: GitHub Pages
1. Create a GitHub repository and upload all files (keep `index.html` at the top level).
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch → main / (root)** → Save.
   The site appears at `https://<username>.github.io/<repo>/`.
3. **Custom domain:** in the same Pages screen enter `pc2026.com` and tick **Enforce HTTPS**. At your registrar add
   **A** records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   and a **CNAME** for `www` → `<username>.github.io`.
   (Because the site uses relative links, it also works on the `/<repo>/` address.)

### Buying and connecting `pc2026.com`
* Buy the domain from any registrar. If `pc2026.com` is taken, try `pc2026.ng`, `pc2026wedding.com` or `elizabethandchukwuemeka.com`.
* DNS changes usually work within minutes but can take up to a few hours. The hosts above all issue the HTTPS certificate for free once DNS points at them.
* DNS values change occasionally, so always trust the values shown in your hosting dashboard over this README.
* Then update the 4 `https://pc2026.com` addresses in `index.html` if your final address is different (section 4), and share the link.

---

## 7. Notes

* **Fonts:** Cinzel, Great Vibes, Cormorant Garamond and Montserrat load from Google Fonts without blocking the page, and the envelope screen
  shows instantly. If a phone cannot reach Google Fonts, elegant system serif fonts are used instead. For maximum reliability on poor networks you
  can self-host the fonts (download the `.woff2` files from <https://gwfh.mranftl.com/fonts> and add `@font-face` rules to `styles.css`).
* **Accessibility:** semantic sections, alt text on photos, visible keyboard focus, labelled form fields with error messages, accordion buttons with
  `aria-expanded`, and the lightbox supports arrows, Escape and swipe. With "Reduce motion" turned on in the phone settings, the envelope is replaced by a
  simple fade and scroll animations are switched off.
* **Skip link:** a "Skip" button on the envelope jumps straight to the page (music still starts).
* **Colours** are CSS variables at the top of `styles.css` (`--plum`, `--burg`, `--gold`, `--gold-hi`, `--lilac`, `--onion`, `--ivory`).
