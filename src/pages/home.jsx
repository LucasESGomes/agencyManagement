import { NavLink } from "react-router-dom";

//components
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Services from "../components/services.jsx";
import MainContent from "../components/mainContent.jsx";
import HeroSection from "../components/heroSection.jsx";
import FeedbackSection from "../components/feedbackSection.jsx";

export default function Home() {
  return (
    <>
      <Header />
      {/* Conteúdo Carrosel */}
      <HeroSection />

      <Services />

      <FeedbackSection />
      <Footer />
    </>
  );
}
