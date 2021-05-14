# marked-custom-heading-id

Specify a custom heading id in headings with the [Markdown Extended Syntax](https://www.markdownguide.org/extended-syntax/#heading-ids) `# heading {#custom-id}`

The heading will be rendered with the string between `{#` and `}`

The id must be a valid id with the following criteria:

  - Must start with a letter (`A-Z`, `a-z`)
  - Must only contain word characters (`A-Z`, `a-z`, `0-9`, `_`) or dashes (`-`)

# Usage

```js
const marked = require("marked");
const customHeadingId = require("marked-custom-heading-id");

// or ES Module script
// import marked from "https://cdn.jsdelivr.net/gh/markedjs/marked/lib/marked.esm.js";
// import this extension from "https://cdn.jsdelivr.net/gh/UziTech/marked-custom-heading-id/lib/index.mjs";

marked.use(customHeadingId(options));

marked("# heading {#custom-id}");
// <h1 id="custom-id">heading</h1>
```
