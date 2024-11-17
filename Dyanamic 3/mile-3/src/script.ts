document.addEventListener('DOMContentLoaded', function () {
  // Get the form and resume output div elements with proper types
  const form = document.getElementById('resume-form') as HTMLFormElement | null;
  const resumeOutput = document.getElementById('resumeOutput') as HTMLElement | null;

  // Ensure that form and resumeOutput are not null before proceeding
  if (form && resumeOutput) {
      // Handle form submission
      form.addEventListener('submit', function (event: Event) {
          event.preventDefault(); // Prevent the form from reloading the page

          // Capture form values with proper typing
          const name = (document.getElementById('name') as HTMLInputElement).value;
          const email = (document.getElementById('email') as HTMLInputElement).value;
          const phone = (document.getElementById('phone') as HTMLInputElement).value;
          const address = (document.getElementById('address') as HTMLInputElement).value;
          const education = (document.getElementById('Education') as HTMLInputElement).value;
          const experience = (document.getElementById('Experience') as HTMLInputElement).value;
          const skills = (document.getElementById('Skill') as HTMLInputElement).value;

          // Build the resume HTML dynamically
          const resumeHTML = `
              <h2>Generated Resume</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Address:</strong> ${address}</p>
              <h3>Education</h3>
              <p>${education}</p>
              <h3>Experience</h3>
              <p>${experience}</p>
              <h3>Skills</h3>
              <p>${skills}</p>
          `;

          // Display the resume HTML inside the 'resumeOutput' div
          resumeOutput.innerHTML = resumeHTML;
      });
  } else {
      // Log an error if form or resumeOutput element is not found
      console.error("Form or resumeOutput element not found.");
  }
});
