import React from "react";
import { useFormik } from "formik";
import "./Checkout.css";

export default function Checkout(props) {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    },
    onSubmit: (values) => {
      props.history.push("/success");
    },
  });
  return (
    <div className="checkout">
      <div>
        <form className="checkout-form" onSubmit={formik.handleSubmit}>
          <div>
            <h1>Shipping Address</h1>
            <div>
              <div className="checkout-input-wrapper">
                <label className="checkout-label" htmlFor="fullName">
                  Full name
                </label>
                <input
                  className="checkout-input"
                  type="text"
                  id="fullName"
                  required
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="checkout-input-wrapper">
                <label className="signin-label" htmlFor="address">
                  Address
                </label>
                <input
                  className="checkout-input"
                  type="text"
                  id="address"
                  required
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="checkout-input-wrapper">
                <label className="signin-label" htmlFor="city">
                  City
                </label>
                <input
                  className="checkout-input"
                  type="text"
                  id="city"
                  required
                  value={formik.values.city}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="checkout-input-wrapper">
                <label className="signin-label" htmlFor="postalCode">
                  Postal Code
                </label>
                <input
                  className="checkout-input"
                  type="text"
                  id="postalCode"
                  required
                  value={formik.values.postalCode}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="checkout-input-wrapper">
                <label className="signin-label" htmlFor="country">
                  Country
                </label>
                <input
                  className="checkout-input"
                  type="text"
                  id="country"
                  required
                  value={formik.values.country}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="checkout-footer">
                <button type="submit" className="shipping-button">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
