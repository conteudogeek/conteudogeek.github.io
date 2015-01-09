---
layout: post
title:  "Substituição de várias ocorrências de uma string em JavaScript"
date:   2014-12-23 13:30:00
author: "Leonel Machava"
---

As strings possuem o método `replace()` que permite substituir uma ou mais ocorrências de um texto por outro.
O método pode ser usado de 2 formas: uma em que substitui apenas a primeira ocorrência e outra em que substitui todas ocorrências.

Tomemos como exemplo a variável `str` definida abaixo:

{% highlight javascript %}
var str = 'abc def abc def';
{% endhighlight %}

Se quisermos substituir apenas a primeira ocorrência de `abc` por `zzz` invocamos `replace()` desta maneira:

{% highlight javascript %}
var resultado = str.replace('abc', 'zzz');
// Imprime "zzz def abc def"
console.log(resultado);
{% endhighlight %}

Para substituir todas as ocorrências de `abc` empregam-se *expressões regulares*:

{% highlight javascript %}
var resultado = str.replace(/abc/g, 'zzz');
// Imprime "zzz def zzz def"
console.log(resultado);
{% endhighlight %}

Note que o primeiro parâmetro de `replace()` mudou de `'abc'` para `/abc/g`. Anteriormente o texto a ser substituido era indicado por uma string, agora é indicado por uma expressão regular. A flag *g* é que permite que a substituição seja global ou seja que ele substitua todas as ocorrências do texto.

Se o texto a ser substituido estiver numa variável então terá de convertê-lo antes numa expressão regular como ilustrado abaixo:

{% highlight javascript %}
var padrao = 'abc';
var re = new RegExp(padrao, 'g')
var resultado = str.replace(re, 'zzz');
// Imprime "zzz def zzz def"
console.log(resultado);
{% endhighlight %}

&nbsp;