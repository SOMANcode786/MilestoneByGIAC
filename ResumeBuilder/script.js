document.addEventListener('DOMContentLoaded', () => {
    // Add new text areas dynamically
    document.querySelectorAll('.add').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const section = event.target.parentElement;
            const newTextArea = document.createElement('textarea');
            newTextArea.rows = 4;
            newTextArea.required = true;
            section.insertBefore(newTextArea, button);
        });
    });

    // Handle form submission
    document.getElementById('resumeForm').addEventListener('submit', (event) => {
        event.preventDefault();

        // Collecting all input values
        const resumeData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            cnic: document.getElementById('CNIC').value,
            education: Array.from(document.querySelectorAll('textarea[name="Education"]')).map(textarea => textarea.value),
            experience: Array.from(document.querySelectorAll('textarea[name="Experience"]')).map(textarea => textarea.value),
            skills: Array.from(document.querySelectorAll('textarea[name="Skills"]')).map(textarea => textarea.value)
        };

        // Store data in localStorage
        localStorage.setItem('resumeData', JSON.stringify(resumeData));

        // Redirect to resume display page
        window.location.href = 'resume.html';
    });
});
