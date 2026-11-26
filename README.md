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

Live at https://www.rinseables.com on GitHub Pages, served from the root of `main`. Every push to `main` republishes the site within a minute or two.

- Custom domain: `www.rinseables.com` (the `CNAME` file). `rinseables.com` redirects to it.
- HTTPS: GitHub's certificate covers both names and renews itself. "Enforce HTTPS" is on.
- DNS (GoDaddy): four `A` and four `AAAA` records on `@` point at GitHub Pages, and `www` is a `CNAME` to `ai-builder-hub-1.github.io`. Leave the Microsoft 365 email records (MX, SPF, autodiscover and the rest) alone.
- If the certificate ever stops renewing, clear the custom domain in Settings → Pages, save, then re-enter `www.rinseables.com` and save again.
- The repo is public, so commits use the GitHub noreply address, not a personal email.

## Content rules

- Northside Plumbing, Dana Brooks and Sam are fictional examples, and the site labels them that way.
- No client logos, testimonials or results figures until real ones exist.
- Internal tools are not named on this site.
