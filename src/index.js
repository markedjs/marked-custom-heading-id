export default function customHeadingId() {
  return {
    useNewRenderer: true,
    renderer: {
      heading(text, depth) {
        /* istanbul ignore next */
        if (typeof text !== 'string') {
          depth = text.depth;
          text = text.text;
        }
        const headingIdRegex = /(?: +|^)\{#([a-z][\w-]*)\}(?: +|$)/i;
        const hasId = text.match(headingIdRegex);
        if (!hasId) {
          // fallback to original heading renderer
          return false;
        }
        return `<h${depth} id="${hasId[1]}">${text.replace(headingIdRegex, '')}</h${depth}>\n`;
      },
    },
  };
}
