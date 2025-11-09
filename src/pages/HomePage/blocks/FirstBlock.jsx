import './first.less'
import fon from '../../../../public/fon_restaurant.svg'
export default function FirstBlock(){
    return(

        
        <main className='first'>
            <div className="container">
                <aside>
                    <h2>We provide the best food for you</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div>
                        <button>Menu</button>
                        <button>Book a table</button>
                    </div>
                    <div>

                    </div>
                </aside>
                <aside>
                    <img src={fon} alt="" />
                </aside>
            </div>
        </main>
    )
}