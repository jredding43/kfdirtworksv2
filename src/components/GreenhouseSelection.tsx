

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
      <section className="select-none cursor-default w-full bg-green-900 text-white py-20 px-4 mt-2">
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

     {/* Plants  */}
     <section className="select-none cursor-default w-full bg-gradient-to-br from-green-100 to-yellow-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-10">
          Greenhouse Products
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
        {/* Tomatoes - Heirloom */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-green-800">Tomatoes - Heirloom</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li>San Marzano</li>
            <li>Black Krim</li>
            <li>Yellow Pear</li>
            <li>Mortgage Lifter</li>
            <li>Red Currant</li>
            <li>Costoluto Genovese</li>
            <li>Tiny Tim Basket</li>
            <li>Sweet 100 <span className="italic text-sm">(not heirloom)</span></li>
          </ul>
        </div>

        {/* Peppers - Heirloom */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-green-800">Peppers - Heirloom</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li>CA Wonder Bell</li>
            <li>Poblano</li>
            <li>Mammoth Jalapeño</li>
            <li>Thai Hot</li>
            <li>Cayenne</li>
            <li>Red Mercury Bell</li>
          </ul>
        </div>

        {/* Herbs */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-green-800">Herbs</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li>Boxwood Basil</li>
            <li>Holy Basil</li>
            <li>Thyme</li>
            <li>Rosemary</li>
          </ul>
        </div>

        {/* Perennials */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-green-800">Perennials</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li>Verbena - Homestead Purple</li>
            <li>Evening Primrose</li>
            <li>Delphinium</li>
            <li>Yarrow - Paprika</li>
            <li>Yarrow - Milly Rock Rose</li>
            <li>Morning Glory</li>
            <li>Lavender - Phenomenal</li>
            <li>Lavender - Essence Purple</li>
          </ul>
        </div>

        {/* Annuals */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-green-800">Annuals</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li>Sunray Dwarf Sunflower</li>
            <li>Dragon White Begonia</li>
            <li>Bellaconia Rose Begonia</li>
          </ul>
        </div>

        {/* Berries */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-green-800">Berries</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li>Black Currant</li>
            <li>Gooseberry</li>
          </ul>
        </div>


          
        </div>
      </div>
    </section>


      {/* VITAZYME FEATURED PRODUCT SECTION */}
      <section className="select-none cursor-default bg-gradient-to-br from-green-100 to-yellow-50 py-16 px-4 border-t border-green-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="select-none cursor-default text-3xl font-bold text-green-800 text-center mb-10">
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

              <p className="select-none cursor-default text-gray-700 text-base mb-3">
                <strong>Vitazyme</strong> is an all-natural soil concentrate that improves fertility and boosts plant performance. Great for veggie starts, flowers, and crops.
              </p>
              <ul className="select-none cursor-default list-disc list-inside text-green-800 font-medium space-y-1">
                <li>Promotes stronger root systems</li>
                <li>Improves nutrient absorption</li>
                <li>Supports soil health naturally</li>
              </ul>
              <p className="select-none cursor-default text-sm text-gray-500 mt-3">
                Available now in our greenhouse. Ask for details when you visit!
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Gift Cards & Extras */}
      <section className="select-none cursor-default w-full bg-gradient-to-br from-green-100 to-yellow-50 py-20 px-4">
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

            <div className="max-w-xs bg-green-50 border border-green-100 rounded-xl shadow p-5 text-center">
              <img src="/images/logos/cedar.jpg" alt="Seed Pack" className="rounded mb-3" />
              <h3 className="text-xl font-bold text-green-800">Cedar Planter Boxes</h3>
              <p className="text-sm text-gray-600">The box your garden deserves. </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GreenhouseSection;
