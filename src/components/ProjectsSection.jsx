import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nom Nom Nation",
    description: "A Food Delivery platform with user authentication and payment processing.",
    image: "/image_1.png",
    tags: ["React", "RazorPay", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/GauRaVNeGi29/Nom-Nom-Nation-MERN",
  },
  {
    id: 2,
    title: "Docify",
    description:
      "A Doctor Appointment booking Platform with Admin Panel",
    image: "/image_d.png",
    tags: ["React", "RazorPay", "JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://github.com/GauRaVNeGi29/Docify-Doctor-Appointment-Platform",
    githubUrl: "https://github.com/GauRaVNeGi29/Docify-Doctor-Appointment-Platform",
  },
  {
    id: 3,
    title: "Stock Price Prediction",
    description:
    "Can predict future stock using various ML models and Historical data.",
    image: "/image_3.png",
    tags: ["Python", "Streamlit", "Pandas", "XG Boost", "yFinance"],
    demoUrl: "https://stock-wise.streamlit.app/",
    githubUrl: "https://github.com/GauRaVNeGi29/Stock-Prediction",
  },
  {
    id: 4,
    title: "Flavor Dash",
    description:
    "Food Delivery Website with interactive UI and efficient cart",
    image: "/image_4.png",
    tags: ["React", "Tailwind CSS", "HTML", "JavaScript"],
    demoUrl: "https://flavor-dash-ashy.vercel.app/",
    githubUrl: "https://github.com/GauRaVNeGi29/FlavorDash",
  },
  {
    id: 5,
    title: "Email Reg",
    description:
      "A Full Stack Website providing various email registration features.",
    image: "/image_2.png",
    tags: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "https://email-registraion-project.vercel.app/",
    githubUrl: "https://github.com/GauRaVNeGi29/Email-Registraion-Project",
  },
  {
    id: 6,
    title: "Weather API",
    description:
      "Integrated OpenWeatherApi with attractive UI",
    image: "/image_w.png",
    tags: ["React", "OpenWeatherAPI", "Tailwind CSS", "JavaScript", "API Integration"],
    demoUrl: "https://github.com/GauRaVNeGi29/Weather-App",
    githubUrl: "https://github.com/GauRaVNeGi29/Weather-App",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/GauRaVNeGi29"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};