import React, { useContext, useState } from 'react';
import { Globalstate } from '../App';
import Checkout from './Settingcomponent/Checkout';

const Cart = () => {
  const val = useContext(Globalstate);
  const { cart, setCart } = val;
  const [tog, setTog] = useState(true);

  const removecart = (id) => {
    const updatecart = cart.filter((item) => item.id !== id);
    setCart(updatecart);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-200 to-gray-400 flex flex-col items-center py-10">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 tracking-wide">
         My Shopping Cart
      </h2>

      {tog ? (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-11/12 md:w-3/4 lg:w-2/3">
          {cart.length > 0 ? (
            <>
              <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
                  <tr>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Image</th>
                    <th className="py-3 px-4 text-left">Price</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((cur) => (
                    <tr
                      key={cur.id}
                      className="border-t border-gray-200 hover:bg-gray-50 transition"
                    >
                      <td className="py-3 px-4 font-medium text-gray-800">{cur.title}</td>
                      <td className="py-3 px-4">
                        <img
                          src={cur.image}
                          alt={cur.title}
                          className="w-16 h-16 object-contain rounded-lg border"
                        />
                      </td>
                      <td className="py-3 px-4 text-gray-700 font-semibold">
                        ₹{cur.price.toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => removecart(cur.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-center items-center mt-8">
                <button
                  onClick={() => setTog((cur) => !cur)}
                  className=" bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-200 "
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-700 text-center py-10 text-lg">
              Your cart is empty 
            </p>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <Checkout/>
        </div>
      )}
    </div>
  );
};

export default Cart;
