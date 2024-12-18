describe('Teste da API - Página de Login', () => {
    const baseUrl = 'https://serverest.dev';

    it('Deve validar status code 400, campo email em branco e mensagem de validação de email do back-end', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/login`,
            failOnStatusCode: false, // Permite continuar mesmo que o status não seja 2xx
            body: {
                email: '', // Email em branco
                password: 'Teste!@#45',
            },
        }).then((response) => {
            // Valida o status HTTP
            expect(response.status).to.eq(400);

            // Inspeciona a estrutura do body para validar o campo correto
            expect(response.body).to.have.property('email', 'email não pode ficar em branco');
        })
    })

    it('Deve validar status code 400, campo senha em branco e mensagem de validação de senha do back-end', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/login`,
            failOnStatusCode: false, // Permite continuar mesmo que o status não seja 2xx
            body: {
                email: 'teste@mail.com',
                password: '', // Senha em branco
            },
        }).then((response) => {
            // Valida o status HTTP
            expect(response.status).to.eq(400);

            // Inspeciona a estrutura do body para validar o campo correto
            expect(response.body).to.have.property('password', 'password não pode ficar em branco');
        })
    })
});