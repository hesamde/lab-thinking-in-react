import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
      <table>
        <thead className="bg-color ">
          <tr>
            <th>NAME</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
  );
}
export default ProductTable;