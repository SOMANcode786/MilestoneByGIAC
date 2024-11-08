document.addEventListener('DOMContentLoaded', () => {
    // Retrieve resume data from localStorage
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));

    // Displaying each field
    if (resumeData) {
        document.getElementById('displayName').textContent = resumeData.name;
        document.getElementById('displayEmail').textContent = resumeData.email;
        document.getElementById('displayPhone').textContent = resumeData.phone;
        document.getElementById('displayCNIC').textContent = resumeData.cnic;

        // Display education entries
        const educationDiv = document.getElementById('displayEducation');
        resumeData.education.forEach(education => {
            const p = document.createElement('p');
            p.textContent = education;
            educationDiv.appendChild(p);
        });

        // Display experience entries
        const experienceDiv = document.getElementById('displayExperience');
        resumeData.experience.forEach(experience => {
            const p = document.createElement('p');
            p.textContent = experience;
            experienceDiv.appendChild(p);
        });

        // Display skills entries
        const skillsDiv = document.getElementById('displaySkills');
        resumeData.skills.forEach(skill => {
            const p = document.createElement('p');
            p.textContent = skill;
            skillsDiv.appendChild(p);
        });
    }
});
