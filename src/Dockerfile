FROM php:7.2-apache
WORKDIR /var/www/html/
COPY ./ /var/www/html/
RUN mkdir -p /tmp/myapp/images && chown -R www-data:www-data /tmp/myapp/images
EXPOSE 80