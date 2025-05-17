import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you sell by the yard?",
      answer:
        "Most materials are sold by the cubic yard, but we also offer half-yard and bagged options. We'll help you calculate what you need.",
    },
    {
      question: "What types of materials do you carry?",
      answer:
        "We offer high-quality gravel, bark, decorative rock, topsoil, compost, and mixed soil blends for landscaping, gardening, and construction needs.",
    },
    {
      question: "Do you offer delivery?",
      answer:
        "Yes! We deliver within Kettle Falls and surrounding areas. Delivery charges vary by distance. $100 Flat Fee: Within 6 miles. $150/hour: Round-trip beyond 6 miles",
    },
    {
      question: "What's in season at the greenhouse?",
      answer:
        "Our inventory changes weekly based on season. You'll find flowers, hanging baskets, veggie starts, perennials, and garden decor from spring through early fall.",
    },
    {
      question: "Do I need to bring my own truck or trailer?",
      answer:
        "You're welcome to bring your own, but we can also load you with our equipment or deliver directly to your site.",
    },
    {
      question: "Can I visit without making a purchase?",
      answer:
        "Absolutely! Feel free to walk through the greenhouse, browse the yard, or ask questions before buying.",
    },
    {
      question: "What are your hours and location?",
      answer:
        "We're open Wednesday through Saturday, 9AM to 5PM, at 764 Hwy 395 N, Kettle Falls, WA.",
    },
  ];

  const alwaysVisible = faqs.slice(0, 3);
  const hiddenUntilExpanded = faqs.slice(3);

  return (
    <section className="select-none cursor-default bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-md border border-green-100">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {alwaysVisible.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm transition-all">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between w-full text-left font-medium text-green-800 focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-sm">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}

        {showAll &&
          hiddenUntilExpanded.map((faq, index) => {
            const adjustedIndex = index + 3;
            return (
              <div
                key={adjustedIndex}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFAQ(adjustedIndex)}
                  className="flex justify-between w-full text-left font-medium text-green-800 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="text-sm">{openIndex === adjustedIndex ? "▲" : "▼"}</span>
                </button>
                {openIndex === adjustedIndex && (
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                )}
              </div>
            );
          })}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => {
            setShowAll(!showAll);
            setOpenIndex(null);
          }}
          className="px-4 py-2 text-sm font-medium text-green-700 border border-green-300 rounded hover:bg-green-50 transition"
        >
          {showAll ? "Hide Additional Questions" : "Show All Questions"}
        </button>
      </div>
    </section>
  );
};

export default FAQs;
