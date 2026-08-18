# Brief v0.2.0 - Conciliación de gastos grupales

## Estado de la investigación

Este documento actualiza el Brief v0.1 después de realizar dos entrevistas sobre experiencias reales y recientes de organización y conciliación de gastos grupales.

También se utilizó una entrevista simulada con inteligencia artificial para probar la guía de preguntas y explorar un caso adicional. La simulación se encuentra identificada como tal y no se utiliza para confirmar los hallazgos obtenidos de los participantes reales.

## Problema revisado

Las personas encargadas de organizar gastos grupales deben reunir y comparar manualmente información distribuida entre cuadernos, mensajes de WhatsApp, comprobantes de QR y pagos en efectivo.

Esta situación dificulta mantener actualizado cuánto corresponde pagar a cada integrante, especialmente cuando existen gastos comunes y consumos particulares, pagos totales o parciales y aportes realizados en diferentes momentos.

Después de la actividad, el organizador debe continuar revisando los pagos y recordando a las personas pendientes. Si alguien no regulariza su cuota, el encargado puede terminar asumiendo personalmente el monto faltante.

## Usuario y contexto

El usuario principal es la persona encargada de organizar una actividad entre amigos y administrar los gastos compartidos.

Las entrevistas permitieron observar esta tarea en dos actividades sociales relacionadas con comida: un churrasco de aproximadamente 20 personas y una choripaneada de 6 personas.

La tarea ocurre antes, durante y después de la actividad, generalmente con las siguientes condiciones y limitaciones:

- Una persona concentra la compra, el registro, el cobro y la rendición de cuentas.
- Los gastos comunes pueden dividirse entre todos y los consumos particulares asignarse individualmente.
- Los integrantes pueden pagar por QR o en efectivo.
- Los pagos pueden ser completos, parciales o quedar pendientes.
- Los pagos se realizan durante la actividad, al finalizar o en días posteriores.
- La información puede quedar distribuida entre cuadernos, mensajes y comprobantes.
- El organizador necesita revisar y actualizar manualmente quién ya pagó y quién continúa pendiente.

## Evidencia

### Entrevista real P1

En un churrasco de aproximadamente 20 personas, el encargado compró los insumos, dividió los gastos comunes y añadió los consumos particulares a las cuotas correspondientes. Recibió pagos totales y parciales mediante QR y efectivo, y comparó manualmente el cuaderno con los mensajes y comprobantes.

El seguimiento continuó después de la actividad. En un caso, una persona abandonó el grupo sin pagar y el encargado terminó cubriendo la cuota pendiente.

### Entrevista real P2

En una choripaneada de 6 personas, los gastos comunes se dividieron entre los integrantes y los consumos particulares se sumaron solamente a la cuota de quien los realizó. La información se registró en un cuaderno y el seguimiento se realizó mediante WhatsApp.

Algunas personas pagaron durante la actividad, otras al finalizar y otras en los días siguientes. La persona encargada revisó los pendientes y envió recordatorios antes de la siguiente actividad.

### Simulación complementaria con IA

Se simuló un paseo de 8 personas para probar las preguntas y explorar la corrección de un gasto personal registrado por error como gasto compartido. Este caso no corresponde a una persona real y se conserva únicamente como exploración complementaria; no se utiliza para validar el problema.

## Insight

El problema principal no consiste solamente en sumar y dividir el total. El organizador necesita mantener un registro centralizado, actualizado y comprensible de gastos comunes, consumos particulares, pagos completos o parciales y saldos pendientes, aunque la información llegue por diferentes medios y en distintos momentos.

La conciliación tampoco termina al finalizar la actividad. El seguimiento posterior forma parte de la tarea: el encargado necesita saber quién ya pagó, quién continúa pendiente y cuándo puede considerar cerradas las cuentas sin asumir montos ajenos.

## Hipótesis revisada

Creemos que las personas encargadas de organizar gastos grupales necesitan centralizar los gastos, aportes y pagos de cada integrante, porque el registro manual y disperso dificulta actualizar los saldos y prolonga el seguimiento de las cuentas pendientes.

Si diseñamos una aplicación móvil que permita diferenciar gastos comunes y particulares, registrar pagos completos o parciales y mostrar saldos actualizados, esperamos que el organizador pueda identificar quién debe, cuánto debe y a quién debe pagar sin reconstruir manualmente la información del cuaderno, WhatsApp y los comprobantes.

Todavía falta comprobar quién debería confirmar cada pago, qué información genera confianza en los cálculos y cómo debe registrarse una corrección o desacuerdo.

## Alcance inicial

La primera versión se concentrará en la conciliación de una sola actividad grupal.

Incluirá:

- Crear una actividad.
- Agregar a sus integrantes.
- Registrar un gasto y su monto.
- Indicar qué integrante realizó el pago.
- Seleccionar qué integrantes participan del gasto.
- Dividir el gasto en partes iguales o mediante montos diferentes.
- Registrar consumos particulares asignados a integrantes específicos.
- Calcular cuánto corresponde pagar a cada integrante.
- Mostrar quién debe pagar, cuánto debe y a quién.
- Registrar pagos completos, parciales o pendientes.
- Actualizar los saldos después de cada pago.
- Mostrar cuándo las cuentas de la actividad están conciliadas.

## Fuera de alcance

La primera versión no incluirá:

- Transferencias o pagos electrónicos desde la aplicación.
- Integración con bancos o billeteras móviles.
- Manejo de diferentes monedas.
- Lectura automática de comprobantes.
- Notificaciones o recordatorios automáticos.
- Chat entre los integrantes.
- Reportes financieros avanzados.
- Administración avanzada de cuentas y perfiles.

## Flujo principal

1. El organizador crea una actividad.
2. Agrega a los integrantes que compartirán los gastos.
3. Registra un gasto, su monto y la persona que lo pagó.
4. Selecciona qué integrantes participan y si la división será igual o mediante montos diferentes.
5. Registra los consumos particulares cuando correspondan.
6. La aplicación calcula cuánto corresponde pagar a cada integrante y a quién debe pagarle.
7. El organizador registra los pagos completos, parciales o pendientes.
8. La aplicación actualiza los saldos y muestra la actividad como conciliada cuando ya no existen deudas.

## Primera tarea priorizada

Registrar un gasto compartido y mostrar cuánto debe cada integrante y a quién debe pagarle.

Esta tarea permitirá comprobar primero la función central del proyecto antes de implementar el seguimiento completo de pagos y otras funcionalidades.

## Criterios de éxito

1. El organizador puede registrar y dividir un gasto sin utilizar una calculadora externa.
2. Después de registrar el gasto, puede identificar en menos de 30 segundos quién debe, cuánto debe y a quién debe pagar.
3. Cuando registra un pago completo o parcial, los saldos se actualizan y puede reconocer si todavía existen pendientes o si la actividad está conciliada.

## Primer requerimiento

La aplicación debe permitir al organizador registrar un gasto indicando el monto, la persona que pagó, los integrantes involucrados y el tipo de división -igual o mediante montos diferentes-, para calcular y mostrar cuánto debe cada integrante y a quién debe pagar.

## Preguntas abiertas

- ¿Quién debería confirmar un pago: quien paga, quien recibe o la persona organizadora?
- ¿Qué información mínima necesita el organizador para verificar un pago en efectivo?
- ¿Cómo debería registrarse una corrección o un desacuerdo sobre un gasto?
- ¿Cómo se determina a quién pagar cuando más de una persona adelantó dinero?
- ¿Qué información permite considerar que una actividad está completamente conciliada?
- ¿Cómo se puede apoyar el seguimiento sin generar conflictos entre los integrantes?

## Limitaciones de la investigación

- Se realizaron solamente dos entrevistas reales, por lo que los resultados todavía no representan a todos los grupos de amigos.
- Las experiencias estudiadas corresponden a actividades sociales relacionadas con comida y tuvieron tamaños diferentes.
- Parte de las respuestas fue registrada como síntesis y no como transcripción literal completa.
- La simulación con IA es exploratoria y no constituye evidencia empírica.

## Cambios respecto al Brief v0.1 y a la versión provisional

- Se reemplazó la evidencia basada únicamente en simulaciones por dos entrevistas reales.
- Se conservó una simulación complementaria con IA, identificada claramente y sin utilizarla para validar el problema.
- Se precisó el usuario como la persona encargada de organizar y conciliar gastos entre amigos.
- Se confirmó la existencia de gastos comunes y consumos particulares.
- Se confirmó que los pagos pueden ser totales, parciales, en efectivo, por QR y realizados en diferentes momentos.
- Se incorporó el seguimiento posterior y el riesgo de que el organizador cubra montos faltantes.
- Se mantuvo como primera tarea registrar un gasto y mostrar quién debe pagar, cuánto y a quién.
- Se mantuvieron fuera de alcance las integraciones bancarias, los pagos electrónicos, las notificaciones automáticas, el chat y los reportes avanzados.
