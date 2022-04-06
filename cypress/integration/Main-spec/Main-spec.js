describe('Main Page', () => {
  it('As a User, when I visit the page I should see a title', () => {
    cy.visit('http://localhost:3000')
    .get('h1')
    .should('contain', 'Sick Trick Wish List')
  })
  it('As a user, I should see cards with trick information on them', () => {
    cy.visit('http://localhost:3000')
    .get('div[class="trick-card"]')
    .first()
    .should('contain', 'regular treflip')
    .should('contain', 'Obstacle: flat ground')
  })
  it('As a user, I should be able to add a new trick', () => {
    cy.visit('http://localhost:3000')
    .get('select[name="stance"]').select('Switch')
    .get('input[name="name"]').type('kick flip')
    .get('select[name="obstacle"]').select('rail')
    .get('input[name="link"]').type('www.skate.com')
    .get('button').click()
    .get('div[class="trick-card"]')
    .contains('kick flip')
  })
})
