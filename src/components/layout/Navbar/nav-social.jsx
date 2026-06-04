import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BluetoothConnected } from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: BluetoothConnected,
    href: "https://www.instagram.com/mr.chevrolet_46?igsh=MWl6Z2h2N3d2bGlnZA%3D%3D&utm_source=qr ",
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    icon: BluetoothConnected,
    href: "https://www.facebook.com/",
    label: "Facebook",
    color: "hover:text-blue-600",
  },
 
  { icon: BluetoothConnected, href: "https://www.youtube.com/", label: "YouTube", color: "hover:text-red-600" },
  {
    icon: BluetoothConnected,
    href: "https://x.com/",
    label: "Twitter",
    color: "hover:text-blue-400",
  },
  {
    icon: BluetoothConnected,
    href: "https://www.threads.com/",
    label: "Threads",
    color: "hover:text-gray-600",
  },

  {
    icon: BluetoothConnected,
    href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
    label: "Email",
    color: "hover:text-yellow-600",
  },
];
export default function NavSocials() {
  const containerRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.from(iconRefs.current, {
        opacity: 1,
        // x: 20,
        ease: "power2.in",
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="hidden md:flex items-center gap-4">
      {SOCIAL_LINKS.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            ref={(el) => {
              iconRefs.current[index] = el;
            }}
            href={social.href}
            className={`text-foreground transition-all duration-300 ${social.color}`}
            aria-label={social.label}
          >
            <BluetoothConnected icon={social.icon} size="lg" />
          </a>
        );
      })}
    </div>
  );
}
