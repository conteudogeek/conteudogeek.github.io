---
layout: post
title:  "Manipulação de Repositórios Git do BitBucket sem senha (recurso a chaves SSH)"
date:   2015-02-09 19:30:00
author: "Leonel Machava"
---


Às vezes é chato ter de introduzir o *username* e a *senha* sempre que efectuamos uma operação sensível (ex: `git pull` ou `git push`) sobre um repositório git do BitBucket.

É possível manipular o seu repositório git hospedado no BitBucket de forma segura sem que seja necessário digitar manualmente as suas credenciais. Isto é possível através do uso do protocolo SSH.

De uma forma geral os passos necessários são:

1. Geração de chaves SSH: uma chave privada secreta e uma chave pública.

2. A chave pública deve ser configurada no BitBucket.

3. Configurar o git para usar um *remoto* que usa o protocolo SSH.


## 1. Geração de chaves SSH

Para gerar as chaves execute o comando a seguir:

{% highlight bash %}
$ ssh-keygen -t rsa
{% endhighlight %}

Receberá a seguir esta saída:

{% highlight bash %}
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/usuario/.ssh/id_rsa):
{% endhighlight %}

Pode apertar na tecla *enter* para aceitar o nome sugerido por defeito (**id_rsa**) ou pode especificar um nome ao seu critério. Eu sugiro que aceite o nome padrão.

Em seguida terá esta saída:

{% highlight bash %}
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
{% endhighlight %}

A *passphrase* é uma espécie de senha que permite proteger a sua chave privada. É importante o uso de *passphrase* em ambientes de produção. Note que ao especificar uma *passphrase* teria a obrigação de digitar a tal passphrase sempre que usar as chaves, por exemplo no acesso ao git. Felizmente no Linux existe o **ssh-agent** e no OS X existe o **keychain** que retiram-nos a maçada de digitar a passphrase sempre que usamos as chaves. Abordarei o funcionamento destas ferramentas noutro post. Por agora, pode ignorar a geração da passphrase.

Notará que foram criados dois ficheiros: **id_rsa** e **id_rsa.pub**. O último é que contêm a sua chave pública.

## 2. Configuração da chave pública no BitBucket.

Neste passo vamos registar no BitBucket a chave pública que geramos no passo anterior. Para tal é necessário copiar para o clipboard o conteúdo do ficheiro que contêm a chave pública (**id_rsa.pub**). Pode abrir manualmente o ficheiro e copiar o seu conteúdo ou pode alternativamente executar o comando abaixo:

{% highlight bash %}
$ cat ~/.ssh/id_rsa.pub | pbcopy
{% endhighlight %}

Abra a sua conta no BitBucket (http://bitbucket.org) e seleccione o menu **Manage Account**.

<img src='/images/bitbucket-manage-account-menu.png' width='120' height='140'></img>

Em seguida seleccione o submenu **SSH Keys** que encontra-se na aba *Security*:

<img src='/images/bitbucket-ssh-keys-menu.png' width='120' height='140'></img>

Clique no botão **Add Key**. Finalmente terá a janelinha ilustrada abaixo:

<img src='/images/bitbucket-ssh-add-key-ui.png' width='250' height='140'></img>

No campo *label* introduza qualquer texto que o ajude a identificar esta chave (ex: nome da máquina, email, etc). No campo *key* introduza o conteúdo da chave pública.

## 3. Uso do protocolo SSH no acesso ao BitBucket

Para evitar a introdução de credenciais é necessário usar o protocolo SSH. 

Para clonar um repositório usando o protocolo SSH use a instrução abaixo:

{% highlight bash %}
# Note o formato da url quando o protocolo é SSH.
$ git clone git@bitbucket.org:tua_conta/repositorio.git
{% endhighlight %}

Se ja tiver um repositório que anteriormente usava o protocolo HTTPS terá de alterar o remoto de modo que use o protocolo SSH.

{% highlight bash %}
$ git remote set-url origin git@bitbucket.org:tua_conta/repositorio.git
{% endhighlight %}

Note que assumo que o remoto é **origin** mas por favor faça a configuração para os remotos que tiver no seu sistema.

A partir daqui poderá invocar `git push`, `git pull` e `git clone` sem introduzir as suas credenciais.

Valeu.