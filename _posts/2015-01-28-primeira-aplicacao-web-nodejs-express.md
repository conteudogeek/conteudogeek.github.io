---
layout: post
title:  "Primeira aplicação Web com Node JS e Express"
date:   2015-01-28 21:07:00
author: "Leonel Machava"
---

Node.JS é uma plataforma baseada no JavaScript que permite correr aplicações do lado do servidor. É muito usada para desenvolver aplicações web e de tempo real. Destaca-se pela facilidade de criar aplicações de alta escabilidade e que suportam dezenas de milhares de conexões simultâneas.

**Express** é o framework mais popular no meio do Node.JS para o desenvolvimento de aplicações web. Ele é simples, leve e ao mesmo tempo poderoso.

Note que neste artigo assumo que já tem o Node.JS instalado. Caso não tenha talvez pode ser importante útil o artigo [Como Instalar Node.JS no Windows](http://localhost:4000/2014/06/16/como-instalar-nodejs-no-windows.html) ou [Como Instalar Node.JS no OS X](http://www.conteudogeek.com/2014/06/16/como-instalar-nodejs-no-osx.html)

## 1. Instalação do Express
Para instalar o Express usaremos o NPM. Neste momento a versão actual do Express é 4.x. Execute a instrução abaixo para baixar a versão actual do framework.

{% highlight sh %}
$ npm install express
{% endhighlight %}

Depois instalar o Expres vamos em seguida escrever o código da aplicação.

## 2. Código
Em seguida crie um ficheiro com o nome `app.js` e insira o código abaixo:


{% highlight javascript %}
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Primeira aplicação com NodeJS + Express');
});

app.get('/sobre', function(req, res) {
  res.send('Programado por Leonel Machava');
});

app.listen(3000);
console.log('Aplicação iniciada na porta 3000');
{% endhighlight %}

Primeiro carregamos o módulo do *express*. Em seguida, iniciamos a aplicação express com a instrução `var app = express()`. Em diante, a variável `app` será usada para aceder as funcionalidades oferecidas pelo Express.

Nas linhas seguintes definimos as instruções que devem ser executadas quando o browser é apontado na raíz **http://localhost:3000/** e no endereço **http://localhost:3000/sobre**

Finalmente `app.listen(3000)` configura a aplicação para ocupar a porta 3000. Por essa razão no browser devemos indicar **localhost:3000**. Mas está livre de indicar qualquer porta válida.

## 3. Correndo a aplicação
Para correr a aplicação basta executar `node app.js` na linha de comando:

{% highlight sh %}
$ node app
Aplicação iniciada na porta 3000
{% endhighlight %}

Agora no seu browser de preferência abra a URL: **http://localhost:3000/**. Deverá receber o texto `Primeira aplicação com NodeJS + Express`.

Finalmente apontando o browser na URL **http://localhost:3000/sobre** deverá receber o texto `Programado por Leonel Machava`.
&nbsp;