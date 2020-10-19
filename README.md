 <p align="center">
    <img src="./www/web/src/images/logo.svg" />
</p>

## :pushpin: Table of Contents

<!--ts-->

- [Sobre](#sobre)
- [Tecnologias-Ferramentas Utilizadas](#:computer-tecnologias-ferramentas-utilizadas)
- [Instalação](#books-instalacao)
- [Para rodar projeto Backend](#:arrow_forward-ara-rodar-o-backend)
- [Para rodar projeto Web](#:arrow_forward-para-rodar-o-projeto-web)
- [Para rodar projeto Web](#arrow_forward-para-rodar-o-projeto-mobile:)

<!--te-->

## Sobre

**Happy** tem a finalidade de descobrir e cadastrar locais de acolhimento para idosos em situação de vulnerabilidade.

Sendo possivel verificar as instruções de visita do local, horário de atendimento para possivelmente agendar uma visita.

Assim levando mais alegria a estas pessoas que fizeram história.

A aplicação foi baseada na proposta Next-Level-Week, ministrada pelo [Diego Fernandes](https://github.com/diego3g) da [Rocketseat].
Aplicação desenvolvida: [Happy](https://github.com/rocketseat-education/nlw-03-omnistack).

Foi alterado todo o escopo e interfaces para atender a proposta idealizada por mim, abaixo seguem os figmas:

Web: https://www.figma.com/file/rXwVfrShbH38H7Zz6hnzi1/Happy-Web-(Copy)?node-id=48625%3A901

Mobile: https://www.figma.com/file/Oasuruwk97Qpnr7cJaUFp8/Happy-Mobile-(Copy)?node-id=0%3A1

Ilustração utilizada: https://www.freepik.com/free-vector/hand-drawn-international-day-older-persons-background_9697385.htm

Logo Modificada: https://www.freepik.com/free-vector/modern-owl-logo-collection_1538708.html

---

**Aplicação Web**:

<p align="center">
	<img src="/github/captura_web_1.png" />
</p>

<p align="center">
	<img src="/github/captura_web_2.png" />
</p>

<p align="center">
	<img src="/github/web.gif" />
</p>

**Aplicação Mobile**:

<p align="center">
	<img src="/github/captura_mobile_1.png" />
</p>

<p align="center">
	<img src="/github/mobile.gif" />
</p>

## :computer: Tecnologias-Ferramentas Utilizadas:

Backend:

- [Node.js](https://nodejs.org/en/)
- [Sqlite](https://www.sqlite.org/docs.html)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [Yup](https://github.com/jquense/yup#install)
- [TypeScrip](https://www.typescriptlang.org/docs/)

Frontend:

- [ReactJS](https://pt-br.reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [React icons](https://react-icons.netlify.com/#/)
- [React toastify](https://github.com/fkhadra/react-toastify)
- [React router dom](https://www.npmjs.com/package/react-router-dom)
- [TypeScrip](https://www.typescriptlang.org/docs/)

Mobile:

- [ReactJS](https://pt-br.reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [React icons](https://react-icons.netlify.com/#/)
- [React toastify](https://github.com/fkhadra/react-toastify)
- [React router dom](https://www.npmjs.com/package/react-router-dom)
- [TypeScrip](https://www.typescriptlang.org/docs/)
- [Expo](https://expo.io/)

## :books: Instalação:

Clone o repositório:

```sh
$ git clone https://github.com/ValdielsonSiqueira/happy
```

Acessar pasta do projeto:

```sh
$ cd happy
```

## :arrow_forward: Para rodar o backend:

```sh
$ cd backend
```

Instalar as dependências:

```sh
$ yarn
```

Rodar as migrations:

```sh
$ yarn typeorm migration:run
```

Inicie o servidor:

```sh
$ yarn dev
```

## :arrow_forward: Para rodar o projeto web:

Acessa a pasta do frontend:

```sh
$ cd www/web
```

Inicie o servidor web:

```sh
$ yarn start
```

---

## :arrow_forward: Para rodar o projeto mobile:

Acessa a pasta do mobile:

```sh
$ cd mobile
```

Inicie o servidor web:

```sh
$ yarn start
```

Inicie o servidor web:

```sh
$ yarn start
```

---

Feito com ☕ by Valdielson Siqueira
