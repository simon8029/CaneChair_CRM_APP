FROM node
RUN mkdir -p /usr/local/canechair_crm_app/
COPY build /usr/local/canechair_crm_app
WORKDIR /usr/local/canechair_crm_app
RUN npm install --production
EXPOSE 3000