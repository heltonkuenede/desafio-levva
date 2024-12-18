
describe('Desafio de Automação com Cypress', () => {

    beforeEach(() => {
        // Adicione uma visita à página inicial antes de cada teste, se necessário
        cy.visit(Cypress.env('URL'));
    });

    it('Cenário de Teste 01: Login - Campo obrigatório não preenchido - E-mail', () => {

        // Deve realizar a validação do campo e-mail
        cy.get('[data-testid="email"]');
        cy.get('[data-testid="senha"]').type("Teste!@#45"); // preenche o campo senha
        cy.get('[data-testid="entrar"]').click(); // clica no botão Entrar

        cy.wait(1000);
        // Deve validar se apresenta a mensagem de campo obrigatório
        cy.get('.alert > :nth-child(2)').invoke('text').then((erro) => {
            const msgErro = erro.trim();
            expect('Email é obrigatório').to.equal(msgErro);
        })
    })
});