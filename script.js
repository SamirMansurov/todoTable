import { addItem } from './addItem.js';
import { deleteItem } from './deleteItem.js';
import { editItem } from './editItem.js';
import { clearInputs } from './utils.js';


document.getElementById('addItemBtn').addEventListener('click', function() {
    let name = document.getElementById('nameInput').value;
    let age = document.getElementById('ageInput').value;
    addItem(name, age);
});