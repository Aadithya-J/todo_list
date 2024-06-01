let add = document.querySelector(".mainicon");
add.addEventListener(('click'),(e)=>{
    let place = document.querySelector(".bottom");
    place.innerHTML+=`<div class="card">
    <div class="desc">
        This is the first contribution
    </div>
    <div class="buttonsTab">
        <img id="remove" src="icons/bin.svg" style="color: wheat;" alt="">
        <img id ="edit" src="icons/edit.svg" alt="">
    </div>
</div>`
})

let remove = document.querySelector(".bottom")
console.log("remove")