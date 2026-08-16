import Navbar from "../../components/layout/navbar";
import Hero from "../../components/home/hero";
import Intro from "../../components/home/intro";
import VoiceSearch from "../../components/home/voicesearch";
import Services from "../../components/home/services";
import HowItWorks from "../../components/home/howitworks";
import Languages from "../../components/home/languages";
import Stats from "../../components/home/stats";
import Clients from "../../components/home/clients";
import CTA from "../../components/home/cta";
import Footer from "../../components/layout/footer";

import "./home.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="page-transition">

        <main>
          <Hero />
          <Intro />
          <VoiceSearch />
          <Services />
          <HowItWorks />
          <Languages />
          <Stats />
          <Clients />
          <CTA />
        </main>

      </div>

      <Footer />
    </>
  );
}

export default Home;