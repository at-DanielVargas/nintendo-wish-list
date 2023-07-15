FROM node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system server && \
          adduser --system -G server server

COPY dist/packages/backend server
RUN chown -R server:server .

RUN npm --prefix server --omit=dev -f install

CMD [ "node", "server" ]