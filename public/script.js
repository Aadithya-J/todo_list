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
  let newCard = document.createElement('div');
  newCard.classList.add('card');
  newCard.innerHTML = `
    <div class="desc" color:black">
      This is the first contribution
    </div>
    <div class="buttonsTab">
      <img class="remove" src="icons/bin.svg" style="color: wheat;" alt="">
=======
function submit(event) {
  event.preventDefault(); // Prevent the default form submission
  const titleInput = document.getElementById("title");
  const title = titleInput.value;
  document.querySelector(".pop-up").style.bottom = "-50%";
  return title;
}

add.addEventListener('click', (e) => {
  document.querySelector(".pop-up").style.bottom = "50%";
});

submitBtn.addEventListener('click', (e) => {
  const title = submit(e);
  let place = document.querySelector(".left");
  place.innerHTML += `
    <div class="card">
      <div class="desc" style="color:white">
          ${title}
      </div>
      <div class="buttonsTab">
          <img class="remove" src="icons/bin.svg" style="color: wheat;" alt="">
      </div>
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
  if (e.target.closest('.remove')) {
    e.target.closest('.card').remove();
  }
});
