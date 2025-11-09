import './third.less'
import salad from '../../../../public/salad.svg';
import top from '../../../assets/top.webp'
import right from '../../../assets/right.webp'
import left from '../../../assets/left.webp'


export default function ThirdBlock(){
    return(
        <main className="third" id='services'>
            <div className="container">
                <aside>
                    <img src={top} alt="" className='topleaf'/>
                    <img src={right} alt="" className='rightleaf'/>
                    <img src={left} alt="" className='leftleaf'/>
                    <img src={salad} alt="" className='salad'/>
                </aside>
                <aside>
                    <h2>Welcome to Our Restaurant</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div>
                        <button>Menu</button>
                        <button>Book a table</button>
                    </div>
                </aside>
            </div>
        </main>
    )
}