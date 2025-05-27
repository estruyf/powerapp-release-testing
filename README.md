# Integrate Playwright tests for Power Apps into your DevOps process

Tired of Power Platform solutions that feel like being held together by duct tape and bubble gum? You're not alone. In this session, Luise and Elio will discuss why proper testing is often overlooked in Power Apps development and how we can change that game. We'll introduce you to Playwright, your new best friend for automated testing, and show you why it's a perfect match for Power Apps. We'll cover the essentials of making your apps test-friendly and walk you through some common tests to get you started. But we won't stop there. We'll show you how to take your testing to the next level by automating the process and seamlessly integrating it into your development pipeline. By the end of this session, you'll have a clear roadmap for releasing rock-solid Power Apps that'll make your users (and your sanity) thank you.

Session presented by [Luise Freese](https://www.linkedin.com/in/luisefreese) and [Elio Struyf](https://eliostruyf.com).

[Download the slides](./Playwright_Release_Testing-Luise_Elio.pdf)

## Project Structure

- `.demo/`: Contains the presentation slides and demo resources
   - Install the [Demo Time](https://marketplace.visualstudio.com/items?itemName=eliostruyf.vscode-demo-time) extension for Visual Studio Code
   - Start the presentation from the Demo Time panel
- `e2e/` — Main folder for E2E tests and Playwright configuration
  - `tests/` — Test specifications (e.g., `powerapps.spec.ts`, `mfa.setup.ts`)

## Getting Started

### Installation

1. Navigate to the `e2e` directory:
   ```sh
   cd e2e
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running Tests

To run all Playwright tests:
```sh
npm run test:ui
```
