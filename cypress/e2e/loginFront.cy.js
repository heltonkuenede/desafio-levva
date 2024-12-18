
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

  it('Cenário de Teste 02: Login - Campo obrigatório não preenchido - Senha', () => {

    // Deve realizar a validação do campo senha
    cy.get('[data-testid="email"]').type('teste@mail.com');  // preenche o campo e-mail
    cy.get('[data-testid="senha"]');
    cy.get('[data-testid="entrar"]').click(); // clica no botão Entrar

    cy.wait(1000);
    // Deve validar se apresenta a mensagem de campo obrigatório
    cy.get('.alert > :nth-child(2)').invoke('text').then((erro) => {
      const msgErro = erro.trim();
      expect('Password é obrigatório').to.equal(msgErro);
    })
  })

  it('Cenário de Teste 03: Cadastrar Usuário - Campo obrigatório não preenchido - Nome', () => {

    // Deve clicar no link 'Cadastrar-se'
    cy.get('[data-testid="cadastrar"]').click()

    // Deve realizar a validação do campo nome
    cy.get('[data-testid="nome"]')
    cy.get('[data-testid="email"]').type('teste@mail.com'); // preenche o campo e-mail
    cy.get('[data-testid="password"]').type('Teste!@#45'); // preence o campo senha
    cy.get('[data-testid="cadastrar"]').click() // clica no botão Cadastrar

    cy.wait(1000);
    // Deve validar se apresenta a mensagem de campo obrigatório
    cy.get('.alert > :nth-child(2)').invoke('text').then((erro) => {
      const msgErro = erro.trim();
      expect('Nome é obrigatório').to.equal(msgErro);
    })
  })

  it('Cenário de Teste 04: Cadastrar Usuário - Campo obrigatório não preenchido - E-mail', () => {

    // Deve clicar no link 'Cadastrar-se'
    cy.get('[data-testid="cadastrar"]').click()

    // Deve realizar a validação do campo nome
    cy.get('[data-testid="nome"]').type('Teste'); // preenche o campo nome
    cy.get('[data-testid="email"]')
    cy.get('[data-testid="password"]').type('Teste!@#45'); // preence o campo senha
    cy.get('[data-testid="cadastrar"]').click() // clica no botão Cadastrar

    cy.wait(1000);
    // Deve validar se apresenta a mensagem de campo obrigatório
    cy.get('.alert > :nth-child(2)').invoke('text').then((erro) => {
      const msgErro = erro.trim();
      expect('Email é obrigatório').to.equal(msgErro);
    })
  })

  it('Cenário de Teste 05: Cadastrar Usuário - Campo obrigatório não preenchido - Senha', () => {

    // Deve clicar no link 'Cadastrar-se'
    cy.get('[data-testid="cadastrar"]').click()

    // Deve realizar a validação do campo nome
    cy.get('[data-testid="nome"]').type('Teste') // preenche o campo nome
    cy.get('[data-testid="email"]').type('teste@mail.com'); // preenche o campo e-mail
    cy.get('[data-testid="password"]')
    cy.get('[data-testid="cadastrar"]').click() // clica no botão Cadastrar

    cy.wait(1000);
    // Deve validar se apresenta a mensagem de campo obrigatório
    cy.get('.alert > :nth-child(2)').invoke('text').then((erro) => {
      const msgErro = erro.trim();
      expect('Password é obrigatório').to.equal(msgErro);
    })
  })
});
