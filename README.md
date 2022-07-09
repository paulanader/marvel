Marvel api example

Demonstração: https://paulanader-marvel.netlify.app/

Tecnologias
ReactJS (Typescript)
Instalação
Pré-requisitos:

Yarn (opcional)
Após clonar o projeto e instalar os pré-requisitos, execute a partir da pasta raiz:

npm install
ou

yarn
Crie o arquivo .env a partir do .env.example:

cp .env.example .env
Após a instalação, para rodar o projeto, execute:

npm run start

ou

yarn start

Problemas conhecidos
1- A página inicial fica carregando por muito tempo e não exibe a lista de Pokémons

Possíveis causas:

O arquivo .env não foi criado corretamente a partir do .env.example
A API está instável e não responde (verifique na aba "Network" do console do navegador se as requisições estão retornando ou se ficam pendentes indefinidamente)
