"use client";

import { FC, useEffect, useState, useCallback, useMemo } from "react";
import { useAnimate } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import fb from "@/assets/images/fb.png";
import logoig from "@/assets/images/logo-ig.png";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleNavClick = useMemo(
    () => (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = -50;
        window.scrollTo({
          top:
            targetElement.getBoundingClientRect().top + window.scrollY + offset,
          behavior: "smooth",
        });
      }
      setIsOpen(false);
    },
    []
  );

  useEffect(() => {
    if (topLineScope.current && bottomLineScope.current) {
      const animations = isOpen
        ? [
            [topLineScope.current, { translateY: 4, rotate: 45 }],
            [bottomLineScope.current, { translateY: -4, rotate: -45 }],
          ]
        : [
            [topLineScope.current, { translateY: 0, rotate: 0 }],
            [bottomLineScope.current, { translateY: 0, rotate: 0 }],
          ];

      topLineAnimate(animations[0]);
      bottomLineAnimate(animations[1]);
    }
  }, [
    isOpen,
    topLineAnimate,
    bottomLineAnimate,
    topLineScope,
    bottomLineScope,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header?.classList.add("blurred");
      } else {
        header?.classList.remove("blurred");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-stone-200 font-sans transition-all duration-300 blurred:bg-opacity-70">
      <div className="container !max-w-full">
        <div className="flex justify-between h-20 items-center">
          <div>
            <a href="/">
              <span className="text-xl font-bold uppercase">
                Adli&nbsp; Noor
              </span>
            </a>
          </div>
          <nav className="sm:flex md:flex gap-6 justify-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-black"
                aria-label={`Navigate to ${item.label}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
