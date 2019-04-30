// import { get } from 'http';

// const dataBox = cy.get('formBox')

describe('full page', () => {
	beforeEach(() => {
		cy.visit('');
	});
	describe('checking off list', () => {
		it('sstrikes through a li when the text is clicked', () => {
			cy.get('.listItem')
				.first()
				.click()
				.should('have.attr', 'style', 'text-decoration-line: line-through;');
		});
		it('strikes through a li when the box is clicked', () => {
			cy.get('.chkBox')
				.first()
				.click();
			cy.get('.listItem')
				.first()
				.should('have.attr', 'style', 'text-decoration-line: line-through;');
		});
		it('checks the checkbox when the li is clicked', () => {
			cy.get('.listItem')
				.first()
				.click();
			cy.get('.chkBox')
				.first()
				.should('have.prop', 'checked', true);
		});
	});
	describe('input box', () => {
		it('has a list element', () => {
			cy.get('#list')
				.children()
				.should('have.length', 4);
		});
		it('can add an item to the list', () => {
			cy.get('#list');
			cy.get('#formBox').type('whatever {enter}');
			cy.get('#list')
				.children()
				.should('have.length', 5);
		});
	});
});
