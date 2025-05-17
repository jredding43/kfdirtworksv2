import { useState } from "react";
import FAQs from "./FAQs";

export default function ContactSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      setIsSubmitting(true);
      const response = await fetch("https://formspree.io/f/xovvgngg", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setShowPopup(true);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to submit. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-green-100 to-yellow-50 min-h-screen px-4 py-16 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-bold text-green-900">DIRT WORKS</h1>
          <p className="mt-2 text-lg text-gray-700">
            Reach Out and Build With Us - We're Here to Help Every Step of the Way.
          </p>

          <div className="max-w-5xl py-8">
            <FAQs />
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2 items-start bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-200">
          <div>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Contact Details</h2>
            <p className="mb-2">
              <strong>Address:</strong>
              <br />
              764 Hwy 395 N, Kettle Falls WA 99141
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> (509) 738-2010
            </p>
            <p className="mb-2">
              <strong>Business Hours:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Wed-Sat: 9am-5pm</li>
              <li>Closed Sun-Tue</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Send Us a Message</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              required
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full p-3 border rounded-lg"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm text-center">
              <p className="text-lg text-gray-800 mb-4">
                Thank you for reaching out! We'll get back to you within 24–48 hours.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg font-medium"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </section>

      {/* QR Code Section (separate from contact <section>) */}
      <section className="py-20 px-20 max-w-full mx-auto text-center bg-gradient-to-br from-green-100 to-yellow-50 ">
        <h2 className="text-2xl md:text-4xl font-bold text-green-800 mb-4">
          Share Our Info Instantly
        </h2>
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

      
    </>
  );
}
