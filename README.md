# finance-academy


A game-inspired institutional finance learning experience covering FX cash, FX options, rates, credit, commodities, and cross-asset macro.

## Run locally

No dependencies are required. From this directory, run:

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## UI tests

The Playwright tests use the locally installed Google Chrome. Install the test dependencies and run:

```bash
npm install
npm test
```

Use `npm run test:ui` to open Playwright's interactive test runner.

Every test run records a trace with before/action/after snapshots. After running the tests, open the HTML report:

```bash
npm run test:report
```

Select a test, open its **Trace** attachment, and click each action in the timeline to inspect its snapshot.

## Features

- Six-desk institutional markets learning path
- Side-by-side English and simplified Chinese explanations
- Child-friendly Chinese examples grounded in everyday life
- Interactive FX spot lesson and knowledge check
- XP, levels, daily goals, saved progress, and unlock states
- Trading-floor scenario practice
- Searchable market glossary
- Responsive desktop and mobile layouts

Progress is stored locally in the browser with `localStorage`.

> Educational content only. This project does not provide investment advice or represent any financial institution.
>>>>>>> 0ff0a11 (Inital commit for finace learning project)
