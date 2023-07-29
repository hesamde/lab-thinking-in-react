import React from "react";

 function ProductRow(props) {
  const { product } = props;
  return (
    <tr style={{ color: product.inStock ? 'black' : 'red' }}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
export default ProductRow;