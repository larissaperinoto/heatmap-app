FROM node:22-alpine
WORKDIR /
COPY . .
EXPOSE 3000
RUN npm install
RUN npm run build
ENTRYPOINT [ "npm", "start" ]