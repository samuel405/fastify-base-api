FROM clearlinux/node:18

WORKDIR /usr/src

COPY . /usr/src

RUN npm ci

RUN npm run build

WORKDIR /usr/src/dist/src

EXPOSE 80

RUN ls -la

CMD ["node", "server.js"]