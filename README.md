# Desafio Técnico - Will Bank - API de PIX 



Precisamos criar uma API rest para o time de backoffice gerenciar transações de Pix. A API
deverá conter os seguintes módulos.

### Como funciona?

- O usuário pode cadastrar uma chave do tipo CPF ou valor (um erro é disparado caso a chave seja diferente)
- A mesma chave não pode ser cadastrada mais de uma vez
- Todas as chaves ficam salvas no banco de dados `pix`, onde há dois models.
- O usuário pode criar, listar, editar e excluir as chaves pix.

- A API também possui um endpoint que recebe as transações pix
- A transação deve verificar se a chave pix existe no banco de dados

### Algumas observações
 
- O projeto foi configurado com docker através do `docker-compose`
- As variáveis de ambiente estão descritas no arquivo `.env.example`

##### Models

| Pix	       | Transactions |
| -----------| ------------ |
| id         | id		        |
| createdAt  | createdAt    |
| createdAt  | createdAt    |
| key        | key          |
|            | amount       |


------------

#### Tecnologias utilizadas
- Node.js
- NestJs
- Prisma
- Postgres


#### Instruções de instalação

```bash
# Clonar o repositório
$ git clone https://github.com/TairineEllen/desafio-will

# Entrar na pasta do repositório
$ cd desafio-will

# Instalar as dependências
$ yarn

# Executar o servidor em modo de desenvolvimento
$ yarn start:dev

# Executar testes unitários
$ yarn test

# Executar testes end2end
$ yarn test:e2e

# Reiniciar o banco de dados
$ yarn db:dev:restart

```

#### Rotas

|                    |                                            |
| ----------------------- | ------------------------------------------ | 
| POST/pix/create         | Criar uma chave pix                        |
| GET/pix                 | Listar todas as chaves pix existentes      |
| GET/pix/id              | Obter chave pix pelo seu id                |
| PUT/pix/id              | Editar uma chave pix                       |
| DELETE/pix/id           | Excluir uma chave pix                      |
| POST/transactions/new   | Criar uma nova transação financeira        |
------------



<p align="center">
Desenvolvido com :black_heart: por Tairine Ellen
</p>

