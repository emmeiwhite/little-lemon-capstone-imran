import AboutUs from './AboutUs'
import Specials from './Specials'
import Testimonials from './Testimonials'
import styles from './Main.module.css'

const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <Specials />
      <Testimonials />
      <AboutUs />
    </main>
  )
}
export default Main
