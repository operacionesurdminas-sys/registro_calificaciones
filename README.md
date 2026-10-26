# Sistema de registro de calificaciones

Frontend independiente (HTML, CSS y JavaScript) conectado a una API de Google Apps Script.

## Estructura
- `frontend/index.html`: pantallas.
- `frontend/css/styles.css`: estilos responsive.
- `frontend/js/app.js`: interfaz y lógica del frontend.
- `frontend/js/api.js`: comunicación JSONP con Apps Script.
- `frontend/js/config.js`: URL `.exec` configurada.
- `apps-script/Code.gs`: backend para Google Sheets.

## Períodos y carga
- Años disponibles: **2015 a 2050**, en orden descendente en el selector.
- El usuario puede preparar uno o varios años, quitar años antes de guardar y guardar todo en una sola operación.
- Cada año admite una nota de 0 a 10 con hasta dos decimales o `NO FUE CALIFICADO`.
- Al guardar por primera vez, el registro del efectivo queda enviado; las correcciones posteriores las realiza un administrador.

## Pestañas de Google Sheets
- `PERSONAL`: `DNI | JERARQUIA | NOMBRE_COMPLETO`
- `CALIFICACIONES`: primera columna `DNI`; el backend agrega automáticamente las columnas de los años 2015–2050 que falten, sin borrar las columnas ni los datos existentes.
- `ADMINISTRADORES`: `DNI | ACCESO`; valores válidos para acceso: `ADMIN`, `ADMINISTRADOR`, `SI`, `SÍ`, `TRUE`, `1`. Para retirar permisos usa `NO`.

## Actualización
1. Publicá el contenido de `frontend/` en el alojamiento externo.
2. Verificá la URL `.exec` en `frontend/js/config.js`.
3. En el proyecto de Apps Script asociado a esa URL, reemplazá `Code.gs` por `apps-script/Code.gs`, guardá y actualizá la implementación existente a una nueva versión.
4. Probá con un administrador: entrar a Administración de usuarios, otorgar permiso a un efectivo, confirmar que cambie a Administrador y que pueda acceder luego de cerrar sesión y volver a ingresar.

## Importante sobre permisos
La administración de usuarios requiere publicar la nueva versión de `Code.gs`; actualizar solamente los archivos del frontend no alcanza. El backend usa JSONP/GET y el ingreso solo por DNI; no es una autenticación fuerte para datos sensibles.


## Correcciones de esta versión
- Las calificaciones agregadas se muestran en la lista previa al guardado y se puede quitar un año sin afectar los demás.
- En la nómina se incorporó el botón **Ver todas**, que muestra los años 2015–2050 y permite eliminar una calificación individual.
- Se quitó el botón de eliminación masiva por efectivo para evitar borrar accidentalmente todos los años. La acción API antigua, si se usa, ahora limpia las calificaciones sin eliminar la fila ni el DNI.
- Administración de usuarios muestra los errores reales de la API en pantalla y conserva la gestión de permisos en la pestaña ADMINISTRADORES.

## Actualización
Actualizá los archivos de `frontend/` en el hosting y reemplazá `apps-script/Code.gs` en el proyecto Apps Script actual. Guardá y publicá una nueva versión de la implementación existente. No borres la planilla. Probá primero con un efectivo de prueba.
