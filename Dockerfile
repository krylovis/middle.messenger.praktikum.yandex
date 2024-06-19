# FROM node:18

FROM node as development
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
# RUN npm run start
FROM nginx:stable-alpine as production
COPY --from=development /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]