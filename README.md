# 🛠️ Engineer's Day 2026 — Tribute Website

> *"Scientists study the world as it is; engineers create the world that has never been."* — Theodore von Kármán

A modern, responsive single-page tribute website built to commemorate **Engineer's Day 2026** and celebrate the innovators, problem-solvers, and builders of humanity's future.

---

## ✨ Features

1. **Industrial High-Tech Aesthetics**:
   - Curated industrial color palette: **Charcoal Gray** (`#0a0d14`, `#111622`), **Electric Blue** (`#00f0ff`, `#0ea5e9`), **Metallic Silver** (`#94a3b8`, `#e2e8f0`), and **Crisp White** (`#f8fafc`).
   - Geometric sans-serif headings (**Montserrat**), technical monospace telemetry accents (**JetBrains Mono** / **Fira Code**), and modern body typography (**Inter**).
   - Technical blueprint reticle background and coordinate grid.

2. **Continuous 60 FPS Anti-Gravity Effect**:
   - Hardware-accelerated CSS `@keyframes antiGravityFloat` with 3D translation, sinusoidal horizontal sway, rotation, and multi-depth parallax.
   - Semi-transparent engineering SVG icons floating upward infinitely:
     - ⚙️ **Spur Gear**
     - 🔲 **Microchip / IC**
     - 📐 **Drafting Compass**
     - 🔧 **Adjustable Wrench**
     - ⛑️ **Safety Hard Hat**
     - 💡 **Filament Lightbulb**
     - 🔌 **Circuit Nodes**
   - Interactive **Anti-Gravity Physics HUD** allowing toggling between *Normal*, *Zero-G* (deep space drift), and *Boost* speeds.

3. **Interactive Hero & Telemetry HUD**:
   - Bold headline: *"To the Builders of Tomorrow: Happy Engineer's Day."*
   - Sub-headline celebrating world builders and engineering disciplines.
   - Dual Call-to-Actions (CTAs) for instant tribute submission and wall exploration.
   - Live telemetry counters showing lines of code, infrastructure scale, global uptime, and dynamic tribute counts.

4. **Blueprint Manifesto & Quote Carousel**:
   - Technical blueprint card with corner laser reticles and coordinate tags.
   - Theodore von Kármán's iconic quote, with interactive navigation to quotes by **Sir M. Visvesvaraya**, **Margaret Hamilton**, **Nikola Tesla**, **Claude Shannon**, and **Dr. A.P.J. Abdul Kalam**.

5. **Interactive Gratitude Wall (Masonry Grid)**:
   - Dynamic cards honoring monumental engineering achievements.
   - Filterable by discipline: *Software & Systems*, *Civil & Infrastructure*, *Aerospace*, *Electrical & Energy*, *Bio & Genetic Engineering*.
   - Live search bar for instant keyword filtering.
   - Interactive **Applaud / Heart** counter with `localStorage` memory.
   - Subtle hover states that lift cards smoothly (`transform: translateY(-6px)`) with a glowing electric blue shadow.

6. **Live Tribute Submission Form**:
   - Inputs for *Your Name*, *Engineer's Name*, *Engineering Specialty*, and *Tribute Message*.
   - Real-time character counter and input validation.
   - Instant prepend into the Gratitude Wall with a glowing entrance animation.
   - Persistent client-side storage via `localStorage` (`engineers_day_tributes_2026`).

7. **Procedural Web Audio Synthesizer**:
   - Zero external audio files or downloads.
   - Generates pure harmonic sine chimes and acoustic clicks dynamically via the browser's native `AudioContext`.

---

## 🚀 How to Run Locally

Because this project is built with **zero external dependencies**, you can run it immediately in any modern web browser:

### Option 1: Direct File Opening
Double-click `index.html` or open it directly in Chrome, Firefox, Safari, or Edge:
```text
file:///d:/Playground/CivicStatic/EngineersDay2026/index.html
```

### Option 2: Local HTTP Server (Optional)
Run using Python:
```bash
python -m http.server 8080
```
Then navigate to `http://localhost:8080` in your browser.

---

## 📁 Project Structure

```
EngineersDay2026/
├── index.html        # Semantic HTML5 single-page application structure
├── style.css         # Industrial design system, anti-gravity keyframes & layout
├── script.js         # Anti-gravity engine, tribute manager, filters & Web Audio
└── README.md         # Project documentation and specifications
```

---

## 🏛️ Dedication

Commemorating **Sir Mokshagundam Visvesvaraya (1861–1962)** — Bharat Ratna, visionary civil engineer, statesman, and the inspiration behind Engineer's Day.