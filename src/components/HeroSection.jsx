import { ArrowDown } from "lucide-react";
import "../i18n/i18next.config";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">{t("Hero.Hi")}</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Manuel</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Cobos</span>
          </h1>

          <div className="animate-fade-in-delay-3 my-6">
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto mb-0 opacity-0 animate-fade-in-delay-3">{t("Hero.Introduce1")}</p>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto mb-0 opacity-0 animate-fade-in-delay-3">{t("Hero.Introduce2")}</p>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">{t("Hero.Introduce3")}</p>
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              {t("Hero.Work")}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">{t("Hero.Scroll")}</span>
        <a href="#about">
          <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </div>
    </section>
  );
};
