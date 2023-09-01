import { Header } from "../components/Home/header"
import { InfoCard } from "../components/Home/infoCard"
import { Background } from "../components/Home/background"


export const Home = () => {
  return (
    <div className="home-content">       
       <Background/>
       <Header/>
       <InfoCard/>      
    </div>
  )
}
