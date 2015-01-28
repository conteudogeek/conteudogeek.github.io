---
layout: post
title:  "Como servir um ficheiro específico com o NGINX"
date:   2015-01-28 15:24:00
author: "Leonel Machava"
---

Recentemente deparei-me com uma situação em que precisei servir um ficheiro específico através do NGINX. A aplicação em questão é baseada no Node.JS e o NGINX é usado para fazer o balanceamento de carga. Os ficheiros estáticos são servidos a partir do cloudfront. Contudo, tive necessidade de servir um ficheiro específico através do NGINX.

Suponhamos que pretende servir o ficheiro **teste.txt** que encontra-se na pasta **home/exemplo/www**.
O NGINX possui 2 directivas que podem ser usadas para este efeito: `alias` e `root` que devem ser usadas dentro dum bloco `location` que filtra o endereço do ficheiro.

**Usando location e root**

No ficheiro de configuração do seu site insira o bloco **location=/teste.txt** como ilustrado abaixo. Por favor, certifique-se que o bloco encontra-se acima de qualquer outro bloco `location`. Assim garantiremos a sua prioridade.

{% highlight sh %}
server {
  listen 80;
  server_name demo;

  # ... outras configurações

  location =/teste.txt {
    # indica a pasta onde está o ficheiro
    root /home/exemplo/www;
  }

  location / {
    # configuração geral
    # é importante que esteja abaixo do bloco que serve o ficheiro específico
  }
}
{% endhighlight %}

**Usando location e alias**

No ficheiro de configuração do seu site insira o bloco **location=/teste.txt** como ilustrado abaixo. Por favor, certifique-se que o bloco encontra-se acima de qualquer outro bloco `location`. Assim garantiremos a sua prioridade.

{% highlight sh %}
server {
  listen 80;
  server_name demo;

  # ... outras configurações

  location =/teste.txt {
    # indica o path completo do ficheiro
    alias /home/exemplo/www/teste.txt;
  }

  location / {
    # configuração geral
    # é importante que esteja abaixo do bloco que serve o ficheiro específico
  }
}
{% endhighlight %}

Usando `alias` tem a vantagem de atribuir um nome ao seu gosto que será mapeado ao ficheiro. Pode por exemplo omitir a extensão na url. Por exemplo:

{% highlight sh %}
location =/teste {
  # indica o path completo do ficheiro
  alias /home/exemplo/www/teste.txt;
}
{% endhighlight %}

Permite que aceda ao ficheiro através da url: http://exemplo.com/teste (nos exemplos anteriores é necessário indicar a extensão .txt).


&nbsp;