import Header from "./Header";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container-grid">
      <Header />
      <Menu />
      <Sidebar />
      <ContentArea />
      <Footer />
    </div>
  )
}