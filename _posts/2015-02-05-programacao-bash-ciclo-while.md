---
layout: post
title:  "Programacao em Bash - Ciclo While"
date:   2015-02-05 20:18:00
author: "Leonel Machava"
---

Neste artigo mostrarei como definir e usar o ciclo `while` no shell bash. Veremos como criar ciclos normais, ciclos infinitos, e finalmente como podemos terminar imediamente a execução de um ciclo com a instrução `break`.

De uma forma geral o ciclo `while` no bash tem o formato apresentado abaixo:

{% highlight bash %}
while condicao; do
  comando1;
  comando2;
  comandon;
done;
{% endhighlight %}

Por exemplo, o ciclo abaixo é executado enquanto `N` for menor ou igual a 10, fazendo que valores de 1 a 10 sejam exibidos na tela.

{% highlight bash %}
N=1
while [ $N -le 10 ] do
  echo "N é $N";
  let N=$N+1
done;
{% endhighlight %}

### Ciclo Infinito
Existem duas formas de criar um ciclo infinito e são apresentadas abaixo:

{% highlight bash %}
while true; do
  comando1;
  comnado2;
  comandon;
done;
{% endhighlight %}

ou

{% highlight bash %}
while : do
  comando1;
  comnado2;
  comandon;
done;
{% endhighlight %}

Eu prefiro a primeira forma por ser mais elegante e legível.

Como exemplo, abaixo apresento um ciclo que pede que o usuário digite um número qualquer e em seguida ele apresenta o quadrado do número que o usuário digitou. 
Note que o processo é repetido várias vezes.

{% highlight bash %}
while true; do
  echo "Digite um número qualquer: ";
  read valor;
  let quadrado=$valor*$valor;
  echo "O quadrado de $valor é $quadrado";
done
{% endhighlight %}

**NOTA:** no terminal pode apertar *Ctrl+C* para terminar bruscamente o ciclo e o script. Note que o script inteiro é terminado.

### Terminando o ciclo com break
O bash suporta a instrução `break` que permite terminar imediatamente a execução dum ciclo.

Para ilustrar o uso da instrução `break`, pegaremos o exemplo do ciclo infinito apresentado na secção anterior. Faremos uma pequena modificação, que consistirá em permitir que o usuário digite a palavra *sair* quando quiser terminar o ciclo.

{% highlight bash %}
while true; do
  echo "Digite um número qualquer: ";
  read valor;

  # termina caso o usuário digite sair
  if [ "$valor" == "sair" ]; then
    echo "Tchau!!!"
    break;
  fi

  let quadrado=$valor*$valor;
  echo "O quadrado de $valor é $quadrado";
done
{% endhighlight %}

Valeu.
