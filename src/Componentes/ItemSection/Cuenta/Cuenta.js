import React from "react";

function Cuenta(props) {
  let { cuenta } = props;
  return (
    <div>
      {cuenta >= 1  ?(
        <p> {cuenta} Items</p>
      ) : (
        <p>Compraste {cuenta} Item</p>
      )}
    </div>
  );
}

export default Cuenta;
