import React from "react";

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div className="book__price">
      {/* check if book price exist if it does print og price and sale. No sale then use og  */}
      {salePrice ? (
        <>
          <span className="book__price--normal">
            ${originalPrice.toFixed(2)}
          </span>
          ${salePrice.toFixed(2)}{" "}
        </>
      ) : (
        <>${originalPrice.toFixed(2)} </>
      )}
    </div>
  );
};
export default Price;
