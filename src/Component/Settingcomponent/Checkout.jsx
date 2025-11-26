import { useContext, useRef, useState } from "react";
import { Globalstate } from "../../App";
import { Link } from "react-router-dom";


const Checkout = () => {
  const nameRef = useRef();
  const mobileRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();

  const [tog, setTog] = useState(true);

  const { cart, setCart, admincart, setAdmincart } = useContext(Globalstate);

  const addAdmin = (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      mobile: mobileRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
    };

    const updatedadmincart = cart.map((item) => ({
      ...item,
      ...data,
    }));

    setAdmincart(updatedadmincart);
    setCart([]);

    nameRef.current.value = "";
    mobileRef.current.value = "";
    emailRef.current.value = "";
    addressRef.current.value = "";

    setTog(!tog);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6">
      {tog ? (
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Checkout Form
          </h3>

          <form
            onSubmit={addAdmin}
            className="flex flex-col gap-5 text-gray-700"
          >
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input
                ref={nameRef}
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Mobile</label>
              <input
                ref={mobileRef}
                type="text"
                placeholder="Enter mobile number"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                ref={emailRef}
                type="email"
                placeholder="Enter email address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Address</label>
              <textarea
                ref={addressRef}
                placeholder="Enter your home address"
                rows="3"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
            >
              Place Order
            </button>
          </form>
        </div>
      ) : (
        <div className="text-center bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Order Placed Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for shopping with us. Your order details have been
            submitted.
          </p>
          <button
            onClick={() => setTog(!tog)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all"
          >
            <Link to="/home">Go To Home</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
