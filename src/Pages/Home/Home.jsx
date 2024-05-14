import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Team from "../../components/Team/Team";
import VolunteerNeedsCards from "../../components/VolunteerNeedsCards/VolunteerNeedsCards";





const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VolunteerNeedsCards></VolunteerNeedsCards>
            <AboutUs></AboutUs>
            <Team></Team>
            
        </div>
    );
};

export default Home;