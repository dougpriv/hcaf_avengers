# base image
FROM node:12.2.0
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN echo meep
RUN npm install
RUN npm install -g @angular/cli@7.3.9
COPY . /app
CMD echo "export const environment = { backend:\"`echo ${SERVER_URI}`\", production: true }" > /app/src/environments/environment.ts;echo "export const environment = { backend:\"`echo ${SERVER_URI}`\", production: true }" > /app/src/environments/environment.prod.ts;ng serve --prod --host 0.0.0.0 --port 8002