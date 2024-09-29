
    document.getElementById('joinForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get values from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Simple validation
        if (name && email) {
            // If validation passes, show success message
            document.getElementById('responseMessage').textContent = 'Our team will contact you!';
            document.getElementById('responseMessage').classList.remove('hidden');

            // Reset the form
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
