import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';
import { projects } from '../../data/projects';

interface SkillGroup {
  title: string;
  iconClass: string;
  accent: string;
  items: string[];
}

interface ExperienceItem {
  title: string;
  sub: string;
  date: string;
  points: string[];
}

interface CertificationItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  protected readonly projects = projects;
  protected readonly quickSkills = [
    'React',
    'Python',
    'Angular',
    'MSc AI',
    'NLP',
    'MongoDB',
    'Node.js',
    'Javascript'
  ];

  protected readonly skillGroups: SkillGroup[] = [
    {
      title: 'Languages',
      iconClass: 'fa-solid fa-code',
      accent: '#00f5ff',
      items: ['Python', 'JavaScript', 'C++']
    },
    {
      title: 'Frontend',
      iconClass: 'fa-solid fa-display',
      accent: '#61dafb',
      items: ['HTML', 'CSS', 'Angular', 'ReactJs', 'Flutter (Basic)']
    },
    {
      title: 'Backend',
      iconClass: 'fa-solid fa-server',
      accent: '#34d399',
      items: ['Node.js', 'Express.js']
    },
    {
      title: 'Database',
      iconClass: 'fa-solid fa-database',
      accent: '#47A248',
      items: ['MongoDB', 'SQL']
    },
    {
      title: 'Tools and Technologies',
      iconClass: 'fa-solid fa-screwdriver-wrench',
      accent: '#f59e0b',
      items: ['VS Code', 'Git', 'GitHub', 'Render', 'REST APIs', 'Colab', 'Jupyter Notebook', 'Postman']
    },
    {
      title: 'Core Concepts',
      iconClass: 'fa-solid fa-brain',
      accent: '#c084fc',
      items: ['NLP', 'Prompt Engineering', 'LLM', 'Data Structures', 'Problem Solving', 'API Development']
    }
  ];

  protected readonly education = [
    {
      title: 'Masters of Science in Artificial Intelligence',
      sub: 'KES\' B.K.Shroff College of Arts & Commerce',
      date: '2024 - 2026',
      score: 'CGPI: 8.89'
    },
    {
      title: 'Bachelor of Science in Information Technology',
      sub: 'Ghanshyamdas Saraf College, Mumbai University',
      date: '2021 - 2024',
      score: 'CGPI: 8.93'
    },
    {
      title: 'Higher Secondary Certificate (HSC)',
      sub: 'Durgadevi Saraf Junior College',
      date: '2020 - 2021',
      score: '90.33%'
    }
  ];

  protected readonly experience: ExperienceItem[] = [
    {
      title: 'Software Developer Intern',
      sub: 'SSPD Technology Solutions (Raigarh, Chhattisgarh)',
      date: 'July 2025 - March 2026',
      points: [
        'Built School Management Admin System and Inventory System using Node.js and MongoDB Atlas.',
        'Developed backend APIs and handled deployment using Vercel.',
        'Created Teacher Mobile App using Flutter with API integration.',
        'Collaborated on system design and basic UI planning.'
      ]
    },
    {
      title: 'Software and Research Intern',
      sub: 'Chalbo India Pvt. Ltd. (Dombivali, Maharashtra)',
      date: 'Feb 2025 - May 2025',
      points: [
        'Researched car parts, pricing, and competitor platforms.',
        'Analyzed requirements and contributed to website development.',
        'Designed and improved website layout and user experience.'
      ]
    }
  ];

  protected readonly certifications: CertificationItem[] = [
    {
      name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=E6B7C5E0A57DD9D3DDDEAFDD782DEEABE2D02AFF6025F37B8B3BE4C37D64B657'
    }
  ];

  protected isSending = false;
  protected isSent = false;
  protected readonly whatsappNumber = '919022790465';

  protected sendEmail(form: NgForm): void {
    if (form.invalid || this.isSending) {
      return;
    }

    this.isSending = true;

    emailjs
      .send(
        'service_njrcdys',
        'template_8kakmtj',
        {
          user_name: form.value.user_name,
          user_email: form.value.user_email,
          message: form.value.message
        },
        {
          publicKey: 'GZIEhGaMl0mVsom-D'
        }
      )
      .then(() => {
        this.isSending = false;
        this.isSent = true;
        form.resetForm();
        setTimeout(() => {
          this.isSent = false;
        }, 5000);
      })
      .catch(() => {
        this.isSending = false;
        alert('Unable to send message right now. Please try again.');
      });
  }
}
