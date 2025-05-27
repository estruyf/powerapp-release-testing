---
theme: monomi
layout: default
---

# More test ideas with Playwright

- Test your views, forms, and controls
- Test your business logic
- Test your data connections
- Test your security and permissions
- Test accessibility

---
layout: section
---

# ALM for Power Apps

---

![](.demo/images/ci-cd.jpg)

<style>
  img {
    height: 450px;
    margin: 0 auto;
  }
</style>

---

# The options

## - GitHub Actions

## - Azure DevOps

## - Power Platform pipelines

---
layout: image
image: .demo/images/boat.png
---

---

# The typical DevOps process

<br />
<br />
<br />

```mermaid
flowchart LR
  dev[Dev]
  test[Test]
  prod[Prod]

  dev --> test --> prod
```

---

# The typical DevOps process

<br />
<br />
<br />

```mermaid
flowchart LR
  dev[Dev]
  e2e1[E2E]
  test[Test]
  e2e2[E2E]
  manual[Manual Validation]
  prod[Prod]

  dev --> e2e1 --> test --> e2e2 --> manual --> prod
```

Dev
- Export from DEV environment
  - **Managed** and **unmanaged** solutions
- Unpack the solution to have the code

Test
- Import the **managed** solution

Prod
- Import the **managed** solution

---

DEMO: Playwright in GitHub Actions

---

# Outro

- Present ourselves

---
layout: image
image: .demo/images/thank-you.png
---

<!-- # Thank you! -->