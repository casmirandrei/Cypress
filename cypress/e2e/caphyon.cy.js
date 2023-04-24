describe('Caphyon Test', () => {
  it('Test that an user can successfully navigate among the application pages', () => { 
    cy.visit('https://www.demoblaze.com/');

    cy.contains('Phones').click();
    cy.contains('Laptops').click();
    cy.contains('Monitors').click();
   
  });

  it('Test that an user can successfully add a product(of your choice) from "Laptops" category and place an order', () => {
    cy.visit('https://www.demoblaze.com/');
    cy.contains('Laptops').click()
    cy.contains('MacBook air').click();

    cy.contains('Add to cart').click();
    
    cy.contains('Cart').click();
    cy.url().should('include', '/cart.html');

    cy.contains('Place Order').click();
  

    cy.get('#orderModalLabel').should('be.visible');
    cy.get('#name').type('Andrei Casmir');
    cy.get('#country').type('Romania');
    cy.get('#city').type('Craiova');
    cy.get('#card').type('1234567890123456');
    cy.get('#month').type('07');
    cy.get('#year').type('2028');
    cy.contains('Purchase').click();
  });
  it('Test that an user can successfully add multiple products from different categories and that he can successfully remove some of them from the cart before submitting the order', () => {
    cy.visit('https://www.demoblaze.com/'); 
    cy.contains('Phones').click();
    cy.contains('Nexus 6').click();

    cy.contains('Add to cart').click();

    cy.contains('Home').click();
    cy.contains('Monitors').click();
    cy.contains('Apple monitor 24').click();
    cy.contains('Add to cart').click();
    
    cy.contains('Home').click();
    cy.contains('Laptops').click();
    cy.contains('Sony vaio i5').click();
    cy.contains('Add to cart').click();

    cy.contains('Cart').click();
    cy.contains('Delete').click();
    cy.contains('Place Order').click();

    cy.get('#orderModalLabel').should('be.visible');
    cy.get('#name').type('Andrei Casmir');
    cy.get('#country').type('Romania');
    cy.get('#city').type('Craiova');
    cy.get('#card').type('1234567890123456');
    cy.get('#month').type('07');
    cy.get('#year').type('2028');
    cy.contains('Purchase').click();
   
  });
  it('Test that an user can successfully send a message to Contact', () => {
      cy.visit('https://www.demoblaze.com/');
      cy.contains('Contact').click(); // aici da eroare spunand ca nu gaseste pagina
      cy.get('#orderModalLabel').should('be.visible');
      cy.get('#email').type('casmirandrei@yahoo.com');
      cy.get('#name').type('Andrei Casmir');
      cy.get('#message').type('I wanted to contact you to say nothing');
    });
  it('Test that an user can successfully Sign Up', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.contains('Sign Up').click(); // aceeasi eroare ca mai sus - nu gaseste pagina
        cy.get('#orderModalLabel').should('be.visible');
        cy.get('#username').type('andreicasmir');
        cy.get('#password').type('Andrei123@');
        cy.contains('Sign up').click();
      });
  it('Test that an user can successfully Sign Up', () => {
    cy.visit('https://www.demoblaze.com/');
    cy.contains('Log in').click(); // aceeasi eroare ca mai sus - nu gaseste pagina
    cy.get('#orderModalLabel').should('be.visible');
    cy.get('#username').type('andreicasmir');
    cy.get('#password').type('Andrei123@');
    cy.contains('Log in').click();
  });

});
