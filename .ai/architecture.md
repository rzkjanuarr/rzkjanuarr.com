# Landing Page Architecture Portfolio rzkjanuarr.com

## Struktur Halaman

- Navbar Section: Judul, tombol CTA (Work dan Contact)
- Hero Section: Image /assets/images/hero.png dan Text Branding (I'am RIZKI) (Android Engineer)
- CLIENTS / HISTORY WORK
- MISSION STATEMENT
- SERVICES
- PROJECTS
- TESTIMONIALS
- FOOTER

## Folder & File Structure

src/
├── components/
│ ├── ui/ # Button, Card, Input (reusable)
│ ├── layout/ # Navbar, Footer
│ └── sections/ # HeroView + HeroViewModel, NavbarView + NavbarViewModel, TestimonialView + TestimonialViewModel
├── pages/
│ └── index.astro
├── utils/ # Helper functions: formatPrice, scrollTo
├── assets/ # Gambar, icon, font
