let add = document.querySelector(".mainicon");

add.addEventListener('click', (e) => {
    let place = document.querySelector(".left");
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
