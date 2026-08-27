# Persona v0.1

**NOMBRE:** Seferino, responsable de organizar una actividad grupal.

**SITUACIÓN:** Organiza actividades entre amigos y administra los gastos antes, durante y después. Registra información entre cuadernos, WhatsApp, comprobantes QR y efectivo.

**OBJETIVO:** Registrar y dividir un gasto compartido para saber cuánto debe cada integrante y a quién debe pagar.

**DIFICULTAD:** Le cuesta mantener las cuentas actualizadas cuando existen gastos comunes y particulares, pagos completos o parciales y pagos realizados en diferentes momentos.

**NECESIDAD:** Mantener en un solo lugar un registro claro y actualizado de gastos, pagos y saldos pendientes.

**EVIDENCIA:** P1 y P2 concentraron la compra, el registro, el cobro y el seguimiento. Ambos utilizaron un cuaderno y WhatsApp; P1 también comparó pagos completos y parciales realizados por QR y efectivo.

> “Seferino” es un nombre representativo. No se incluyen datos personales que no fueron investigados.

## App Map v0.1

**¿Dónde encuentra la Persona lo que necesita?**

Inicio → Actividad → Gastos → Registrar gasto → Saldos

- **Inicio:** crear o Seleccionar una actividad.
- **Actividad:** consultar integrantes, gastos, pagos y conciliación.
- **Integrantes:** agregar participantes.
- **Gastos:** registrar monto, pagador, participantes y división en partes iguales.
- **Saldos:** ver quién debe, cuánto y a quién.
- **Pagos:** registrar pagos completos, parciales o pendientes.

## Flujo principal v0.1

**Tarea:** Registrar un gasto compartido.

Abrir aplicación → Seleccionar actividad → Registrar gasto → Ingresar monto y pagador → Seleccionar integrantes → Elegir el gasto en partes iguales → Confirmar → Ver quién debe, cuánto y a quién.

**RESULTADO:** El gasto queda registrado y el organizador identifica los saldos sin utilizar una calculadora externa.

**PREGUNTA PENDIENTE:** ¿Cómo se determina a quién pagar cuando más de una persona adelantó dinero?


## Segundo flujo v0.1

**Tarea:** Crear una actividad.

Abrir aplicación → Seleccionar Crear actividad → Elegir una sugerencia o ingresar el nombre de la actividad → Confirmar creación → Ver la actividad creada.

**RESULTADO ACTUAL DEL MVP:** La interfaz confirma la creación y muestra el nombre de la actividad durante la ejecución actual.

**DECISIÓN DE DISEÑO:** El campo ofrece actividades sugeridas, pero permite escribir un nombre diferente.

**PREVENCIÓN DE ERROR:** Si el nombre está vacío, la aplicación solicita que se ingrese uno antes de continuar.

**LÍMITES ACTUALES:**

- La actividad no permanece guardada después de actualizar la página.
- Todavía no permite registrar gastos porque primero necesita que se agreguen sus integrantes.