# Arbiter Selector — TFT Set 17

> 🌐 [Español](README.es.md)

A web tool to browse and experiment with the **Arbiter** trait from Teamfight Tactics Set 17.

## What's this?

In TFT Set 17, the Arbiter trait lets you create "divine laws" by pairing **causes** with **effects** on a 9×9 matrix. There are 72 valid combinations, and remembering them mid-game is a pain.

This tool puts everything at your fingertips: simulate a random roll, explore combinations freely, or browse the full database.

## Features

**🎲 Simulator**  
Rolls 3 random causes and 3 effects. Pick one pairing and see its values for 2 Arbiters (tier 2) and 3 Arbiters (tier 3). Don't like the hand? Hit re-roll.

**🔍 Explorer**  
Pick any cause from the 9 available and see which effects are valid. Share specific combinations via URL: `?cause=attacks-3x&effect=max-health`.

**📊 Database**  
Full 9×9 matrix with every valid and invalid combination, plus champion cards for all Arbiter units (Leona, Zoe, Diana, LeBlanc).

## Screenshots

![Simulator tab](screenshots/simulator.png)
![Explorer tab](screenshots/explorer.png)
![Database tab](screenshots/database.png)

## Tech stack

| Layer | Tech |
|-------|------|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | Vanilla CSS (dark theme) |
| Testing | Vitest (26 tests) |
| Bundle | ~68 KB gzipped |

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build → dist/
npm test          # run tests
```

## Live demo

Deployed on GitHub Pages: [ajeco1na.github.io/arbiter-selector](https://ajeco1na.github.io/arbiter-selector/)

---

Patch 17.2. Made to save you mental math during your games.
