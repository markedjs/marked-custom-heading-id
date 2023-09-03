import { Marked } from 'marked';
import cusomtHeadingId from '../src/index.js';

describe('custom-heading-id', () => {
  let marked;
  beforeEach(() => {
    marked = new Marked();
  });

  test('no options', () => {
    marked.use(cusomtHeadingId());
    expect(marked.parse('# heading {#custom-id}')).toBe('<h1 id="custom-id">heading</h1>\n');
  });

  test('slug id if no custom id specified', () => {
    marked.use(cusomtHeadingId());
    expect(marked.parse('# heading')).toBe('<h1>heading</h1>\n');
  });
});
