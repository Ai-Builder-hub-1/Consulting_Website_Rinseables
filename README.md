# Consulting website: rinseables.com

Edward Lewis's public consulting site, for rinseables.com and www.rinseables.com. It is built from the approved design (B · Problem-first) on the Claude Design canvas.

It is a plain static site with no build step and no backend:

- `index.html`: all page content
- `styles.css`: layout and styling, responsive down to phone width
- `script.js`: the mobile menu and the "Run example" stepper under Problem 1
- `assets/edward-lewis.webp`: the headshot

## Preview locally

```bash
python3 -m http.server 8795
```

Then open http://localhost:8795.

## Contact links

- Email: `Consulting@rinseables.com` (the "Email Edward" buttons and the contact line)
- Booking: the three "Book a 15-minute call" buttons open https://calendly.com/lewis12edward/introduction in a new tab.

## Hosting

Hosting isn't set up yet. Any static host can serve this folder as-is, for example GitHub Pages, Netlify or Cloudflare Pages. Point rinseables.com and www.rinseables.com at whichever host is chosen.

## Content rules

- Northside Plumbing, Dana Brooks and Sam are fictional examples, and the site labels them that way.
- No client logos, testimonials or results figures until real ones exist.
- Internal tools are not named on this site.
