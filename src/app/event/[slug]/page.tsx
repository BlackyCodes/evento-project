import H1 from "@/components/h1";
import { GetEvent } from "@/lib/server-utils";

import { Metadata } from "next";


import Image from "next/image";
import React from "react";
type Props = {
  params: {
    slug: string;
  };
};

export async function  generateMetadata({ params }: Props):Promise<Metadata>{

  const { slug } = params;

  const event = await GetEvent(slug)
  return {
    title: event.name,
  }
}
export async function generateStaticParams() {
  // top 100 most popular events
  return [
    {
      slug: "comedy-extravaganza",
    },
    {
      slug: "dj-practice-session",
    },
  ];
}


export default async function EventPage({ params }: Props) {

  const { slug } = params;

const event = await GetEvent(slug)



  return (
    <main>
      <section className="relative  overflow-hidden flex items-center justify-center py-14 md:py-20">
        <Image
          src={event.imageUrl}
          className="object-cover z-0 blur-3xl "
          alt="Event"
          fill
          quality={50}
          sizes="(max-width: 1280) 100vw, 1280px"
          priority
        />

        <div className="relative z-1 flex flex-col lg:flex-row gap-6 lg:gap-x-16">
          <Image
            src={event.imageUrl}
            alt={event.description}
            height={201}
            width={300}
            className="rounded-xl border-2 border-white/50 object-cover"
          />

          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize lg:mt-auto mt-5  w-[95vw] sm:w-full rounded-md border-white/10 bg-blur state-effects ">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className=" min-h-[75vh]text-center px-5 py-16 ">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent> {event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}
function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}
function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-8 tracking-tighter text-white max-w-4xl mx-auto">
      {children}
    </p>
  );
}
