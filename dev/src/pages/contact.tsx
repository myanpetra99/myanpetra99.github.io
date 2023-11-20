import { faInstagram, faLinkedin,faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export function Contact() {
  return (
    <section id="contact" className="w-full rounded-md bg-gradient-to-b   from-red-50 via-cyan-200/25 to-white md:p-32 p-5 h-screen flex-col flex items-center align-middle justify-center">
      <h1
        data-aos="fade-down"
        data-aos-delay="500"
        className="font-poppins text-3xl md:text-5xl font-bold text-cyan-600 text-center"
      >
        Have any exciting projects?
      </h1>
      <h1
        data-aos="fade-down"
        data-aos-delay="1000"
        className="font-poppins text-3xl md:text-5xl font-bold text-cyan-600 text-center"
      >
        Or Maybe
      </h1>
      <h1
        data-aos="fade-down"
        data-aos-delay="1500"
        className="font-poppins text-3xl md:text-5xl font-bold text-cyan-600 text-center mb-5"
      >
        Just want to say hi?
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="2000"
        data-aos-duration="1000"
        className="flex flex-col align-middle items-center"
      >
        <img
          src="/profile2.jpeg"
          className="rounded-full"
          width={200}
          height={200}
        ></img>
        <h1 className="text-3xl font-poppins text-cyan-600">
          Get in touch <span className="wave-hand ">👋</span>
        </h1>
        <div className="flex flex-row justify-center justify-items-center items-center space-x-3 mt-4">
          <a
            href="https://www.linkedin.com/in/michaelyanpetra/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-900 text-white font-bold text-xl font-poppins p-3 rounded-md shadow-md hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] transition-all"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="ml-3 hidden md:block">LinkedIn</span>
          </a>
          <a
            href="
            https://www.instagram.com/myanpetra99/"
            target="_blank"
            rel="noreferrer"
            className="bg-pink-600 text-white font-bold text-xl font-poppins p-3 rounded-md shadow-md hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] transition-all"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <span className="ml-3 hidden md:block">Instagram</span>
          </a>
          <a
            href="
            mailto:myanpetra99"
            target="_blank"
            rel="noreferrer"
            className="bg-pink-600 text-white font-bold text-xl font-poppins p-3 rounded-md shadow-md hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] transition-all"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="ml-3 hidden md:block">Email</span>
          </a>
            <a
                href="
                https://wa.me/6281289200401"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white font-bold text-xl font-poppins p-3 rounded-md shadow-md hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] transition-all"
            >
                <FontAwesomeIcon icon={faWhatsapp} />
                <span className="ml-3 hidden md:block">Whatsapp</span>
            </a>

        </div>
      </div>
    </section>
  );
}
