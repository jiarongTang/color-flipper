import './style.css'

const COLOR_PALETTE = {
  '#28262C': 'Raisin Black',
  '#998FC7': 'Blue Bell',
  '#D4C2FC': 'Lavender Blue',
  '#F9F5FF': 'Magnolia',
  '#14248A': 'Resolution Blue'
}

const addOptionToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  })
}

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");
  colorPickerSelect.addEventListener("change", (event) =>{

    const newColor = event.target.value;
    //almacenamos el codigo de color

    document.body.style.backgroundColor = newColor;
    // le aplicamos el background color con el codigo de color seleccionado
    
    // le asignamos a nuestro h2 el valor de la clave que hay almacenada en newColor al igual que hemos hecho en la primera funcion
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}` 
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
  })
}

addOptionToColorPicker();
addEventListenerToColorPicker();

