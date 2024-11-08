document.addEventListener('DOMContentLoaded', () => {
    // Load data into the form if available (for editing)
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));
    if (resumeData) {
        document.getElementById('name').value = resumeData.name;
        document.getElementById('email').value = resumeData.email;
        document.getElementById('phone').value = resumeData.phone;
        document.getElementById('CNIC').value = resumeData.cnic;

        // Populate each section with existing data
        const educationSection = document.querySelector('textarea[name="Education"]');
        resumeData.education.forEach(text => {
            const textarea = educationSection.cloneNode();
            textarea.value = text;
            educationSection.parentElement.insertBefore(textarea, educationSection.nextElementSibling);
        });

        const experienceSection = document.querySelector('textarea[name="Experience"]');
        resumeData.experience.forEach(text => {
            const textarea = experienceSection.cloneNode();
            textarea.value = text;
            experienceSection.parentElement.insertBefore(textarea, experienceSection.nextElementSibling);
        });

        const skillsSection = document.querySelector('textarea[name="Skills"]');
        resumeData.skills.forEach(text => {
            const textarea = skillsSection.cloneNode();
            textarea.value = text;
            skillsSection.parentElement.insertBefore(textarea, skillsSection.nextElementSibling);
        });
    }

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


    document.getElementById('resumeForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const resumeData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            cnic: document.getElementById('CNIC').value,
            education: Array.from(document.querySelectorAll('textarea[name="Education"]')).map(textarea => textarea.value),
            experience: Array.from(document.querySelectorAll('textarea[name="Experience"]')).map(textarea => textarea.value),
            skills: Array.from(document.querySelectorAll('textarea[name="Skills"]')).map(textarea => textarea.value)
        };

        localStorage.setItem('resumeData', JSON.stringify(resumeData));

        
        window.location.href = 'resume.html';
    });
});
