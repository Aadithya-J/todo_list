let add = document.querySelector(".mainicon");

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}


add.addEventListener('click', (e) => {
    let place = document.querySelector(".bottom");
    place.innerHTML += `
    <div class="card">
      <div class="desc" style="background-color:${getRandomColor()}; color:black">
          This is the first contribution
      </div>
      <div class="buttonsTab">
          <img class="remove" src="icons/bin.svg" style="color: wheat;" alt="">
          <img class="edit" src="icons/edit.svg" alt="">
      </div>
    </div>`;
});

let bottom = document.querySelector(".bottom");
bottom.addEventListener("click", (e) => {
  if (e.target.closest('.remove')) 
  {
     e.target.closest('.card').remove()
  }
    
});
