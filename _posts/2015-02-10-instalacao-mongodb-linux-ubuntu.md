---
layout: post
title:  "Instalação do MongoDB no Ubuntu"
date:   2015-02-10 20:57:00
author: "Leonel Machava"
---

Para instalar o MongoDB eu sigo os passos presentes na página oficial do MongoDB. As instruções que apresento abaixo estão disponíveis em [http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/).

Para instalar o MongoDB no ubuntu é suficiente executar sequencialmente as instruções apresentadas abaixo.

{% highlight bash %}
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install -y mongodb-org
{% endhighlight %}

### Para iniciar o MongoDB

{% highlight bash %}
sudo service mongod start
{% endhighlight %}

### Para parar o MongoDB

{% highlight bash %}
sudo service mongod stop
{% endhighlight %}

### Para reiniciar o MongoDB

{% highlight bash %}
sudo service mongod restart
{% endhighlight %}

O ficheiro de configuração encontra-se em **/etc/mongod.conf**. Os ficheiros de dados encontram-se em **/var/lib/mongodb** enquanto os logs encontram-se em **/var/log/mongodb**