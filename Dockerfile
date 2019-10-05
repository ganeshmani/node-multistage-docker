# Build Stage 1
# This build created a staging docker image 
#
FROM node:10.15.2-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY .babelrc ./
RUN npm install
COPY ./src ./src
RUN npm run build

# Build Stage 2
# This build takes the production build from staging build
#
FROM node:10.15.2-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY .babelrc ./
RUN npm install
COPY --from=0 /usr/src/app/dist ./dist
EXPOSE 4002
CMD npm start
