import './fourth.less'
import chef from '../../../assets/chef .webp'
import garlic from '../../../assets/garlic.webp'
import partofgarlic from '../../../assets/partofgarlic.webp'

export default function FourthBlock(){
    return(
        <main className="fourth" id='portfolio'>
            <img src={garlic} alt="" className='garlic'/>
            <img src={partofgarlic} alt="" className='partofgarlic'/>
            <div className="container">
                <aside>
                    <h2>Our Expects Chef</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <article>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur </li>
                            <li>Lorem ipsum dolor sit amet, consectetur </li>
                            <li>Lorem ipsum dolor sit amet, consectetur </li>
                        </ul>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur </li>
                            <li>Lorem ipsum dolor sit amet, consectetur </li>
                            <li>Lorem ipsum dolor sit amet, consectetur </li>   
                        </ul>
                    </article>
                    <div>
                        <button>Menu</button>
                        <button>Book a table</button>
                    </div>
                </aside>
                <aside>
                    <img src={chef} alt="" />
                </aside>
            </div>
        </main>
    )
}