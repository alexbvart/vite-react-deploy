import ContactMe from './components/contactme'
import Header from './components/header'
import Product from './components/product'
import "./globalStyles.scss";

function App() {
  
  return (
      // <div className="App">
      // </div>
      <>
        <section className='section_app'>
          <Header />
          <Product />
          <ContactMe />
        </section>
      </>
  )
}

export default App
