import { navItems } from "@/lib/mock-data";
import { motion } from "framer-motion";

export const Nav = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-xl font-semibold text-primary">
          &lt;FJdev /&gt;
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <a href={item.href} className="nav-link flex items-center gap-2">
                <span className="section-number">0{index + 1}.</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Cv Francisco Jurado.pdf"
          target="_blank"
          className="hidden md:inline-flex px-4 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
        >
          Currículum
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </motion.header>
  );
};
