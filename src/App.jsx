import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
};

export default App;
