import { useState } from "react";
import { cn } from "@/lib/utils";
import "../i18n/i18next.config";
import { useTranslation } from "react-i18next";
import skills from "../documents/skills.json";
import GlareHover from "./GlareHover";

const categories = ["All", "Frontend", "Backend", "Tools", "Frameworks"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useTranslation();

  const filteredSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory);
  return (
    <section id="skills" className="min-h-screen py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("Skills.My")}
          <span className="text-primary"> {t("Skills.Skills")}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {t(`Skills.${category}`)}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="max-h-[65vh] p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
          {filteredSkills.map((skill, key) => (
            <GlareHover
              key={key}
              className="vidrio p-5 rounded-lg card-hover"
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
            >
              <div className="flex justify-between text-left mb-4">
                <h3 className="font-semibold text-md"> {skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{ width: skill.level + "%" }} />
              </div>
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  );
};
