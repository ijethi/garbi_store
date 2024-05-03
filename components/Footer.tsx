import Link from "next/link";

const Footer = () => {
  const phoneNumber = "+919911412126";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const instagramLink = "https://www.instagram.com/garbibyekta";
  const googleMapsLink = "https://maps.app.goo.gl/c3P71rwZPVQQPPPA6?g_st=iw";

  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center py-8">
          <h1 className="text-3xl font-bold">Garbi By Ekta</h1>
          <hr className="border-t border-black my-4 w-16" />
          <ul className="text-gray-600 space-y-4">
            <li>
              <a href={`tel:${phoneNumber}`}>Contact Us</a>
            </li>
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>

            <li>
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </li>
            <li>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
