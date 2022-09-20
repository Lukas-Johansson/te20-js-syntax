const inputField = document.querySelector('input');
const awnser = document.querySelector('#awnser-field');

button.addEventListener('click', () => {
    const name = inputField.value;
    reverseName(name);
});

function reverseName(name) {
    let reversedName = '';
    for (let i = name.length - 1; i >= 0; i--) {
        reversedName += name[i];
    }
    awnser.textContent = reversedName;
}

