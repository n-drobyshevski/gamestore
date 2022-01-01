const itemCards = document.querySelectorAll('.ItemCard');
console.log(itemCards);
itemCards.forEach(function(currentCard){
    currentCard.addEventListener('click',()=>{
        window.location.href = 'product_page.html'});
    })


const logo = document.querySelector('.Logo');
console.log('logo ==');
console.log(logo);
logo.addEventListener('click',()=>{
    window.location.href = 'index.html'
})