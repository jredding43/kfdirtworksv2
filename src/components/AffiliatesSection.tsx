const affiliates = [
    {
      name: "Far North Self Storage WA",
      image: "/images/logos/farnorth.png",
      description:
        "RV, Boat, Equipment, Self Storage, and Drop & Hook Facility in Northport, WA.",
      link: "https://www.farnorthselfstoragewa.com/",
    },
    {
      name: "David Hall Construction LLC",
      image: "/images/logos/dhconstruction.png",
      description:
        "Reliable excavation, site prep, and earthmoving in Stevens and Ferry Counties.",
      link: "https://www.davidhallconstruction.com/",
    },
    {
      name: "R43 Digital Tech",
      image: "/images/logos/logo2.png",
      description:
        "Clean, custom websites built for local brands — mobile-ready and fast.",
      link: "https://www.r43digitaltech.com/",
    },
  ];
  
  export default function AffiliatesSection() {
    return (
      <section className="relative bg-green-50 py-20 px-4 sm:px-8 lg:px-16">
        <div className="absolute inset-0 bg-[url('/images/logos/shack.jpg')] bg-cover bg-center opacity-10 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900">Trusted Partners</h2>
            <p className="text-gray-700 mt-2">
              Local businesses that help us — and our customers — succeed.
            </p>
          </div>
  
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {affiliates.map((partner) => (
              <div
                key={partner.name}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col justify-between"
              >
                <div className="mb-4">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="mx-auto h-48 object-contain rounded-lg bg-gray-100 p-2"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 text-center">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 text-sm text-center mt-2">
                    {partner.description}
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-800 hover:bg-green-900 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  