const button = document.querySelector(".buttonclick")
const bio = document.querySelector(".bio")


button.addEventListener("click",popup)


function popup(){
bio.classList.add("bio-visibility")
}

const kruis =document.querySelector(".kruis")

kruis.addEventListener("click",shoutdown)

function shoutdown(){
bio.classList.remove("bio-visibility")
}