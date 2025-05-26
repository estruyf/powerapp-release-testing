# Playwright Release Testing Presentation

This repository contains resources and end-to-end (E2E) tests for demonstrating Playwright's capabilities in release testing scenarios. It is designed for presentations and workshops to showcase how Playwright can be used to automate browser testing, validate application behavior, and generate useful reports.

## Project Structure

- `e2e/` — Main folder for E2E tests and Playwright configuration
  - `package.json` — Project dependencies and scripts
  - `playwright.config.ts` — Playwright configuration file
  - `constants/` — Shared constants for tests
  - `helpers/` — Utility functions for tests
  - `mocks/` — Mock data for test scenarios
  - `playwright-report/` — Generated Playwright HTML reports
  - `screenshots/` — Screenshots captured during test runs
  - `scripts/` — Helper scripts (e.g., OTP retrieval)
  - `test-results/` — Raw test result data and traces
  - `tests/` — Test specifications (e.g., `powerapps.spec.ts`, `mfa.setup.ts`)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Navigate to the `e2e` directory:
   ```sh
   cd e2e
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running Tests

To run all Playwright tests:
```sh
npx playwright test
```

To open the Playwright test report after a run:
```sh
npx playwright show-report
```

### Additional Scripts
- Custom scripts are available in the `scripts/` directory (e.g., `get-otp.mjs`).
- Screenshots and test traces are saved automatically for failed tests.

## Playwright Report
After running tests, an HTML report is generated in `e2e/playwright-report/`. Open `index.html` in your browser to view detailed results, traces, and screenshots.

## Contributing
Feel free to fork this repository and adapt it for your own Playwright demos or release testing needs.

## License
MIT
