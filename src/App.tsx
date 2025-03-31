import './App.css'
import Navbar from './Components'
import Hero from './Components/Hero';

function App() {
  const navItems = ['hero', 'about me', 'projects', 'testimonials', 'contact me', 'blog'];
  return (
    <>
      <Navbar navitems={navItems}/>
      <Hero />
    </>
  )
}

export default App
