import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";

import voices from "../../data/voices";

import "./quote.css";

function Quote() {
  const [searchParams] = useSearchParams();

  const voiceId = searchParams.get("voice");

  const selectedVoice = voices.find(
    (voice) => voice.id === Number(voiceId)
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    language: "",
    words: "",
    deadline: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />

        <div className="page-transition">

          <main className="quote-success">

            <span>REQUEST RECEIVED</span>

            <h1>
              Thank
              <br />
              <em>you.</em>
            </h1>

            <p>
              Thanks for telling us about your project.
              Our team will review your request and get
              back to you shortly.
            </p>

            <Link to="/voices">
              ← BACK TO VOICES
            </Link>

          </main>

        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="page-transition">

        <main className="quote-page">

          <section className="quote-page__hero">

            <div className="quote-page__label">
              <span></span>
              REQUEST A QUOTE
            </div>

            <h1>
              Let's give
              <br />
              <em>it a voice.</em>
            </h1>

            <p>
              Tell us about your project and we'll help
              you find the right voice and production
              solution.
            </p>

          </section>

          <section className="quote-page__form-section">

            {selectedVoice && (
              <div className="quote-selected quote-animate">

                <div>
                  <span>SELECTED VOICE</span>

                  <h2>{selectedVoice.name}</h2>

                  <p>
                    {selectedVoice.language}
                    {" · "}
                    {selectedVoice.accent}
                    {" · "}
                    {selectedVoice.gender}
                  </p>
                </div>

                <Link to="/voices">
                  CHANGE VOICE
                </Link>

              </div>
            )}

            <form
              className="quote-form quote-form-animate"
              onSubmit={handleSubmit}
            >

              <div className="quote-form__group">

                <label htmlFor="name">
                  YOUR NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="quote-form__group">

                <label htmlFor="email">
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="quote-form__group">

                <label htmlFor="company">
                  COMPANY
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                />

              </div>

              <div className="quote-form__group">

                <label htmlFor="projectType">
                  PROJECT TYPE
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select project type
                  </option>

                  <option value="Commercial">
                    Commercial
                  </option>

                  <option value="Corporate">
                    Corporate
                  </option>

                  <option value="E-Learning">
                    E-Learning
                  </option>

                  <option value="Animation">
                    Animation
                  </option>

                  <option value="Documentary">
                    Documentary
                  </option>

                  <option value="Dubbing">
                    Dubbing
                  </option>
                </select>

              </div>

              <div className="quote-form__group">

                <label htmlFor="language">
                  LANGUAGE
                </label>

                <input
                  id="language"
                  name="language"
                  type="text"
                  placeholder="Required language"
                  value={formData.language}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="quote-form__group">

                <label htmlFor="words">
                  APPROXIMATE WORD COUNT
                </label>

                <input
                  id="words"
                  name="words"
                  type="number"
                  min="1"
                  placeholder="e.g. 1500"
                  value={formData.words}
                  onChange={handleChange}
                />

              </div>

              <div className="quote-form__group">

                <label htmlFor="deadline">
                  DEADLINE
                </label>

                <input
                  id="deadline"
                  name="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={handleChange}
                />

              </div>

              <div className="quote-form__group quote-form__group--full">

                <label htmlFor="message">
                  TELL US ABOUT YOUR PROJECT
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder="Tell us about your project, tone, usage and anything else we should know."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="quote-form__submit">

                <p>
                  We'll review your requirements and
                  get back to you with the next steps.
                </p>

                <button type="submit">
                  <span>SEND REQUEST</span>
                  <span>↗</span>
                </button>

              </div>

            </form>

          </section>

        </main>

      </div>

      <Footer />
    </>
  );
}

export default Quote;