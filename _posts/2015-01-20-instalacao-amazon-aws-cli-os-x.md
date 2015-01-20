---
layout: post
title:  "Instalação do AWS CLI no Mac OS X"
date:   2015-01-20 13:53:00
author: "Leonel Machava"
---

O AWS CLI é uma ferramenta usada a partir da linha de comando que permite interagir com vários serviços (EC2, S3, Cloudfront, etc) oferecidos pela Amazon.

Neste post mostro os passos necessários para instalar o AWS CLI no OS X. Entretanto, com pequenos ajustes os mesmos passos podem ser seguidos também no Linux.

Para instalar o AWS CLI precisaremos de *python* e *pip*. Em princípio, o python já deve estar instalado na sua máquina.

Para verificar se o *pip* está instalado execute o commando abaixo:

{% highlight sh %}
pip --help
{% endhighlight %}

Se receber uma mensagem de erro indicando que o aplicativo não existe então instale o *pip* executando os passos abaixo:

{% highlight sh %}
$ curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
$ sudo python get-pip.py
{% endhighlight %}

Finalmente pode instalar o AWS CLI executando a instrução abaixo:

{% highlight sh %}
$ sudo pip install awscli
{% endhighlight %}

Para testar o AWS CLI execute a instrução abaixo:

{% highlight sh %}
$ aws help
{% endhighlight %}

Caso receba o erro **ValueError: unknown locale: UTF-8** adicione as linhas abaixo no ficheiro **~/.bash_profile**:

{% highlight sh %}
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8 
{% endhighlight %}


&nbsp;