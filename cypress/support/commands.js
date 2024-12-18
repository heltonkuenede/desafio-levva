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

    // Visita a URL do card específico e força para abrir na mesma aba
    cy.visit(url);
});
