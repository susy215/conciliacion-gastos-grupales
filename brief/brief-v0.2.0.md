# Brief v0.2.0 — Conciliación de gastos grupales

## Estado de la investigación

Este documento es una actualización provisional del Brief v0.1. Las respuestas utilizadas para organizar los primeros hallazgos corresponden a una simulación de entrevistas y serán reemplazadas posteriormente por evidencias obtenidas de usuarios reales.

## Problema revisado

Las personas encargadas de organizar gastos grupales pueden perder tiempo reuniendo información distribuida entre mensajes, notas, comprobantes y recuerdos de los participantes.

Esta situación dificulta calcular correctamente cuánto corresponde pagar a cada integrante, especialmente cuando los gastos se dividen de manera diferente, varias personas adelantan dinero o existen pagos parciales y pendientes.

Al finalizar una actividad, el organizador puede confundirse al determinar quién debe dinero, cuánto debe, a quién debe pagarle y cuándo todas las cuentas están conciliadas.

## Usuario y contexto

El usuario principal es la persona encargada de organizar una actividad grupal y administrar los gastos compartidos.

Esta situación puede presentarse durante viajes, comidas, fiestas, paseos, trabajos universitarios o compras realizadas entre amigos o compañeros.

La tarea se realiza antes, durante y después de la actividad, generalmente desde el celular y con las siguientes limitaciones:

- Los gastos pueden ser pagados por diferentes integrantes.
- La información puede quedar registrada en distintos lugares.
- No todos los gastos corresponden a las mismas personas.
- La división puede ser igual o mediante montos diferentes.
- Algunos integrantes pueden realizar pagos completos o parciales.
- Los pagos en efectivo pueden no tener un comprobante.
- Los cálculos deben repetirse cuando aparece un gasto o pago nuevo.

## Evidencia provisional

Las siguientes observaciones provienen de una simulación utilizada para preparar la investigación. No representan todavía entrevistas realizadas a usuarios reales:

- La información puede quedar repartida entre mensajes, comprobantes y notas personales.
- Cuando varias personas adelantan dinero, puede ser difícil decidir quién debe pagarle a quién.
- Los pagos en efectivo pueden olvidarse cuando no existe un comprobante.
- Los pagos parciales obligan a revisar nuevamente los cálculos y saldos pendientes.

Estas observaciones serán contrastadas y reemplazadas mediante entrevistas reales.

## Insight provisional

El problema principal no consiste solamente en sumar y dividir el total de una actividad. El organizador necesita conservar un registro centralizado y comprensible que permita identificar la siguiente acción: quién debe pagar, cuánto debe y a quién debe pagarle.

También debemos considerar que una división exclusivamente en partes iguales no representa todos los casos, porque algunos gastos pueden corresponder solamente a determinados integrantes o dividirse mediante montos diferentes.

Este aprendizaje continúa pendiente de validación con usuarios reales.

## Hipótesis revisada

Creemos que las personas encargadas de organizar gastos grupales necesitan centralizar los gastos, aportes y pagos de cada integrante, porque la información dispersa y las divisiones diferentes pueden provocar confusión y obligarlas a repetir cálculos.

Si diseñamos una aplicación móvil que permita registrar los gastos, dividirlos en partes iguales o diferentes y mostrar saldos actualizados, esperamos que el organizador pueda identificar quién debe, cuánto debe y a quién debe pagar sin reconstruir manualmente todas las cuentas.

Todavía falta comprobar qué información necesitan ver los usuarios para comprender y confiar en los cálculos.

## Alcance inicial

La primera versión se concentrará en la conciliación de una actividad grupal.

Incluirá:

- Crear una actividad.
- Agregar a sus integrantes.
- Registrar un gasto y su monto.
- Indicar qué integrante realizó el pago.
- Seleccionar qué integrantes participan del gasto.
- Dividir el gasto en partes iguales o mediante montos diferentes.
- Calcular cuánto debe cada integrante.
- Mostrar quién debe pagar, cuánto debe y a quién.
- Registrar pagos completos, parciales o pendientes.
- Mostrar cuándo las cuentas de la actividad están conciliadas.

## Fuera de alcance

La primera versión no incluirá:

- Transferencias o pagos electrónicos desde la aplicación.
- Integración con bancos o billeteras móviles.
- Manejo de diferentes monedas.
- Lectura automática de comprobantes.
- Notificaciones automáticas.
- Chat entre los integrantes.
- Reportes financieros avanzados.
- Administración avanzada de cuentas y perfiles.

## Flujo principal

1. El organizador crea una actividad.
2. Agrega a los integrantes que compartirán los gastos.
3. Registra un gasto, su monto y la persona que lo pagó.
4. Selecciona qué integrantes participan y si la división será igual o diferente.
5. La aplicación calcula cuánto debe cada integrante y a quién debe pagarle.
6. El organizador registra los pagos completos, parciales o pendientes.
7. La aplicación actualiza los saldos y muestra la actividad como conciliada cuando ya no existen deudas.

## Primera tarea priorizada

Registrar un gasto compartido y mostrar cuánto debe cada integrante y a quién debe pagarle.

Esta tarea permitirá comprobar primero la función central del proyecto, antes de implementar todas las demás funcionalidades.

## Criterios de éxito

1. El organizador puede registrar y dividir un gasto sin utilizar una calculadora externa.
2. Después de registrar el gasto, puede identificar en menos de 30 segundos quién debe, cuánto debe y a quién debe pagar.
3. Cuando registra un pago completo o parcial, los saldos se actualizan y puede reconocer si todavía existen pendientes o si la actividad está conciliada.

## Primer requerimiento

La aplicación debe permitir al organizador registrar un gasto indicando el monto, la persona que pagó, los integrantes involucrados y el tipo de división —igual o diferente—, para calcular y mostrar cuánto debe cada integrante y a quién debe pagar.

## Preguntas abiertas

- ¿Cómo se decidirá a quién pagar cuando varias personas hayan adelantado diferentes gastos?
- ¿Quién debe confirmar un pago: quien paga, quien recibe o el organizador?
- ¿Qué información necesita ver cada integrante para comprender y confiar en el cálculo?
- ¿Cómo debe corregirse un gasto o pago registrado incorrectamente?
- ¿Es necesario conservar un comprobante o confirmación de cada pago?
- ¿Qué información mínima se necesita para considerar una actividad completamente conciliada?

## Cambios respecto al Brief v0.1

- Se mantuvo el problema de registrar, dividir y conciliar gastos compartidos.
- Se amplió la división para considerar partes iguales y montos diferentes.
- Se incorporaron pagos completos, parciales y pendientes.
- Se priorizó como primera tarea registrar un gasto y mostrar quién debe pagar a quién.
- Se excluyeron pagos electrónicos, integraciones bancarias, notificaciones, chat y reportes avanzados.
- La evidencia y los hallazgos provisionales deberán actualizarse después de realizar las entrevistas reales.
