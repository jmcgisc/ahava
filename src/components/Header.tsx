import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#presentacion", label: "Presentación" },
    { href: "#servicios", label: "Servicios" },
    { href: "#about", label: "Nosotros" },
    { href: "#clientes", label: "Clientes" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm" 
          : "bg-white/60 backdrop-blur-md border-b border-white/20"
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#inicio" 
              className="flex items-center gap-3 group"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#inicio");
              }}
            >
              <img 
                src="/ahava-logo.png" 
                alt="AHAVA" 
                className={`transition-all duration-300 ${
                  isScrolled ? "h-8" : "h-9"
                }`} 
              />
              <span className="text-primary font-bold tracking-wide text-lg group-hover:text-primary/80 transition-colors">
                AHAVA
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 relative py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#contacto"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contacto");
                }}
              >
                Contactar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                }`} />
                <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "w-6"
                }`} />
                <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <nav className="px-4 pb-6 space-y-4 bg-white/95 backdrop-blur-lg border-t border-gray-200/50">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-gray-700 font-medium hover:text-primary hover:bg-gray-50/80 rounded-lg transition-all duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}