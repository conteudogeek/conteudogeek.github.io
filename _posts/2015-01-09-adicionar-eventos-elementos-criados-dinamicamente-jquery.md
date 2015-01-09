---
layout: post
title:  "Como adicionar eventos a elementos criados dinamicamente usando jQuery"
date:   2015-01-09 14:11:00
author: "Leonel Machava"
---

Em condições normais quando associamos um evento directamente sobre um selector, este só será válido para os elementos que existem no momento. Elementos que satisfaçam o mesmo selector que forem criados posteriormente não terão o evento associado.

{% highlight javascript %}
  // Só será válido para os elementos com classe post que existem no momento da chamada
  $('.post').click( function() {
    alert('ola');
  });
  // Este elemento criado dinamicamente não terá o evento associado. 
  // Clicando nele não receberemos o alerta com a mensagem ola.
  $(document).append("<div class='post'>NOVO POST</div>");
{% endhighlight %}

Para adicionar eventos que devem ser válidos em elementos criados dinâmicamente deve-se usar o método `on()` do jQuery.

O formato deve ser: `$(selector_objecto_pai).on(evento, selector_objectos_alvo, callback)`.
Onde:

* `selector_objecto_pai` - deve ser um selector que identifica um elemento que esteja hierarquicamente acima dos elementos que pretendemos adicionar o evento. É importante que este elemento seja fixo, isto é, não deve ser criado dinamicamente.

* `evento` - evento a adicionar, exemplo 'click'.

* `selector_objectos_alvo` - selector que identifica os objectos que devem ter o evento associado.


{% highlight javascript %}
  $('body').on('click', '.post', function() {
    alert('ola');
  });
  // Desta vez este elemento criado dinamicamente terá o evento associado. 
  $(document).append("<div class='post'>NOVO POST</div>");
{% endhighlight %}


&nbsp;