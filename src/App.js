import './App.css';
import './data.json';
import ProductsPage from './components/ProductsPage';

function App() {
  return (
    <div className="App">
      <div>
        <ProductsPage />
      </div>
    </div>
  );
}

export default App;