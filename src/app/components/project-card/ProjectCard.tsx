"use client";
import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ButtonPurpleText from "../button-text/ButtonPurpleText";
import ButtonWhiteText from "../button-text/ButtonWhiteText";

type ProjectCardProps = {
  title: string;
  image: string;
  stacks: string[];
  description: string;
  siteUrl?: string;
  githubUrl?: string;
  images: string[];
  githubFrontUrl?: string;
  githubBackUrl?: string;
};

const ProjectCard = ({
  title,
  image,
  stacks,
  description,
  siteUrl,
  githubUrl,
  images,
  githubFrontUrl,
  githubBackUrl,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* Carte Projet */}
      <div className="relative cursor-pointer overflow-hidden group w-full h-48 mx-auto rounded-lg sm:h-56 md:h-64 lg:h-45 xl:h-60">
        {/* Image de couverture */}
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg  "
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white rounded-lg">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-xs mt-2">{stacks.join(" • ")}</p>
          <ButtonWhiteText onClick={() => setIsOpen(true)}>
            Voir le projet
          </ButtonWhiteText>
        </div>
      </div>

      {/* Popup Projet */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg p-4 sm:p-6 max-w-6xl w-full max-h-[90vh] shadow-lg overflow-auto relative">
            {" "}
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            {/* Carrousel */}
            <div className="relative flex justify-center items-center flex-col">
              <div className="relative w-full aspect-[16/9] max-w-5xl">
                {" "}
                {/* ⬅️ augmenté à max-w-5xl */}
                <Image
                  src={images[currentImage]}
                  alt="Project preview"
                  fill
                  className="object-contain rounded-lg "
                />
              </div>

              <button
                className="absolute left-4 bg-white p-2 rounded-full shadow-md text-indigo-700"
                onClick={prevImage}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="absolute right-4 bg-white p-2 rounded-full shadow-md text-indigo-700"
                onClick={nextImage}
              >
                <ChevronRight size={24} />
              </button>
            </div>
            {/* Infos du projet */}
            <div className="mt-2 py-6">
              <h3 className="text-2xl font-bold mt-2 text-[#7c86ff] self-start">
                {title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{stacks.join(" • ")}</p>
              <p className="mt-4 text-black">{description}</p>

              <div className="mt-6 flex flex-wrap gap-4">
                {siteUrl && (
                  <ButtonPurpleText href={siteUrl}>
                    Voir le site
                  </ButtonPurpleText>
                )}
                {githubFrontUrl && githubBackUrl ? (
                  <>
                    <ButtonPurpleText href={githubFrontUrl}>
                      Voir le front sur GitHub
                    </ButtonPurpleText>
                    <ButtonPurpleText href={githubBackUrl}>
                      Voir le back sur GitHub
                    </ButtonPurpleText>
                  </>
                ) : githubUrl ? (
                  <ButtonPurpleText href={githubUrl}>
                    Voir sur GitHub
                  </ButtonPurpleText>
                ) : null}
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ProjectCard;
