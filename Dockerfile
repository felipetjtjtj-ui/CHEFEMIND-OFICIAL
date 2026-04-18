FROM node:20-alpine
RUN npm install -g serve
WORKDIR /app
COPY dist ./dist
CMD serve -s dist -l ${PORT:-3000}
