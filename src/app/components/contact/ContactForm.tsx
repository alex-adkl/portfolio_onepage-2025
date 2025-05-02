"use client";

import { useRef, useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ButtonText from "../button-text/ButtonText";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const nameInput = form.current.elements.namedItem(
      "name"
    ) as HTMLInputElement;
    const emailInput = form.current.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const messageInput = form.current.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;

    if (!nameInput?.value || !emailInput?.value || !messageInput?.value) {
      setStatus("error");
      return;
    }

    try {
      setIsLoading(true);

      const token = await recaptchaRef.current?.executeAsync();
      recaptchaRef.current?.reset();

      if (!token) {
        setStatus("error");
        setIsLoading(false);
        return;
      }

      setToken(token);
      form.current?.submit();
    } catch (error) {
      console.error("Erreur d'envoi :", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!status) return;
    const timeout = setTimeout(() => setStatus(null), 5000);
    return () => clearTimeout(timeout);
  }, [status]);

  return (
    <div>
      {status === "success" && (
        <div className="mb-6 rounded-md bg-teal-300 text-indigo-900 text-center py-2 font-medium">
          Message envoyé avec succès ✨
        </div>
      )}
      {status === "error" && (
        <div className="mb-6 rounded-md bg-red-700 text-white text-center py-2 font-medium">
          Une erreur est survenue. Veuillez réessayer.
        </div>
      )}

      <form
        ref={form}
        onSubmit={sendEmail}
        action="https://formspree.io/f/xwpollob" // lien Formspree
        method="POST"
        className="space-y-8"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Votre nom *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Entrez votre nom"
              className="w-full border-b bg-transparent py-2 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Votre adresse mail *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Entrez votre adresse mail"
              className="w-full border-b bg-transparent py-2 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Votre message"
            rows={4}
            className="w-full border-b bg-transparent py-2 text-white focus:outline-none focus:border-indigo-500"
          />
        </div>

        <ReCAPTCHA
          sitekey="6Lfr1CsrAAAAAGtewQjQ4DIJJdsVROs_jgkzMIFz" // clé site reCAPTCHA
          size="invisible"
          ref={recaptchaRef}
        />
        <input type="hidden" name="g-recaptcha-response" value={token} />

        <div className="text-center">
          {isLoading ? (
            <div className="loader mx-auto" />
          ) : (
            <ButtonText
              type="submit"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
              }
            >
              Envoyer
            </ButtonText>
          )}
        </div>
      </form>
    </div>
  );
}
