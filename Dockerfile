FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=5000
EXPOSE 5000 

CMD ["npm", "run", "start", "--", "--port=5000"]
