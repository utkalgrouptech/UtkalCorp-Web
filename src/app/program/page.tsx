"use client"
import { ProgramPage } from "@/components/program/about-content"
import { AboutHero } from "@/components/program/about-hero"
import { Certifications } from "@/components/program/certifications"
import { CTA } from "@/components/program/cta"
import { OurServices } from "@/components/program/facilities"
import { JourneyTimeline } from "@/components/program/journeyTimeline"
import { TeamSection } from "@/components/program/leadership"
import { WhyChooseUs } from "@/components/program/milestones"
import Link from "next/link"

export function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center bg-gray-100 p-2 rounded-md mb-12">
            <Link href="/" className="text-yellow-600 hover:text-yellow-700 transition-colors">
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mx-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-700 font-medium">About Us</span>
          </div>
          <ProgramPage />
          <JourneyTimeline />
          <OurServices />
          <WhyChooseUs />
          <Certifications />
          <TeamSection />
          <CTA />
        </div>
      </div>
    </main>
  )
}


