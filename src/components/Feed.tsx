

const Feed = () => {
  const feeds = [
    { item: "Mega Layer Mash", price: "$22.70" },
    { item: "Mega Layer Pellet", price: "$24.85" },
    { item: "Beef G/F", price: "$21.40" },
    { item: "Swine G/F Mash", price: "$22.00" },
    { item: "Mare/Foal/Senior", price: "$24.45" },
    { item: "Alfalfa Pellets", price: "$18.25" },
    { item: "NWA Layer Pellets", price: "$16.70" },
    { item: "All Stock", price: "$19.10" },
    { item: "Dry COB", price: "$19.85" },
    { item: "Rabbit Grower", price: "$22.00" },
    { item: "Dairy Feed Mash", price: "$22.55" },
    { item: "Game Bird Mash", price: "$27.75" },
  ];

  return (
    <div className="bg-white text-gray-800 p-6 md:p-12 max-w-4xl mx-auto rounded-xl shadow-lg mb-10 mt-10">
      <h1 className="text-4xl font-bold text-center mb-2 tracking-tight">
        KANIKSU FEEDS
      </h1>
      <p className="text-center text-md text-gray-600 mb-6">
        <span className="block font-medium">Pick-up Available</span>
        Thursday & Friday <strong>1pm-5pm</strong><br />
        Saturday <strong>9am-1pm</strong>
      </p>

      <h2 className="text-2xl font-semibold text-center mt-8 mb-4">
        PRICE LIST - 50 lb Bags
      </h2>

      <div className="bg-gray-50 rounded-lg px-4 py-6 shadow-inner">
        {feeds.map((feed, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center py-2 border-b last:border-b-0 hover:bg-white transition rounded"
          >
            <span className="text-lg">{feed.item}</span>
            <span className="text-lg font-semibold">{feed.price}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-sm">
        <p className="mb-2 text-gray-700">
          One Ton and ½ Ton Bags Available Upon Request
        </p>
        <p className="mb-4 font-medium text-gray-900">
          Please call for Ordering & Pricing Information
        </p>

        <div className="flex justify-center space-x-4 text-2xl">
          <span role="img" aria-label="chicken">🐔</span>
          <span role="img" aria-label="cow">🐄</span>
          <span role="img" aria-label="goat">🐐</span>
          <span role="img" aria-label="horse">🐎</span>
          <span role="img" aria-label="pig">🐖</span>
          <span role="img" aria-label="rabbit">🐇</span>
        </div>
      </div>
    </div>
  );
};

export default Feed;
