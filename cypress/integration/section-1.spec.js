const { Section1 } = require('../objects/section-1')

describe('Problem 1', () => {

	it('Test1',() => {

    const name = 'Name';
    const age = 25;
    /*go to link*/
    cy.visit('http://localhost:8080/section-1');

    /*table not existing test*/
		cy.get('[id="alaya-table"]').should('not.be.visible');

    /*click show Table*/
	  cy.get('[id^=table-toggle-button]').contains('Show table').click();

    /* table is 5 columns wide*/
    cy.get('.table-header').find('th').should('have.length', 5);
    
    /*Assert that the table is 10 rows long, excluding the first (header) row*/
    cy.get('[id="alaya-table"]')
    .find('tr')
    .then(row => {
    const rowCount = Cypress.$(row).length - 1;
    expect(rowCount).to.equal(10);
    });

    /*Assert that an admin has the ID of 1*/
    cy.get('tr').eq(1).contains('admin');

   
  
    /*trying to figure out how to iterate through the table, can only find the first value so just doing the checks which containuser*/
    cy.get('tr').eq(3).contains('user');
    cy.get('tr').eq(4).contains('user');
    cy.get('tr').eq(5).contains('user');
    cy.get('tr').eq(7).contains('user');
    cy.get('tr').eq(8).contains('user');
    cy.get('tr').eq(10).contains('user');






    


    /*Form Portion*/
  
    /*form not existing test*/
    cy.get('[id="alaya-form"]').should('not.be.visible');

    /*click form button*/
    cy.get('[id^=form-toggle-button]').contains('Show Form').click();

    /*form is visible*/
    cy.get('[id="alaya-form"]').should('exist');
    
    /*fill Name, age + gender and validating vales exist inside*/
    cy.get('[id="fullName"]').type(name);
    cy.get('[id="age"]').type(age);
    cy.get('[id="fullName"]').should('have.value', name);
    cy.get('[id="age"]').should('have.value', age);
    cy.get('[id="gender"]').select('female');
    cy.get('[id="gender"]').should('have.value', 'female');

    /*checking off nurse textbox*/
    cy.get('[id="nurse"]').click();

    /*clicking on submit + validating popup*/
    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    .get('[id="submit"]').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Form submitted!')      
    })  

    

	})

 


  /**
   * Example:
   * To access assertSampleApiResponse() from Section1, you can do: Section1.actions.assertSampleApiResponse();
   *
   * Test away!
   */
})
