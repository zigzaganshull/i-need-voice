import { useState } from "react";

import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";
import VoiceFilters from "../../components/voices/voicefilters";
import VoiceGrid from "../../components/voices/voicegrid";

import voices from "../../data/voices";

import "./voices.css";

function Voices() {
  const [filters, setFilters] = useState({
    language: "",
    gender: "",
    age: "",
    accent: "",
    category: "",
  });

  const filteredVoices = voices.filter((voice) => {
    return (
      (!filters.language || voice.language === filters.language) &&
      (!filters.gender || voice.gender === filters.gender) &&
      (!filters.age || voice.age === filters.age) &&
      (!filters.accent || voice.accent === filters.accent) &&
      (!filters.category || voice.category === filters.category)
    );
  });

  return (
    <>
      <Navbar />

      <div className="page-transition">

        <main className="voices-page">

          <section className="voices-page__hero">

            <div className="voices-page__label">
              <span></span>
              VOICE ARTISTS
            </div>

            <h1>
              Find the
              <br />
              <span>right voice.</span>
            </h1>

            <p>
              Explore professional voice artists,
              listen to their demos and find the perfect
              voice for your project.
            </p>

          </section>

          <section className="voices-page__catalog">

            <div className="voices-page__results">
              <span>{filteredVoices.length}</span>
              VOICES AVAILABLE
            </div>

            <VoiceFilters
              filters={filters}
              setFilters={setFilters}
            />

            <VoiceGrid voices={filteredVoices} />

          </section>

        </main>

      </div>

      <Footer />
    </>
  );
}

export default Voices;