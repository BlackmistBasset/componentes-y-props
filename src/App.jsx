import { Card } from "./components/Card/card";
import { MainContainer } from "./components/layout/MainContainer/mainContainer";
import { Navbar } from "./components/navbar/Navbar";
import { Header } from "./components/layout/header/Header";

import imagen1 from "./assets/michis1.jpg";
import imagen2 from "./assets/michis2.jpg";
import imagen3 from "./assets/michis3.jpg";

function App() {
  const isLogged = true;
  return (
    <>
      <Header isLoggedIn={isLogged} userName={"Pepito"} />
      <MainContainer>
        <h1 className="titulo__principal">Miren mis gatitos!</h1>

        <div className="cards__container">
          <Card
            nombreGatito="Pepe"
            imagenGatito={imagen1}
            isLoggedIn={isLogged}
            esMimoso={true}
          />
          <Card
            nombreGatito="Raulita, Paco y Minina"
            imagenGatito={imagen2}
            isLoggedIn={isLogged}
          />
          <Card
            nombreGatito="Vincent"
            imagenGatito={imagen3}
            isLoggedIn={isLogged}
          />
        </div>
      </MainContainer>
    </>
  );
}

export default App;
