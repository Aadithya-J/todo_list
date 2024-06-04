let add = document.querySelector(".mainicon");
let submitBtn = document.querySelector("#submitBtn");

let currentCard = document.querySelector(".card");

function submit (event)
{
  const titleInput = document.getElementById("title");
  const title = titleInput.value;
  currentCard.querySelector('.desc').innerHTML = `<h3>${title}</h3>`;
}
submitBtn.addEventListener('onclick',submit);

add.addEventListener('click', (e) => {
  let place = document.querySelector(".left");
  document.querySelector(".pop-up").style.bottom = "50%";

  // Create the new card element
  let newCard = document.createElement('div');
  newCard.classList.add('card');
  newCard.innerHTML = `
    <div class="desc" color:black">
      This is the first contribution
    </div>
    <div class="buttonsTab">
      <img class="remove" src="icons/bin.svg" style="color: wheat;" alt="">
    </div>`;

  newCard.addEventListener('click', async (e) => {
    if (currentCard != null) {
      await currentCard.classList.remove('currentCard');
    }
    currentCard = newCard;
    newCard.classList.add('currentCard');
    e.stopPropagation();
  });
  newCard.click();

  place.appendChild(newCard);
});


let bottom = document.querySelector(".left");
bottom.addEventListener("click", (e) => {
  if (e.target.closest('.remove')) 
  {
     e.target.closest('.card').remove()
  }
    
});
