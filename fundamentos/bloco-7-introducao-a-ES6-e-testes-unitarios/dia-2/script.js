function sum() {
  if (!value1 || !value2) {
    throw new Error('Faltam Valores!');
  }
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    let result = parseInt(value1) + parseInt(value2);
  
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    alert(`ERRO: ${error.message}`);
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
