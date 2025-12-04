// pages/SupportPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaLifeRing,
  FaHeadset,
  FaSearch,
  FaPaperPlane,
  FaRegTimesCircle,
} from 'react-icons/fa';

const faqs = [
  {
    q: 'How do I track my order?',
    a: 'Go to My Orders > Select order > Track shipment. If you used guest checkout, check your email for tracking link. For issues, open a ticket with your order ID.',
  },
  {
    q: 'What is your return policy?',
    a: 'We accept returns within 14 days of delivery for undamaged plants and containers. Please open a return request inside your order details and follow the instructions. Some live-product returns may have restrictions—contact support for details.',
  },
  {
    q: 'Can I change my delivery address after ordering?',
    a: 'Address changes are possible within 2 hours of placing the order. Contact us immediately via live chat or call with your order ID so we can attempt an update before shipping.',
  },
  {
    q: 'How do I request a consultation?',
    a: 'Use the "Book a Consultation" button on any plant page or submit the consultation form on your Plant Detail page. Our experts will contact you to schedule a time.',
  },
];

const SupportPage = () => {
  const [query, setQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const [ticket, setTicket] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(query.toLowerCase()) ||
      f.a.toLowerCase().includes(query.toLowerCase())
  );

  function handleFaqToggle(i) {
    setOpenFaq(openFaq === i ? null : i);
  }

  function handleTicketChange(e) {
    const { name, value } = e.target;
    setTicket((p) => ({ ...p, [name]: value }));
  }

  async function handleTicketSubmit(e) {
    e.preventDefault();
    // fake submit: replace with real API call
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    alert('Ticket submitted! Our team will contact you soon.');
    setTicket({ name: '', email: '', subject: '', message: '' });
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-extrabold text-green-700 leading-tight">
              We're here to help
            </h1>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Quick answers, expert help, and friendly support — wherever you
              are. Search the FAQ, open a ticket, or start a live chat. We reply
              fast.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition"
              >
                <FaHeadset /> Contact Support
              </a>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 border border-green-600 text-green-700 px-5 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                <FaLifeRing /> Browse FAQ
              </a>
            </div>
          </div>

          <div className="w-full md:w-80">
            <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-2xl shadow-md border">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-green-100 text-green-700">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call us</p>
                  <p className="font-semibold">+880 1234 567890</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-700">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-semibold">support@greengrove.com</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="p-3 rounded-full bg-blue-100 text-blue-700">
                  <FaClock />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Hours</p>
                  <p className="font-semibold">Mon-Fri: 9am — 7pm</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-xs text-gray-500">
                  Need a faster reply?
                </div>
                <button
                  onClick={() => alert('Opening live chat (demo)...')}
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  <FaHeadset /> Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">
        {/* Left: FAQ + Search */}
        <section className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center gap-3 border border-gray-100 rounded-lg p-3">
              <FaSearch className="text-gray-400" />
              <input
                className="flex-1 bg-transparent outline-none text-sm text-gray-700"
                placeholder="Search FAQs, articles or your order ID..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button
                  className="text-gray-400 hover:text-gray-600"
                  onClick={() => setQuery('')}
                >
                  <FaRegTimesCircle />
                </button>
              )}
            </div>
          </div>

          <div id="faq" className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {filteredFaqs.length === 0 && (
                <p className="text-gray-500">
                  No matching FAQs found. Try different keywords.
                </p>
              )}

              {filteredFaqs.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => handleFaqToggle(i)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <div>
                      <div className="text-sm font-medium text-gray-800">
                        {f.q}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {f.a.substring(0, 80)}
                        {f.a.length > 80 ? '...' : ''}
                      </div>
                    </div>
                    <div className="ml-4 text-gray-400">
                      {openFaq === i ? '–' : '+'}
                    </div>
                  </button>

                  {openFaq === i && (
                    <div className="px-4 pb-4 text-sm text-gray-700">{f.a}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Help Articles / Resources */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-3">Helpful Articles</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="p-3 border rounded-lg hover:shadow-sm transition">
                How to repot indoor plants (step-by-step)
              </li>
              <li className="p-3 border rounded-lg hover:shadow-sm transition">
                Best low-light plants for apartments
              </li>
              <li className="p-3 border rounded-lg hover:shadow-sm transition">
                Winter care tips for succulents
              </li>
              <li className="p-3 border rounded-lg hover:shadow-sm transition">
                Troubleshooting yellow leaves
              </li>
            </ul>
          </div>
        </section>

        {/* Right: Ticket Form + Quick Links */}
        <aside className="space-y-6">
          <div
            id="contact"
            className="bg-white rounded-2xl shadow p-6 sticky top-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Submit a Support Ticket
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Describe the issue and we will reply within 24 hours.
            </p>

            <form onSubmit={handleTicketSubmit} className="space-y-3">
              <input
                required
                name="name"
                value={ticket.name}
                onChange={handleTicketChange}
                placeholder="Your name"
                className="w-full px-3 py-2 border rounded-lg text-sm outline-none"
              />
              <input
                required
                name="email"
                type="email"
                value={ticket.email}
                onChange={handleTicketChange}
                placeholder="Email address"
                className="w-full px-3 py-2 border rounded-lg text-sm outline-none"
              />
              <input
                required
                name="subject"
                value={ticket.subject}
                onChange={handleTicketChange}
                placeholder="Subject"
                className="w-full px-3 py-2 border rounded-lg text-sm outline-none"
              />
              <textarea
                required
                name="message"
                value={ticket.message}
                onChange={handleTicketChange}
                rows="4"
                placeholder="Explain your issue..."
                className="w-full px-3 py-2 border rounded-lg text-sm outline-none"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                <FaPaperPlane /> {submitting ? 'Sending...' : 'Send Ticket'}
              </button>
            </form>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-sm text-gray-500 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-700 hover:text-green-600 cursor-pointer">
                Orders
              </li>
              <li className="flex items-center gap-2 text-gray-700 hover:text-green-600 cursor-pointer">
                Returns
              </li>
              <li className="flex items-center gap-2 text-gray-700 hover:text-green-600 cursor-pointer">
                Delivery
              </li>
              <li className="flex items-center gap-2 text-gray-700 hover:text-green-600 cursor-pointer">
                Consultation
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-sm text-gray-500 mb-3">Prefer to call?</h4>
            <p className="font-semibold">+880 1234 567890</p>
            <p className="text-xs text-gray-500 mt-2">Mon–Fri: 9am – 7pm</p>
          </div>
        </aside>
      </main>

      {/* FOOTER CTA */}
      <footer className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-2xl font-bold">Still need help?</h4>
            <p className="text-sm mt-1">
              Contact us via phone or open a priority ticket and we’ll escalate
              it.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => alert('Priority ticket demo')}
              className="bg-white text-green-700 px-5 py-3 rounded-lg font-semibold"
            >
              Open Priority Ticket
            </button>
            <button
              onClick={() => alert('Call demo')}
              className="bg-transparent border border-white/30 px-5 py-3 rounded-lg"
            >
              Call Support
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SupportPage;
