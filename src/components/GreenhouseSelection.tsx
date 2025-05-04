

const greenhouseImages = [
  "greenhouse2.jpg",
  "greenhouse3.jpg",
  "greenhouse4.jpg",
  "greenhouse5.jpg",
  "greenhouse6.jpg",
  "greenhouse7.jpg",
];

const GreenhouseSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-green-900 text-white py-20 px-4 mt-2">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            Welcome to Our Greenhouse
          </h1>
          <p className="text-xl text-green-100">
            A curated selection of seasonal plants, homegrown herbs, and vibrant flowers — grown with care in Kettle Falls.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full bg-gradient-to-br from-green-100 to-yellow-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
            Explore the Greenhouse
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {greenhouseImages.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <img
                  src={`/images/greenhouse/${img}`}
                  alt={`Greenhouse image ${i + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full bg-gradient-to-br from-green-100 to-yellow-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-10">
            Plant & Product Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-green-800 ">Vegetables & Herbs</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex justify-between font-bold"><span>Tomatoes</span><span className="text-green-700 font-bold">$8</span></li>
                <li className="flex justify-between font-bold"><span>Tomato Hanging Baskets</span><span className="text-green-700 font-bold">$15</span></li>
                <li className="flex justify-between font-bold"><span>Peppers</span><span className="text-green-700 font-bold">$6</span></li>
                <li className="flex justify-between font-bold"><span>Basil</span><span className="text-green-700 font-bold">$3</span></li>
                <li className="flex justify-between font-bold"><span>Herbs</span><span className="text-green-700 font-bold">$6</span></li>
                <li className="flex justify-between font-bold"><span>Onion Starts (Bag)</span><span className="text-green-700 font-bold">$3</span></li>
              </ul>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-green-800">Flowers & Misc.</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex justify-between font-bold"><span>Annuals</span><span className="text-green-700 font-bold">$6</span></li>
                <li className="flex justify-between font-bold"><span>Perennials</span><span className="text-green-700 font-bold">$8</span></li>
                <li className="flex justify-between font-bold"><span>Petunias - Wave</span><span className="text-green-700 font-bold">$8</span></li>
                <li className="flex justify-between font-bold"><span>Dwarf Sunflowers</span><span className="text-green-700 font-bold">$5</span></li>
                <li className="flex justify-between font-bold"><span>Lavender (Gal pot)</span><span className="text-green-700 font-bold">$15</span></li>
                <li className="flex justify-between font-bold"><span>Morning Glory (Gal Pot)</span><span className="text-green-700 font-bold">$10</span></li>
                <li className="flex justify-between font-bold"><span>Currants / Gooseberry (2 yr old)</span><span className="text-green-700 font-bold">$20</span></li>
                <li className="flex justify-between font-bold"><span>Tomato Clips (25)</span><span className="text-green-700 font-bold">$5</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* VITAZYME FEATURED PRODUCT SECTION */}
      <section className="bg-gradient-to-br from-green-100 to-yellow-50 py-16 px-4 border-t border-green-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-10">
            Boost Your Soil with Vitazyme
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left - Brochure Image */}
            <div className="flex justify-center">
              <img
                src="/images/logos/vitazyme2.jpg"
                alt="Vitazyme Brochure"
                className="w-full max-w-xs rounded-xl shadow-md"
              />
            </div>

            {/* Right - Product Display and Description */}
            <div>
              <div className="flex justify-center mb-4">
                <img
                  src="/images/logos/vitazyme.jpg"
                  alt="Vitazyme Bottles"
                  className="w-full max-w-md rounded-xl shadow-md"
                />
              </div>

              <p className="text-gray-700 text-base mb-3">
                <strong>Vitazyme</strong> is an all-natural soil concentrate that improves fertility and boosts plant performance. Great for veggie starts, flowers, and crops.
              </p>
              <ul className="list-disc list-inside text-green-800 font-medium space-y-1">
                <li>Promotes stronger root systems</li>
                <li>Improves nutrient absorption</li>
                <li>Supports soil health naturally</li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                Available now in our greenhouse. Ask for details when you visit!
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Gift Cards & Extras */}
      <section className="w-full bg-gradient-to-br from-green-100 to-yellow-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-10 text-center">
            Gifts & Seasonal Extras
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-xs bg-green-50 border border-green-100 rounded-xl shadow p-5 text-center">
              <img src="/images/gifts/giftcard.jpg" alt="Gift Card" className="rounded mb-3" />
              <h3 className="text-xl font-bold text-green-800">Gift Cards</h3>
              <p className="text-sm text-gray-600">Perfect for garden lovers. Available in-store.</p>
            </div>

            <div className="max-w-xs bg-green-50 border border-green-100 rounded-xl shadow p-5 text-center">
              <img src="/images/gifts/sunflower.jpg" alt="Seed Pack" className="rounded mb-3" />
              <h3 className="text-xl font-bold text-green-800">Free Seeds</h3>
              <p className="text-sm text-gray-600">Stop in and grab a complimentary seed pack to brighten your garden.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GreenhouseSection;
