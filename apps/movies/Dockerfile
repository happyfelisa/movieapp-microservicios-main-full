# Usar una imagen de Node.js como base
FROM node:alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al directorio de trabajo
COPY ../../package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Compilar la aplicación
RUN npm run build

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 3103

# Comando para iniciar la aplicación
CMD [ "npm", "run", "start:dev","movies"]