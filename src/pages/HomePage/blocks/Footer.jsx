import logo from '../../../assets/logo.svg'
import './footer.less'

export default function Footer(){
    return(
        <main className='footer'>
            <div className="container">
                <aside>
                    <img src={logo} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .Learn more
                    </p>
                    <h4>OPENING HOURS</h4>
                    <article>
                        <nav>
                            <p>Monday - Friday</p>
                            <p>8:00 am to 9:00 pm</p>
                        </nav>
                        <nav>
                            <p>Saturday</p>
                            <p>8:00 am to 9:00 pm</p>
                        </nav>
                        <nav>
                            <p>Sunday</p>
                            <p>Closed</p>
                        </nav>
                    </article>
                </aside>
                <nav>
                    <h4>NAVIGATION</h4>
                    <menu>
                        <li>Menu</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Main Dishers</li>
                    </menu>
                </nav>
                <nav>
                    <h4>DISHES</h4>
                    <menu>
                        <li>Fish & Viggies</li>
                        <li>Tofu Chill</li>
                        <li>Egg & Cucumber</li>
                        <li>Lumpia w/Suace</li>
                    </menu>
                </nav>
                <nav>
                    <h4>Follow Us</h4>
                    <menu>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                    </menu>
                </nav>
            </div>
        </main>
    )
}