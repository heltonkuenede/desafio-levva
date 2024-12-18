// cypress/support/environments.js

export function setupEnv() {
    const environment = Cypress.env('environment') || 'teste';
  
    if (environment === 'teste') {
      const urlTeste = Cypress.env('url_teste');
      if (urlTeste && urlTeste.front) {
        Cypress.env('URL', urlTeste.front);
      } else {
        throw new Error('Variável de ambiente url_teste.front não está definida.');
      }
    }
  }
  