let MyFavCol = document.querySelector('#color')
let MyFavPla = document.querySelector('#place')
let MyFavRit = document.querySelector('#ritual')

//======================================================

function FavColAlert() {
    alert('My favorite colors are black and blue')
}

function FavPlaAlert() {
    alert('My favorite place is anywhere in nature')
}
function FavRitAlert() {
    alert('My favorite ritual is when I allow myself to enjoy moments of peace and quiet and pondering each day.')
}

//=====================================================

MyFavCol.addEventListener('click', FavColAlert)
MyFavPla.addEventListener('click', FavPlaAlert)
MyFavRit.addEventListener('click', FavRitAlert)