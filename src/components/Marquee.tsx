const Marquee = () => {
    return (
      <section className=" w-full overflow-hidden bg-gradient-to-r from-green-800 to-lime-400 border-y-2 border-green-800 py-4 pointer-events-none">
        <div className="animate-scroll flex flex-nowrap w-max text-white text-base font-semibold tracking-wide">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex flex-nowrap gap-20 pr-20 italic">
              <span>Gravel, topsoil, bark, compost, and sand available year-round</span>
              <span>Decorative rock in a variety of colors and sizes</span>
              <span>Screened soil for gardens blends and landscaping</span>
              <span>Locally sourced materials delivered directly to your property</span>
              <span>Custom excavation and landscaping solutions for your next project</span>
              <span>Greenhouse open — flowers, veggie starts & more</span>
              <span>Friendly, knowledgeable service from a family-owned business</span>
              <span>Affordable pricing and easy in-yard pickup</span>
              <span>Open Wednesday-Saturday · 9AM-5PM · (509) 738-2010</span>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Marquee;
  