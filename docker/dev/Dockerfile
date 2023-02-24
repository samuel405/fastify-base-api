FROM clearlinux/node:18

WORKDIR /usr/src

COPY . /usr/src

RUN npm i -g nodemon ts-node

RUN chown -R 1000:1000 "/.npm"

EXPOSE 3000

CMD ["npm", "run", "dev"]