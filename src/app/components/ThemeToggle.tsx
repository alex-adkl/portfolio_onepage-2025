"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ pour attendre le rendu client

  useEffect(() => {
    if (typeof window === "undefined") return;

    const html = document.documentElement;
    const initialTheme = html.classList.contains("dark");
    setIsDark(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    const isDarkNow = html.classList.contains("dark");
    localStorage.setItem("theme", isDarkNow ? "dark" : "light");
    setIsDark(isDarkNow);
  };

  // ⛔️ Évite d’afficher avant que le composant soit monté (pour éviter l’erreur)
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="transition-transform duration-300 hover:scale-110"
      aria-label="Changer le thème"
    >
      <span className="relative block w-6 h-6">
        <Moon
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDark ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
          }`}
        />
        <Sun
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDark ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
          }`}
        />
      </span>
    </button>
  );
}
