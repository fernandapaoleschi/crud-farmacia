<p align="center">
  <a href="https://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  Backend desenvolvido com <a href="https://nestjs.com/" target="_blank">NestJS</a> para gerenciamento de uma farmácia,
  com CRUD completo de Categorias e Produtos e relacionamento entre entidades.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank">
    <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank">
    <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />
  </a>
  <a href="https://www.npmjs.com/package/@nestjs/common" target="_blank">
    <img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" />
  </a>
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://img.shields.io/badge/framework-NestJS-red" alt="Framework" />
  </a>
  <a href="https://www.mysql.com/" target="_blank">
    <img src="https://img.shields.io/badge/database-MySQL-blue" alt="Database" />
  </a>
</p>

---

## Description

Projeto backend desenvolvido utilizando o framework **NestJS**, com **TypeORM** e **MySQL**, para gerenciamento de uma farmácia.
O sistema implementa **CRUD completo** dos recursos **Categoria** e **Produto**, incluindo **relacionamento entre entidades**
utilizando `@OneToMany` e `@ManyToOne`.

---

## Project setup

```bash
npm install
```

---

## Compile and run the project

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

---

## Endpoints

### Categoria
- GET /categoria
- GET /categoria/:id
- GET /categoria/nome/:nome
- POST /categoria
- PUT /categoria
- DELETE /categoria/:id

### Produto
- GET /produto
- GET /produto/:id
- GET /produto/nome/:nome
- POST /produto
- PUT /produto
- DELETE /produto/:id

---

## Database

- MySQL
- Database name: db_farmacia
- Tables:
  - tb_categorias
  - tb_produtos

As tabelas são criadas automaticamente pelo TypeORM com `synchronize: true`.

---

## Example JSON

### Create Produto
```json
{
  "nome": "Dipirona",
  "preco": 12.5,
  "estoque": 100,
  "categoria": {
    "id": 1
  }
}
```

---

## Versioning

- Configurando-o-Projeto
- CRUD-Categoria
- CRUD-Produto

---

## Author

Projeto desenvolvido como atividade prática de backend utilizando NestJS.

---

## License

Nest is MIT licensed.
