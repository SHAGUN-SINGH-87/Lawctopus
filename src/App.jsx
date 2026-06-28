import Audience from "./components/Audience/Audience";
import Background from "./components/Background/Background";
import CTA from "./components/CTA/CTA";
import Curriclum from "./components/Curriclum/Curriclum";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Freelancing from "./components/Freelancing/Freelancing";
import Hero from "./components/Hero/Hero";
import Highlights from "./components/Highlights/Highlights";
import Loader from "./components/Loader/Loader";
import Mentors from "./components/Mentors/Mentors";
import Navbar from "./components/Navbar/Navbar";
import Prices from "./components/Prices/Prices";
import Roadmap from "./components/RoadMap/RoadMap";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Stats from "./components/Stats/Stats";
import Testimonials from "./components/Testimonials/Testimonial";
import WhyCourse from "./components/WhyCourse/WhyCourse";

function App() {
  return (
    <>
    <Loader />
    <Background />
    <ScrollProgress />
    <Navbar />
    <main >
      <Hero/>
      <Stats />
      <WhyCourse />
      <Highlights />
      <Curriclum />
      <Audience />
      <Mentors />
      <Roadmap />
      <Freelancing />
      <Testimonials />
      <Prices />
      <FAQ />
      <CTA />
      <Footer />
    </main>
    <ScrollTop />
    </>
  );
}

export default App;