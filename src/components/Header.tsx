import { useState } from "react";

type HeaderNavProps = {
  onNavigate: (section: string) => void;
};

const Header: React.FC<HeaderNavProps> = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const menuItems = [
    { label: "Home", value: "home" },
    {
      label: "Products",
      submenu: [
        { label: "Soil", value: "soil" },
        { label: "Gravel", value: "gravel" },
        { label: "Bark", value: "bark" },
        { label: "Decorative Rock", value: "rock" },
      ],
    },
    { 
      label: "Greenhouse", 
      submenu: [
        {label: "The Greenhouse", value:"greenhouse" },
        {label: "Information", value:"info" },
        {label: "Greenhouse Products", value:"inventory" },
        {label: "Our Pictures", value:"pictures" },
      ],
    },
    { label: "Services", value: "services" },
    { label: "Affiliates", value: "affiliates" },
    { label: "Contact", value: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-white shadow-md select-none cursor-default">
      {/* Logo and Tagline */}
      <div className="flex flex-col items-center justify-center py-4 border-b border-green-200 bg-white">
      <div className="flex items-center gap-4">
        <img
          src="/images/logos/dirtworks_logo.png"
          alt="Dirt Works Logo"
          className="select-none cursor-default h-12 w-auto md:h-20 lg:h-24 drop-shadow-sm translate-y-1 lg:translate-y-2"
        />
        <h1 className="select-none cursor-default text-3xl md:text-3xl lg:text-6xl font-bold tracking-widest uppercase text-green-800">
          Dirt Works
        </h1>
        <img
          src="/images/logos/dirtworks_logo.png"
          alt="Dirt Works Logo"
          className="select-none cursor-default h-12 w-auto md:h-20 lg:h-24 drop-shadow-sm translate-y-1 lg:translate-y-2"
        />
      </div>
      <p className="select-none cursor-default text-4x1 md:text-6x1 lg:text-8x1 font-bold text-gray-600 tracking-wide mt-2">
        Rock - Soil - Bark
      </p>
    </div>




      {/* Navigation */}
      <nav className="bg-white/80 text-green-900 md:backdrop-blur-sm uppercase tracking-wider font-medium border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Mobile toggle */}
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-green-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex justify-center gap-10 text-md font-semibold relative z-[1000]">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.submenu ? (
                  <>
                    <button
                      className="relative px-4 py-2 text-green-900 hover:text-green-600 transition duration-[2000ms] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-[2000ms] after:ease-in-out hover:after:w-full"
                    >
                      {item.label}
                    </button>
                    <div className="absolute left-0 top-full pt-1 z-[1000]">
                      <ul
                        className={`bg-white min-w-[220px] rounded shadow-md text-green-900 border border-green-200 transform transition-all duration-[2000ms] ease-in-out ${
                          hoveredItem === item.label
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                      >
                        {item.submenu.map((subItem) => (
                          <li key={subItem.value}>
                            <button
                              onClick={() => onNavigate(subItem.value)}
                              className="block w-full px-4 py-2 text-left text-sm hover:bg-green-100 transition"
                            >
                              {subItem.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      onNavigate(item.value);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="relative px-4 py-2 text-green-900 hover:text-green-600 transition duration-[2000ms] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-[2000ms] after:ease-in-out hover:after:w-full"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 bg-white text-green-900 py-4 px-4 shadow-lg rounded-b space-y-3 text-sm z-[1000] relative border border-green-800">
              <ul className="space-y-3">
                {menuItems.map((item, i) => (
                  <li key={i}>
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => toggleSubmenu(item.label)}
                          className="w-full text-left font-semibold text-green-700 hover:text-green-500 transition flex justify-between items-center"
                        >
                          {item.label}
                          <span className="text-xs">
                            {openSubmenu === item.label ? "▲" : "▼"}
                          </span>
                        </button>
                        {openSubmenu === item.label && (
                          <ul className="ml-4 mt-2 space-y-2 animate-slide-in">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.value}>
                                <button
                                  onClick={() => {
                                    onNavigate(subItem.value);
                                    setMenuOpen(false);
                                    setOpenSubmenu(null);
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                  }}
                                  className="block w-full text-left hover:text-green-500 transition"
                                >
                                  {subItem.label}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          onNavigate(item.value);
                          setMenuOpen(false);
                          setOpenSubmenu(null);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="block w-full text-left hover:text-green-500 transition"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
