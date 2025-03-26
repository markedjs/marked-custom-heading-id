import { marked } from 'marked';
import customHeadingId from 'marked-custom-heading-id';

marked.use(customHeadingId());

marked('# heading {#custom-id}');
