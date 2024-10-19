
import Footer from "./components/Footer"
import { GridBackground } from "./components/ui/BackGrid"
import Navbar from "./components/ui/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Stack from "./pages/Stack"



const App = () => {
  return (
    <main className="bg-slate-900 overflow-x-hidden h-screen">
    <Navbar/>
    <GridBackground/>
    <About/>
    <Portfolio/>
    <Stack/>
    <Contact/>
    <Footer/>
    </main>
  )
}

export default App