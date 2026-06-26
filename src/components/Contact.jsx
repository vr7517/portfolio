import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

// WhatsApp number in international format (no +, no spaces): +91 9754799646
const WHATSAPP_NUMBER = "919754799646";

const socials = [
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vivekrajpoot14/" },
  { Icon: Github, label: "GitHub", href: "https://github.com" },
  { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

const contactInfo = [
  { Icon: Mail, text: "vivekrajput1924345@gmail.com", href: "mailto:vivekrajput1924345@gmail.com" },
  { Icon: Phone, text: "+91 9754799646", href: "tel:+919754799646" },
  { Icon: MapPin, text: "Jabalpur, Madhya Pradesh", href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build a readable WhatsApp message from the form fields
    const lines = [
      "*New message from portfolio* 👋",
      "",
      `*Name:* ${form.name || "—"}`,
      `*Email:* ${form.email || "—"}`,
      `*Phone:* ${form.phone || "—"}`,
      "",
      "*Message:*",
      form.message || "—",
    ];
    const text = encodeURIComponent(lines.join("\n"));

    // Open WhatsApp (app on mobile, WhatsApp Web on desktop) with the prefilled chat
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen px-4 sm:mx-8 sm:px-6 lg:px-10 text-black overflow-hidden border border-dashed border-gray-200"
    >
      <div className="max-w-4xl w-full mx-auto py-12 sm:py-16 space-y-7 sm:space-y-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-500">Contact</p>
          <h2 className="mt-2 sm:mt-3 text-2xl md:text-5xl font-bold tracking-tight">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed px-2">
            Have a dashboard to build, data to model, or a tool to ship? Reach out via the form
            below or directly by email or phone.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {contactInfo.map((info) => {
            const inner = (
              <div className="flex items-center gap-2.5 sm:gap-3 rounded-xl border border-gray-200 px-3.5 sm:px-4 py-3 sm:py-4 transition-colors duration-300 hover:border-black">
                <info.Icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-black" />
                <span className="text-xs sm:text-sm text-gray-600 break-all">{info.text}</span>
              </div>
            );
            return info.href ? (
              <a key={info.text} href={info.href} className="block">
                {inner}
              </a>
            ) : (
              <div key={info.text}>{inner}</div>
            );
          })}
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-110"
            >
              <social.Icon size={20} />
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-black px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {social.label}
              </span>
            </a>
          ))}
        </div>

        {/* Contact Form — submits straight to WhatsApp */}
        <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-5">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full rounded-md border border-gray-300 bg-transparent px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-black placeholder-gray-400 transition focus:border-black focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full rounded-md border border-gray-300 bg-transparent px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-black placeholder-gray-400 transition focus:border-black focus:outline-none"
            />
          </div>

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full rounded-md border border-gray-300 bg-transparent px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-black placeholder-gray-400 transition focus:border-black focus:outline-none"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            rows={5}
            className="w-full rounded-md border border-gray-300 bg-transparent px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-black placeholder-gray-400 transition focus:border-black focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="mx-auto inline-flex items-center justify-center gap-2 rounded-md bg-black px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]"
          >
            <Send size={16} className="sm:hidden" />
            <Send size={18} className="hidden sm:inline" /> Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
