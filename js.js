const form = document.getElementById('form');
const inputNama = document.getElementById('inputNama');
const inputEmail = document.getElementById('inputEmail');
const inputPesan = document.getElementById('inputPesan');

const successContainer = document.createElement('div');
successContainer.id = 'success-message';
form.parentNode.insertBefore(successContainer, form);

function displayError(inputElement, message) {
    const errorId = 'error' + inputElement.id.replace('input', '');
    const errorElement = document.getElementById(errorId);
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.color = '#ff0000';
    }
    
    inputElement.style.border = '2px solid #ff0000';
}

function clearError(inputElement) {
    const errorId = 'error' + inputElement.id.replace('input', '');
    const errorElement = document.getElementById(errorId);
    
    if (errorElement) {
        errorElement.textContent = '';
    }
    
    inputElement.style.border = '';
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    successContainer.textContent = '';
    
    let isValid = true;

    clearError(inputNama);
    clearError(inputEmail);
    clearError(inputPesan);

    if (inputNama.value.trim() === '') {
        displayError(inputNama, 'Nama tidak boleh kosong.');
        isValid = false;
    }
    
    const emailValue = inputEmail.value.trim();
    
    if (emailValue === '') {
        displayError(inputEmail, 'Email tidak boleh kosong.');
        isValid = false;
    } else if (!emailValue.includes('@')) {
        displayError(inputEmail, 'Format Email tidak valid (harus mengandung @).');
        isValid = false;
    }
    
    if (inputPesan.value.trim() === '') {
        displayError(inputPesan, 'Pesan tidak boleh kosong.');
        isValid = false;
    }

    if (isValid) {
        successContainer.textContent = 'Pesan berhasil dikirim!';
        successContainer.style.color = '#008000';
        successContainer.style.fontWeight = 'bold';
        successContainer.style.marginBottom = '10px';
        
        form.reset();
    }
});