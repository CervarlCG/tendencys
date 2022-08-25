import { useState } from "react";
import Input from "../../../components/form/input";
import Modal from "../../../components/modal";
import useProduct from "../../../hooks/product";
import regexUtils from "../../../utils/regex";
import "./styles.css";

export default function AddProductModal({ onAdd, onRequestClose }) {
  const { product, updateAttr, validate } = useProduct();
  const [errors, setErrors] = useState(new Set());
  const { sku, name, quantity, price } = product;

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();

    if (validation !== true) {
      return setErrors(validation);
    }
    onAdd && onAdd(product);
  };

  const handleQuantity = (quantity) => {
    if (regexUtils.integer.test(quantity)) updateAttr({ quantity });
  };

  const handlePrice = (price) => {
    if (regexUtils.float.test(price)) updateAttr({ price });
  };

  return (
    <Modal onRequestClose={onRequestClose}>
      <form className="form-add-product" onSubmit={handleSubmit}>
        <div className="form-input">
          <Input
            placeholder="SKU*"
            value={sku}
            onChange={(sku) => updateAttr({ sku })}
            error={errors.has("sku") ? "This field is requiered" : ""}
          />
        </div>
        <div className="form-input">
          <Input
            placeholder="Name*"
            value={name}
            onChange={(name) => updateAttr({ name })}
            error={errors.has("name") ? "This field is requiered" : ""}
          />
        </div>
        <div className="form-input">
          <Input
            placeholder="Quantity*"
            value={quantity}
            onChange={handleQuantity}
            type="number"
            error={errors.has("quantity") ? "This field is requiered" : ""}
          />
        </div>
        <div className="form-input">
          <Input
            placeholder="Price*"
            value={price}
            onChange={handlePrice}
            type="number"
            error={errors.has("price") ? "This field is requiered" : ""}
          />
        </div>
        <button className="button">Submit</button>
      </form>
    </Modal>
  );
}
