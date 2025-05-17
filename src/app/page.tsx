'use client';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Gallery from './component/Gallery';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/plumbtech-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Head>
        <title>Plumbtech Corp | Miami Plumbing Services & Drain Experts</title>
        <meta
          name="description"
          content="Plumbtech Corp is a trusted plumbing company in Miami offering expert plumbing services including sewer main clearing, drain unclogging, and camera inspection."
        />
        <meta name="keywords" content="Plumbtech, plumbing services Miami, sewer main, drain clog, camera inspection, plumber Miami, drain cleaning" />
        <meta name="author" content="Plumbtech Corp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-red-600 text-white text-center py-2 px-4">
        <p className="text-xl font-semibold">
          📞 Emergency Plumbing? We’re Available 24/7!{' '}
          <a href="tel:3052349003" className="bg-white text-red-600 px-3 py-1 rounded font-bold text-sm shadow-sm hover:bg-blue-700 hover:text-white hover:shadow-lg transition duration-200 ml-2">DADE: 305-234-9003</a>
          <a href="tel:9544588212" className="bg-white text-red-600 px-3 py-1 rounded font-bold text-sm shadow-sm hover:bg-blue-700 hover:text-white hover:shadow-lg transition duration-200 mr-2 ml-2">BROWARD: 954-458-8212</a>
          <a href="tel:7867856058" className="bg-white text-red-600 px-3 py-1 rounded font-bold text-sm shadow-sm hover:bg-blue-700 hover:text-white hover:shadow-lg transition duration-200">OFFICE: 786-553-9690</a>
        </p>
      </div>

      <header className="bg-white text-black p-4 sticky top-0 z-50 shadow">
        <div className="container mx-auto flex justify-between items-center">
        <div className="h-16 overflow-hidden flex items-center">
          <Image
            src="/logo.png"
            alt="Plumbtech Corp Logo"
            width={110} // increased width
            height={110} // increased height
            className="object-contain"
          />
        </div>
          <nav>
            <ul className="flex space-x-4">
              {[
                { name: 'Home', href: '#' },
                { name: 'Services', href: '#our-services' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'Contact', href: '#contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-gray-800 hover:text-red-600 font-medium transition duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section
          className="relative min-h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
          style={{ backgroundImage: `url('/images/plumbing.gif')`, backgroundSize: 'cover' }}
        >
          <div className="relative z-10 px-4 max-w-xl text-right ml-100">
            <h1 className="text-4xl font-bold mb-4 text-blue-500 drop-shadow-lg"
              style={{
                textShadow: `
                  -1px -1px 0 #fff,
                  1px -1px 0 #fff,
                  -1px  1px 0 #fff,
                  1px  1px 0 #fff'
                `
              }}
            >
              Emergency Plumbing? We’re Available 24/7!{' '}<br />Professional Plumbing Solutions You Can Trust<br />Serving you since 2013
            </h1>
            <p className="text-lg text-white mb-6 drop-shadow-md" style={{ textShadow: '1px 1px 3px #000' }}>
              We're a reliable plumbing business based in Miami, providing expert solutions for all your plumbing needs. Our experienced team is committed to delivering top-quality service—whether it’s routine maintenance or complex repairs.
            </p>
            <a href="#contact" className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-500 inline-block">
              Schedule Now
            </a>
          </div>
        </section>

        <section id="our-services" className="bg-gray-100 p-6 rounded mt-10">
          <h3 className="text-2xl font-bold mb-4 text-center text-blue-900">Our Plumbing Services</h3>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            {[
              { title: 'Plumbing', desc: 'Expert solutions for your home\'s entire plumbing system.' },
              { title: 'Clear Sewer Main', desc: 'We clear out blockages in your main sewer lines quickly and efficiently.' },
              { title: 'Clear Drain Clog or Blockage', desc: 'Resolve drain clogs fast to restore water flow and prevent backups.' },
              { title: 'Sewer Main Install or Replace', desc: 'Full installation and replacement of main sewer lines with minimal disruption.' },
              { title: 'Drain Line Breakage Camera Locate', desc: 'Advanced camera technology to accurately locate and diagnose breakages.' }
            ].map((service, index) => (
              <div key={index} className="p-4 shadow-lg rounded bg-white border border-blue-200">
                {/* <Image src="/icons/plunger.svg" alt={service.title} width={64} height={64} className="mx-auto" /> */}
                <h3 className="text-xl font-semibold mt-4 text-red-600">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="reviews" className="bg-white p-6 rounded mt-10 shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-center text-blue-900">What Our Customers Say</h3>
          <div className="md:grid md:grid-cols-2 gap-6 space-y-4 md:space-y-0 overflow-x-auto snap-x snap-mandatory flex md:block">
            {[
              {
                text: "“We got three estimates. Plumbtech wasn't the cheapest, but they wanted the job and could start immediately. The techs were very friendly and handled the unexpected extra work professionally.”",
                author: "— Keith H., Polson, MT"
              },
              {
                text: "“Scheduling was a bit confusing at first, but once we connected, the work was done satisfactorily. The price was high, though.”",
                author: "— Blake E., Miami, FL"
              },
              {
                text: "“The team is knowledgeable. They found and fixed additional issues in my older home. I'm glad we caught them early. I’ve recommended them to friends.”",
                author: "— Belita S., Frankfort, KY"
              },
              {
                text: "“I manage several Condo units in Miami Beach and I highly recommend Plumbtech Corp for anyone in need of quality plumbing work. They’re professional, knowledgeable, and take great pride in their craft. No hidden costs, everything was explained clearly, and the results exceeded expectations.”",
                author: "— Les Lehotay, Miami Beach, FL"
              }
            ].map((review, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded shadow snap-center min-w-full md:min-w-0 md:w-auto"
              >
                <p className="italic text-gray-800">{review.text}</p>
                <p className="mt-2 font-semibold text-blue-900">{review.author}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="service-areas" className="bg-gray-100 p-6 rounded mt-10">
          <h3 className="text-2xl font-bold mb-4 text-center text-blue-900">Areas We Serve</h3>
          <ul className="text-center text-gray-800 columns-2 md:columns-3 gap-4">
            <li>Miami</li>
            <li>Hollywood</li>
            <li>Coral Gables</li>
            <li>Pembroke Pines</li>
            <li>Hialeah</li>
            <li>North Miami Beach</li>
            <li>Miami Gardens</li>
            <li>Homestead</li>
            <li>Miami Beach</li>
            <li>Fort Lauderdale</li>
            <li>Opa Locka</li>
            <li>Hallandale</li>
            <li>Key Largo</li>
            <li>Key Biscayne</li>
          </ul>
        </section>

        <Gallery />

        <section id="contact" className="bg-gray-100 p-6 rounded mt-10">
          <h3 className="text-2xl font-bold mb-4 text-center text-blue-900">Contact Plumbtech Corp</h3>
          <p className="text-center text-gray-800">
            6800 SW 40th Street #243<br />
            Miami, FL 33155<br />
            Dade County: <a href="tel:3052349003" className="text-blue-900 font-semibold">305-234-9003</a><br/>
            Broward County: <a href="tel:9544588212" className="text-blue-900 font-semibold">954-458-8212</a><br/>
            Office: <a href="tel:7867856058" className="text-blue-900 font-semibold">786-553-9690</a>
          </p>

          <p className="text-center text-gray-800 mt-4">
            <strong>Available 24/7 for Emergency Plumbing Services</strong><br />
            Standard Office Hours: Mon - Fri, 10:00 AM – 6:00 PM
          </p>

          <div className="mt-6">
            <iframe
              title="Plumbtech Corp Location"
              src="https://www.google.com/maps?q=6800+SW+40th+Street+%23243,+Miami,+FL+33155&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

        </section>
      </main>

      <footer className="bg-blue-900 text-white p-6 text-center">
        <p>&copy; {new Date().getFullYear()} Plumbtech Corp. All rights reserved.</p>
        <p>
          <a href="/privacy">Privacy Policy</a> |{' '}
          <a href="/terms">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}
