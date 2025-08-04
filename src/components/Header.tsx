import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="font-bold text-xl text-blue-700">Akarsa Dyniq</span>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
          </li>
          <li>
            <Link href="/case-studies" className="hover:text-blue-600">Case Studies</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
