## 🛒| Digital Story - Back-end

Bem-vindo ao repositório do backend da Digital Story! Este é um projeto de e-commerce desenvolvido com Node.js, Express, Sequelize e outras tecnologias modernas para oferecer uma experiência de compra online robusta e eficiente, colocando em prática todo conhecimento adquirido no Projeto GeraçãoTech 3.

## 🚀| Tecnologias Utilizadas
- Node.js - Ambiente de execução JavaScript server-side.
- Express - Framework web para Node.js.
- Sequelize - ORM para Node.js.
- PostgreSQL - Banco de dados relacional.
- JWT - JSON Web Tokens para autenticação.
- bcrypt - Biblioteca para hashing de senhas.
- dotenv - Carrega variáveis de ambiente de um arquivo .env.

## 📦| Instalação
Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório para a sua máquina:

  ```bash
git clone https://github.com/ldlaLucas/Projeto-Digital-Store-Backend.git
  ```

2. Navegue até o diretório do projeto e instale as dependências:

  ```bash
cd projeto-loja-virtual-backend
npm install
  ```

3. Configure as variáveis de ambiente no arquivo `.env`.

4. Inicie o servidor de desenvolvimento:

  ```bash
npm run dev
  ```
O servidor estará disponível em `http://localhost:3000`.

## 🗂️| Estrutura do Projeto
A estrutura de pastas do projeto segue o modelo abaixo:

```
src/
├── config/
│   ├── database.js
├── controllers/
│   ├── categoryController.js
│   ├── productCategoryController.js
│   ├── productController.js
│   ├── productImageController.js
│   ├── productOptionController.js
│   └── userController.js
├── middleware/
├── models/
│   ├── category.js
│   ├── productCategory.js
│   ├── product.js
│   ├── productImage.js
│   ├── productOption.js
│   └── user.js
├── routes/
│   ├── categories.js
│   ├── products.js
│   ├── productCategories.js
│   ├── productImages.js
│   ├── productOptions.js
│   └── users.js
├── public/
│   ├── images/
│       ├── products/
│           └── imagem-para-teste.jpg
├── app.js
├── server.js
└── .env
```

## 🌟| Funcionalidades:

- **Autenticação de Usuários**: Registro, login e gerenciamento de sessões.
- **Gerenciamento de Categorias**: CRUD (Create, Read, Update, Delete) de categorias.
- **Gerenciamento de Produtos**: CRUD de produtos.
- **Gerenciamento de Imagens de Produtos**: CRUD de imagens de produtos.
- **Gerenciamento de Opções de Produtos**: CRUD de opções de produtos.
- **Gerenciamento de Pedidos**: CRUD de pedidos e histórico de compras.
- **Middleware de Autenticação**: Proteção de rotas com JWT.
- **Hashing de Senhas**: Segurança de senhas com bcrypt.

## 📲| Contato
Se você tiver dúvidas ou sugestões, entre em contato:

E-mail: ldlaconcursos@gmail.com

E-mail: henrique.pedro62@aluno.ifce.com

E-mail: steiciealeixosousa@gmail.com

LinkedIn: [Lucas Augusto](https://www.linkedin.com/in/lucas-augusto-a752872b5)

LinkedIn: [Pedro Henrique](https://www.linkedin.com/in/-dev-suporte-profissional-ti-pedro-b2680a302/)

LinkedIn: [Steicie Aleixo](https://www.linkedin.com/in/steicie-aleixo-sousa-6053231a7/)

## 🎉| Obrigado!
Obrigado por conferir nosso projeto! Esperamos que você aproveite a experiência de compra virtual.

## 💻 | Desenvolvido por Lucas Augusto, Pedro Henrique e Steicie Aleixo!
