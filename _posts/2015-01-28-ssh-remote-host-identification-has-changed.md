---
layout: post
title:  "SSH - Remote Host Identification Has Changed"
date:   2015-01-28 15:10:00
author: "Leonel Machava"
---

Ao tentar acessar uma máquina através do serviço SSH é possível que receba a mensagem **WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED**. 

Em condições pacíficas esta situação pode acontecer quando o IP em questão é atribuído a uma nova máquina enquanto o nosso computador local possui a chave da máquina antiga. 

Pode acontecer por exemplo, quando criamos um VPS que é atribuído um IP, por exemplo 1.2.3.4, mais tarde destruímos o VPS e criamos um novo VPS que é normal que o provedor atribua o mesmo IP 1.2.3.4. Note que assumo que faz acesso via SSH ao primeiro servidor, tendo a sua chave gravada no seu computador local. Ao tentar acessar o segundo servidor com o mesmo IP a chave será diferente é por consequência receberá um alerta como o ilustrado abaixo: 

{% highlight sh %}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the RSA key sent by the remote host is
35:bf:60:f9:89:63:ad:37:1f:79:7a:b1:00:4d:97:54.
Please contact your system administrator.
Add correct host key in /Users/lefam/.ssh/known_hosts to get rid of this message.
Offending RSA key in /Users/lefam/.ssh/known_hosts:17
RSA host key for 1.2.3.4 has changed and you have requested strict checking.
Host key verification failed.
{% endhighlight %}

Para resolver o problema devemos remover a chave associada à máquina que estava previamente associada ao IP. O processo é muito simples e consiste em invocar na linha de comando a instrução abaixo:

{% highlight sh %}
ssh-keygen -R 1.2.3.4
{% endhighlight %}

Onde *1.2.3.4.5* é o IP da máquina em questão.

&nbsp;