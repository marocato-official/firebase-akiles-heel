"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Arrow } from "./Arrow";

export function Header() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" && (
        <Link className="button back-button" href="/">
          <Arrow /> Back to home
        </Link>
      )}

      <header className="header">
        <div id="header">
          <div id="headerdh1">
            <Link href="/">
              akiles_heel
            </Link>
            <button>≡</button>
          </div>
        </div>
      </header>
    </>
  );
}
