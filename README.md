# Control de Vehículos - Backend 

Este es el servidor API REST encargado de gestionar la lógica de negocio y la persistencia de datos para el sistema de Control de Vehículos. Está construido con **Node.js** y **Express**, utilizando **Sequelize** como ORM para la comunicación con PostgreSQL.

## Tecnologías Utilizadas

* **Node.js & Express**: Framework base para la API.
* **PostgreSQL**: Base de datos relacional.
* **Sequelize**: ORM para el mapeo de modelos y consultas.
* **CORS**: Para permitir peticiones desde el frontend.
* **Dotenv**: Gestión de variables de entorno para seguridad.

## Requisitos Previos

* **Node.js** (Versión 18 o superior).
* **PostgreSQL** instalado y corriendo localmente.
* Base de datos creada (ejemplo: `control_vehiculos`).

## Instalación y Configuración

Siga estos pasos para configurar el servidor en su entorno local:

1. **Clonar el Proyecto**
Si aún no lo tiene, clone el repositorio:
    ```bash
    git clone [https://github.com/elvishn20/BackendVehiculos.git](https://github.com/elvishn20/BackendVehiculos.git)
    cd BackendVehiculos

2. **Instalar Dependencias**
Ejecute el comando para instalar todas las librerías necesarias (Express, PG, Sequelize, etc.):

npm install

3. **Configurar Variables de Entorno**
En la raíz del proyecto, asegúrese de tener un archivo llamado .env con los siguientes datos:

PORT=3000
DB_NAME=nombre_de_tu_db
DB_USER=usuario_postgres
DB_PASS=tu_contraseña
DB_HOST=localhost

4. **Preparar la Base de Datos**
Antes de iniciar, asegúrese de haber ejecutado los scripts de PostgreSQL para las tablas, procedimientos y funciones:

Tablas: vehiculos y movimientos.
Funciones: traer_vehiculos() y traer_movimientos().

5. **Iniciar el Servidor**
Para ejecutar el backend en modo producción/normal:

node src/index.js