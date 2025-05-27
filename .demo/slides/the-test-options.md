---
theme: monomi
layout: section
---

# What options do we have for testing this app?

---

| Feature / Tool           | Manual Testing            | Test Studio               | Power Apps Test Engine (Preview) | Playwright                       |
| ------------------------ | ------------------------- | ------------------------- | -------------------------------- | -------------------------------- |
| **Effort to Run**            | High (repetitive, manual) | Medium (semi-automated)   | Low (automated via CLI)          | Low (automated via CLI)          |
| **Repeatability**            | Low                       | Medium                    | High                             | High                             |
| **UI Coverage**              | Full (but inconsistent)   | Limited to basic controls | Simulates control interactions   | Full UI automation (DOM-based)   |
| **Test Authoring**           | N/A                       | Point-and-click           | YAML + Power Fx (structured)     | JavaScript/TypeScript scripts    |
| **Version Control Friendly** | ❌                        | ❌                        | ✅ (tests stored in source)      | ✅                           |
| **Suitable for CI/CD**       | ❌                        | ❌ (no CLI support)       | ✅ (via Power Platform CLI)      | ✅ (easily with any pipeline)    |
| **Debuggability**         | Manual observation        | Very limited logs         | Logs, screenshots, trace files   | Screenshots, logs, video, traces |
| **Learning Curve**          | None                      | Low                       | Medium (Power Fx + YAML)         | Medium (JS + browser concepts)   |
| **Cross-Platform/Browser**   | ✅ (human)                | ❌                        | ✅ (Chromium, Firefox, WebKit)   | ✅ (Chromium, Firefox, WebKit)   |
| **Production Readiness**     | ✅                        | ✅                        | ❌ (Preview; not for production) | ✅              |

<style>
  table {
    margin: 0 auto;
  }

  th, td {
    font-size: 11px;
  }
</style>

---
layout: section
---

# Why Playwright?

---

# Why Playwright?

- Ready for production (not just a preview)
- Uses popular programming languages (JavaScript/TypeScript)
- Widely adopted for web testing and automation
- Works on all major browsers and operating systems
- Gives you full control and easy debugging
- Simple to add to your CI/CD pipelines
- No vendor lock-in—use it anywhere
- Large, active community for support

---
layout: section
---

# Starting with Playwright

---
layout: image-right
image: .demo/images/website.png
---

# Using Playwright

<br />
<br />

### Navigation

```ts
await page.goto('https://eliostruyf.com');
```

<br />

### Get an element

```ts
const title = page.locator('header h2');
```

<br />

### Test assertion

```ts
await expect(title).toHaveText('Elio Struyf');
```

<dt-show clicks="1">

<dt-arrow
  x1="365"
  y1="390"
  x2="470"
  y2="25"
  line-color="#ff69b4"
  line-width="2"
  arrow-head="both">
</dt-arrow>

</dt-show>
