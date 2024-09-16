"use client"; 

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import './Navbar.css';

import 'bootstrap/dist/js/bootstrap.bundle';

export default function Navbar() {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap.bundle')
      : null;
  }, []);

  return (
    <nav className="navbar navbar-expand-sm ms-5" id="navbar">
      <div className="navbar-brand">
        <Image
          src="/assets/brand-logo/logo2.png" // Updated with relative path
          alt="Club Logo"
          width={65}
          height={65}
          className="d-inline-block"
          id="icon"
        />
      </div>

      <button
        className="navbar-toggler d-lg-none bg-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navLinks"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="nav-links collapse navbar-collapse" id="navLinks">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link href="/events" className="nav-link">Events</Link>
          </li>
          <li className="nav-item">
            <Link href="/team" className="nav-link">Team</Link>
          </li>
          <li className="nav-item">
            <Link href="/gallery" className="nav-link">Gallery</Link>
          </li>
          <li className="nav-item">
            <a href="#reach-us" className="nav-link">Reach us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
