import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm font-work-sans">
      {/* Navbar */}
      <nav className="px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo2.jpg" alt="logo" width={200} height={40} />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-black">
          <Link href="/" className="text-sm hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="text-sm hover:text-blue-600">
            Products
          </Link>
          <Link href="/about" className="text-sm hover:text-blue-600">
            About Us
          </Link>
          <Link href="/brands" className="text-sm hover:text-blue-600">
            Brands
          </Link>
          <Link href="/contact" className="text-sm hover:text-blue-600">
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/banner.jpg" // replace with your hero image
          alt="Hero Banner"
          fill
          priority
          className="object-cover"
        />
        {/* Optional overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="mb-6">Explore the best products from top brands</p>
          <p className="mb-18">Control & Monitoring: DCS, ESD. SCADA, HMI, PLC</p>
          <Link
            href="/products"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
