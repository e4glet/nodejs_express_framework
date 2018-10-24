#提取镜像
FROM hub.c.163.com/lightingfire/nodejs:6.9.1-alpine
#版本信息
MAINTAINER eaglet
#设置工作目录
RUN mkdir -p /home/www
WORKDIR /home/www
COPY package.json /home/www
RUN npm i --registry https://registry.npm.taobao.org && npm cache clean && npm install express -gd && npm install -g express-generator && npm install && npm install supervisor -g
COPY . /home/www
EXPOSE 3000
CMD [ "npm", "start" ]
