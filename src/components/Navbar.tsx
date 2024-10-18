import Link from "next/link";
import React from 'react';

const Navbar = () => {
  // Array of navigation links
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "CATEGORIES", href: "/categories" },
    { name: "MEN'S", href: "/mens" },       // this will point to /mens/index.tsx
    { name: "WOMEN'S", href: "/womens" },   // this will point to /womens/index.tsx
    { name: "JEWELRY", href: "/jewelry" },   // this will point to /jewelry/index.tsx
    { name: "PERFUME", href: "/perfume" },   // this will point to /perfume/index.tsx
    { name: "BLOG", href: "/blog" },         // this will point to /blog/index.tsx
    { name: "HOT OFFERS", href: "/offers" }  // this will point to /offers/index.tsx
  ];

  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-black">
          {navLinks.map((link, index) => (
            <Link className="navbar_link relative" key={index} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
