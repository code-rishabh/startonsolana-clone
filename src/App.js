
import FirstSection from "./components/sections/FirstSection";
import SecondSection from "./components/sections/SecondSection";
import ThirdSection from "./components/sections/ThirdSection";
import FourthSection from "./components/sections/FourthSection";
import FifthSection from "./components/sections/FifthSection";
import SixthSection from "./components/sections/SixthSection";
import SeventhSection from "./components/sections/SeventhSection";
import EightSection from "./components/sections/EightSection";
import Footer from "./components/sections/Footer";







function App() {
  return (
    <div className="font-sans w-full min-h-screen flex flex-col bg-[#131e2b]">

      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EightSection />
      <Footer />

    </div>
  );
}

export default App;
