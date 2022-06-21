/*2.We capture the whole sticky note (the main div) in a const. */
const notesElement = document.querySelector('.notes');

/*1.Btns captured in their respective const.*/
const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');

/*3.We capture the main & text areas in its variables.*/
const main = notesElement.querySelector('.main');
const textArea = notesElement.querySelector('textarea');
/*I suppose that querySelector is used for ease the calling of the elements from .html file, in special the contained elements, like those (their parent is
    .notes, represented in notesElement const).*/

    
editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    /*When edit btn is clicked, then div changes from main class to hidden class. And as we declared, .notes . hidden display none! So this means that when we click in edit btn, the area disappears. So, classList.toggle('hidden) switches the class name and apply the display we setted.*/
    textArea.classList.toggle('hidden');
})