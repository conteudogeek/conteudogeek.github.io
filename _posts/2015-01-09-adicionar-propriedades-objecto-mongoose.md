---
layout: post
title:  "Como adicionar propriedades a um objecto criado pelo Mongoose"
date:   2015-01-09 14:11:00
author: "Leonel Machava"
---

As propriedades adicionadas directamente a um objecto criado pelo Mongoose não aparecem na enumeração das propriedades do objecto e consequentemente não aparecerão quando o objecto for transformado em JSON ou quando invocado via `console.log()`.

Suponhamos que temos uma colecção de items com o esquema apresentado abaixo:

{% highlight javascript %}
var itemSchema = new Schema({
  _id: Number,
  price: Number
});
var Item = mongoose.model('Item', itemSchema);
{% endhighlight %}


Por exemplo, suponhamos que na colecção exista um item `{_id: 1, price: 100}`. Então:

{% highlight javascript %}
Item.findOne({_id:1}, function(err, item) {
  item.novaPropriedade = 'teste';
  console.log(item);
  // Imprime {_id: 1, price: 100}
  // novaPropriedade não aparece
});
{% endhighlight %}


Existem pelo menos duas formas de adicionar propriedades:

**Invocando o método `toObject()` que o transforma num objecto normal.**


{% highlight javascript %}
Item.findOne({_id:1}, function(err, item) {
  item = item.toObject();
  item.novaPropriedade = 'teste';
  console.log(item);
  // Imprime {_id: 1, price: 100, novaPropriedade: 'teste'}
});
{% endhighlight %}

**Acrescentando o método `lean()` após a query**

{% highlight javascript %}
Item.findOne({_id: 1}).lean().exec(function(err, item)) {
  item.novaPropriedade = 'teste';
  console.log(item);  
  // Imprime {_id: 1, price: 100, novaPropriedade: 'teste'}
}
{% endhighlight %}
&nbsp;