import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Linkedin,Github
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 p-6 md:p-10 rounded-lg dark:shadow-[0_0_30px_#f97316] bg-white dark:bg-[#111] transition-all duration-300">
        {/* Header */}
        <div className="text-center">
          <p className="uppercase text-gray-400 tracking-widest">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-orange">
            Let’s Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have an idea or project in mind? Feel free to reach out using the
            form below or via email/phone.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Mail />
            <span className="text-gray-600 dark:text-gray-300">
              harsh@example.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone />
            <span className="text-gray-600 dark:text-gray-300">
              +91 98765 43210
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin />
            <span className="text-gray-600 dark:text-gray-300">
              Pune, Maharashtra
            </span>
          </div>
        </div>
        <div className="flex justify-start gap-6  text-xl sm:flex-justify-center">
          <div className="flex gap-6 justify-center mt-4">
            {/* Facebook */}
            <div className="relative group">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 dark:bg-white dark:text-orange">
                Facebook
              </div>
              <Facebook
                className="border rounded-2xl bg-black text-white dark:bg-white dark:text-black p-1 transition 
        group-hover:bg-orange group-hover:text-white 
        dark:group-hover:bg-white dark:group-hover:text-orange 
        cursor-pointer"
                size={32}
              />
            </div>

            {/* Twitter */}
            <div className="relative group">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 dark:bg-white dark:text-orange">
                Twitter
              </div>
              <Twitter
                className="border rounded-2xl bg-black text-white dark:bg-white dark:text-black p-1 transition 
        group-hover:bg-orange group-hover:text-white 
        dark:group-hover:bg-white dark:group-hover:text-orange 
        cursor-pointer"
                size={32}
              />
            </div>

            {/* LinkedIn */}
            <div className="relative group">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 dark:bg-white dark:text-orange">
                LinkedIn
              </div>
              <Linkedin
                className="border rounded-2xl bg-black text-white dark:bg-white dark:text-black p-1 transition 
        group-hover:bg-orange group-hover:text-white 
        dark:group-hover:bg-white dark:group-hover:text-orange 
        cursor-pointer"
                size={32}
              />
            </div>

            {/* GitHub */}
            <div className="relative group">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 dark:bg-white dark:text-orange">
                GitHub
              </div>
              <Github
                className="border rounded-2xl bg-black text-white dark:bg-white dark:text-black p-1 transition 
    group-hover:bg-orange group-hover:text-white 
    dark:group-hover:bg-white dark:group-hover:text-orange 
    cursor-pointer"
                size={32}
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="👤 Your Name"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-transparent text-black dark:text-white focus:outline-orange"
            />
            <input
              type="email"
              placeholder="✉️ Email Address"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-transparent text-black dark:text-white focus:outline-orange"
            />
          </div>

          <input
            type="text"
            placeholder="📞 Phone Number"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-transparent text-black dark:text-white focus:outline-orange"
          />

          <textarea
            placeholder="💬 Your Message"
            rows={5}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-transparent text-black dark:text-white focus:outline-orange"
          ></textarea>

          <button
            type="submit"
            className="md:w-2/7 mx-auto flex items-center justify-center gap-2 border border-orange bg-white text-orange hover:text-white px-6 py-3 rounded-md font-semibold transition hover:bg-orange/90"
          >
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
