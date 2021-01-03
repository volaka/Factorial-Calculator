FROM public.ecr.aws/bitnami/node:14.15.3-prod-debian-10-r12
EXPOSE 3000
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]