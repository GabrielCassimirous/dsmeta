import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SalesCard from "./Components/SalesCard"
import Header from "./Components/Header"
function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-card-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
