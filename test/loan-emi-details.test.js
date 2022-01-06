import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  // Write test cases inside this block
  it('check for accessibility' , () => {
    const el = fixture(html`<loanemi-details></loanemi-details>`);
    expect(el).to.be.accessible;
  });
});
