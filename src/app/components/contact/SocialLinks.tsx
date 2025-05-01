import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div>
      <h4 className="text-lg mb-6">Retrouvez-moi aussi sur :</h4>
      <div className="flex flex-col gap-6">
        <a
          href="https://www.linkedin.com/in/alejandra-adeikalam-developpeur-fullstack/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-white/80 transition-colors"
        >
          <FaLinkedin className="text-2xl" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/alex-adkl"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-white/80 transition-colors"
        >
          <FaGithub className="text-2xl" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}
