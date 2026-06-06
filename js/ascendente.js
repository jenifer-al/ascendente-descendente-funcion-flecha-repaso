// --- 1. Selección de elementos (DOM) ---
const input = document.getElementById('numero');
const btnCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

// --- 2. Función lógica ---
const programar = (lista) => {
  // Creamos una copia del array con [...lista] para no modificar el original
  const asc = [...lista].sort((a, b) => a - b);
  const desc = [...lista].sort((a, b) => b - a);
  
  return { asc, desc };
};

// --- 3. Función del manejador ---
const mostrar = () => {
  const valor = input.value;
  
  const arrayDeNumeros = valor.split(',')
                              .map(n => parseFloat(n.trim()))
                              .filter(n => !isNaN(n));
  
  if (arrayDeNumeros.length === 0) {
    resultado.textContent = "Por favor, introduce números separados por comas.";
  } else {
    const ordenado = programar(arrayDeNumeros);
    
    resultado.textContent = `Asc: [${ordenado.asc.join(", ")}] | Desc: [${ordenado.desc.join(", ")}]`;
  }
};

// --- 4. Escuchador ---
btnCalcular.addEventListener('click', mostrar);