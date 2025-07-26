import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const certificates = [
    {

        title: "Airtel Business Correspondent Certificate",
        img: "DIGITAL_TOUCH_BUSINESS_CERTIFICATE.jpeg",
    },
    {

        title: "National Human Rights Pledge",
        img: "NATIONAL_HUMAN_RIGHTS_COMMISSION.jpg",
    },
    {

        title: "Udyam Registration Certificate",
        img: "UDYAM_DT.jpg",
    },
];


export default function Certificates() {
    const [selected, setSelected] = useState(null);

    return (
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 ">
            <h2 className="  font-bold text-center    mb-12 ha-f text-2xl md:text-4xl     italic    ">
                Official Certificates</h2>

            <div className="flex flex-wrap items-center justify-center gap-6 ">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-xl border border-blue-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <h3 className="md:text-xl text-base  font-semibold text-gray-800 mb-4">{cert.title}</h3>
                        <button
                            onClick={() => setSelected(cert)}
                            className="pp-f font-semibold italic bg-[#39C05B] text-white cursor-pointer px-4 py-2 rounded hover:bg-[#3ede66] transition  "
                        >
                            View Certificate
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Modal Popup */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-[100] md:px-[18rem] px-1 modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white md:p-4 p-2 rounded-lg shadow-xl max-w-5xl w-full relative overflow-hidden  "
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Scrollable content wrapper */}
                            <div className="max-h-[90vh] overflow-y-auto px-2">
                                <div className="w-full flex justify-center items-center">
                                    <img
                                        src={selected.img}
                                        alt={selected.title}
                                        className="rounded-lg border max-w-full h-auto"
                                    />
                                </div>

                                <p className="text-lg mt-4 text-blue-700 font-semibold text-center">
                                    {selected.title}
                                </p>

                                <div className="mt-6 text-center">
                                    <button
                                        onClick={() => setSelected(null)}
                                        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <style>
                {`
  @media (min-width: 768px) and (max-width: 1023px) {
    .modal-overlay {
      padding-left: 4rem !important;
      padding-right: 4rem !important;
    }
  }
`}
            </style>
        </section>
    );
}
