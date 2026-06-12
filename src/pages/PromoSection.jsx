

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const promoImages = [
  {
    src: "https://res.cloudinary.com/da6mndffu/image/upload/q_auto/f_auto/v1781186492/Bioller_lv6czn.webp",
    alt: "Thamba meat pack",
    className: "left-[8%] top-[8%] w-24 sm:w-32 md:w-36",
    rotate: -8,
    depth: 18,
    radius: "6px",
  },
  {
    src: "https://res.cloudinary.com/da6mndffu/image/upload/q_auto/f_auto/v1781179530/Chicken_Drumstick_With_Skin_r36wvx.webp",
    alt: "Thamba spices",
    className: "right-[12%] top-[13%] w-24 sm:w-28 md:w-32",
    rotate: 3,
    depth: -12,
    radius: "2px",
  },
  {
    src: "https://res.cloudinary.com/da6mndffu/image/upload/q_auto/f_auto/v1781179531/Chicken_Lollipop_uegged.webp",
    alt: "Hand holding product",
    className: "right-[4%] top-[44%] w-24 sm:w-28 md:w-32",
    rotate: 10,
    depth: 24,
    radius: "999px",
  },
  {
    src: "https://res.cloudinary.com/da6mndffu/image/upload/q_auto/f_auto/v1781179538/Whole_Chicken_without_skin_1_lvmiwg.webp",
    alt: "Cooked Thamba meat",
    className: "left-[2%] top-[43%] w-24 sm:w-28 md:w-36",
    rotate: -2,
    depth: -20,
    radius: "4px",
  },
  {
    src: "https://res.cloudinary.com/da6mndffu/image/upload/q_auto/f_auto/v1781182142/Red_Snapper_Sankara_dmvgof.webp",
    alt: "Fresh meat cut",
    className: "left-[25%] bottom-[20%] w-24 sm:w-32 md:w-36",
    rotate: 1,
    depth: 16,
    radius: "0px",
  },
  {
    src: "https://res.cloudinary.com/da6mndffu/image/upload/q_auto/f_auto/v1781182137/Lady_Fish_Kilangan_uoyzuu.webp",
    alt: "Thamba meat menu",
    className: "right-[18%] bottom-[13%] w-28 sm:w-36 md:w-44",
    rotate: 5,
    depth: -18,
    radius: "3px",
  },
  {
    src: "https://res.cloudinary.com/da6mndffu/image/upload/q_auto/f_auto/v1781179534/Crab_Nandu_kd9pwu.webp",
    alt: "Thamba chicken cutout",
    className: "left-[5%] bottom-[5%] w-24 sm:w-28 md:w-32",
    rotate: -5,
    depth: 28,
    radius: "0px",
    cutout: true,
  },
];

export default function ThambaMeatsPromo() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 90,
    damping: 22,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 90,
    damping: 22,
    mass: 0.4,
  });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (event.clientY - rect.top - rect.height / 2) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate flex min-h-[680px] w-full items-center justify-center overflow-hidden bg-[#f3dfd4] px-5 py-20 sm:min-h-[760px] md:min-h-screen"
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(207, 75, 42, 0.16), transparent 28%), radial-gradient(circle at 78% 72%, rgba(34, 74, 59, 0.15), transparent 30%)",
        }}
      />

      {promoImages.map((image, index) => {
        const moveX = useTransform(
          smoothX,
          [-0.5, 0.5],
          [-image.depth, image.depth]
        );

        const moveY = useTransform(
          smoothY,
          [-0.5, 0.5],
          [-image.depth * 0.7, image.depth * 0.7]
        );

        return (
          <motion.div
            key={image.src}
            className={`absolute z-10 ${image.className}`}
            style={{
              x: moveX,
              y: moveY,
              rotate: image.rotate,
            }}
            initial={{ opacity: 0, scale: 0.86, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.08,
              rotate: image.rotate + 3,
              zIndex: 40,
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              draggable="false"
              className={`h-auto w-full select-none object-cover ${
                image.cutout ? "drop-shadow-2xl" : "shadow-[0_18px_45px_rgba(41,28,19,0.22)]"
              }`}
              style={{
                borderRadius: image.radius,
                clipPath: image.cutout
                  ? "none"
                  : "polygon(4% 0%, 100% 0%, 96% 100%, 0% 96%)",
              }}
            />
          </motion.div>
        );
      })}

      <motion.div
        className="relative z-20 mx-auto flex max-w-5xl flex-col items-center text-center"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#1f3a31] sm:text-sm">
          Fresh cuts. Real flavour.
        </p>

        <h2
          className="max-w-4xl text-[4.5rem] font-normal uppercase leading-[0.78] text-[#10292d] sm:text-[6.8rem] md:text-[8.8rem] lg:text-[10rem]"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          Thamba
          <br />
          Meats
        </h2>

        <p className="mt-7 max-w-md text-sm font-bold uppercase leading-tight tracking-[0.08em] text-[#142c2c] sm:text-base">
          Premium meat, marinated packs and chef-ready cuts delivered with
          bold South Indian taste.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <motion.a
            href="#order"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#14352f] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_14px_30px_rgba(20,53,47,0.25)]"
            style={{
              borderRadius: "999px",
            }}
          >
            Order now
          </motion.a>

          <motion.a
            href="#menu"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="border border-[#14352f]/30 bg-white/35 px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#14352f] backdrop-blur"
            style={{
              borderRadius: "999px",
            }}
          >
            View cuts
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}