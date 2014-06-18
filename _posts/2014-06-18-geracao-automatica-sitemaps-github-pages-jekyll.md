---
layout: post
title:  "Geração automática de sitemaps no GitHub Pages + Jekyll"
date:   2014-06-18 23:20:00
author: "Leonel Machava"
---

O meu blog está no ar faz pouco tempo. Sentí a necessidade de gerar o ficheiro `sitemap.xml` para ajudar os motores de busca na indexação do conteúdo do blog.

Vasculhando a Internet constatei que o jekyll possui plugins que permitem gerar sitemaps. Porém, o GitHub Pages não executa os plugins do Jekyll por motivos de segurança. Em vários blogs aborda-se um método que permite a geração de sitemaps sem recorrer aos plugins do Jekyll. [Este é um exemplo](http://davidensinger.com/2013/03/generating-a-sitemap-in-jekyll-without-a-plugin/). 

## Boa notícia

Já existe uma forma automática de gerar sitemaps. Para activar a geração de sitemaps instale a gem **jekyll-sitemap**, ie:

{% highlight sh %}
$ gem install jekyll-sitemap
{% endhighlight %}

Adicione também essa gem no ficheiro de configuração `_config.yml`, ie, adicione as linhas abaixo:

{% highlight text %}
gems:
- jekyll-sitemap
{% endhighlight %}

De agora em diante terá o `sitemap.xml` sempre actualizado tanto localmente como no GitHub Pages. Note que localmente, o `sitemap.xml` é armazenado na pasta `_site`. No GitHub Pages o ficheiro é armazenado na raíz da sua página.

Pode ver o artigo oficial do GitHub que explica o método [aqui](https://help.github.com/articles/sitemaps-for-github-pages). O GitHub Pages suporta outros plugins, que pode [ver aqui](https://help.github.com/articles/using-jekyll-plugins-with-github-pages), caso esteja interessado.