import {
  Building,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";

export function ContactInfo() {
  const contacts = [
    {
      icon: Building,
      title: "Our Offices",
      details: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Registered Office */}
          <div className="border-l-2 border-amber-400 pl-3">
            <h5 className="text-amber-300 font-semibold mb-2 text-sm">
              Registered Office
            </h5>

            <div className="text-gray-300 text-sm leading-6">
              <p>Arya Surya Enclave, Plot No- K5/475,</p>
              <p>Khata No 95/937, Fourth Floor,</p>
              <p>Kalinga Vihar, Patrapada,</p>
              <p>Bhubaneswar, Odisha 751019</p>
            </div>
          </div>

          {/* Corporate Office */}
          <div className="border-l-2 border-blue-400 pl-3">
            <h5 className="text-blue-300 font-semibold mb-2 text-sm">
              Corporate Office
            </h5>

            <div className="text-gray-300 text-sm leading-6">
              <p>214, Second Floor, Sector A,</p>
              <p>Pocket C, Vasant Kunj,</p>
              <p>New Delhi 110070</p>
            </div>
          </div>
        </div>
      ),
    },

    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+91 9777098999",
        "+91 9777063999",
      ],
    },

    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@utkalcorporation.com",
        "santosh@utkalcorporation.com",
      ],
    },

    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Mon - Saturday",
        "9:00 AM - 6:00 PM",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-950 via-slate-900 to-black py-14 px-4">

      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-amber-400 uppercase tracking-[6px] mb-3">
          Contact Us
        </p>

        <h2 className="text-white text-4xl md:text-5xl font-bold mb-5">
          Let's Build Something Great Together
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Connect with Utkal Corporation for industrial solutions,
          project inquiries, and business partnerships.
        </p>
      </div>


      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

        {/* Contact Details */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

          <h3 className="text-white text-2xl font-semibold mb-5">
            Get In Touch
          </h3>

          <div className="space-y-4">

            {contacts.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 border-b border-white/10 pb-4"
              >

                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 flex items-center justify-center shrink-0">
                  <item.icon className="text-amber-400 w-6 h-6" />
                </div>


                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-3">
                    {item.title}
                  </h4>


                  {Array.isArray(item.details) ? (
                    item.details.map((detail, i) => (
                      <p
                        key={i}
                        className="text-gray-400 text-sm leading-7"
                      >
                        {detail}
                      </p>
                    ))
                  ) : (
                    item.details
                  )}

                </div>

              </div>
            ))}

          </div>


          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <button className="bg-amber-500 hover:bg-amber-600 transition text-black font-semibold px-6 py-3 rounded-xl">
              Call Now
            </button>


            <button className="border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black transition px-6 py-3 rounded-xl flex items-center justify-center gap-2">
              Get Quote
              <ArrowRight size={18} />
            </button>

          </div>

        </div>


        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

          <h3 className="text-white text-2xl font-semibold mb-5">
            Send Message
          </h3>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-400"
            />


            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-400"
            />


            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-400"
            />


            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-400 resize-none"
            />


            <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:scale-[1.02] transition text-white font-semibold py-4 rounded-xl">
              Send Inquiry
            </button>

          </form>

        </div>

      </div>


      {/* Bottom CTA */}
      <div className="max-w-5xl mx-auto mt-14 bg-amber-500/10 border border-amber-400/20 rounded-3xl p-8 text-center">

        <h3 className="text-white text-3xl font-bold mb-3">
          Ready To Start Your Next Project?
        </h3>

        <p className="text-gray-400 mb-6">
          We deliver reliable industrial solutions with quality,
          safety, and commitment.
        </p>

        <button className="bg-amber-500 hover:bg-amber-600 transition text-black font-semibold px-8 py-3 rounded-xl">
          Request A Consultation
        </button>

      </div>

    </section>
  );
}