import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './fifth.less'
import pers from '../../../../public/pers.svg'
import pan from '../../../assets/pan.webp'

export default function FifthBlock(){
    var settings = {
        autoplay: true,
        infinite: true,
        speed: 700,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
    };
    return(
        <main className="fifth" id="contacts">
            <img src={pan} alt="" className="pan"/>
            <div className="container">
                <h2>Our Happy Customers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                <Slider {...settings}>
                    <div>
                        <nav>
                            <img src={pers} />
                        </nav>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper 
                        </p>
                        <h4>Ama Ampomah</h4>
                        <p>CEO & Founder Inc</p>
                    </div>
                    <div>
                        <nav>
                            <img src={pers} />
                        </nav>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper 
                        </p>
                        <h4>Ama Ampomah</h4>
                        <p>CEO & Founder Inc</p>
                    </div>
                    <div>
                        <nav>
                            <img src={pers} />
                        </nav>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper 
                        </p>
                        <h4>Ama Ampomah</h4>
                        <p>CEO & Founder Inc</p>
                    </div>
                    <div>
                        <nav>
                            <img src={pers} />
                        </nav>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper 
                        </p>
                        <h4>Ama Ampomah</h4>
                        <p>CEO & Founder Inc</p>
                    </div>
                </Slider>
            </div>
        </main>
    )
}