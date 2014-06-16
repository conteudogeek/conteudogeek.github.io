---
layout: post
title:  "Como Instalar Node.JS no OS X"
date:   2014-06-16 23:05:00
author: "Leonel Machava"
---

No OS X eu prefiro instalar o NodeJS usando o pacote de instalação para OS X disponibilizado no site oficial. Ná área de downloads do site oficial, [nodejs.org/download](http://nodejs.org/download/), baixe o arquivo .pkg entitulado *Macintosh Installer (.msi)* e inicie o processo de instalação. Terminado o processo terá o Node.JS e o NPM instalados na sua máquina.

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


**Homebrew / Mac Ports**

Pode alternativamente instalar o **NodeJS** usando *Homebrew* ou *Mac Ports*. Mas, por favor, preste atenção às versões disponibilizadas pois estas podem estar desactualizadas. A instalação usando o pacote de instalação para OS X ou através do source code são as formas garantidas de obter as versões mais recentes do NodeJS.

Usando o brew:

{% highlight sh %}
$ brew install node
{% endhighlight %}

Usando o Mac Ports:

{% highlight sh %}
$ port install nodejs
{% endhighlight %}
