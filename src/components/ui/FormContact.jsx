import { useState } from "react";

function FormContact() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is finance analytics and how can it help my business?",
      answer:
        "Finance analytics helps you understand your financial data better, so you can make smarter decisions, spot trends, and improve your business strategy.",
    },
    {
      question: "How do I start using your finance analytics platform?",
      answer:
        "Simply sign up, connect your financial accounts, and you’ll start seeing insights within minutes.",
    },
    {
      question: "Is my financial data safe with your platform?",
      answer:
        "Yes, we use bank-grade encryption and security best practices to ensure your data is always safe and private.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Absolutely! You can reach out via email or chat, and our support team will get back to you as soon as possible.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <span className="text-sm text-purple-500 font-semibold">
            Dataluz SaaS analytics
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6">
            Frequently asked questions
          </h2>

          <div className="bg-purple-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Can’t find the answer to your question? Send us an email and
              we’ll get back to you as soon as possible!
            </p>
            <a
              href="mailto:support@yourcompany.com"
              className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
            >
              Send email
            </a>
          </div>
        </div>

        {/* Right Section (FAQ List) */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-50"
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FormContact;
