const scriptURL = 'https://script.google.com/macros/s/AKfycbxQfQvSAZTD4rHDU3H8uiftAJYFhVlXOVi8DmNJdn1WGZGYNFFj0qMSscn8yV3ccmaC4g/exec'

const form = document.querySelector('form[name="contact-form"]'); // используем querySelector

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Thank you! Your form is submitted successfully.");
            window.location.reload(); // перезагружаем страницу после успешной отправки
        })
        .catch(error => console.error('Error!', error.message));
});
