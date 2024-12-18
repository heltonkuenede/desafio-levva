# automacao-cypress-desafio-levva

Índice

1. Introdução
2. Pré-requisitos
3. Instalação
4. Configuração
5. Execução dos Testes

1. Introdução

Este projeto utiliza Cypress para automatizar testes de interface web e API. O objetivo é garantir a qualidade, cobertura e rapidez nos testes da aplicação.

2. Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (versão 6 ou superior)
- Git
- Visual Studio Code ou editor de escolha

3. Instalação

1. Clone o repositório: `git clone https://github.com/heltonkuenede/desafio-levva.git
2. Acesse a pasta do projeto: cd desafio-levva
3. Instale as dependências: npm install
4. Instale o Cypress: npm install cypress --save-dev

4. Configuração

1. Crie um arquivo cypress.env.json com variáveis de ambiente.
2. Configure o arquivo cypress/support/index.js com comandos personalizados.
3. Defina a URL base no arquivo cypress/support/commands.js.

5. Execução dos Testes

1. Abra o Cypress: npx cypress open
2. Execute todos os testes: npx cypress run
3. Execute testes específicos: npx cypress run --spec "nome-do-arquivo.spec.js"