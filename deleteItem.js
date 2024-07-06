
export function deleteItem(button) {
    let row = button.closest('tr');
    row.parentNode.removeChild(row);
}