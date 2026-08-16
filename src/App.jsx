import { useEffect } from "react";
import { initScrollAnimations } from "./animations/scrollanimations";
import {
  animateHeroText,
  animateProfile,
  animateVoiceGrid,
  animateServices,
  animateAbout,
  animateContact,
  animateQuote
} from "./animations/textanimations";
import { animateHeroWave } from "./animations/gsapanimations";
import { pageEnter } from "./animations/pagetransitions";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";



import Home from "./pages/home/home";
import Voices from "./pages/voices/voices";
import VoiceProfile from "./pages/voiceprofile/voiceprofile";
import Quote from "./pages/quote/quote";

import Services from "./pages/services/services";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    pageEnter();

 if (pathname === "/voices") {
   animateVoiceGrid();
 }

 if (pathname.startsWith("/voices/")) {
   animateProfile();
 }

 if (pathname === "/services") {
   animateServices();
 }

 if (pathname === "/about") {
   animateAbout();
 }
if (pathname === "/contact") {
  animateContact();
}
if (pathname === "/quote") {
  animateQuote();
}
  }, [pathname]);

  return null;
}

function App() {

  useEffect(() => {
    initScrollAnimations();
    animateHeroText();
    animateHeroWave();
  }, []);

  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/voices"
          element={<Voices />}
        />

        <Route
          path="/voices/:id"
          element={<VoiceProfile />}
        />

        <Route
          path="/quote"
          element={<Quote />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;