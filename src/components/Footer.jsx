import { ArrowUp } from "lucide-react";
import "../i18n/i18next.config"
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-card">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-wrap justify-center gap-10">
            <a href="#hero" className="text-muted-foreground text-gray-500 hover:text-primary transition-colors">
              {t("Nav.Home")}
            </a>
            <a href="#about" className="text-muted-foreground text-gray-500 hover:text-primary transition-colors">
              {t("Nav.About")}
            </a>
            <a href="#skills" className="text-muted-foreground text-gray-500 hover:text-primary transition-colors">
              {t("Nav.Skills")}
            </a>
            <a href="#projects" className="text-muted-foreground text-gray-500 hover:text-primary transition-colors">
              {t("Nav.Projects")}
            </a>
            <a href="#contact" className="text-muted-foreground text-gray-500 hover:text-primary transition-colors">
              {t("Nav.Contact")}
            </a>
          </div>
        </div>

        <hr className="my-2 border-gray-200 md:my-5 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:justify-between gap-4">
          <div className="flex flex-row gap-2 sx:flex-col text-center">
            <p className="text-md text-gray-500 font-normal">© Copyright 2025. All Rights Reserved.</p>
            <p className="text-md text-gray-500 font-normal">Dev by Felipe Cobos and Pedro Machado</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
