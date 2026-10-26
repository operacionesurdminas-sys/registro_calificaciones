# Sistema de Registro de Calificaciones

Frontend separado de Google Apps Script.

## Estructura
- `frontend/index.html`: estructura y carga de recursos.
- `frontend/css/styles.css`: estilos.
- `frontend/js/config.js`: configuración y URL de API.
- `frontend/js/api.js`: comunicación con Apps Script.
- `frontend/js/app.js`: navegación, carga de calificaciones y panel de administración.
- `apps-script/Code.gs`: API de Google Apps Script.

## Instalación
1. Publicar el contenido de `frontend/` en el hosting externo.
2. Revisar `frontend/js/config.js` y mantener la URL `/exec` del proyecto existente.
3. Actualizar `Code.gs` en el mismo proyecto de Apps Script y publicar una nueva versión de la implementación.
4. No crear otra planilla ni borrar datos existentes.

El sistema conserva el frontend separado; `index.html` solamente contiene la estructura de la página y referencias a CSS/JS externos.
