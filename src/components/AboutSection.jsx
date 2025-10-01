import { Terminal, Code, User } from "lucide-react";
import "../i18n/i18next.config";
import { useTranslation } from "react-i18next";

export const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="min-h-screen flex py-24 px-4 relative">
      <div className="container flex flex-col justify-center align-middle mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("About.About")} <span className="text-primary">{t("About.Me")}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{t("About.Title")}</h3>

            <p className="text-muted-foreground">{t("About.HardSkills")}</p>

            <p className="text-muted-foreground">{t("About.SoftSkills")}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {t("About.Contact")}
              </a>

              <a
                target="_blank"
                href="https://drive.google.com/file/d/1F1YkfRrPqrE3v4tt3iJ_92wGfh6mFkc-/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {t("About.CV")}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("About.TitleFeature1")}</h4>
                  <p className="text-muted-foreground">{t("About.DescriptionFeature1")}</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("About.TitleFeature2")}</h4>
                  <p className="text-muted-foreground">{t("About.DescriptionFeature2")}</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("About.TitleFeature3")}</h4>
                  <p className="text-muted-foreground">{t("About.DescriptionFeature3")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
