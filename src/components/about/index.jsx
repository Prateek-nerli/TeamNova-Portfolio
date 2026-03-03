import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-12 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
          About the Team
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
         

We are a design-focused development team combining strong visual direction with structured full-stack implementation.

Our team brings together expertise in immersive frontend design and system-based backend architecture. While one member focuses on crafting visually engaging and user-centric interfaces, the other specializes in building scalable backend systems using the MERN stack (MongoDB, Express.js, React.js, Node.js).

This combination allows us to design experiences that are not only aesthetically refined but also technically robust and logically structured.
          </p>
        </ItemLayout>

       

        

      

       

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=babel,bootstrap,cloudflare,css,figma,firebase,git,github,html,js,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,supabase,tailwind,vercel,vite,vscode,postman,jira`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

      

       
      </div>
    </section>
  );
};

export default AboutDetails;
