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
        "With our Domestic Money Transfer services, any customer can transfer money across Pan India through our expansive retailer network.",
    },
    {
      id: 2,
      icon: "aadhar-banking.png",
      iconHover: "aadhaar-banking2.png",
      title: "Aadhaar Banking",
      description:
        "Our Aadhaar banking services - Cash Withdrawal, Balance Enquiry, Aadhaar Pay, Mini Statement, and Cash Deposit - have made basic banking more accessible for all.",
    },
    {
      id: 3,
      icon: "min-atm.png",
      iconHover: "mini-atm2.png",
      title: "Mini ATM",
      description:
        "Now merchants can set up Micro-ATMs and carry out bank transactions such as making balance inquiries, cash withdrawals and obtaining a mini-statement for their customers.",
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
        "We provide services such as mobile recharges and Bill Payments to fulfil walk-in customers' most basic and recurring payment needs via assisted model.",
    },
    {
      id: 6,
      icon: "travel.png",
      iconHover: "travel2.png",
      title: "Travel Services",
      description:
        "We are the principal agent of IRCTC and also provide discounted prices on Air Travel and are planning to offer complete travel packages very soon.",
    },
    {
      id: 7,
      icon: "pan-card1.png",
      iconHover: "pan-card2.png",
      title: "PAN Card",
      description:
        "With the help of RNFI's PAN card application services in association with Protean eGov Technologies, an individual can obtain a new PAN card and can also rectify their PAN card details.",
    },
    {
      id: 8,
      icon: "exam-form.png",
      iconHover: "exam-form1.png",
      title: "Exam Form Fillup ",
      description:
        "Exam Form Fillup : Goverment Job Exams SSC, UPSC, Railway, University Exams IGNOU, Private & Regualar Board Exams, Entrance Exams, and other competitive exams can be filled up.",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] mb-10 -mt-14">
      <div className="container mx-auto px-4">
        <div className="  px-6  mb-10">
          <div className="  mb-2">
            <span className="pp-f italic h-10 w-36 bg-[#E7F4FE] text-[#4aadc4] flex items-center justify-center rounded-3xl   text-sm font-bold">
              {" "}
              What you can get
            </span>
          </div>
          <h2 className="ha-f text-3xl md:text-4xl font-bold italic  mb-4">
            Our Services
          </h2>
          <p className="pp-f text-[#4b5c6a] max-w-3xl font-nunito  italic">
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
