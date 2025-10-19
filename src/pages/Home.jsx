
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import List from '../components/List'

const Home = () => {
  return (
    <div  className="bg-gradient-to-b from-gray-700 to-black">
          {/* <Navbar /> */}
      <Hero />
      <Banner/>
      <List/>
      <Footer/>
    </div>
  )
}

export default Home
