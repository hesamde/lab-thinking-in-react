import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [allProduct] = useState(jsonData);
  const filterProducts = (search , isStock=false) => {
  const normalizeTerm = search.toUpperCase();
  const filterProduct = allProduct.filter(
      (product) => product.name.toUpperCase().includes(normalizeTerm) && (!isStock || isStock && product.inStock)
);
  setProducts(filterProduct);
};
  return (
    <div>
      <h1>IronStore</h1>
      <div>
        <SearchBar filterProducts={filterProducts} />
      </div>
      <br/>
      <ProductTable products={products} />
    </div>
  );
}
export default ProductsPage;