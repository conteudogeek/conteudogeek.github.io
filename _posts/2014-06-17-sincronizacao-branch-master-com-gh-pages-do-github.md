---
layout: post
title:  "Sincronização do branch master com o branch gh-pages do GitHub"
date:   2014-06-17 23:36:00
author: "Leonel Machava"
---

Hoje criei um repositório para uma aplicação HTML5 no GitHub. Decidí hospedar um demo da aplicação usando o **GitHub Pages**. Neste caso, o conteúdo da página deve estar no branch **gh-pages** para que o *GitHub Pages* reconheça a página.
Contudo, o código existente no branch master é o mesmo que deve existir no branch gh-pages.

Encontrei na Internet uma dica para manter ambos branches sincronizados. Para tal, abra o ficheiro **.git/config** para edição e na secção **[remote origin]** adicione as seguintes linhas:

{% highlight sh %}
  push = +refs/heads/master:refs/heads/gh-pages
  push = +refs/heads/master:refs/heads/master
{% endhighlight %}

De seguida pode continuar a trabalhar normalmente no branch master. Ao fazer push, ie, `git push`, o código será enviado para ambos branches mantendo-os sincronizados.

Achei a dica [neste blog](http://brettterpstra.com/2012/09/26/github-tip-easily-sync-your-master-to-github-pages/).