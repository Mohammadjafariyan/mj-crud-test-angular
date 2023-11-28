const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
//const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { CustomerIndexComponent } = require('../../src/app/features/customer/customer-index/customer-index.component.ts');
const { TestBed } = require('@angular/core/testing');
const { FormsModule } = require('@angular/forms');

let customerIndexComponent;

When('the greeter says hello', function () {

  TestBed.configureTestingModule({
    imports: [FormsModule],
    declarations: [CalculatorComponent],
  }).compileComponents();

  const fixture = TestBed.createComponent(CustomerIndexComponent);
  customerIndexComponent = fixture.componentInstance;

});

Then('I should have heard {string}', function (expectedResponse) {
  assert.equal('hello', expectedResponse)
});
