import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files

  it('Should render title ', async () => {
    const el = await fixture(html`<basic-details><basic-details>`);
    const h2 = el.shadowRoot?.querySelector('h2');
    expect(h2).to.exist;
  });
  it('Should render LionInput', async () => {
    const el = await fixture(html`<basic-details><basic-details>`);
    const lionInput = await fixture(html`<lion-input></lion-input>`);
    expect(lionInput).to.be.accessible();
  });

});
