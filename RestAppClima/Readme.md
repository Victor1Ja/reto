# REST API Clima

Este proyecto es una API RESTful que permite buscar ciudades, obtener el clima actual de una ciudad y mantener un historial de búsquedas. La API está construida con Node.js, Express y PostgreSQL, y sigue los principios de Clean Architecture. Además, se proporciona un entorno de ejecución con Docker y Docker Compose.

## Contenidos

1. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
2. [Requisitos Previos](#requisitos-previos)
3. [Configuración del Entorno](#configuración-del-entorno)
4. [Instrucciones de Ejecución](#instrucciones-de-ejecución)
5. [Uso de la API](#uso-de-la-api)
6. [Dockerización](#dockerización)
7. [Variables de Entorno](#variables-de-entorno)
8. [Notas Finales](#notas-finales)

## Arquitectura del Proyecto

Este proyecto sigue los principios de Clean Architecture, que promueven una separación clara de las responsabilidades y facilitan el mantenimiento y escalabilidad del código. La estructura del proyecto es la siguiente:


### Descripción de Directorios y Archivos

- **config/db.js**: Configuración de la conexión a la base de datos PostgreSQL.
- **controllers/searchController.js**: Controladores que manejan las solicitudes HTTP y las respuestas.
- **models/Search.js**: Definición del modelo Sequelize para las búsquedas.
- **repositories/searchRepository.js**: Interacciones directas con la base de datos.
- **routes/searchRoutes.js**: Definición de las rutas de la API.
- **services/searchService.js**: Lógica de negocio que interactúa con las APIs externas y el repositorio.
- **app.js**: Configuración principal de la aplicación y el servidor Express.

## Requisitos Previos

- Node.js (versión 20 o superior)
- Docker y Docker Compose
- PostgreSQL (si no se usa Docker para la base de datos)

## Configuración del Entorno

ejecutar postgresql docker-compose up -d -f docker-compose-postgres.yml
docker-compose logs postgres

Crear tabla en Postgresql 

## Configuración

### Ejecutar PostgreSQL con Docker

Para ejecutar PostgreSQL usando Docker, utiliza los siguientes comandos:

```bash
docker-compose up -d -f docker-compose-postgres.yml
docker-compose logs postgres:
```

```bash
CREATE TABLE Searches (
    id SERIAL PRIMARY KEY,
    term VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## Ejecutar sin Docker
```
npm install
npm start
```

## Dockerizar el Proyecto

Crea una red Docker:

```
docker network create litethinking
```
Construye la imagen Docker:

```
docker build -t restappclima .
```
Ejecuta el contenedor Docker:
```
docker run -d --name restappclima --network litethinking -p 3000:3000 --env-file .env restappclima
```

## Uso de la API

1. Buscar Ciudad

URL: http://localhost:3000/api/search
Método: POST
Body: JSON (raw)

```
{
  "term": "Bogotá"
}
```
2. Obtener el Clima de una Ciudad
URL: http://localhost:3000/api/weather
Método: GET
Parámetros: Query Params
```
Key	   Value
lat	  4.60971
lon	 -74.08175
```
3. Obtener el Historial de Búsquedas
URL: http://localhost:3000/api/history
Método: GET