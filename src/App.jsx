import Center from "./components/Center.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Intro from "./components/Intro.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="flex-col items-center justify-center">
        <Intro />
        <Center />
        <Footer />
      </main>
    </>
  );
}

export default App;
