import { html, fixture, expect } from '@open-wc/testing';
import  Sinon  from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

const el = await fixture(html`<basic-details><basic-details>`);

const input_data = {
  type: 'homeloan',
  amount: 100000,
  period:2
};

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

  it('Should render LionInputAmount', async () => {
    const lionInputAmount = await fixture(html`<lion-input-amount></lion-input-amount>`);
    expect(lionInputAmount).to.be.accessible;
  });

  it('Should render LionInputRange', async () => {
    const lionInputRange = await fixture(html`<lion-input-range></lion-input-range>`);
    expect(lionInputRange).to.be.accessible;
  });

  it('Should show form input fields', async () => {
    const lionInput = await fixture(html`<lion-input .modelValue = ${input_data.type}></lion-input>`);
    const lionInputAmount = await fixture(html`<lion-input-amount .modelValue = ${input_data.amount}></lion-input-amount>`);
    const lionInputRange = await fixture(html`<lion-input-range .modelValue = ${input_data.period}></lion-input-range>`);
    expect(lionInput.modelValue).to.equal('homeloan');
    expect(lionInputAmount.modelValue).to.equal(100000);
    expect(lionInputRange.modelValue).to.equal(2);
  });

  it('Should check_captureDetails function called', async () => {
    const submitSpy = Sinon.spy(el, '_captureDetails');
    const res = el._captureDetails();
    expect(res).to.equal(undefined);
  });

  it('Should check _numToWord function called', async () => {
    const submitSpy = Sinon.spy(el, '_numToWord');
    const res = el._numToWord();
    expect(res).to.equal(undefined);
  });

});
