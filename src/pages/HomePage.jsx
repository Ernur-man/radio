import Header from "../shared/Header";
import './HomePage.less'

function HomePage(){
    return (
        <main className="main">
            <Header />
            <div className="container">
                <aside>
                    <h2>We provide the best food for you</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <nav>
                        <button>Menu</button>
                        <button>Book table</button>
                    </nav>
                </aside>
                <aside>

                </aside>
            </div>
        </main>
    );
}

export default  HomePage;