import { useState } from "react";

/**
 * Store a single product
 */
export default function useProduct() {
  const [product, setProduct] = useState({
    sku: "",
    name: "",
    quantity: "",
    price: "",
  });

  const updateAttr = (attrs = {}) => {
    setProduct((p) => ({ ...p, ...attrs }));
  };

  const validate = () => {
    const errors = new Set();
    Object.keys(product).forEach((productAttr) =>
      product[productAttr]?.trim() === "" ? errors.add(productAttr) : null
    );
    if (errors.size) return errors;
    return true;
  };

  return {
    product,
    updateAttr,
    validate,
  };
}
