"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Arrow } from "./Arrow";

export function Header() {
  const pathname = usePathname();

  return (
    <>

      <header className="header">
        <div id="header">
          <div id="headerdh1">
            <h2>
              <Link href="/">
                akiles_heel
              </Link>
            </h2>
            <button>≡</button>
          </div>
        </div>
      </header>
    </>
  );
}
