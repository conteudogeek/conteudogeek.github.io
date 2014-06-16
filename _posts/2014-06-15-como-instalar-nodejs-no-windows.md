---
layout: post
title:  "Como Instalar Node.JS no Windows"
date:   2014-06-16 20:52:00
author: "Leonel Machava"
---

A instalação do Node.JS no Windows é muito simples. No site oficial do Node.JS é oferecido um pacote de instalação que instala todas as componentes fundamentais para desenvolver aplicações com Node.JS.

Ná área de downloads do site oficial, [nodejs.org/download](http://nodejs.org/download/), baixe o arquivo entitulado *Windows Installer (.msi)* e inicie o processo de instalação. Terminado o processo terá o Node.JS instalado na sua máquina.

Note que o pacote instala o **node.exe** e o NPM (*Node Package Manager*) que é um gestor de módulos do NodeJS.

Para verificar que o node foi instalado correctamente, na linha de comando execute a instrução **node -v** como ilustrado abaixo. Receberá como resultado a versão do NodeJS que foi instalada. No meu caso, a versão é 0.10.28.

{% highlight sh %}
$ node -v
v0.10.28
{% endhighlight %}

Do mesmo modo, pode verificar o npm, executando a instrução **npm -v** como ilustrado abaixo.

{% highlight sh %}
$ npm -v
1.4.9
{% endhighlight %}


**Nota**:
Pode alternativamente baixar individualmente o **node.exe** e o **npm** em [nodejs.org/download](http://nodejs.org/download/) e [www.npmjs.org/dist](http://www.npmjs.org/dist/) respectivamente. Contudo, não recomendo este método por ser mais trabalhoso.