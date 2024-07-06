
import { clearInputs } from './utils.js';
import { deleteItem } from './deleteItem.js';
import { editItem } from './editItem.js';

export function addItem(name, age) {
    if (name.trim() !== '' && age.trim() !== '') {
        let row = `<tr>
                       <td>${name}</td>
                       <td>${age}</td>
                       <td class="action-buttons">
                           <button onclick="editItem(this)">Изменить</button>
                           <button onclick="deleteItem(this)">Удалить</button>
                       </td>
                   </tr>`;
        
        document.querySelector('#dataTable tbody').innerHTML += row;
        
        clearInputs();
    } else {
        alert('Введите имя и возраст');
    }
}