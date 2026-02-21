Star Wars API

Este proyecto es una aplicación web desarrollada con Next.js y React que consume la API pública de Star Wars (SWAPI). Permite visualizar un listado de personajes con su información básica y cargar más resultados de forma progresiva.

Cómo ejecutar el proyecto localmente

Para probar este proyecto en tu ordenador, sigue estos pasos en tu terminal:

1- Instalar las dependencias del proyecto:
  bash
  npm install


2- Arrancar el servidor de desarrollo:
  bash
  npm run dev


3- Ver la aplicación:
  Abre tu navegador web y visita http://localhost:3000


Problemas encontrados y sus soluciones
Durante el desarrollo, me fui encontrando con varios obstáculos típicos al empezar con React, los cuales pude ir resolviendo:

Problema 1: Bucle infinito al hacer el fetch.

El problema: Al principio, puse la llamada a la API directamente en el cuerpo del componente. Esto hacía que cada vez que se actualizaba un estado, volviera a pedir los datos, creando un bucle infinito que bloqueaba la página.

La solución: Aprendí que las llamadas a APIs externas deben ir dentro de un useEffect. Le pasé un array de dependencias vacío [] al final para asegurarme de que el fetch solo se ejecutara una única vez al montar el componente.

Problema 2: La paginación borraba los personajes anteriores.

El problema: Cuando logré hacer funcionar el botón de "Siguiente Página", los nuevos personajes aparecían, pero sustituían a los que ya estaban en pantalla en lugar de ponerse debajo.

La solución: Tuve que cambiar la forma en la que actualizaba el estado. En lugar de hacer setCharacters(nuevosDatos), utilicé el spread operator para juntar los datos antiguos con los nuevos: setCharacters(prev => [...prev, ...nuevosDatos]).

Problema 3: Estilos.

El problema: No conseguía que los estilos se aplicaran como yo quería (por ejemplo, elementos que no se centraban o colores que no cargaban).

La solución: Me di cuenta de que tenía archivos CSS conflictivos y estaba intentando usar clases que mi proyecto no reconocía. La solución fue borrar los estilos que sobraban, limpiar las clases de mis componentes .tsx y centralizar todo el diseño en un único archivo globals.css usando clases de CSS puro.
