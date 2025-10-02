import { useEffect } from "react";
import { Home } from "./pages/Home";
import { Toaster } from "@/components/ui/toaster";
import i18n from "./i18n/i18next.config";

function App() {
  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  });
  return (
    <>
      <Toaster />
      <Home />
    </>
  );
}

export default App;
