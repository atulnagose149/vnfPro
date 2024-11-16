"use client";
import Spotlight from "@/components/spotlight";
import { useState, useRef } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";

export default function Workflows() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Modal data
  const projects = [
    {
      id: "zombie-park",
      title: "Zombie Park",
      description:
        "“Zombie Park” is the 3rd short film written and directed by Vivek Nagose after completing a short duration Film Direction Course from FTII, Pune. Awarded with Best Direction in fiction category in 13th Pune Short Film Festival. This project has 50 technical crews.",
      image: "https://vnfassets.s3.ap-south-1.amazonaws.com/zombie.jpg",
      video:
        "https://vnfassets.s3.ap-south-1.amazonaws.com/ZOMBIE+PARK+Teaser+_+Vivek+Nagose+_+Deeksha+Sahu+_+Ranjana+Singh+_+VNFILMS+_+Horror.mp4",
    },
    {
      id: "corona-medicine",
      title: "Corona Medicine",
      description:
        "“Corona Medicine” is the 2nd film written and directed by Vivek Nagose in 2021 after completing a short duration screenwriting course from FTII, Pune. Awarded various prizes in Film Festivals. Available on Planet Marathi OTT and shorted.in.",
      image: "https://vnfassets.s3.ap-south-1.amazonaws.com/sddefault.jpg",
      video: "https://vnfassets.s3.ap-south-1.amazonaws.com/CoronaMedicine.mp4",
    },
    {
      id: "maya",
      title: "Maya",
      description:
        "“Maya” is the first short film project written by Vivek Nagose in 2019 under Film making LLC subject in COEP. Awarded 2nd prize by filter copy team in competition. Available on YouTube.",
      image: "https://vnfassets.s3.ap-south-1.amazonaws.com/maya.jpg",
      video:
        "https://vnfassets.s3.ap-south-1.amazonaws.com/Maya+-+A+Marathi+Short+Film.mp4",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Film Projects
            </h2>
            <p className="text-lg text-indigo-200/65">
              Work with the best to create the best
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id}>
                {/* Card */}
                <a
                  onClick={() => setActiveModal(project.id)}
                  style={{ cursor: "pointer" }}
                  className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                >
                  <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                    <Image
                      className="inline-flex"
                      src={project.image}
                      width={550}
                      height={400}
                      alt={project.title}
                    />
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal">
                          <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                            {project.title}
                          </span>
                        </span>
                      </div>
                      <p className="text-indigo-200/65">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </a>

                {/* Modal */}
                <Dialog
                  initialFocus={videoRef}
                  open={activeModal === project.id}
                  onClose={() => setActiveModal(null)}
                >
                  <DialogBackdrop className="fixed inset-0 z-[99999] bg-black/70 transition-opacity duration-300 ease-out" />
                  <div className="fixed inset-0 z-[99999] flex px-4 py-6 sm:px-6">
                    <div className="mx-auto flex h-full max-w-6xl items-center">
                      <DialogPanel className="aspect-video max-h-full w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
                        <video
                          ref={videoRef}
                          width={1104}
                          height={576}
                          loop
                          controls
                        >
                          <source src={project.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </DialogPanel>
                    </div>
                  </div>
                </Dialog>
              </div>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
