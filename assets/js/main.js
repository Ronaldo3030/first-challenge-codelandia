// let heart = document.querySelector('.fa-heart');
function select(){
    if(heart.classList.contains('deselect-icon')){
        heart.classList.remove('deselect-icon');
        heart.classList.add('select-icon');
    }else{
        heart.classList.remove('select-icon');
        heart.classList.add('deselect-icon');
    }
}