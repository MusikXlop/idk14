import Link from 'next/link';
import React from 'react';

function Navigation() {
  return (
    <nav className="flex justify-center p-4">
      <ul className="flex gap-6 text-lg">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/cabins">Cabins</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/account">Your account</Link></li>
      </ul>
    </nav>
  );
}
export default Navigation;