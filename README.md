## Talker Manager
---
<!-- ![wallet](https://user-images.githubusercontent.com/94760136/192841426-1b537e80-6991-4383-a364-c8e8a0a1a427.gif)

### 📌 <a href="https://bluewallet.vercel.app/">Clique aqui</a> para acessar o projeto -->

### <strong>💻 Sobre</strong>
Esse projeto foi desenvolvido durante o curso de desenvolvimento web da Trybe durante o módulo de back-end. O projeto Talker Manager contou com a construção de uma aplicação de cadastro de palestrantes, onde será possível cadastrar, visualizar, pesquisar, editar e excluir informações.

1. Desenvolver uma API de um CRUD (Create, Read, Update e Delete) de palestrantes (talkers) e;
2. Desenvolver alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo fs.
---

### <strong>🖱️ Tecnologias Utilizadas</strong>
* JavaScript
* Node.js
* Docker

---

</br>

### <strong>📃 Documentação</strong>

  <details>
    <summary>Instalação e execução</summary>
    <br />

- Faça o fork do repositório:
  Tutorial [AQUI](https://github.com/UNIVALI-LITE/Portugol-Studio/wiki/Fazendo-um-Fork-do-reposit%C3%B3rio)
- Abra seu terminal e navegue até a pasta onde preferir alocar o projeto.

- Clone o repositório:

  ```sh 
  git clone git@github.com:marcelamchdo/talker-manager.git
  ```

- Apos ter o repositório clonado em sua maquina, execute este comando para acessar a parta do projeto:

  ```sh
    cd sd-022-a-project-talker-manager
  ```

- Dentro da pasta do projeto, execute o comando abaixo para instalar as dependências do projeto:

  Caso utilize o npm:

  ```sh
    npm install
  ```

  Caso utilize o yarn:

  ```sh
    yarn install
  ```

- Dentro da pasta do projeto, execute o comando abaixo para iniciar o servidor do projeto:

      Caso utilize o npm:

      ```sh
        npm start
      ```

      Caso utilize o yarn:

      ```sh
        yarn start
      ```

  O aplicativo sera executado em modo de desenvolvimento.
  Abrindo na porta padrão que o React usa: <http://localhost:3000/> em seu navegador.

    </details>

</br>

---

</br>


### <strong>Desenvolvidos</strong>

---

### <strong>1. Crie o endpoint GET /talker</strong>
1. A requisição deve retornar o status 200 e um array com todas as pessoas palestrantes cadastradas.

2. Caso não exista nenhuma pessoa palestrante cadastrada a requisição deve retornar o status 200 e um array vazio. 


### <strong>2. Crie o endpoint GET /talker/:id</strong>

1. A requisição deve retornar o status 200 e uma pessoa palestrante com base no id da rota.

2. Caso não seja encontrada uma pessoa palestrante com base no id da rota, a requisição deve retornar o status 404 com o seguinte corpo:


### <strong>3. Crie o endpoint POST /login</strong>

1. O endpoint deverá receber no corpo da requisição os campos email e password e retornar um token aleatório de 16 caracteres. Este token será utilizado pelas requisições dos próximos requisitos do projeto.

### <strong>4. Adicione as validações para o endpoint /login</strong>

1. Os campos recebidos pela requisição devem ser validados e, caso os valores sejam inválidos, o endpoint deve retornar o código de status 400 com a respectiva mensagem de erro ao invés do token.

### <strong>5. Crie o endpoint POST /talker</strong>

1. O endpoint deve ser capaz de adicionar uma nova pessoa palestrante ao seu arquivo.

### <strong>6. Crie o endpoint PUT /talker/:id</strong>

1. O endpoint deve ser capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.

### <strong>7. Crie o endpoint DELETE /talker/:id</strong>

1. O endpoint deve deletar uma pessoa palestrante com base no id da rota. Devendo retornar o status 204, sem conteúdo na resposta.

### <strong>8. Crie o endpoint GET /talker/search?q=searchTerm</strong>

1. O endpoint deve retornar um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL. 







