---
layout: post
title:  "Geração de Feed RSS no Jekyll"
date:   2014-07-02 18:57:00
author: "Leonel Machava"
---

O meu blog é estático e é gerado usando o Jekyll. Para gerar o feed RSS usei um dos templates disponíveis [neste repositório do GitHub](https://github.com/snaptortoise/jekyll-rss-feeds). Dos templates disponíveis no repositório usei apenas o template **feed.xml** que lista os 10 artigos mais recentes.

Para usar um dos templates no jekyll use os seguintes passos:

1. Copie o template (exemplo: **feed.xml**) para a raíz do seu blog.

2. No ficheiro **_config.yml** adicione ou edite as linhas abaixo:

{% highlight text %}
name: Coloque aqui o nome do seu blog
description: Coloque aqui a descrição do seu blog
url: http://coloque-aqui-a-url-do-teu-blog.com
{% endhighlight %}

A partir deste ponto o jekyll passará a gerar o RSS Feed sempre que gerar o seu site. No meu caso, o feed quando é gerado encontra-se disponível através da url 
[http://www.conteudogeek.com/feed.xml](http://www.conteudogeek.com/feed.xml).

Pode opcionalmente configurar o seu site de modo que as URLs dos RSS Feeds sejam descobertas automaticamente. Para tal, edite o template geral do seu site e adicione as linhas abaixo:

{% highlight text %}
<link rel="alternate" type="application/rss+xml" title="Título do feed" href="url-do-feed">
{% endhighlight %}

Exemplo:

{% highlight text %}
<link rel="alternate" type="application/rss+xml" title="Conteúdo Geek" href="http://www.conteudogeek.com/feed.xml">
{% endhighlight %}

Finalmente pode usar o serviço [http://validator.w3.org/feed/](http://validator.w3.org/feed/) para certificar que o seu feed está a ser gerado correctamente. Se tiver configurado a descoberta automática do Feed RSS poderá indicar qualquer endereço válido do seu blog. Caso contrário, deverá indicar o endereço directo para o feed que pretende validar.