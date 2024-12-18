# automacao-cypress-desafio-levva

Índice

1. Introdução
2. Pré-requisitos
3. Instalação
4. Configuração
5. Execução dos Testes

1. Introdução

- Este projeto utiliza Cypress para automatizar testes de interface web e API. O objetivo é garantir a qualidade, cobertura e rapidez - - nos testes da aplicação.

2. Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (versão 6 ou superior)
- Git
- Visual Studio Code ou editor de escolha

3. Instalação

- Clone o repositório: `git clone https://github.com/heltonkuenede/desafio-levva.git
- Acesse a pasta do projeto: cd desafio-levva
- Instale as dependências: npm install
- Instale o Cypress: npm install cypress --save-dev

4. Configuração

- Crie um arquivo cypress.env.json com variáveis de ambiente.
- Configure o arquivo cypress/support/index.js com comandos personalizados.
- Defina a URL base no arquivo cypress/support/commands.js.

5. Execução dos Testes

- Abra o Cypress: npx cypress open
- Execute todos os testes: npx cypress run
- Execute testes específicos: npx cypress run --spec "nome-do-arquivo.spec.js"