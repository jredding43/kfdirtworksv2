

const GreenhouseInventory = () => {

    return(
    <>
    <div className="relative w-full">
      {/* 🔒 Overlay Message */}
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🌱 Closed for the Season</h1>
        <p className="text-xl md:text-2xl">Come back next spring!</p>
      </div>

     {/* Plants  */}
      <section className="select-none cursor-default w-full bg-gradient-to-br from-green-100 to-yellow-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-10">
          Greenhouse Products
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
        {/* Tomatoes - Heirloom */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-2 text-green-800">
            Tomatoes <span className="italic text-sm">(Heirloom)</span>
          </h3>
          <h4 className="text-base font-bold mb-4 text-orange-400">
            UPDATED PRICING <span className="italic text-sm">4" Pot $4 / 1 Gal Pot $6</span>
          </h4>

          <ul className="text-gray-800 space-y-2">
            {[
              { name: "San Marzano", old: "$8", new: "$6" },
              { name: "Black Krim", old: "$8", new: "$6" },
              { name: "Yellow Pear", old: "$8", new: "$6" },
              { name: "Mortgage Lifter", old: "$8", new: "$6" },
              { name: "Red Currant", old: "$8", new: "$6" },
              { name: "Costoluto Genovese", old: "$8", new: "$6" },
              { name: "Tiny Tim Basket", old: "$15", new: "$10" },
              { name: "Giant Pink Belgium", old: "$8", new: "$6" },
              {
                name: (
                  <>
                    Sweet 100 <span className="italic text-sm text-gray-500">(not heirloom)</span>
                  </>
                ),
                old: "$6",
                new: "$6",
              },
            ].map((item, idx) => (
              <li key={idx} className="flex justify-between items-center">
                <span>{item.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="line-through text-red-600 font-semibold">{item.old}</span>
                  <span className="text-green-700 font-bold">{item.new}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>


        {/* Peppers - Heirloom */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-2 text-green-800">
            Peppers <span className="italic text-sm">(Heirloom)</span>
          </h3>
          <h4 className="text-base font-bold mb-4 text-orange-400">
            REDUCED PRICING <span className="italic text-sm">All Varieties Now $5</span>
          </h4>

          <ul className="text-gray-800 space-y-2">
            {[
              "CA Wonder Bell",
              "Poblano",
              "Mammoth Jalapeño",
              "Thai Hot",
              "Cayenne",
              "Red Mercury Bell",
              "Sweet Banana",
            ].map((name, idx) => (
              <li key={idx} className="flex justify-between items-center">
                <span>{name}</span>
                <div className="flex items-center space-x-2">
                  <span className="line-through text-red-600 font-semibold">$6</span>
                  <span className="text-green-700 font-bold">$5</span>
                </div>
              </li>
            ))}
          </ul>
        </div>


        {/* Peppers - Heirloom - Zucchini*/}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-green-800">Zucchini</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li className="flex justify-between">Fordhook<span className="text-green-700 font-bold">$3</span></li>
            <li className="flex justify-between">Black Beauty<span className="text-green-700 font-bold">$3</span></li>
          </ul>
        </div>

        {/* Peppers - Heirloom - Eggplant*/}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-2 text-green-800">Eggplant</h3>
          <h4 className="text-base font-bold mb-4 text-orange-400">
            REDUCED PRICING <span className="italic text-sm">Now $5</span>
          </h4>

          <ul className="text-gray-800 space-y-2">
            <li className="flex justify-between items-center">
              <span>Black Beauty</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$6</span>
                <span className="text-green-700 font-bold">$5</span>
              </div>
            </li>
          </ul>
        </div>


        {/* Herbs */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-2 text-green-800">Herbs</h3>
          <h4 className="text-base font-bold mb-4 text-orange-400">
            SELECT PRICING UPDATED <span className="italic text-sm">Thyme & Rosemary Now $5</span>
          </h4>

          <ul className="text-gray-800 space-y-2">
            <li className="flex justify-between items-center">
              <span>Basil Boxwood</span>
              <span className="text-green-700 font-bold">$3</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Basil Holy</span>
              <span className="text-green-700 font-bold">$3</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Basil Emerald Tower</span>
              <span className="text-green-700 font-bold">$3</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Thyme</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$6</span>
                <span className="text-green-700 font-bold">$5</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Rosemary</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$6</span>
                <span className="text-green-700 font-bold">$5</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Sage Italian</span>
              <span className="text-green-700 font-bold">$3</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Basil Opal</span>
              <span className="text-green-700 font-bold">$3</span>
            </li>
          </ul>
        </div>


        {/* Perennials */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-2 text-green-800">Perennials</h3>
          <h4 className="text-base font-bold mb-4 text-orange-400">
            REDUCED PRICING <span className="italic text-sm">All Varieties Now $6</span>
          </h4>

          <ul className="text-gray-800 space-y-2">
            <li className="flex justify-between items-center">
              <span>Verbena - Homestead Purple</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$8</span>
                <span className="text-green-700 font-bold">$6</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Evening Primrose</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$8</span>
                <span className="text-green-700 font-bold">$6</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Delphinium - Blue</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$8</span>
                <span className="text-green-700 font-bold">$6</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Delphinium - Magic</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$8</span>
                <span className="text-green-700 font-bold">$6</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Yarrow - Paprika</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$8</span>
                <span className="text-green-700 font-bold">$6</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Yarrow - Milly Rock Rose</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$8</span>
                <span className="text-green-700 font-bold">$6</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Glorious Daisy Double Gold <span className="text-red-700 font-bold"> SOLD OUT</span></span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$8</span>
                <span className="text-green-700 font-bold">$6</span>
              </div>
            </li>
          </ul>
        </div>


        {/* Perennials 1 Gallon Pot*/}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-2 text-green-800">
            Perennials <span className="italic text-sm">(1 Gal Pot)</span>
          </h3>

          <ul className="text-gray-800 space-y-2">
            <li className="flex justify-between items-center">
              <span>Morning Glory <span className="text-red-700 font-bold">SOLD OUT</span></span>
              <div className="flex items-center space-x-2">
                <span className="text-green-700 font-bold">$10</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Lavender - Phenomenal</span>
              <span className="text-green-700 font-bold">$15</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Lavender - Essence Purple</span>
              <span className="text-green-700 font-bold">$15</span>
            </li>
          </ul>
        </div>


        {/* Annuals */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-2 text-green-800">Annuals</h3>
          <h4 className="text-base font-bold mb-4 text-orange-400">
            REDUCED PRICING <span className="italic text-sm">All Annuals Now $5 </span>
          </h4>

          <ul className="text-gray-800 space-y-2">
            <li className="flex justify-between items-center">
              <span>Sunray Dwarf Sunflower</span>
              <span className="text-green-700 font-bold">$5</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Dragon White Begonia</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$6</span>
                <span className="text-green-700 font-bold">$5</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Bellaconia Rose Begonia</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$6</span>
                <span className="text-green-700 font-bold">$5</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Calenda</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$6</span>
                <span className="text-green-700 font-bold">$5</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Chrysanthemum Tricolor Daisy</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$6</span>
                <span className="text-green-700 font-bold">$5</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Zinnias</span>
              <span className="text-green-700 font-bold">$5</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Marigold</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$6</span>
                <span className="text-green-700 font-bold">$5</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Hanging Baskets</span>
              <div className="flex items-center space-x-2">
                <span className="line-through text-red-600 font-semibold">$15</span>
                <span className="text-green-700 font-bold">$10</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Berries */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-green-800">Berries</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li className="flex justify-between">Black Currant<span className="text-green-700 font-bold">$20</span></li>
            <li className="flex justify-between">Gooseberry<span className="text-green-700 font-bold">$20</span></li>
            <li className="flex justify-between">Strawberry<span className="text-green-700 font-bold">$3</span></li>
          </ul>
        </div>

        </div>
      </div>
    </section>

    </div>
    </>
    );
};

export default GreenhouseInventory;