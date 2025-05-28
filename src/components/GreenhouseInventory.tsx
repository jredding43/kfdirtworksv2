

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
          <h3 className="text-lg font-bold mb-4 text-green-800">Tomatoes<span className="italic text-sm"> (Heirloom)</span></h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li className="flex justify-between">San Marzano<span className="text-green-700 font-bold">$8</span></li>
            <li className="flex justify-between">Black Krim<span className="text-green-700 font-bold">$8</span></li>
            <li className="flex justify-between">Yellow Pear<span className="text-green-700 font-bold">$8</span></li>
            <li className="flex justify-between">Mortgage Lifter<span className="text-green-700 font-bold">$8</span></li>
            <li className="flex justify-between">Red Currant<span className="text-green-700 font-bold">$8</span></li>
            <li className="flex justify-between">Costoluto Genovese<span className="text-green-700 font-bold">$8</span></li>
            <li className="flex justify-between">Tiny Tim Basket<span className="text-green-700 font-bold">$15</span></li>
            <li className="flex justify-between">Giant Pink Belgium<span className="text-green-700 font-bold">$8</span></li>
            <li className="flex justify-between">Sweet 100 <span className="italic text-sm">(not heirloom)</span><span className="text-green-700 font-bold">$6</span></li>
          </ul>
        </div>

        {/* Peppers - Heirloom */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-green-800">Peppers<span className="italic text-sm"> (Heirloom)</span></h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li className="flex justify-between">CA Wonder Bell<span className="text-green-700 font-bold">$6</span></li>
            <li className="flex justify-between">Poblano<span className="text-green-700 font-bold">$6</span></li>
            <li className="flex justify-between">Mammoth Jalapeño<span className="text-green-700 font-bold">$6</span></li>
            <li className="flex justify-between">Thai Hot<span className="text-green-700 font-bold">$6</span></li>
            <li className="flex justify-between">Cayenne<span className="text-green-700 font-bold">$6</span></li>
            <li className="flex justify-between">Red Mercury Bell<span className="text-green-700 font-bold">$6</span></li>
            <li className="flex justify-between">Sweet Banana<span className="text-green-700 font-bold">$6</span></li>
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
          <h3 className="text-lg font-bold mb-4 text-green-800">Eggplant</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li className="flex justify-between">Black Beauty<span className="text-green-700 font-bold">$6</span></li>
          </ul>
        </div>

        {/* Herbs */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-green-800">Herbs</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li className="flex justify-between">Basil Boxwood<span className="text-green-700 font-bold">$3</span></li>
            <li className="flex justify-between">Basil Holy <span className="text-green-700 font-bold">$3</span></li>
            <li className="flex justify-between">Basil Emerald Tower<span className="text-green-700 font-bold">$3</span></li>
            <li className="flex justify-between">Thyme<span className="text-green-700 font-bold">$6</span></li>
            <li className="flex justify-between">Rosemary<span className="text-green-700 font-bold">$6</span></li>
            <li className="flex justify-between">Sage Italian<span className="text-green-700 font-bold">$3</span></li>
            <li className="flex justify-between">Basil Opal<span className="text-green-700 font-bold">$3</span></li>
          </ul>
        </div>

        {/* Perennials */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-green-800">Perennials</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li className="flex justify-between">Verbena - Homestead Purple<span className="text-green-700 font-bold">$8</span></li>
            <li className="flex justify-between">Evening Primrose<span className="text-green-700 font-bold">$8</span></li>
            <li className="flex justify-between">Delphinium - Blue <span className="text-green-700 font-bold">$8</span></li>
            <li className="flex justify-between">Delphinium - Magic<span className="text-green-700 font-bold">$8</span></li>
            <li className="flex justify-between">Yarrow - Paprika<span className="text-green-700 font-bold">$8</span></li>
            <li className="flex justify-between">Yarrow - Milly Rock Rose<span className="text-green-700 font-bold">$8</span></li>
            {/* <li className="flex justify-between">Glorious Daisy Double Gold<span className="text-green-700 font-bold">$8</span></li>  */}
          </ul>
        </div>

        {/* Perennials 1 Gallon Pot*/}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-green-800">Perennials<span className="italic text-sm"> (1 Gal Pot)</span></h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li className="flex justify-between">Morning Glory<span className="text-green-700 font-bold">$10</span></li>
            <li className="flex justify-between">Lavender - Phenomenal<span className="text-green-700 font-bold">$15</span></li>
            <li className="flex justify-between">Lavender - Essence Purple<span className="text-green-700 font-bold">$15</span></li>
          </ul>
        </div>

        {/* Annuals */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-green-800">Annuals</h3>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li className="flex justify-between">Sunray Dwarf Sunflower<span className="text-green-700 font-bold">$5</span></li>
            <li className="flex justify-between">Dragon White Begonia<span className="text-green-700 font-bold">$6</span></li>
            <li className="flex justify-between">Bellaconia Rose Begonia<span className="text-green-700 font-bold">$6</span></li>
            <li className="flex justify-between">Calenda<span className="text-green-700 font-bold">$6</span></li>
            <li className="flex justify-between">Chrysanthemum Tricolor Daisy<span className="text-green-700 font-bold">$6</span></li>
            <li className="flex justify-between">Zinnias<span className="text-green-700 font-bold">$5</span></li>
            <li className="flex justify-between">Marigold<span className="text-green-700 font-bold">$6</span></li>
            <li className="flex justify-between">Hanging Baskets<span className="text-green-700 font-bold">$15</span></li>
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

  
    </>
    );
};

export default GreenhouseInventory;