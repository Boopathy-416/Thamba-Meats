// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   FaWhatsapp,
//   FaPhoneAlt,
//   FaTruck,
//   FaClock,
//   FaBoxes,
// } from "react-icons/fa";

// const cards = [
//   {
//     icon: <FaWhatsapp />,
//     title: "DIRECT WHATSAPP & PHONE ORDERS",
//     desc: "Place your order via call or WhatsApp for Chicken, Mutton, Fish and more.",
//   },
//   {
//     icon: <FaTruck />,
//     title: "RAPID LOCAL DELIVERY",
//     desc: "Freshly prepared and delivered within 2-3 hours based on your location.",
//   },
//   {
//     icon: <FaBoxes />,
//     title: "WHOLESALE DELIVERY",
//     desc: "Bulk orders, wholesale supply and inter-city delivery available.",
//   },
//   {
//     icon: <FaClock />,
//     title: "OPERATING HOURS",
//     desc: "Available Daily from 8:00 AM to 9:00 PM.",
//   },
// ];

// export default function OrderSection() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#1a0005] py-20 px-4">

//       {/* Animated Background */}
//       <motion.div
//         animate={{
//           backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="absolute inset-0 bg-[linear-gradient(135deg,#220004,#43000b,#690010,#300008)] bg-[length:300%_300%]"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

//       {/* Floating SVG Decorations */}

//       <motion.img
//         src="/sa.svg"
//         alt=""
//         animate={{ y: [-15, 15, -15] }}
//         transition={{ duration: 5, repeat: Infinity }}
//         className="absolute left-6 top-10 w-32 opacity-10 hidden lg:block"
//       />

//       <motion.img
//         src="/eg.svg"
//         alt=""
//         animate={{ y: [15, -15, 15] }}
//         transition={{ duration: 6, repeat: Infinity }}
//         className="absolute right-6 top-10 w-32 opacity-10 hidden lg:block"
//       />

//       <motion.img
//         src="/sa.svg"
//         alt=""
//         animate={{ y: [-15, 15, -15] }}
//         transition={{ duration: 5, repeat: Infinity }}
//         className="absolute left-6 bottom-10 w-40 opacity-10 hidden lg:block"
//       />

//       <motion.img
//         src="/eg.svg"
//         alt=""
//         animate={{ y: [15, -15, 15] }}
//         transition={{ duration: 6, repeat: Infinity }}
//         className="absolute right-6 bottom-10 w-40 opacity-10 hidden lg:block"
//       />

//       <div className="relative z-10 max-w-7xl mx-auto">

//         {/* Logo */}

//         <motion.img
//           src="/VRV.svg"
//           alt="VRV"
//           initial={{ scale: 0.8, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="w-32 mx-auto mb-5"
//         />

//         {/* Title */}

//         <motion.h1
//           initial={{ y: 80, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-center text-4xl md:text-6xl font-bold text-[#D4AF37]"
//         >
//           Thambameats Shop - Order Online
//         </motion.h1>

//         {/* Cards */}

//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           variants={{
//             hidden: {},
//             show: {
//               transition: {
//                 staggerChildren: 0.15,
//               },
//             },
//           }}
//           className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16"
//         >
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: 80,
//                 },
//                 show: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               whileHover={{
//                 scale: 1.05,
//                 y: -10,
//               }}
//               className="
//                 group
//                 relative
//                 border
//                 border-[#D4AF37]
//                 rounded-3xl
//                 bg-white/5
//                 backdrop-blur-md
//                 p-8
//                 overflow-hidden
//                 cursor-pointer
//               "
//             >
//               {/* Shine Effect */}

//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
//                 <div className="absolute -left-40 top-0 h-full w-20 rotate-12 bg-white/10 blur-lg group-hover:left-[120%] transition-all duration-1000" />
//               </div>

//               <div className="text-[#D4AF37] text-5xl mb-5">
//                 {card.icon}
//               </div>

//               <h3 className="text-[#D4AF37] text-2xl font-bold mb-4">
//                 {card.title}
//               </h3>

//               <p className="text-white/90 leading-relaxed">
//                 {card.desc}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Buttons */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="flex flex-wrap justify-center gap-6 mt-14"
//         >
//           <Link
//             to="/new"
//             className="
//               px-10
//               py-4
//               rounded-xl
//               font-bold
//               text-lg
//               text-black
//               bg-gradient-to-r
//               from-yellow-300
//               to-yellow-600
//               hover:scale-105
//               transition
//             "
//           >
//             SHOP NOW
//           </Link>

//           <a
//             href="https://wa.me/919999999999"
//             target="_blank"
//             rel="noreferrer"
//             className="
//               px-10
//               py-4
//               rounded-xl
//               border
//               border-[#D4AF37]
//               text-[#D4AF37]
//               font-bold
//               text-lg
//               hover:bg-[#D4AF37]
//               hover:text-black
//               transition
//             "
//           >
//             CONTACT US
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaTruck,
  FaClock,
  FaBoxes,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaWhatsapp />,
    title: "DIRECT WHATSAPP & PHONE ORDERS",
    desc: "Place your order via call or WhatsApp for Chicken, Mutton, Fish and more.",
  },
  {
    icon: <FaTruck />,
    title: "RAPID LOCAL DELIVERY",
    desc: "Freshly prepared and delivered within 2-3 hours based on your location.",
  },
  {
    icon: <FaBoxes />,
    title: "WHOLESALE DELIVERY",
    desc: "Bulk orders, wholesale supply and inter-city delivery available.",
  },
  {
    icon: <FaClock />,
    title: "OPERATING HOURS",
    desc: "Available Daily from 8:00 AM to 9:00 PM.",
  },
];

export default function OrderSection() {
  return (
    <section className="relative min-h-screen overflow-hidden  py-20 px-4">
      
      {/* Premium UI Blob Background */}

      <motion.div
        initial={{ x: -300, y: -300, scale: 0.7, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute rounded-full blur-[120px]"
        style={{
          width: "900px",
          height: "900px",
          background: "#4B6FFF",
          top: "-350px",
          left: "-350px",
          opacity: 0.9,
        }}
      />

      <motion.div
        initial={{ x: -250, y: 250, scale: 0.7, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.2 }}
        className="absolute rounded-full blur-[120px]"
        style={{
          width: "850px",
          height: "850px",
          background: "#D4AF37",
          bottom: "-400px",
          left: "-220px",
          opacity: 0.8,
        }}
      />

      <motion.div
        initial={{ x: 300, y: -300, scale: 0.7, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.3 }}
        className="absolute rounded-full blur-[120px]"
        style={{
          width: "1200px",
          height: "1200px",
          background: "#B22222",
          top: "-180px",
          right: "-450px",
          opacity: 0.85,
        }}
      />

      {/* Glass Layer */}

      <div className="absolute inset-0 bg-white/10 backdrop-blur-[80px]" />

      {/* Floating Decorations */}

      <motion.img
        src="/sa.svg"
        alt=""
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-6 top-10 w-32 opacity-20 hidden lg:block"
      />

      <motion.img
        src="/eg.svg"
        alt=""
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-6 top-10 w-32 opacity-20 hidden lg:block"
      />

      <motion.img
        src="/sa.svg"
        alt=""
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-6 bottom-10 w-40 opacity-20 hidden lg:block"
      />

      <motion.img
        src="/eg.svg"
        alt=""
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-6 bottom-10 w-40 opacity-20 hidden lg:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Logo */}

        <motion.img
          src="/VRV.svg"
          alt="VRV"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-32 mx-auto mb-5"
        />

        {/* Title */}

        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="
            text-center
            text-4xl
            md:text-6xl
            font-extrabold
            text-[#1a1a1a]
          "
        >
          Thambameats Shop
          <span className="block text-[#B22222] mt-2">
            Order Online
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            text-center
            text-lg
            text-black/70
            max-w-2xl
            mx-auto
            mt-6
          "
        >
          Fresh Chicken, Mutton, Fish & Premium Meat Cuts
          delivered directly to your doorstep.
        </motion.p>

        {/* Cards */}

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 80,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/30
                bg-white/20
                backdrop-blur-xl
                p-8
                shadow-2xl
                transition-all
                duration-500
                hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]
              "
            >
              {/* Shine */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -left-40 top-0 h-full w-20 rotate-12 bg-white/30 blur-lg group-hover:left-[120%] transition-all duration-1000" />
              </div>

              <div className="text-[#D4AF37] text-5xl mb-5">
                {card.icon}
              </div>

              <h3 className="text-xl font-bold text-black mb-4">
                {card.title}
              </h3>

              <p className="text-black/70 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          <Link
            to="/new"
            className="
              px-10
              py-4
              rounded-2xl
              font-bold
              text-lg
              text-white
              bg-[#B22222]
              shadow-xl
              hover:scale-105
              transition-all
            "
          >
            SHOP NOW
          </Link>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="
              px-10
              py-4
              rounded-2xl
              border-2
              border-[#D4AF37]
              text-[#D4AF37]
              font-bold
              text-lg
              hover:bg-[#D4AF37]
              hover:text-black
              transition-all
            "
          >
            CONTACT US
          </a>
        </motion.div>
      </div>
    </section>
  );
}