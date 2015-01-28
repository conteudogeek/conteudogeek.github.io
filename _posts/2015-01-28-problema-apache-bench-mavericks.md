---
layout: post
title:  "Problema do ApacheBench no OS X Mavericks"
date:   2015-01-28 20:30:00
author: "Leonel Machava"
---

No OS X Mavericks quando tento fazer um benchmark de uma aplicação web local usando o *Apache Bench* recebo o seguinte erro:

{% highlight sh %}
$ ab -n 1000 -c 50 http://localhost:9000/
This is ApacheBench, Version 2.3 <$Revision: 655654 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)...apr_socket_recv: Connection refused (61)
{% endhighlight %}

Descobrí que esta versão do Apache Bench dá o erro `apr_socket_recv: Connection refused (61) quando especificamos **localhost** no lugar do servidor.

A solução é simples: em vez de **localhost** indique **127.0.0.1**.

Colocando 127.0.0.1 no lugar do servidor o benchmark funciona com sucesso:

{% highlight sh %}
$ ab -n 1000 -c 50 http://127.0.0.1:9000/
This is ApacheBench, Version 2.3 <$Revision: 655654 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests
...
{% endhighlight %}

&nbsp;