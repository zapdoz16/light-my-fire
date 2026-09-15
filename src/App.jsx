import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DifferenceSection from "./components/DifferenceSection";
import ComparisonSection from "./components/ComparisonSection";
import Methodology from "./components/Methodology";
import Programs from "./components/Programs";
import Credibility from "./components/Credibility";
import Universities from "./components/Universities";
import Testimonials from "./components/Testimonials";
import Admissions from "./components/Admissions";
import AboutSameer from "./components/AboutSameer";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DifferenceSection />
        <ComparisonSection />
        <Methodology />
        <Programs />
        <Credibility />
        <Universities />
        <Testimonials />
        <Admissions />
        <AboutSameer />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}