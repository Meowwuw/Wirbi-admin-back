# Wirbi Admin Backend

Este es el backend para la aplicación de administración de Wirbi. Está construido utilizando Node.js, Express y MongoDB.

## Estructura del Proyecto

├── node_modules
├── src
│ ├── config
│ │ └── db.js
│ ├── models
│ │ ├── Colaborador.js
│ │ └── Planilla.js
│ ├── routes
│ │ ├── colaboradores.js
│ │ └── planillas.js
│ └── server.js
├── .env
├── package-lock.json
├── package.json
└── README.md

## Instalación

Requisitos previos: Node.js v16 o superior - MongoDB v4 o superior

1. Clona este repositorio: git clone https://github.com/wirbidotcom/wirbi-admin.git

2. Navega al directorio del proyecto: cd wirbi-admin

3. Instala las dependencias: npm install

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables: MONGO_URI=your_mongodb_uri 
Reemplaza your_mongodb_uri con la cadena de conexión a tu base de datos MongoDB.

## Uso

1. Inicia el servidor: npm start

2. El servidor estará disponible en `http://localhost:5000`.

## Rutas

### Colaboradores

- **GET** `/api/colaboradores`: Obtiene la lista de colaboradores.
- **POST** `/api/colaboradores`: Crea un nuevo colaborador.

### Planillas

- **GET** `/api/planillas`: Obtiene la lista de todas las planillas.
- **GET** `/api/planillas/:colaboradorId`: Obtiene las planillas de un colaborador específico.

## Contribución

1. Crea un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva feature'`).
4. Empuja tus cambios a la rama (`git push origin feature/nueva-feature`).
5. Abre un Pull Request.






