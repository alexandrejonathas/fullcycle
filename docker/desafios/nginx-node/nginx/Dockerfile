FROM nginx:1.25.1

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

COPY wait-for-it.sh /usr/bin/wait-for-it.sh
RUN chmod +x /usr/bin/wait-for-it.sh