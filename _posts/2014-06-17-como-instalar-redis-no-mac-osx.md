---
layout: post
title:  "Como Instalar Redis no Mac OS X"
date:   2014-06-17 17:38:00
author: "Leonel Machava"
---

No site oficial do Redis ([redis.io](http://redis.io)) não existe um pacote pré-compilado para o OS X. Portanto, o método oficial para instalação do Redis é a compilação do seu código-fonte. Mas, por favor, não se assuste que o processo é muito simples. 

Primeiro, baixe a versão estável do Redis em [redis.io/download](http://redis.io/download). Em principio, será um ficheiro com o formato redis-*x.y.z*.tar.gz, onde *x.y.z* é a versão actual do redis.

De seguida, na linha de comando execute os comandos:

{% highlight sh %}
$ tar xzf redis-x.y.z.tar.gz
$ cd redis-x.y.z
$ make
{% endhighlight %}

Neste ponto terá os executáveis do Redis compilados e guardados na pasta `src`. Para iniciar o servidor execute `$ src/redis-server`. Para correr o cliente execute `$ src/redis-cli`.

Para ter os executáveis disponíveis em todo o sistema execute `$ make install`. Esta instrução copia os executáveis do redis para a pasta `/usr/local/bin`. Deste modo poderá correr o servidor ou cliente escrevendo apenas `$ redis-server` ou `$ redis-cli` em qualquer pasta do sistema.

**Nota:** É possível instalar através do **Homebrew** ou **Mac Ports** sob o risco de não encontrar a versão mais recente e estável do Redis. O meu método de preferência é a instalação a partir do código-fonte.
