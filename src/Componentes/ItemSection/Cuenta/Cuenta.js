import React from "react";

export default function Cuenta(props) {
  let { cuenta } = props;
  let {stock} = props;
  return (
    <div>
      {cuenta >= 1 ? (
        <p> {cuenta} Items</p>
      ) : (
        <p>Compraste {cuenta} Item</p>
      )}
    </div>
  );
}
