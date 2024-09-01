const inputDato = document.getElementById('inputText')
const buttonGuardar = document.getElementById('buttonText')

buttonGuardar.addEventListener('click', () => {
  const dato = inputDato.value.trim()
  
  if (dato === '') {
    alert('❌ Debes ingresar un dato para guardar')
    return
  }
  
  localStorage.setItem('dato', dato) // Guardo el dato en el localStorage
  inputDato.value = ''
})