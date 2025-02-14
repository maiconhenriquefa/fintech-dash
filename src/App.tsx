import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import { SaleDataContextProvider } from "./context/DataContext";
import Resume from "./pages/Resume";

function App() {
  return (
    <SaleDataContextProvider>
      <Sidenav />
      <Header />
      <main>
        <Resume />
      </main>
    </SaleDataContextProvider>
  );
}

export default App;
