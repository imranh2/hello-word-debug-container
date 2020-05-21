FROM gcr.io/distroless/nodejs
WORKDIR /opt/app
COPY . .
EXPOSE 3000
CMD [ "/opt/app/index.js" ]
