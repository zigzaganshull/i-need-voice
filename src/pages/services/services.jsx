import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";

import ServiceHero from "../../components/services/servicehero";
import ServiceGrid from "../../components/services/servicegrid";
import ServiceProcess from "../../components/services/serviceprocess";

import "./services.css";

function Services() {
  return (
    <>
      <Navbar />

      <div className="page-transition">

        <main className="services-page">

          <ServiceHero />

          <ServiceGrid />

          <ServiceProcess />

        </main>

      </div>

      <Footer />
    </>
  );
}

export default Services;