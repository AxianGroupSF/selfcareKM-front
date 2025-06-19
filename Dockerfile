
##FROM node:18.19-alpine as build-step
FROM node:22.12.0-alpine as build-step
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
COPY . .
RUN ng build --configuration recette
RUN ls -lhart /app/dist/
RUN ls -lhart /app/dist/selfcare
RUN ls -lhart /app/dist/selfcare/browser

# Étape 2 : Servir l'application avec Nginx
FROM nginx:alpine
COPY --from=build-step /app/dist/selfcare/ /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
RUN chmod -R 777 /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]