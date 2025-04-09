import './ProjectsPage.less';
import Header from '../shared/Header.jsx'

function ProectsPage(){
    return (
         <main className="projects">
            <Header />
            <div className="container">
                <h2>Our Special Dishes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit ipsum autem quisquam, itaque vitae.</p>
                <article>
                    <nav>
                        {/* <img src={} alt="" /> */}
                        <h4>Lumpia with Suace</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, veritatis.</p>
                    </nav>
                    <nav>
                        {/* <img src={} alt="" /> */}
                        <h4>Lumpia with Suace</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, veritatis.</p>
                    </nav>
                    <nav>
                        {/* <img src={} alt="" /> */}
                        <h4>Lumpia with Suace</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, veritatis.</p>
                    </nav>
                    <nav>
                        {/* <img src={} alt="" /> */}
                        <h4>Lumpia with Suace</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, veritatis.</p>
                    </nav>
                </article>
            </div>
         </main>
    );
}

export default ProectsPage;