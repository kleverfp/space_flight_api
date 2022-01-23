# Back-end Challenge 🏅 2021 - Space Flight News

## Introdução
 
This is a challenge by [Coodesh](https://coodesh.com/)


Esta é uma api baseada  [Space Flight News](https://api.spaceflightnewsapi.net/v3/documentation)

## Linguagens e Frameworks

Toda a api foidesenvolvida utilizando Node.js  com express e mongoose.

## Dependencias

- axios
- nodemon
- express
- express-validator
- config
- body-parser
- mongoose

# Instalação

Clone o repositório, abra o diretório  e rode o seguinte comando  para instalar as dependências:

```
$ npm i express axios nodemon express-vlidator config body-parser mongoose

```
para construir a imagem do docker:

```
$ docker build . -t <your username>/node-web-app

```
para rodar a imagem :

```
docker run -p <expose port>:3000 -d <your username>/space_flight_api
```

# Link da  apresentação

https://github.com/kleverfp/space_flight_api


