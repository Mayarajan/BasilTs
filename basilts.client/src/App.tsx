import './App.css';
import ProductList from './Components/ProductList';

function App() {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>BasilTs</h1>
                <p>Outdoor &amp; adventure tees</p>
            </header>

            <main>
                <ProductList />
            </main>
        </div>
    );
}

export default App;