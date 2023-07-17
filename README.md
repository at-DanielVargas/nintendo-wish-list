# Nintendo Wish List

[![codecov](https://codecov.io/gh/at-DanielVargas/nintendo-wish-list/branch/development/graph/badge.svg?token=TNFFXWKVZ2)](https://codecov.io/gh/at-DanielVargas/nintendo-wish-list) [![Netlify Status](https://api.netlify.com/api/v1/badges/b9752ceb-bf73-447f-8cc4-ccfd15ba06a5/deploy-status)](https://app.netlify.com/sites/spontaneous-babka-4fc980/deploys) [![Fly Deploy](https://github.com/at-DanielVargas/nintendo-wish-list/actions/workflows/main.yml/badge.svg)](https://github.com/at-DanielVargas/nintendo-wish-list/actions/workflows/main.yml)

ejercicio angular utilizando un monorepositorio NX [Ejemplo de aplicación funcional](https://spontaneous-babka-4fc980.netlify.app)

### Descripción del proyecto
Se requiere una aplicación angular con 2 secciones principales juegos y lista de deseos hacer uso del sigueinte stack de librerias:
● Angular x.x
● NGRX
● Jest
● SCSS

### Requerimientos funcionales
##### Catálogo de videojuegos
- [x] Mostrar un banner promocional.
- [x] Mostrar el listado de los primeros 15 videojuegos. Por default deberán ser de manera “ascendente”.
- [x] Al hacer scroll deberá mostrar los siguientes 15 videojuegos.
- [x] La opción “Organizar por” permitirá realizar un ordenamiento “ascendente” y “descendente” por nombre del video juego.
- [x] Al dar clic en el icono “Agregar Lista de deseos” deberá almacenarse ese video juego
en un store global.


##### Lista de deseos
- [x] Visualizar una lista de los videojuegos que fueron seleccionados y almacenados en el store previamente.
- [x] Al dar clic en el icono “Lista de deseos” deberá eliminar el video juego de la lista y del store.
- [x] Al dar clic en el botón “Adquirir la versión digital” deberá mostrar un pop up con el siguiente mensaje: “Videojuego adquirido correctamente” y este deberá ser eliminado de la lista de deseos.
- [x] Si todos los videojuegos fueron eliminados de la lista de deseos deberá mostrar la
siguiente leyenda “Aún no has agregado nada a tu lista deseos”.

## Inicializacion de proyecto en ambiente local
Despues de clonar el repositorio se deben ejecutar los siguientes comandos:
_Instalacion de dependencias_
```bash
npm install
```
una vez instaladas las dependencias del proyecto, se puede levantar el proyecto haciendo uso de node con los siguientes comandos:

```bash
npm run preview
```

este comando levantara la aplicacion angular en http://localhost:4200 y un backend en http://localhost:3000

## Pruebas

Comandos para la ejecución de pruebas:
_Pruebas unitarias_
```bash
npm test
```

_Pruebas de covertura_
```bash
npm test -- --coverage
```
