import AppLayout from "../AppLayout/AppLayout";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";

function App() {
  return (
    <AppLayout header={<Header />} footer={<Footer />}>
      <Home />
    </AppLayout>
  );
}

export default App;
