// Guardar el estado de los checkboxes en localStorage
function saveCheckboxStates() {
  const checkboxes = document.querySelectorAll('.tarea');
  let state = {};
  checkboxes.forEach((checkbox) => {
    state[checkbox.id] = checkbox.checked;
  });
  localStorage.setItem('dashboardTareas', JSON.stringify(state));
  updateResumen();
}

// Cargar el estado de los checkboxes desde localStorage
function loadCheckboxStates() {
  const state = JSON.parse(localStorage.getItem('dashboardTareas') || '{}');
  const checkboxes = document.querySelectorAll('.tarea');
  checkboxes.forEach((checkbox) => {
    if (state.hasOwnProperty(checkbox.id)) {
      checkbox.checked = state[checkbox.id];
    }
    updateTareaVisual(checkbox);
  });
  updateResumen();
}

// Actualizar el estilo visual de la tarea completada
function updateTareaVisual(checkbox) {
  if (checkbox.checked) {
    checkbox.parentElement.classList.add('completada');
  } else {
    checkbox.parentElement.classList.remove('completada');
  }
}

// Actualizar resumen y barra de progreso
function updateResumen() {
  const checkboxes = document.querySelectorAll('.tarea');
  const total = checkboxes.length;
  let completadas = 0;
  checkboxes.forEach(cb => { if (cb.checked) completadas++; });
  const porcentaje = Math.round((completadas / total) * 100);

  document.getElementById('texto-resumen').innerHTML =
    `<b>Progreso semanal:</b> ${completadas} de ${total} tareas (${porcentaje}%)`;

  document.getElementById('progreso-global').style.width = porcentaje + "%";
}

// Resetear todas las tareas y limpiar localStorage
function resetTareas() {
  if (confirm('¿Seguro que quieres reiniciar todas las tareas para una nueva semana?')) {
    localStorage.removeItem('dashboardTareas');
    const checkboxes = document.querySelectorAll('.tarea');
    checkboxes.forEach(cb => { cb.checked = false; updateTareaVisual(cb); });
    updateResumen();
  }
}

// Asignar eventos a los checkboxes
document.addEventListener('DOMContentLoaded', function() {
  loadCheckboxStates();
  document.querySelectorAll('.tarea').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      updateTareaVisual(checkbox);
      saveCheckboxStates();
    });
  });
  document.getElementById('reset-btn').addEventListener('click', resetTareas);
});
