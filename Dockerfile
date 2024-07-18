FROM ubuntu
#LABEL test for Render Mathilde Patrissi Università di Firenze
RUN apt-get update	
RUN DEBIAN_FRONTEND="noninteractive" apt-get -y install tzdata git apache2 php libapache2-mod-php

#EXPOSE 80
RUN mkdir /home/mathy/
WORKDIR /home/mathy/
#CMD apachectl -D FOREGROUND
RUN git clone https://github.com/mathyptr/rendertest.git
RUN cp -r render_test /var/www/html/

RUN sed -i 's/Listen 80/Listen 0.0.0.0:10000/g' /etc/apache2/ports.conf
&& echo "apachectl -D FOREGROUND" >  /home/mathy/smartlens-docker/start.sh \
&& chmod u+x /home/mathy/smartlens-docker/start.sh 
CMD /home/mathy/smartlens-docker/start.sh
