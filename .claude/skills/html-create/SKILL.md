---
name: html-create
description: Generate a complete HTML page based on user requirements. Use when the user wants to create a new HTML file with modern styling and responsive design.
disable-model-invocation: true
allowed-tools: Write, Read, Glob
argument-hint: [filename] [description]
---

# HTML Page Generator

Generate a complete, modern HTML file based on the user's requirements.

## Input

- `$ARGUMENTS[0]` — The filename for the HTML file (e.g., `index.html`). If not provided, default to `index.html`.
- Remaining arguments — A description of the page to generate.

## Instructions

1. **Parse the arguments**: Extract the filename from `$1` and the page description from the remaining arguments (`$ARGUMENTS`).
2. **Generate a complete HTML file** that includes:
   - `<!DOCTYPE html>` declaration
   - Proper `<html lang="zh-CN">` tag (use appropriate lang based on user's language)
   - `<head>` section with:
     - `<meta charset="UTF-8">`
     - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
     - A meaningful `<title>`
     - Embedded `<style>` block with modern CSS (CSS variables, flexbox/grid, responsive design)
   - `<body>` section with semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, etc.)
3. **Styling guidelines**:
   - Use CSS custom properties (variables) for colors and spacing
   - Use a clean, modern design with good typography
   - Ensure responsive design with media queries where needed
   - Use `box-sizing: border-box` globally
   - Include smooth transitions and subtle hover effects where appropriate
   - Use a professional color palette
4. **Code quality**:
   - Well-indented, readable code
   - Semantic HTML elements
   - Accessible markup (alt attributes, aria labels where needed)
   - No external dependencies — everything self-contained in a single HTML file
5. **Write the file** to the current working directory using the Write tool.

## Example Usage

```
/html-create landing.html A product landing page with hero section, features grid, and contact form
/html-create dashboard.html An admin dashboard with sidebar navigation and data cards
/html-create A simple portfolio page
```

## Output

After writing the file, briefly summarize:
- The filename and path created
- Key sections/components included
- How to open and preview the file
