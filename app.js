document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.input-field input');
    inputs[0].removeAttribute('disabled');

    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].removeAttribute('disabled');
                inputs[index + 1].focus();
            }
        });
        
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
                inputs[index - 1].removeAttribute('disabled');
                inputs[index - 1].focus();
            }
        });
    });
});
