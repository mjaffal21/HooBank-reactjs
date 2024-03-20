import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto p-5 lg:p-5 xl:px-0">
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
      <Section5 />
    </>
  );
}

export default App;
