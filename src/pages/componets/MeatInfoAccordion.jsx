import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { Plus, Minus } from "lucide-react";

const accordionData = [
    {
        title: "Premium Fresh Meat & Seafood",
        content:
            "Thamba Meats provides premium quality Goat Meat (Mutton), Fresh Chicken, and Fresh Fish sourced with strict quality standards. We ensure every order is hygienically processed, freshly packed, and delivered with care to maintain freshness and taste.",
    },
    {
        title: "Our Quality & Freshness Commitment",
        content:
            "We are committed to delivering farm-fresh products with hygienic handling, quality inspections, and customer-first service. Every product is selected carefully to ensure freshness, nutrition, and superior taste for your family.",
    },
    {
        title: "Wholesale & Retail Services",
        content:
            "Serving both retail customers and wholesale buyers, Thamba Meats supplies fresh meat products for households, restaurants, hotels, caterers, and food businesses. Bulk orders and regular supply contracts are available.",
    },
    {
        title: "Fast Delivery & Customer Support",
        content:
            "Our efficient delivery system ensures timely doorstep delivery across service areas. Customers can easily place inquiries through our website, WhatsApp, or phone support for a smooth ordering experience.",
    },
    {
        title: "Modern Digital Experience",
        content:
            "The Thamba Meats platform features responsive design, product catalog browsing, WhatsApp integration, SEO optimization, secure customer interactions, and a mobile-friendly experience developed by BPY CREATIONS.",
    },
];

export default function MeatInfoAccordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    const contentRefs = useRef([]);

    const toggleAccordion = (index) => {
        const currentContent = contentRefs.current[index];

        if (activeIndex === index) {
            gsap.to(currentContent, {
                height: 0,
                opacity: 0,
                duration: 0.4,
                ease: "power3.inOut",
            });
            setActiveIndex(null);
            return;
        }

        contentRefs.current.forEach((el, i) => {
            if (!el) return;

            if (i === index) {
                gsap.fromTo(
                    el,
                    { height: 0, opacity: 0 },
                    {
                        height: "auto",
                        opacity: 1,
                        duration: 0.5,
                        ease: "power3.out",
                    }
                );
            } else {
                gsap.to(el, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power3.inOut",
                });
            }
        });

        setActiveIndex(index);
    };

    return (
        <section className="w-full bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-10">
                    Why Choose Thamba Meats?
                </h2>

                <div className="space-y-5">
                    {accordionData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center px-8 py-7 text-left"
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                                    {item.title}
                                </h3>

                                <div className="text-red-600">
                                    {activeIndex === index ? (
                                        <Minus size={28} />
                                    ) : (
                                        <Plus size={28} />
                                    )}
                                </div>
                            </button>

                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                style={{
                                    height: activeIndex === index ? "auto" : 0,
                                    opacity: activeIndex === index ? 1 : 0,
                                    overflow: "hidden",
                                }}
                            >
                                <div className="px-8 pb-8">
                                    <p className="text-gray-600 leading-8 text-base md:text-lg">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className="relative cursor-pointer"

                >

                    <span className="absolute  -top-1   md:w-50 md:h-20 flex items-center justify-center">
                        <img src="public/eg.svg" width="auto" alt=" price" />
                    </span>

                </div>

                <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white shadow-xl">
                    <h3 className="text-2xl font-bold mb-3">
                        Trusted Fresh Meat Supplier in Tiruppur
                    </h3>

                    <p className="text-white/90 leading-7">
                        Thamba Meats combines traditional quality standards with modern
                        technology to provide customers with fresh, hygienic, and reliable
                        meat products. From retail purchases to wholesale requirements,
                        we are dedicated to delivering excellence in every order.
                    </p>
                </div>
            </div>
        </section>
    );
}