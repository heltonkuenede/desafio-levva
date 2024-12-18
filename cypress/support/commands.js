// cypress/support/commands.js

import { setupEnv } from './environments';

setupEnv();

const cards = require('./../../cards-config.json'); // Carrega o arquivo JSON com as informações dos cards

Cypress.Commands.add('loginToCard', (cardName) => {
    // Verifica se o cardName existe no arquivo JSON
    if (!cards[cardName]) {
        throw new Error(`Card '${cardName}' não encontrado no arquivo cards-config.json`);
    }

    const { name, url, username, password } = cards[cardName];

    // Garanta que a variável de ambiente URL esteja definida corretamente
    const baseUrl = Cypress.env('URL');
    if (!baseUrl) {
        throw new Error('Variável de ambiente URL não está definida.');
    }

    // Visita a URL inicial definida na variável de ambiente
    cy.visit(baseUrl);

    // Encontra o card com base no nome
    cy.contains('.item-title', name).click();

    // Visita a URL do card específico e força para abrir na mesma aba
    cy.visit(url);

    // Insere o usuário e senha do card específico
    cy.get('#username').type(username);
    cy.get('#password').type(password);

    // Aguarda o iframe do reCAPTCHA carregar e clica no checkbox
    cy.wait(5000); // Tempo de espera ajustável conforme necessário
    cy.get('iframe[title="reCAPTCHA"]').should('be.visible').then($iframe => {
        const $body = $iframe.contents().find('body');
        
        // Aguarda o conteúdo do iframe estar acessível
        cy.wrap($body).find('.recaptcha-checkbox-border').should('be.visible').click();
    });

    // Clique no botão de login
    cy.get('#loginBtn').click(); // Substitua com o seletor correto do botão de login
});
