CORRECCIÓN ACCIÓN ELIMINAR AÑO
El frontend utiliza la acción API `adminDeleteYear`.
El backend incluido en apps-script/Code.gs debe ser publicado en la MISMA implementación de Apps Script.

Pasos:
1. Reemplazar frontend/js/app.js y frontend/js/api.js en el hosting externo.
2. Abrir el proyecto de Apps Script conectado a la planilla.
3. Reemplazar Code.gs por apps-script/Code.gs incluido en este ZIP.
4. Guardar > Implementar > Administrar implementaciones > Editar implementación existente > Nueva versión > Implementar.
5. Mantener la misma URL /exec y probar con un registro de prueba.

El backend incluido implementa adminDeleteYear y elimina solamente la celda del año seleccionado. No reemplazar ni borrar la planilla.
Año vigente predeterminado: calculado dinámicamente con el año actual. Rango: 2015–2050.
