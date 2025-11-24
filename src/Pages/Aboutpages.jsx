import React from "react";

const Aboutpages = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl bg-white shadow-2xl rounded-2xl p-10">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            About Our Store
          </h1>

          <p className="text-gray-600 text-center mb-8">
            Welcome to{" "}
            <span className="font-semibold text-gray-800">Clothico.</span> — your
            one-stop destination for quality products at unbeatable prices. We
            believe shopping should be simple, fun, and affordable for everyone.
          </p>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Why Choose Us?
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>✅ Wide range of top-quality products</li>
              <li>🚚 Fast and reliable shipping</li>
              <li>💳 Secure payment options</li>
              <li>🤝 Friendly customer support</li>
            </ul>

            <p className="mt-6 text-gray-600">
              Since our launch, we’ve helped thousands of customers find the
              right products for their lifestyle — all from the comfort of their
              homes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpages;
