type FooterProps = {
  onNavigate: (section: string) => void;
};

const affiliates = [
  {
    name: "Far North Self Storage WA",
    image: "/images/logos/farnorth.png",
    link: "https://www.farnorthselfstoragewa.com/",
  },
  {
    name: "David Hall Construction LLC",
    image: "/images/logos/dhconstruction.png",
    link: "https://www.davidhallconstruction.com/",
  },
  {
    name: "R43 Digital Tech",
    image: "/images/logos/logo2.png",
    link: "https://www.r43digitaltech.com/",
  },
];

const Footer = ({ onNavigate }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white pt-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 gap-6 pb-6 border-b border-green-800">
        
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold mb-2">Dirt Works</h3>
          <p className="text-gray-300 leading-relaxed">
            Locally owned & operated in Kettle Falls. Bulk rock, bark, and soil with reliable service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            {["soil", "gravel", "bark", "rock", "greenhouse", "services", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    onNavigate(item);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:underline text-gray-200"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-base font-semibold mb-2">Contact</h4>
          <ul className="text-gray-200 space-y-1">
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=764+US-395,+Kettle+Falls,+WA+99141"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                764 US-395<br />
                Kettle Falls, WA 99141
              </a>
            </li>
            <li>
              <a href="tel:+15097382010" className="hover:underline">
                (509) 738-2010
              </a>
            </li>
            <li>Wed-Sat · 9AM-5PM</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-base font-semibold mb-2">Follow Us</h4>
          <a
            href="https://www.facebook.com/dirtworkskettlefalls"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-200 hover:text-white transition"
          >
            <i className="fab fa-facebook"></i> Facebook
          </a>
        </div>

        {/* Affiliates */}
        <div>
          <h4 className="text-base font-semibold mb-2">Our Affiliates</h4>
          <div className="space-y-2">
            {affiliates.map((affiliate) => (
              <a
                key={affiliate.name}
                href={affiliate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-90 transition"
              >
                <img
                  src={affiliate.image}
                  alt={affiliate.name}
                  className="w-8 h-8 object-contain rounded bg-white p-1"
                />
                <span className="text-gray-200 text-sm">{affiliate.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center py-3 text-xs text-gray-400 bg-green-950">
        &copy; {currentYear} Dirt Works. Built by{" "}
        <a
          href="https://www.r43digitaltech.com"
          className="text-green-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          R43 Digital Tech
        </a>
      </div>
    </footer>
  );
};

export default Footer;
