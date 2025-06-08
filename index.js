#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const resume = {
  name: 'Gaurav Kumar',
  title: 'Full Stack Web Developer',
  contact: {
    phone: '+91 7817038680',
    email: 'chaudharyg856@gmail.com',
    location: 'Baghpat, UP, India'
  },
  experience: '1.5 Years',
  summary: `Enthusiastic and self-driven Full-Stack JavaScript Developer with a strong
foundation in web development and experience in building dynamic, responsive
applications using modern frameworks and tools. Passionate about solving
complex problems and contributing to impactful projects.`,
  
  workExperience: [
    {
      company: 'The MahaKumbhVatika',
      duration: 'Dec 2024 - Mar 2025',
      achievements: [
        'Designed and developed the official Mahakumbh website using modern front-end technologies',
        'Built a robust booking system to handle guest bookings with secure data management',
        'Developed a comprehensive management system for efficient guest detail management',
        'Integrated streamlined user experience features',
        'Utilized modern tech stack for seamless integration and performance'
      ]
    }
  ],

  projects: [
    {
      name: 'Shopalyst Online E-Commerce Platform',
      duration: 'Oct 2024 - Jan 2025',
      features: [
        'Implemented secure login, registration, and session management',
        'Developed dynamic product listing with sorting and filtering',
        'Designed detailed product view with specifications and recommendations',
        'Enabled cart functionality with real-time updates',
        'Implemented wishlist features for saving preferred products',
        'Developed seamless checkout process with order tracking',
        'Added delivery address management features'
      ]
    },
    {
      name: 'Book Manager',
      duration: 'Nov 2024',
      features: [
        'Enabled users to add new books with complete details',
        'Provided functionality to update book details easily',
        'Implemented secure deletion of books',
        'Developed user-friendly interface for book listing'
      ]
    }
  ],

  skills: {
    frontend: ['JavaScript', 'HTML5', 'CSS', 'React', 'Redux', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'Express', 'SQL', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'VS Code', 'Postman'],
    concepts: ['Algorithms', 'Data Structures', 'Component-based Architecture', 'MVC']
  },

  education: {
    degree: 'BCA - Computer Science',
    university: 'Swami Vivekanand Subharti University, Meerut, UP',
    duration: 'Jan 2021 - May 2024'
  },

  openSource: [
    'Contributed to open-source projects by implementing key features',
    'Added internationalization support improving accessibility',
    'Collaborated with community for code review and refinement'
  ]
};

function displayResume() {
  console.clear();
  
  // Header
  const header = chalk.cyan.bold(`
╔══════════════════════════════════════════════════════════════╗
║                      ${chalk.yellow.bold(resume.name)}                         ║
║                  ${chalk.green(resume.title)}                   ║
╚══════════════════════════════════════════════════════════════╝
`);

  // Contact Info
  const contact = chalk.white(`
📧 ${resume.contact.email}
📱 ${resume.contact.phone}
📍 ${resume.contact.location}
💼 Experience: ${resume.experience}
`);

  // Summary
  const summary = chalk.gray(`
${chalk.yellow.bold('ABOUT ME:')}
${resume.summary}
`);

  // Skills
  const skillsText = `
${chalk.yellow.bold('TECHNICAL SKILLS:')}
${chalk.cyan('Frontend:')} ${resume.skills.frontend.join(', ')}
${chalk.cyan('Backend:')} ${resume.skills.backend.join(', ')}
${chalk.cyan('Tools:')} ${resume.skills.tools.join(', ')}
${chalk.cyan('Concepts:')} ${resume.skills.concepts.join(', ')}
`;

  // Work Experience
  const workExp = `
${chalk.yellow.bold('WORK EXPERIENCE:')}
${chalk.green.bold(resume.workExperience[0].company)} ${chalk.gray(`(${resume.workExperience[0].duration})`)}
${resume.workExperience[0].achievements.map(achievement => `• ${achievement}`).join('\n')}
`;

  // Projects
  const projects = `
${chalk.yellow.bold('KEY PROJECTS:')}
${resume.projects.map(project => `
${chalk.green.bold(project.name)} ${chalk.gray(`(${project.duration})`)}
${project.features.map(feature => `• ${feature}`).join('\n')}`).join('\n')}
`;

  // Education
  const education = `
${chalk.yellow.bold('EDUCATION:')}
${chalk.green.bold(resume.education.degree)}
${resume.education.university}
${chalk.gray(resume.education.duration)}
`;

  // Open Source
  const openSource = `
${chalk.yellow.bold('OPEN SOURCE CONTRIBUTIONS:')}
${resume.openSource.map(contribution => `• ${contribution}`).join('\n')}
`;

  // Footer
  const footer = chalk.cyan(`
╔══════════════════════════════════════════════════════════════╗
║     ${chalk.yellow('Thank you for viewing my resume!')}                   ║
║     ${chalk.green('Let\'s connect and build something amazing together!')}   ║
╚══════════════════════════════════════════════════════════════╝
`);

  // Display everything
  console.log(header);
  console.log(boxen(contact, { padding: 1, borderColor: 'blue', borderStyle: 'round' }));
  console.log(summary);
  console.log(skillsText);
  console.log(workExp);
  console.log(projects);
  console.log(education);
  console.log(openSource);
  console.log(footer);
}

// Run the resume display
displayResume();