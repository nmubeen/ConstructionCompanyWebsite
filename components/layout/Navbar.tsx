"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { FaChevronDown } from "react-icons/fa6";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/logo/logo.png"
            alt={siteConfig.name}
            width={170}
            height={60}
            priority
          />

        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">

          {siteConfig.navigation.map((item) => {
            const hasChildren = "children" in item && Array.isArray(item.children);

            if (hasChildren) {
              return (
                <div key={item.title} className="group relative">
                  <button className="flex items-center gap-2 font-medium text-slate-700 transition hover:text-blue-700">
                    {item.title}
                    <FaChevronDown className="text-xs" />
                  </button>

                  <div className="absolute left-0 mt-3 hidden min-w-56 rounded-xl border border-slate-200 bg-white py-2 shadow-xl group-hover:block">
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-3 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-700"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            if (!("href" in item) || typeof item.href !== "string") {
              return null;
            }

            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition ${
                  active
                    ? "text-blue-700"
                    : "text-slate-700 hover:text-blue-700"
                }`}
              >
                {item.title}
              </Link>
            );
          })}

        </nav>

        {/* Contact Button */}

        <Link
          href="/contact"
          className="hidden rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-slate-900 transition hover:bg-yellow-500 lg:block"
        >
          Contact Us
        </Link>

      </div>
    </header>
  );
}