"use client";

import { useForm, ValidationError } from "@formspree/react";
import ButtonText from "../button-text/ButtonText";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xwpollob");

  return (
    <div>
      {state.succeeded && (
        <div className="mb-6 rounded-md bg-none text-white text-center py-2 font-medium">
          Message envoyé avec succès ✨
        </div>
      )}
      {Array.isArray(state.errors) && state.errors.length > 0 && (
        <div className="mb-6 rounded-md bg-none text-white text-center py-2 font-medium">
          ❌ Une erreur est survenue. Veuillez réessayer.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 🕵️honeypot field (invisible for users) */}
        <div style={{ display: "none" }}>
          <label htmlFor="website">Ne pas remplir ce champ</label>
          <input
            type="text"
            name="website"
            id="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

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
              className="w-full border-b bg-transparent py-2 text-white focus:outline-none focus:border-indigo-500"
            />
            <ValidationError prefix="Nom" field="name" errors={state.errors} />
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
              className="w-full border-b bg-transparent py-2 text-white focus:outline-none focus:border-indigo-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
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
            rows={4}
            className="w-full border-b bg-transparent py-2 text-white focus:outline-none focus:border-indigo-500"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="text-center">
          <ButtonText type="submit" disabled={state.submitting}>
            {state.submitting ? (
              <span className="loader w-5 h-5 mx-auto" />
            ) : (
              <>
                Envoyer
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
              </>
            )}
          </ButtonText>
        </div>
      </form>
    </div>
  );
}
