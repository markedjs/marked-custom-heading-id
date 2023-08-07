import { marked } from 'marked';
import cusomtHeadingId from '../src/index.js';

describe('custom-heading-id', () => {
  beforeEach(() => {
    marked.setOptions(marked.getDefaults());
    marked.use({ headerIds: true });
  });

  test('no options', () => {
    marked.use(cusomtHeadingId());
    expect(marked('# heading {#custom-id}')).toBe('<h1 id="custom-id">heading</h1>\n');
  });

  test('slug id if no custom id specified', () => {
    marked.use(cusomtHeadingId());
    expect(marked('# heading')).toBe('<h1 id="heading">heading</h1>\n');
  });
});
