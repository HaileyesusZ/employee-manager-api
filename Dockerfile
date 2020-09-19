FROM node:12

WORKDIR /employeemanagerapi

COPY package.json /employeemanagerapi

RUN npm install

COPY . /employeemanagerapi

CMD ["yarn", "start"]