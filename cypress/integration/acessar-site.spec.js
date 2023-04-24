/// <reference types="cypress" />

describe('Realizar acesso', () => {

    it('Acessar site sandbox, realizar login com demo, traduzir para português acessar novo curso e preencher campos e sair', () => {
        cy.visit('https://sandbox311.moodledemo.net/login/index.php')
        cy.get('#username').type('admin');
        cy.get('#password').type('sandbox');
        cy.get('#rememberusername').click();
        cy.get('#loginbtn').click();
        cy.get('[class="dropdown-toggle nav-link"]').click();
        cy.get('[lang="pt"]').click();
        cy.get('.mt-1 > ul > li > .list-group-item > .ml-0 > .media > .media-body').click();
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('#linkcourses > .container > :nth-child(1) > .col-sm-9 > .list-unstyled > :nth-child(4) > a').click();
        cy.get('#id_fullname').type('automatizando com cypress');
        cy.get('#id_shortname').type('cypress0600');
        cy.get('#id_idnumber').type('061000');
        //clicando no botão cadastrar
       //cy.get('#id_saveanddisplay').click();
       cy.get('#action-menu-toggle-1').click();
       cy.get('#actionmenuaction-6').click();
       cy.get('.login > a').click();
    })
})