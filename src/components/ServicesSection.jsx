import React, { useState } from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ icon, iconHover, title, description }) => {
  const [isPolygoonHovered, setIsPolygoonHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <motion.div
      className="bg-transparent p-6 cursor-pointer transition-transform duration-300"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      animate={isCardHovered ? { y: -18 } : { y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.7,
        ease: "easeOut",
      }}
    >
      <div
        className={`polygoon w-16 h-16 flex items-center justify-center mb-4 mx-auto transition-colors duration-300 ${isPolygoonHovered ? "bg-[#5EB3F6]" : "bg-[#E7F4FE]"
          }`}
        style={{
          clipPath:
            "polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
        onMouseEnter={() => setIsPolygoonHovered(true)}
        onMouseLeave={() => setIsPolygoonHovered(false)}
      >
        <img
          src={isPolygoonHovered ? iconHover : icon}
          alt={title}
          className="w-10 h-10 object-contain transition-all duration-300 p-1"
        />
      </div>
      <h3 className="pp-f text-lg font-bold mb-2 text-[#061026]">{title}</h3>
      <p className="pp-f text-[#4b5c6a] text-[13px] leading-relaxed font-bold italic">{description}</p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "money-transfer.png",
      iconHover: "money-transfer2.png",
      title: "Money Transfer",
      description:
        "Send money instantly to any bank account across India using our secure and trusted platform. Even without a bank account, customers can deposit cash and transfer funds quickly. Visit for fast, reliable, and affordable money transfer service!."},
    {
      id: 2,
      icon: "aadhar-banking.png",
      iconHover: "aadhaar-banking2.png",
      title: "Aadhaar Banking",
      description:
        "Withdraw cash securely using your Aadhaar number and fingerprint – no ATM card needed! Maximum ₹10,000 per transaction available instantly at Digital Touch. Fast, easy, and hassle-free banking for all bank customers!."   },
    {
      id: 3,
      icon: "min-atm.png",
      iconHover: "mini-atm2.png",
      title: "Mini ATM",
      description:
        "Withdraw cash using any bank's debit card or Aadhaar at our Digital Touch Cyber Cafe. Check balance, withdraw up to ₹10,000 , and enjoy secure transactions instantly!.",
    },
    {
      id: 4,
      icon: "digital-payment.png",
      iconHover: "digital-payment2.png",
      title: "Digital Payment",
      description:
        "We have introduced a wide range of digital payment solutions to empower businesses to conduct swift and secure business transactions.",
    },
    {
      id: 5,
      icon: "utility-payments.png",
      iconHover: "utility-payment2.png",
      title: "Utility Payments",
      description:
       "We provide services such as mobile/DTH/Wi-Fi recharges and Electricity Bill Payments to fulfil walk-in customers' most basic and recurring payment needs via assisted model."   },
    {
      id: 6,
      icon: "travel.png",
      iconHover: "travel2.png",
      title: "Travel Services",
      description:
        "Book AC & Non-AC train tickets easily with confirmed PNR at Digital Touch Cyber Cafe – your trusted IRCTC Retail Service Provider. Fast, reliable service with all classes available – sleeper to 1st AC. Visit now for hassle-free travel!." },
    {
      id: 7,
      icon: "pan-card1.png",
      iconHover: "pan-card2.png",
      title: "PAN Card",
      description:
        "Apply for a new PAN card or make corrections to your existing PAN, including name, date of birth, address, or father’s name. We provide complete assistance with document submission and error-free processing. Visit Digital Touch – your trusted service center for fast and reliable PAN services!." },
    {
      id: 8,
      icon: "exam-form.png",
      iconHover: "exam-form1.png",
      title: "Exam Form Fillup ",
      description:
       "Get complete support for Kazi Nazrul University (KNU) UG Admissions – BA, B.Com, B.Sc. We also help with exam form fill-up to ensure error-free and timely submission. Visit Digital Touch – Rahmat Nagar for expert guidance and hassle-free admission services!." },
  ];

  return (
    <section id="service" className="bg-[#FFFFFF] mb-10 -mt-14">
      <div className="container mx-auto px-4">
        <div className="  px-6  mb-10">
          <div className="  mb-2">
            <span className="pp-f italic h-8 md:h-10 w-28 md:w-36 bg-[#E7F4FE] text-[#4aadc4] flex items-center justify-center rounded-3xl   text-[10px] md:text-[13px] font-bold">
              {" "}
              What you can get
            </span>
          </div>
          <h2 className="ha-f text-3xl md:text-4xl font-bold italic  mb-4">
            Our Services
          </h2>
          <p className="pp-f text-[#4b5c6a] max-w-3xl font-nunito italic text-base text-[13px] md:text-[16px]">
            With help of our innovative and hardworking team, we have created a
            pool of distinguished payment products and services with multiple
            Partnered Banks & Clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              iconHover={service.iconHover}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
