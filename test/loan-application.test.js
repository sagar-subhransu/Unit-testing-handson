import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  // Write test cases inside this block
  it('check for accessibility' ,async () => {
    const el = await fixture(html`<loan-application></loan-application>`);
    expect(el).to.be.accessible;
  });
});
