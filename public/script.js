let add = document.querySelector(".mainicon");
let submitBtn = document.querySelector("#submitBtn");
function submit (event)
{
  const titleInput = document.getElementById("title");
  const title = titleInput.value;
  const cards = document.querySelectorAll(".desc");
  const lastCard = cards[cards.length - 1]; 
  lastCard.innerHTML = `<h1>${title}</h1>`;
}
add.addEventListener('click', (e) => {
    let place = document.querySelector(".left");
    document.querySelector(".pop-up").style.bottom = "50%";
    place.innerHTML += `
    <div class="card">
      <div class="desc" color:black">
          This is the first contribution
      </div>
      <div class="buttonsTab">
          <img class="remove" src="icons/bin.svg" style="color: wheat;" alt="">
      </div>
    </div>`;
});

let bottom = document.querySelector(".left");
bottom.addEventListener("click", (e) => {
  if (e.target.closest('.remove')) 
  {
     e.target.closest('.card').remove()
  }
    
});
