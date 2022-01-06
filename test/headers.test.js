import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block
  it('check for accessibility' ,async () => {
    const el = await fixture(html`<loan-header></loan-header>`);
    expect(el).to.be.accessible;
  });
});
