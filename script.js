const addPokemon = async () => {
  const mainBox = document.querySelector(".box");
  const ul = document.querySelector(".lista");
  const input = document.querySelector(".text-input");
  const nomePokemon = input.value.toLowerCase();

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`
    );

    if (!response.ok) {
      alert("Pokemon inesistente. Ritenta");
      return;
    }

    const data = await response.json();
    const name = data.name;

    const img = document.createElement("img");
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const newButton = document.createElement("button");

    img.src = data.sprites.front_default;
    img.alt = data.name;

    checkbox.setAttribute("type", "checkbox");
    newButton.innerText = "Remove";

    li.innerText = name;

    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(newButton);
    li.appendChild(img);

    newButton.addEventListener("click", () => {
      ul.removeChild(li);
      input.value = "";
    });

    //Nuove prove stilistiche

    const div = document.createElement("div");
  } catch (error) {
    console.error(error);
  }
};
