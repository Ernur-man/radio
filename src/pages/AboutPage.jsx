import './AboutPage.less';
import Header from '../shared/Header.jsx'

function AboutPage(){
    return (
        <main className='about'>
            <Header />
            <div className="container">
                <aside>

                </aside>
                <aside>
                    <h2>Wecome to Our Restaurant</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <nav>
                        <button>Menu</button>
                        <button>Book a table</button>
                    </nav>
                </aside>
            </div>
        </main>
    );
}

export default AboutPage;