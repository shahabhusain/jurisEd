import About from "./components/About";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Scholarship from "./components/Scholarship";
import StudentCourses from "./components/StudentCourses";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Features />
      <StudentCourses />
      <Scholarship />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
