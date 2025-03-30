import './App.css'
import Navbar from './Components'

function App() {
  const navItems = ['hero', 'about me', 'projects', 'testimonials', 'contact me', 'blog'];
  return (
    <>
      <Navbar navitems={navItems}/>
    </>
  )
}

export default App
