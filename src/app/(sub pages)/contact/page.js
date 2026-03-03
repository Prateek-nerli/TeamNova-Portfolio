import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";

const members = [
  {
    name: "Rakshita Pendakur",
    email: "rakshitapendakur@gmail.com",
    linkedin: "https://www.linkedin.com/in/rakshita-pendakur-448828215/",
    github: "https://github.com/RPendakur1104",
  },
  {
    name: "Sanjana Babli",
    email: "sanjanaababli@gmail.com",
    linkedin: "https://www.linkedin.com/in/sanjana-babli",
    github: "https://github.com/sanjanababli",
  },
  {
    name: "Prateek Nerli",
    email: "prateekrnerli@gmail.com",
    linkedin: "https://www.linkedin.com/in/prateek-nerli-40822a375",
    github: "https://github.com/Prateek-nerli",
  },
];

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-accent font-bold text-4xl sm:text-5xl mb-12">
          Contact Us
        </h1>

        {/* team members column */}
        <div className="space-y-8 w-full max-w-3xl mx-auto">
            {members.map((m) => (
              <div
                key={m.name}
                className="p-6 rounded-lg bg-background/80 shadow-glass-sm backdrop-blur-sm"
              >
                <h2 className="text-2xl font-semibold text-foreground">
                  {m.name}
                </h2>
                <p className="text-foreground mt-1">{m.email}</p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={m.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
    
    </>
  );
}
