import styles from "./style";
import {
  Navbar,
  Projects,
  Footer,
  Home,
} from "./components";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className= {`${styles.boxWidth}`}>
        <Navbar></Navbar>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className= {`${styles.boxWidth}`}>
        <Home></Home>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className= {`${styles.boxWidth}`}>

        <Projects/>
        <Certificates/>
        <Contact/>
        <Footer></Footer>
      </div>
    </div>
    </div>
  )
}

export default App
