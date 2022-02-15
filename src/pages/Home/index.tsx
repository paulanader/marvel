import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HomeCard } from "../../components/HomeCard";
import { Banner } from "../../components/Banner";

export function Home() {
    return(
        <>
            <Header />
            <Menu />
            <Banner />
            <HomeCard />
            <Footer />
        </>        
    );
}