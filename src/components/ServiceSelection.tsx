import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-800 tracking-wide">
            Dirt Works
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 font-medium">
            From Start to Finish — The Services to Get It Done.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Bark · Soil · Rock */}
          <div className="bg-white rounded-2xl shadow-lg border border-green-200 hover:border-green-400 transition p-6 flex flex-col items-center text-center">
            <img src="/images/logos/rocksoil.png" alt="Bark/Soil/Rock" className="w-40 mb-4" />
            <h2 className="text-xl font-bold text-green-700 uppercase mb-2">Bark · Soil · Rock</h2>
            <p className="text-sm text-gray-600">
              From garden beds to gravel roads, we supply high-quality local materials for projects of every size.
            </p>
          </div>

          {/* Delivery */}
          <div className="bg-white rounded-2xl shadow-lg border border-green-200 hover:border-green-400 transition p-6">
            <img src="/images/logos/mack.png" alt="Delivery" className="w-36 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-green-700 uppercase text-center mb-4">Delivery</h2>
            <div className="text-sm text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold text-green-600">Dump Truck Capacity</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li><strong>15-Yard Max:</strong> Dirt, Bark, Wood Chips, Conditioner</li>
                  <li><strong>10-Yard Max:</strong> Gravel, Rock, Sand, Fill</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-600">Delivery Fees</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li><strong>$100 Flat Fee:</strong> Within 6 miles</li>
                  <li><strong>$150/hour:</strong> Round-trip beyond 6 miles</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-600">Notes</h3>
                <p>No minimum quantity required. Fees are flat regardless of load size.</p>
              </div>
            </div>
          </div>

          {/* Loading */}
          <div className="bg-white rounded-2xl shadow-lg border border-green-200 hover:border-green-400 transition p-6 flex flex-col items-center text-center">
            <img src="/images/logos/cat.png" alt="Loading" className="w-48 mb-4" />
            <h2 className="text-xl font-bold text-green-600 uppercase mb-2">Loading</h2>
            <p className="text-sm text-gray-600">
              Stay in your vehicle while we load your material for you.
              <br /><br />
              Small quantities? Materials are also available by the 5-gallon bucket — bring your own!
              <br /><br />
              <strong className="text-green-600">Weight Estimates per Cubic Yard:</strong><br />
               Decorative Rock: ~2,400 lbs<br />
               Sand: ~3,000 lbs<br />
               Bark: ~500-800 lbs<br />
               Topsoil: ~1,800 lbs <br />
               Rock: ~2,500 - 2,800 lbs
            </p>
          </div>
        </div>

    
        {/* Video Section */}
        <div className="mt-20 bg-white rounded-2xl border border-green-200 shadow-md px-6 py-10">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-10">
            See Our Work in Action
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
            <video
                controls
                className="w-full h-auto max-h-[420px] rounded-xl object-cover"
            >
                <source src="/videos/img4408.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p className="text-sm text-center mt-2 text-gray-600">Screening the Garden and Top Soil Blends</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
            <video
                controls
                className="w-full h-auto max-h-[420px] rounded-xl object-cover"
            >
                <source src="/videos/img4409.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p className="text-sm text-center mt-2 text-gray-600">Screening the Garden and Top Soil Blends</p>
            </div>
        </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
