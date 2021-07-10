FROM ranadeeppolavarapu/nginx-http3:latest

RUN mkdir /home/app

COPY . /home/app

WORKDIR /home/app

RUN ls && mv ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 9000/tcp
EXPOSE 9001/tcp
EXPOSE 9001/udp

ENTRYPOINT ["nginx","-g","daemon off;"]
