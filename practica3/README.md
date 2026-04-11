Pasos para la instalación y ejecución del proyecto

Clonar el repositorio
Descarga el código fuente en tu maquina local.
git clone

Instalar dependencias
Abre una terminal en la raíz del proyecto y ejecuta el siguiente comando para instalar todas las librerías necesarias de Next.js y React:
npm install

Ejecutar el servidor de desarrollo
Inicia la aplicación en modo local ejecutando:
npm run dev

Visualizar la aplicación
Abre tu navegador web y accede a http://localhost:3000



Explicación de cómo se ha estructurado el Contexto y dónde se ha inyectado el "Provider"

Estructura del Contexto:
El estado global se ha implementado en el archivo context/context.tsx utilizando la API de Context de React. Este contexto guarda un array con los productos seleccionados y realiza dos funciones principales para que cualquier componente pueda interactuar con el:

toggleSelection: Evalúa si un producto ya existe en el estado; si está, lo elimina, y si no está, lo añade.

checkIsSelected: Devuelve un booleano para indicar si un producto especifico ya forma parte de la selección

Inyección del Provider:
El Provider se ha inyectado en el archivo app/layout.tsx. Se ha colocado en este nivel superior envolviendo tanto a la barra de navegación (Navbar) como a los componentes hijos. Esto garantiza que el estado de los productos seleccionados permanezca y no se reinicie mientras el usuario navega entre el catalogo, la vista de detalle y la vista de gestión.



Descripción de los componentes que utilizan el patrón children y por qué se han diseñado así

En este proyecto se han diseñado dos componentes principales que actúan como envoltorios (Wrappers) utilizando el patrón children:

PageWrapper: Es un contenedor principal que envuelve el contenido completo de cada vista (el archivo page.tsx del catálogo, detalle y seleccionados). Se encarga exclusivamente de estandarizar los márgenes globales y el ancho máximo de la pantalla. De esta forma, las páginas individuales solo se preocupan por su lógica, sin repetir código CSS de posicionamiento.

GridContainer: Es un envoltorio que crea un contenedor CSS Grid dinámico y adapta su número de columnas dependiendo del tamaño de la pantalla. En su interior renderiza cualquier tarjeta que se le pase como hijo. Solo define la estructura visual, fomentando la máxima reutilización y limpieza en el código.