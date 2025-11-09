import FirstBlock from "./blocks/FirstBlock";
import Header from '../../components/Header'
import SecondBlock from "./blocks/SecondBlock";
import ThirdBlock from "./blocks/ThirdBlock";
import FourthBlock from "./blocks/FourthBlock";
import FifthBlock from "./blocks/FIfthBlock";
import Footer from "./blocks/Footer";
export default function HomePage(){
    return(
        <>
            <Header/>
            <FirstBlock/>
            <SecondBlock/>
            <ThirdBlock/>
            <FourthBlock/>
            <FifthBlock/>
            <Footer/>
        </>
    )
}