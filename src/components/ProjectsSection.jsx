import { ArrowRight, Link, Github } from "lucide-react";
import projects from "../documents/proyects.json"
import "../i18n/i18next.config"
import { useTranslation } from "react-i18next";


export const ProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="min-h-screen container flex flex-col justify-center align-middle py-24 px-4 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        {t("Proyects.Title1")} <span className="text-primary"> {t("Proyects.Title2")}</span>
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        {t("Proyects.Description")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, key) => (
          {/* Image */},
          <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
            <div className="h-48 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            {/* Tags */}
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, key) => (
                  <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground" key={key}>
                    {tag}
                  </span>
                ))}
              </div>
              {/* Info */}
              <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{t(`Proyects.${project.description}`)}</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <Link size={20} />
                  </a>
                  <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/CobosFelipe">
          {t("Proyects.Github")} <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};
