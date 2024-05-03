// pages/about.js
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center py-10">
        <div className="max-w-6xl w-full px-4 md:px-8">
          <h1 className="text-4xl font-bold text-center mt-10 mb-5">
            About Us
          </h1>

          {/* Our Essence */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold mb-3">Our Essence</h2>
            <p className="text-lg">
              At Garbi by Ekta, we cherish the principle of purity and grace.
              'Garbi' signifies a way of life that embraces comfort, colour, and
              elegance. We invite you to love yourself and find joy in our
              carefully crafted garments.
            </p>
          </section>

          {/* Our Craft */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold mb-3">Our Craft</h2>
            <p className="text-lg">
              With a keen eye for uniqueness, our array of Kaftans and Anarkali
              suits are designed to make a statement. Our customised collection
              is inspired by India's rich textile heritage and the ever-evolving
              fashion landscape, offering a symphony of style and culture.
            </p>
          </section>

          {/* Our Vision */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold mb-3">Our Vision</h2>
            <p className="text-lg">
              We embody the modern Indian ethos, seeing the world with a lens of
              optimism and heritage. Our journey is ingrained in every creation,
              celebrating both culture and commerce.
            </p>
          </section>

          {/* The Details That Matter */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold mb-3">
              The Details That Matter
            </h2>
            <p className="text-lg">
              In our world, every stitch tells a story. From the fabric to the
              fit, each garment is a canvas of simplicity and intricacy,
              designed to bring a smile and enhance the everyday experience.
              Discover the hidden joys in our garments' details, crafted with
              love and care.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const dynamic = "force-dynamic";
