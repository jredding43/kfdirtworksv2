
import InventoryNav from "../components/InventoryNav";
import { useState } from "react";

type Props = {
    onNavigate: (section: string) => void;
  };
  

  const Home: React.FC<Props> = ({ onNavigate }) => {

    const [, setSelectedImage] = useState<string | null>(null);

  
    return (
      <div className="bg-gradient-to-br from-green-100 to-yellow-50 text-gray-800 py-2">   

        {/* Hero Section */}
        <section className="relative z-0 mb-10 overflow-hidden mt-10">
        {/* Image (background-style) */}
        <img
            src="/images/logos/shack.jpg"
            alt="Dirt Works Background"
            className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="absolute inset-0 bg-black/50 -z-10" />

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-6 py-36 text-white text-center z-10">
        <p className="select-none cursor-default mt-6 text-2xl lg:text-4xl leading-relaxed">
            Building Solutions with Dirt and Rocks — From the Ground Up.
        </p>
        <div className="select-none cursor-default mt-8 text-2xl lg:text-4xl space-y-1">
            <p>764 Hwy 395 N, Kettle Falls WA 99141</p>
            <p>(509) 738-2010</p>
            <p>Wed-Sat · 9AM-5PM</p>
        </div>

        <div className="mt-10">
            <button
                onClick={() => onNavigate("greenhouse")}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl text-lg font-semibold transition"
            >
                Visit Our Greenhouse
            </button>
            </div>
        </div>
        </section>


        {/* Content Wrapper */}
        <section className="max-w-6xl mx-auto space-y-12 px-4">

        <InventoryNav onNavigate={onNavigate} />

        </section>

        <section className="mt-20 bg-orange-200 py-10 px-4 text-center">
            <h2 className="select-none cursor-default text-2xl md:text-4xl lg:text-6xl font-bold text-green-800 mb-6">Closed July 4th & 5th</h2>
        </section>

        <section className="mt-20 bg-orange-200 py-10 px-4 text-center">
            <h2 className="select-none cursor-default text-2xl md:text-4xl lg:text-6xl font-bold text-green-800 mb-6">June Specials</h2>
            <p className="select-none cursor-default text-2xl md:text-2xl lg:text-3xl mt-2 text-gray-700 max-w-xl mx-auto">
                <span className="font-extrabold text-4xl">  Now Selling KANIKSU FEEDS  </span>
            </p>
            <p className="select-none cursor-default text-2xl md:text-2xl lg:text-3xl mt-2 text-gray-700 max-w-xl mx-auto">
                Buy 3 get 1 <span className="text-green-700 font-extrabold"> FREE </span> Pepper/ Herb/ Flower
            </p>
        </section>

        <section className="mt-20 max-w-5xl mx-auto px-4 text-center">
        <h2 className="select-none cursor-default text-2xl font-bold text-green-700 mb-6">What Our Customers Say</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
            {
                name: "Jeremy H.",
                quote:
                "Great place, the owner's are awesome. Their garden dirt will make you look like a professional gardener.They have a variety of Landscaping materials to dial your yard in. The gal there can operate the equipment like nobody's business a.straight professional",
            },
            {
                name: "Corey F.",
                quote:
                "Great place for landscaping supplies. Good selection of quality mulch, and fantastic service. Highly Recommended!",
            },
            {
                name: "Darrel R.",
                quote:
                "These folks are amazing!! If you need dirt, compost, rock or bark, they have you covered...and at amazing prices.",
            },
            {
                name: "Alan M.",
                quote:
                "Friendly, knowledgeable and quick service. Good quality soil and delivered in exact locations requested.",
            },
            {
                name: "Lloyd W.",
                quote:
                "Great soil, quick friendly service, good prices, selection.",
            },
            ].map((review, i) => (
            <div
                key={i}
                className="bg-gray-50 p-4 rounded shadow-sm border border-gray-200"
            >
                <p className="italic text-sm text-gray-700">"{review.quote}"</p>
                <p className="mt-2 text-sm font-semibold text-green-800">
                — {review.name}
                </p>
            </div>
            ))}
        </div>
        </section>

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

        <section className="select-none cursor-default w-full bg-gradient-to-br from-green-100 to-yellow-50 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 text-center mb-6 tracking-tight">
                Berries & Plants Information Page
                </h1>
                <p className="text-center text-green-800 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                A closer look at our berry selections including Gooseberry and Black Currant. View the original product info sheets below.
                </p>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[...Array(9)].map((_, i) => {
                    const imagePath = `/images/info/photo-(${i + 1}).jpg`;
                    return (
                    <div
                        key={i}
                        onClick={() => setSelectedImage(imagePath)}
                        className="bg-white border border-green-200 rounded-xl overflow-hidden shadow hover:shadow-md transition cursor-pointer"
                    >
                        <img
                        src={imagePath}
                        alt={`Berry info ${i + 1}`}
                        className="w-full h-auto object-cover"
                        />
                    </div>
                    );
                })}
                </div>
            </div>
        </section>

        <section className="mt-20 max-w-5xl mx-auto px-4">
        <h2 className="select-none cursor-default text-3xl font-extrabold text-green-700 mb-8 text-center">Why Locals Choose Us</h2>
        <div className="select-none cursor-default grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {[
            {
                icon: "🚜",
                title: "Bulk Materials, Local Prices",
                desc: "Topsoil, bark, gravel, and rock — ready for pickup or delivery without big-box pricing.",
            },
            {
                icon: "📦",
                title: "Fast, Friendly Delivery",
                desc: "Right to your driveway or job site. Reliable, flexible, and always on schedule.",
            },
            {
                icon: "🌲",
                title: "Trusted by the Community",
                desc: "Serving homeowners, landscapers, and farms throughout our region for years.",
            },
            ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-green-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-green-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
            ))}
        </div>
        </section>

        <section className="mt-20 bg-green-200 py-12 text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Ready to Start Your Project?</h2>
            <button
                onClick={() => onNavigate("contact")}
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition"
            >
                Contact Us Today
            </button>
        </section>

        <section className="mt-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-green-800 mb-4">Share Our Info Instantly</h2>
        <p className="text-gray-700 text-md md:text-lg mb-6">
            Scan or share this QR code to save our location and contact info.
        </p>

        <div className="flex justify-center mb-6">
            <img
            src="/images/logos/qr_code.png"
            alt="Dirt Works QR Code"
            className="w-40 h-40 md:w-52 md:h-52 rounded-md shadow-md border border-gray-300"
            />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
            href="/images/logos/qr_code.png"
            download="dirtworks.png"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full font-semibold transition"
            >
            Download QR Code
            </a>

            <button
            onClick={() => {
                navigator.clipboard.writeText("https://www.kfdirtworks.com");
                alert("Link copied to clipboard!");
            }}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full font-semibold transition"
            >
            Copy Link
            </button>

            {typeof navigator.share === "function" && (
            <button
                onClick={() => {
                navigator.share({
                    title: "Dirt Works Contact Info",
                    text: "Save our contact info and location:",
                    url: "https://www.kfdirtworks.com",
                });
                }}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full font-semibold transition"
            >
                Share
            </button>
            )}
        </div>
        </section>
      </div>
    );
  };
  
  export default Home;
  