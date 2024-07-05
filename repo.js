
// const menuToggle = document.getElementById('menuToggle');
// const menuToggleTwo = document.getElementById('menuToggleTwo');

// const hiddenP1 = document.getElementById('hiddenP1');
// const hiddenP2 = document.getElementById('hiddenP2');
// const hiddenP3 = document.getElementById('hiddenP3');
// const hiddenP4 = document.getElementById('hiddenP4');

// menuToggle.addEventListener('click', function() {
//     hiddenP1.classList.toggle('hidden');
//     menuToggleTwo.classList.toggle('hidden');
// });

// menuToggleTwo.addEventListener('click', function() {
//     menuToggle.classList.add('hidden');
//     hiddenP1.classList.add('hidden');
//     menuToggleTwo.classList.add('hidden');
//     hiddenP2.classList.remove('hidden');
//     hiddenP3.classList.remove('hidden');
//     hiddenP4.classList.remove('hidden');
// });

const menuToggle = document.getElementById('menuToggle');
const menuToggleTwo = document.getElementById('menuToggleTwo');
const undoOne = document.getElementById('undoOne');
const undoTwo = document.getElementById('undoTwo');

const hiddenMenu1 = document.getElementById('hiddenMenu1');
const hiddenMenu2 = document.getElementById('hiddenMenu2');

menuToggle.addEventListener('click', function() {
    hiddenMenu1.classList.toggle('hidden');
});

menuToggleTwo.addEventListener('click', function() {
    hiddenMenu1.classList.add('hidden');
    hiddenMenu2.classList.remove('hidden');
});

undoOne.addEventListener('click', function() {
    hiddenMenu1.classList.add('hidden');
});

undoTwo.addEventListener('click', function() {
    hiddenMenu2.classList.add('hidden');
    hiddenMenu1.classList.remove('hidden');
});





