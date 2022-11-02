// file:///c:/Users/anttt/Desktop/College/Juno/cohort45/projects/project1/project-1-textilee/project-1-textilee/blog.html
// blogForm.action = 'file:///c:/Users/anttt/Desktop/College/Juno/cohort45/projects/project1/project-1-textilee/project-1-textilee/blog.html';


// blog-form 
    // blog-name 
    // blog-email 
    // blog-textarea 
    // blog-submit

// contact-form
    // contact-name
    // contact-email
    // contact-textarea
    // contact-submit

const blogForm = document.querySelector('.blog-form');
const contactForm = document.querySelector('.contact-form');
console.log(blogForm);
console.log(contactForm);

blogForm.addEventListener('submit', () => {
    prompt('Hello there! Would you like to create an account with us?');
});

contactForm.addEventListener('submit', () =>{
    alert('Thank you for reaching out! We will get back to you soon!');
});


