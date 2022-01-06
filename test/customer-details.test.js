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
