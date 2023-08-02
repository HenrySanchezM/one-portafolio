export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("formulario__caja--invalid");
    input.parentElement.querySelector(".formulario__error").innerHTML = "";
  } else {
    input.parentElement.classList.add("formulario__caja--invalid");
    input.parentElement.querySelector(".formulario__error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  
  asunto: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "Asunto debe contener entre 10 a 40 caracteres.",
  },
  mensaje: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El mensaje debe contener entre 10 a 120 caracteres.",
  },
};

const validadores = document.querySelector("input");

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

