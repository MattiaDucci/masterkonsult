//"http://localhost:9999/.netlify/functions/coupon" per test con server locale
function applyCoupon() {
  const couponValue = document.getElementById("coupon-input").value;
  const couponApplicationResponse = fetch("/.netlify/functions/coupon", {
    body: JSON.stringify({
      coupon: couponValue,
    }),
    method: "POST",
  })
    .then((res) => res.json())
    .then((json) => {
      const discountedPrices = json.discountedPrice;
      const allPlans = Object.keys(discountedPrices);
      allPlans.forEach((planName) => {
        let list = document.getElementById(planName);
        let priceSpan = list.querySelector(".price-value");
        let priceRow = list.querySelector(".price-row");
        let newItem = priceSpan.cloneNode(true);
        let clonedRow = priceRow.cloneNode(true);
        price = discountedPrices[planName];
        newItem.textContent = `${price}${
          isNaN(parseFloat(price)) ? "" : "€/anno"
        }`;
        let currentFontSize = window
          .getComputedStyle(priceSpan, null)
          .getPropertyValue("font-size");
        let newFontSize = parseFloat(currentFontSize) * 2;
        newItem.style.fontSize = `${newFontSize}px`;
        console.log(newItem);
        clonedRow.querySelector(".price-value").replaceWith(newItem);
        // console.log(clonedRow);
        priceSpan.style.textDecoration = "line-through";
        priceRow.parentNode.insertBefore(clonedRow, priceRow.nextSibling);
        document.getElementById("apply-coupon-btn").disabled = true;
      });
    })
    .catch((err) => {
      console.log(err);
      alert("Codice coupon non valido");
    });
}
