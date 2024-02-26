const userList = [];

function onSave(event) {
  event.preventDefault();

  const name = document.getElementById("nameInput"); //pegamos as tags pelo ID
  const age = document.getElementById("ageInput");
  const city = document.getElementById("cityInput");
  const email = document.getElementById("emailInput");
  const color = document.getElementById("colorInput");

  const nameValue = name.value; //Pegou os valoires
  const ageValue = age.value;
  const cityValue = city.value;
  const emailValue = email.value;
  const colorValue = color.value;

  const user = {
    // criamos uma objeto com os valores valores
    name: nameValue,
    age: ageValue,
    city: cityValue,
    email: emailValue,
    color: colorValue,
  };

  userList.push(user); //incluímos o usuário na lista

  console.log(userList);

  const form = document.getElementById("form");
  form.reset();
}
