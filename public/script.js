let add = document.querySelector(".mainicon");
let submitBtn = document.querySelector("#submitBtn");

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
});

let bottom = document.querySelector(".left");
bottom.addEventListener("click", (e) => {
  if (e.target.closest('.remove')) {
    e.target.closest('.card').remove();
  }
});
