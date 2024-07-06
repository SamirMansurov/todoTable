
export function editItem(button) {
    let row = button.closest('tr');
    let nameCell = row.cells[0];
    let ageCell = row.cells[1];

    let newName = prompt('Введите новое имя', nameCell.textContent);
    let newAge = prompt('Введите новый возраст', ageCell.textContent);

    if (newName !== null && newAge !== null) {
        nameCell.textContent = newName;
        ageCell.textContent = newAge;
    }
}