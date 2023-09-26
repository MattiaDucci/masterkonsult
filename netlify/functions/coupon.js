exports.handler = async function (event, context) {
  const commonHeaders = {
    "Access-Control-Allow-Origin": "*", // Allow any origin
    "Access-Control-Allow-Headers": "Content-Type",
  };
  if (event.httpMethod != "POST") {
    return {
      statusCode: 500,
      body: `${event.httpMethod} not allowed`,
      headers: commonHeaders,
    };
  }
  const value = process.env.COUPON_CODE;
  const body = JSON.parse(event.body);
  const requestedCoupon = body.coupon;
  const match = value === requestedCoupon;
  const couponPrices = {
    core: "800",
    premium: "1950",
    platinum: "A preventivo",
  };

  return {
    statusCode: match ? 200 : 404,
    headers: commonHeaders,
    body: JSON.stringify({
      message: match ? "OK" : "Coupon non trovato",
      ...(match ? { discountedPrice: couponPrices } : {}),
    }),
  };
};
