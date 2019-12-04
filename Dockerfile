FROM node
LABEL maintainer="yunshangmian 403433538@qq.com" 
EXPOSE 5000
COPY ./ /
RUN npm install  && npm run build && npm install -g serve 
CMD ["serve","dist"]