# Coding Rules Landing Page Portfolio rzkjanuarr.com

## Bahasa

- Komentar kode pakai Bahasa Indonesia
- Nama variabel tetap bahasa Inggris

## Framework

- Gunakan Astro
- Gunakan TailwindCSS V4

## Components

- Reusable & modular!
- File max 200 baris!
- Section dipisahkan: NAVBAR, HERO, CLIENTS / HISTORY WORK, MISSION STATEMENT, SERVICES, PROJECTS, TESTIMONIALS, FOOTER
- Gunakan responsive layout mobile first lalu tablet dan destkop

## Contoh Design Visual

- Gunakan yang sudah disediakan pada /assets/example/exam-design.png

## Color dan Fonts

- Gunakan yang sudah disediakan pada /assets/fonts/boldense/ atau /assets/fonts/inter/
- Gunakan berikut ini :

```json
{
  "text": {
    "light": {
      "primary": "#000000",
      "secondary": "#5E5E5E",
      "brand": "#D65231",
      "on_color": "#000000"
    },
    "dark": {
      "primary": "#000000",
      "secondary": "#5E5E5E",
      "brand": "#D65231",
      "on_color": "#000000"
    }
  },
  "button": {
    "light": {
      "primary": "#CC6248",
      "primary_hover": "#D65231",
      "primary_pressed": "#66281B"
    },
    "dark": {
      "primary": "#CC6248",
      "primary_hover": "#D65231",
      "primary_pressed": "#66281B"
    }
  },
  "surface": {
    "light": {
      "primary": "#FAFBFF",
      "secondary": "#FFFFFF",
      "tertiary": "#F0F3FF",
      "primary_opacity_90": "rgba(250,251,255,0.9)"
    },
    "dark": {
      "primary": "#0F0F0F",
      "secondary": "#16171A",
      "tertiary": "#16171A",
      "primary_opacity_90": "rgba(15,15,15,0.9)"
    }
  },
  "border": {
    "light": {
      "border_100": "#F0F3FF"
    },
    "dark": {
      "border_100": "#F0F3FF"
    }
  }
}
```

```json
{
  "typography": {
    "font_family": {
      "primary": "Boldonse",
      "secondary": "Inter Display"
    },
    "type_scale": {
      "display": {
        "font_size": 120,
        "font_weight": 400,
        "line_height": 1.1
      },
      "headline": {
        "font_size": 64,
        "font_weight": 400,
        "line_height": 1.2
      },
      "title": {
        "font_size": 32,
        "font_weight": 600,
        "line_height": 1.3
      },
      "body_large": {
        "font_size": 24,
        "font_weight": 400,
        "line_height": 1.4
      },
      "body_large_semibold": {
        "font_size": 24,
        "font_weight": 600,
        "line_height": 1.4
      }
    }
  }
}
```

## Image

- Gunakan yang sudah disediakan pada /assets/images/arkana.jpg, /assets/images/gemilang.jpg, /assets/images/maxxi.png, /assets/images/giftline.jpg -> Untuk Section Histori Work
- Gunakan yang sudah disediakan pada /assets/images/hero.png -> Untuk Section Hero
- Untuk section yang lain jika membutuhkan image maka gunakan unsplash secara random dengan ketentuan sebagai berikut ini :
- Gunakan Unsplash untuk gambar random berkualitas tinggi
- Format URL: `https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w={width}&q=80`
- Foto harus relevan: bisnis kecil, kasir, toko, UMKM, transaksi
- Wajib tambahkan `alt` yang deskriptif dan `loading="lazy"` untuk gambar below-fold

## Best Practices

- Gunakan arrow function
- Destructuring props
- Hindari duplicate code
- Tailwind spacing konsisten: 4 / 8 / 16 / 32 px
- Animasi minimal: hover & scroll
- Pada setiap Section diwajibkan membuat Folder semisal Navbar maka didalam Navbar -> NavbarView.astro & NavbarViewModel.astro
