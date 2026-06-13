
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MeatShopFooter() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);

    return () => clearInterval(timer);
  }, []);

  const footerLinks = ["instagram", "facebook", "whatsapp", "youtube"];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.footer
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full overflow-hidden bg-black px-5 py-14 text-white sm:px-8 md:px-10 lg:px-14 xl:px-20"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-20 lg:gap-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <motion.div variants={item}>
            <p className="mb-4 text-sm uppercase tracking-wide text-zinc-400">
              Keep Track Of Time
            </p>

            <div className="flex flex-wrap items-center gap-3 text-3xl font-medium leading-none sm:text-4xl">
              <span>GMT+5:30</span>
              <span className="text-zinc-400">→</span>
              <span>{time}</span>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <p className="mb-4 text-sm uppercase tracking-wide text-lime-400">
              Contact
            </p>

            <div className="flex flex-col gap-4 text-2xl font-medium sm:text-3xl lg:flex-row lg:items-center lg:gap-10">
              <motion.a
                whileHover={{ x: 8, color: "#a3e635" }}
                transition={{ duration: 0.25 }}
                href="mailto:orders@yourmeatshop.com"
                className="w-fit"
              >
                orders@yourmeatshop.com
              </motion.a>

              <motion.a
                whileHover={{ x: 8, color: "#a3e635" }}
                transition={{ duration: 0.25 }}
                href="tel:+919876543210"
                className="w-fit"
              >
                +91 98765 43210
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <p className="mb-4 text-sm uppercase tracking-wide text-pink-500">
              Follow
            </p>

            <div className="flex flex-wrap gap-x-9 gap-y-4 text-2xl font-medium sm:text-3xl">
              {footerLinks.map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ y: -6, color: "#f472b6" }}
                  transition={{ duration: 0.25 }}
                  className="capitalize"
                >
                  {link}
                </motion.a>
              ))}
            </div>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              Fresh cuts, premium quality meat, hygienically prepared and packed
              daily for your family.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-12"
        >
          <motion.div
            whileHover={{ scale: 1.04, rotate: -1 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="relative h-28 w-28 shrink-0  sm:h-36 sm:w-36 md:h-44 md:w-54"
          >
            <img src="https://res.cloudinary.com/da6mndffu/image/upload/q_auto/f_auto/v1781340920/Thambameats_jtubr5.gif" width={600} alt="logo" />
          </motion.div>

          <motion.h2
            initial={{ letterSpacing: "0.08em" }}
            whileInView={{ letterSpacing: "0em" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="break-words text-[17vw] font-black uppercase leading-[0.78] tracking-normal text-white sm:text-[15vw] md:text-[13vw] lg:text-[11vw] xl:text-[10vw]"
          >
            Fresh Cuts
          </motion.h2>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {new Date().getFullYear()} Fresh Cuts Meat Shop</p>
          <p>Chicken · Mutton · Seafood · Marinades · Home Delivery</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}