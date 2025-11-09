import './second.less'
import egg from '../../../../public/egg.svg'
export default function SecondBlock(){
    return(
        <main className="second" id='about'>
            <div className="container">
                <h2>Our Special Dishes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis voluptas saepe aut delectus exercitationem?</p>
                <article>
                    <div>
                        <img src={egg} alt="" />
                        <nav>
                            <h3>Lumpia with Suace</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, totam eos?</p>
                        </nav>
                    </div>
                    <div>
                        <img src={egg} alt="" />
                        <nav>
                            <h3>Lumpia with Suace</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, totam eos?</p>
                        </nav>
                    </div>
                    <div>
                        <img src={egg} alt="" />
                        <nav>
                            <h3>Lumpia with Suace</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, totam eos?</p>
                        </nav>
                    </div>
                    <div>
                        <img src={egg} alt="" />
                        <nav>
                            <h3>Lumpia with Suace</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, totam eos?</p>
                        </nav>
                    </div>
                </article>
            </div>
        </main>
    )
}