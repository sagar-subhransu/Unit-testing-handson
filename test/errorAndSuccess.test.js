import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ',  () => {
  it('check for accessibility' ,async () => {
    const el = await fixture(html`<loan-success></loan-success>`);
    expect(el).to.be.accessible;
  });
});

describe('error screen',  () => {
  it('check for accessibility' ,async () => {
    const errorEl = await fixture(html`<loan-error></loan-error>`);
    expect(errorEl).to.be.accessible;
  });
});
