---
theme: monomi
layout: default
---

👮‍♀️

<style>
  p {
    font-size: 300px;
    text-align: center;
  }
</style>

---
layout: section
---

# AUTH

<style>
  h1 {
    font-size: 250px !important;
    text-align: center;
  }
</style>

---

# The options

```mermaid
flowchart LR
  a[Playwright authentication]
  b[Username and password]
  c[MFA]
  d[Using Time-based One-Time Password]
  e[Using an auth state]
  f[Start testing]

  a --> b
  b --> f
  a --> c
  c --> d
  d --> f
  c --> e
  e --> f
```
