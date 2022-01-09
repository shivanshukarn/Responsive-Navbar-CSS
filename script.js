console.log("Hello to console")

const navMore = document.getElementById('navMore')
const navUl = document.getElementById('navUl')
const navSearch = document.getElementById('navSearch')
navMore.addEventListener('click', () => {
    // console.log("Clicked navMore")
    navMore.classList.toggle('fa-times');
    navUl.classList.toggle('hidden');
    navSearch.classList.toggle('hidden');
})