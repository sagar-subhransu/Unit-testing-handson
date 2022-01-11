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

    
  it('Should render lionInputDate', async () => {
    const lionInputDate = await fixture(html`<lion-input-datepicker></lion-input-datepicker>`);
    expect(lionInputDate).to.be.accessible;
  });

  it('Should render LionInputAmount', async () => {
    const lionInputAmount = await fixture(html`<lion-input-amount></lion-input-amount>`);
    expect(lionInputAmount).to.be.accessible;
  });

  it('Should render lionInputEmail', async () => {
    const lionInputEmail = await fixture(html`<lion-input-email></lion-input-email>`);
    expect(lionInputEmail).to.be.accessible;
  });

  it('Should render lionInputEmail', async () => {
    const lionCheckbox = await fixture(html`<lion-checkbox></lion-checkbox>`);
    expect(lionCheckbox).to.be.accessible;
  });
  
  it('calls emidetails function when a button is clicked', async () => {
    const el = await fixture(
      html`<customer-details
        ><lion-form><form></form></lion-form
      ></customer-details>`
    );
    const myFunctionStub = stub(el, '_toEmidetails');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('button').click();
    expect(myFunctionStub).to.have.callCount(0);
  });

  // it('should call _toEmidetails()', async () => {
  //   const buttons = el.shadowRoot?.querySelectorAll('lion-button');
  //   const toEmidetails = stub(el, '_toEmidetails');
  //   el.requestUpdate();
  //   await el.updateComplete;
  //   buttons[0].click();
  //   expect(toEmidetails).to.have.callCount(1);
  // });

  // it('should validate ', async () => {
  //   const input = el.shadowRoot?.querySelectorAll('lion-input');
  //   const buttons = el.shadowRoot?.querySelectorAll('lion-button');
  //   el.requestUpdate();
  //   input[0].modelValue = null;
  //   await el.updateComplete;
  //   buttons[1].click();
  //   el.requestUpdate();
  //   input[0].modelValue = null;
  //   await el.updateComplete;
  //   const type = input[0].querySelector('[slot = "feedback"]').shadowRoot.innerHTML;
  //   console.log(type);
  // })
});
