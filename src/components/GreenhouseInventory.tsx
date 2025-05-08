

const GreenhouseInventory = () => {

    return(
    <>
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

    {/* Pricing Section */}
    <section className="select-none cursor-default w-full bg-gradient-to-br from-green-100 to-yellow-50 py-20 px-4">
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

    </>
    );
};

export default GreenhouseInventory;