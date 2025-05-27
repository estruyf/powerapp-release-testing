---
theme: monomi
layout: section
---

# Power Apps is a weird beast

---
layout: section
---

# 🧚‍♀️ It uses magic 🪄

---

![](.demo/images/element.png)

---

![](.demo/images/element-selection.png)

---
layout: section
---

# And it keeps a dinosaur alive 🦖

---

# The canvas (read iframe)

![](.demo/images/the-canvas.png)

---
layout: section
---

# Playwright tests for Power Platform

---

# Retrieving an element

```ts
// Get the iframe canvas
const iframe = page.frameLocator("iframe#fullscreen-app-host");
const publishedCanvas = iframe.locator("#publishedCanvas");

// Retrieve the control to test/use
const textInputControl = publishedCanvas.locator(`div[data-control-name='TextInput1']`);
const textInput = textInputControl.locator("input");

// Use the control
await textInput.fill("Hello World");
```

---

# The simplified version with M365 Helpers

```ts
// Get the iframe canvas
const appFrame = await getAppFrame(page);

// Retrieve the control to test/use
const textInput = getInput(appFrame, "TextInput1");

// Use the control
await textInput.fill("Hello World");
```
