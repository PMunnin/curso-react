# TEMA 3 - UIs complejas mediante composición

## Contenido

Archivos de configuración listos:

- `package.json` con dependencias
- `.babelrc` para el transpilador Babel.js
- `webpack.config.js` para el empaquetador webpack

Código auxiliar:

- `src/lib/utils.js` - función para manipular tiempo (Ejercicio Contador)
- `src/data/got.js` - personajes Juego de Tronos (Ejercicio Buscador)
- `src/data/catalog.js` - productos para Ecommerce

Plantillas HTML:

- `src/templates/cronometro.html` - versión estática del Ejercicio Cronómetro
- `src/templates/buscador.html` - versión estática del Ejercicio Buscador
- `src/templates/shoppingcart.html` - versión estática del Ejercicio Ecommerce

NOTA: puedes visualizar las plantillas en el navegador si las copias a la carpeta `dist`, en http://localhost:8080/cronometro.html por ejemplo.

## Instrucciones

Instala las dependencias guardadas en `package.json` ejecutando en una terminal en la misma carpeta:
```
npm install
```

Arrancar el servidor de desarrollo y recompilar el código:
```
npm start
```

Tu aplicación estará disponible en http://localhost:8080

Generar bundle de producción (sin servidor de desarrollo):
```
npm run build
```

## Requisitos
Necesitas tener instalado **node.js** en tu equipo. Puedes descargarlo para tu sistema operativo desde el sitio Web de node.js.

https://nodejs.org/es/
