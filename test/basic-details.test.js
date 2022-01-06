import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

const el = await fixture(html`<basic-details><basic-details>`);

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  it('check for accessibility' ,() => {
    expect(el).to.be.accessible;
  });

  it('Should render title ', async () => {
    const h2 = el.shadowRoot?.querySelector('h2');
    expect(h2).to.exist;
  });

  it('Should render LionInput', async () => {
    const lionInput = await fixture(html`<lion-input></lion-input>`);
    expect(lionInput).to.be.accessible;
  });


});
