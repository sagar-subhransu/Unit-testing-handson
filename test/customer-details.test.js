import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

const el = await fixture(html`<customer-details>/</customer-details>`);

describe('customer details', () => {
  // Write test cases inside this block
  it('check for accessibility' ,() => {
    expect(el).to.be.accessible;
  });
  it('Should render title ', async () => {
      const h2 = el.shadowRoot?.querySelector('h2');
      expect(h2).to.exist;
    });
});
