import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Smartphone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import "../i18n/i18next.config";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: t("Toast.Title"),
        description: t("Toast.Message"),
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="min-h-[80vh] py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("Contact.GetIn")} <span className="text-primary"> {t("Contact.Touch")}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("Contact.Description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6 justify-around items-center">
            <h3 className="text-2xl font-semibold mb-6">
              {t("Contact.ContactTitle")}
            </h3>

            <div className="flex flex-col gap-6 w-100 items-center">
              {/* "Mail" */}
              <div className="flex gap-8">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">{t("Contact.Email")}</h4>
                  <a
                    href="mailto:flipper7247@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    flipper7247@gmail.com
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div className="flex gap-8">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">{t("Contact.Phone")}</h4>
                  <a
                    href="tel:+573192023114"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +57 (319) 202-3114
                  </a>
                </div>
              </div>
              {/* Map */}
              <div className="flex gap-8">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">{t("Contact.Location")}</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Bogotá D.C., Colombia
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-4">{t("Contact.Connect")}</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/manuel-cobos-developer/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/link.jsx/?hl=es" target="_blank">
                  <Instagram />
                </a>
                <a href="https://wa.me/573192023114" target="_blank">
                  <Smartphone />
                </a>
              </div>
            </div>
          </div>

          <div
            className="vidrio-form bg-card p-8 rounded-2xl"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">{t("Contact.FormTitle")}</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("Contact.Name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Johnny Depp..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t("Contact.Email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="email@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("Contact.Message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder={t("Contact.Placeholder")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? `${t("Contact.Sending")}` : `${t("Contact.Send")}`}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
