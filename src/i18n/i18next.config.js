import { Description } from "@radix-ui/react-toast";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "es",
  resources: {
    en: {
      translation: {
        Nav: {
          Portfolio: "Portfolio",
          Home: "Home",
          About: "About",
          Skills: "Skills",
          Projects: "Proyects",
          Contact: "Contact",
        },
        Hero: {
          Hi: "Hi, I'm",
          Introduce1: "I create exceptional web experiences with modern technologies.",
          Introduce2: "Working as a full-stack developer, I build engaging and functional interfaces",
          Introduce3: "and scalable and intuitive APIs without compromising performance.",
          Work: "View my work",
          Scroll: "Scroll",
        },
        About: {
          About: "About",
          Me: "Me",
          Title: "FullStack Web Developer",
          HardSkills:
            "Full-stack developer with experience in web application design and development. He has solid knowledge of various technologies and experience creating intuitive interfaces, building APIs, and backend services. He also has experience managing SQL and NoSQL databases and using cloud services in AWS, Azure, and Google Cloud.",
          SoftSkills:
            "Proactive attitude, analytical skills, and teamwork skills. Knowledge of programming best practices, version control with Git, and application deployment in production environments.",
          Contact: "Get In Touch",
          CV: "Download CV",
          TitleFeature1: "Web Development",
          DescriptionFeature1: "Creating responsive websites and web applications with modern frameworks.",
          TitleFeature2: "UI/UX Design",
          DescriptionFeature2: "Designing intuitive user interfaces and seamless user experiences.",
          TitleFeature3: "APIs Developement",
          DescriptionFeature3: "Developing, implementing, and integrating APIs for software and applications",
        },
        Skills: {
          My: "My",
          Skills: "Skills",
          All: "All",
          Frontend: "Frontend",
          Backend: "Backend",
          Tools: "Tools",
          Frameworks: "Frameworks",
        },
        Proyects: {
          Title1: "Featured",
          Title2: "Projects",
          Description: "Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.",
          DescriptionProyect1: "Online bisutery eccomerce",
          DescriptionProyect2: "Interactive online Pokedex",
          DescriptionProyect3: "Backend of the bisutery eccomerce",
          Github: "Check My Github",
        },
        Contact: {
          GetIn: "GetIn",
          Touch: "Touch",
          Description: "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.",
          ContactTitle: "Contact Information",
          Email: "Email",
          Phone: "Phone",
          Location: "Location",
          Connect: "Connect With Me",
          FormTitle: "Send a Message",
          Name: "Name",
          Message: "Message",
          Placeholder: "Hello, I'd like to talk about...",
          Send: "Send Message",
          Sending: "Sending Mensaje",
        },
        Toast: {
          Title: "Message Sent!",
          Message: "Thank you for your message. I'll get back to you soon.",
        }
      },
    },
    es: {
      translation: {
        Nav: {
          Portfolio: "Portafolio",
          Home: "Inicio",
          About: "Sobre mi",
          Skills: "Habilidades",
          Projects: "Proyectos",
          Contact: "Contacto",
        },
        Hero: {
          Hi: "Hola, soy",
          Introduce1: "Creo experiencias web excepcionales con tecnologías modernas.",
          Introduce2: "Trabajo como desarrollador full-stack, construyo interfaces atractivas y funcionales,",
          Introduce3: "además de API's escalables e intuitivas sin afectar su rendimiento",
          Work: "Ve mi trabajo",
          Scroll: "Desliza",
        },
        About: {
          About: "Sobre",
          Me: "Mi",
          Title: "Desarrollador Web FullStack",
          HardSkills:
            "Desarrollador Full Stack con experiencia en el diseño y desarrollo de aplicaciones web. Posee sólidos conocimientos en diferentes tecnologías, experiencia en creación de interfaces intuitivas, construcción de APIs y servicios backend. Además, gestión de bases de datos SQL y NoSQL y el uso de servicios en la nube AWS, Azure y GCP.",
          SoftSkills:
            "Actitud proactiva, habilidades analíticas y capacidad para trabajar en equipo. Conocimientos en buenas prácticas de programación, control de versiones con Git y despliegue de aplicaciones en entornos productivos.",
          Contact: "Contactame",
          CV: "Descargar CV",
          TitleFeature1: "Desarrollo Web",
          DescriptionFeature1: "Creando sitios web responsivos y aplicaciones web con frameworks modernos",
          TitleFeature2: "Diseño UX/UI",
          DescriptionFeature2: "Diseñando interfaces de usuario intuitivas y experiencias de usuario fluidas",
          TitleFeature3: "Desarrollo de APIs",
          DescriptionFeature3: "Desarrollando, implementando e integrando APIs para software y aplicaciones",
        },
        Skills: {
          My: "Mis",
          Skills: "Habilidades",
          All: "Todo",
          Frontend: "Frontend",
          Backend: "Backend",
          Tools: "Herramientas",
          Frameworks: "Frameworks",
        },
        Proyects: {
          Title1: "Proyectos",
          Title2: "destacados",
          Description: "Aquí les presento algunos de mis proyectos recientes. Cada proyecto fue elaborado con esmero, prestando atención al detalle, al rendimiento y a la experiencia del usuario.",
          DescriptionProyect1: "Eccomerce de bisuteria online",
          DescriptionProyect2: "Pokedex interactiva online",
          DescriptionProyect3: "Backend del eccomerce de bisuteria",
          Github: "Revisa mi Github",
        },
        Contact: {
          GetIn: "Ponte en",
          Touch: "Contacto",
          Description: "¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme. Siempre estoy abierto a hablar sobre nuevas oportunidades.",
          ContactTitle: "Información de Contacto",
          Email: "Correo Electrónico",
          Phone: "Celular",
          Location: "Ubicación",
          Connect: "Conecta Conmigo",
          FormTitle: "Envía un mensaje",
          Name: "Nombre",
          Message: "Mensaje",
          Placeholder: "Hola me gustaría hablar sobre...",
          Send: "Enviar Mensaje",
          Sending: "Enviando Mensaje",
        },
        Toast: {
          Title: "¡Mensaje Enviado!",
          Message: "Gracias por tu mensaje. Te contactaré pronto.",
        }
      },
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
