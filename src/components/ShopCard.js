import { useState } from "react";
import TaxDetails from "./TaxDetails";

const ShopCard = ({ shop }) => {
  const [transaction, setTransaction] = useState(0);

   const handleShowTaxDetails = (shop) => {
     const taxDetailsElement = document.getElementById(`taxDetails-${shop.id}`);
     taxDetailsElement.classList.add("show");
   };
  const payTax = () => {
    const payAmount = prompt(
      `Please enter the tax amount you wish to pay for ${shop.name} : ${shop.taxAmount}`
    );
    if (payAmount === null) {
      return;
    }
    const floatValue = parseFloat(payAmount);
    if (isNaN(floatValue) || floatValue < 0) {
      alert("Invalid input. Please enter a valid tax amount.");
      return;
    }

    if (floatValue === shop.taxAmount) {
      alert("Tax paid successfully!");

      setTransaction(1);
    } else if (floatValue < shop.taxAmount) {
      alert(
        "Payment unsuccessful. The entered amount is less than the required tax."
      );
      setTransaction(2);
    } else {
      const response = window.confirm(
        "The payment amount exceeds the required tax. Are you sure you want to proceed?"
      );
      if (response) {
        alert("Tax payment successful! Thank you for your payment.");
        setTransaction(1);
      } else {
        alert("Tax not paid");
      }
    }
  };

  return (
    <div>
      <div className= {`shop-card ${transaction === 1 ? "paid" : "not-paid"}`}>
        <img src={shop.image} alt={shop.name}></img>
        <h2>{shop.name}</h2>

        <div className=" button">
          {transaction === 0 && (
            <div className="icon">
              <button onClick={() => handleShowTaxDetails(shop)}>
                Show Tax Details
              </button>
              <button
                className={`shop-card ${ transaction === 1 ? "paid" : "not-paid"}`} onClick={payTax} >
                Pay Tax
              </button>
            </div>
          )}
          {transaction === 1 && <p>✔</p>}
          {transaction === 2 && <p>❌</p>}

          <TaxDetails shop={shop}></TaxDetails>
        </div>
      </div>
    </div>
  );
};
export default ShopCard;
