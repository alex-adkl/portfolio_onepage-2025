export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center text-sm text-white/60 bg-[#7c86ff]">
      <div className="w-full">
        <p className="py-4">
          Développé avec{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="inline-block text-white/60"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>{" "}
          par Alex Adeikalam. © {currentYear} - Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
