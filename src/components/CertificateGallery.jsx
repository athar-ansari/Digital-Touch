import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {

    title: "Airtel Banking Point Certificate",
    img: "DIGITAL_TOUCH_BUSINESS_CERTIFICATE.jpeg",
  },
  {

    title: "National Human Rights Pledge",
    img: "NATIONAL_HUMAN_RIGHTS_COMMISSION.jpg",
  },
  {

    title: "Udyam Registration Certificate",
    img: "UDYAM_DT.png",
  },
];


export default function AnimatedCertificates() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-8 md:px-32">
      <h2 className="  font-bold text-start    mb-12 ha-f text-2xl md:text-4xl     italic   ">
        Official Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-xl border-4 border-white hover:border-[#39C05B] bg-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: "spring" }}
          >
            <div className="overflow-hidden">
              <motion.img
                src={cert.img}
                alt={cert.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="p-4 bg-blue-50">
              <h3 className="text-sm md:text-lg font-semibold   flex items-center gap-2">
                <FaCertificate className="text-yellow-500" />
                {cert.title}
              </h3>
            </div>

            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-10 transition-opacity"
              whileHover={{ opacity: 0.15 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
