"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const teamMembers = [
  {
    name: "John Smith",
    position: "CEO & Founder",
    image: "/images/team-1.jpg",
    bio: "With over 25 years of experience in the metal recycling industry, John founded MetalCycle Pro with a vision to transform waste into valuable resources.",
    linkedin: "#",
    twitter: "#",
    email: "john@metalcyclepro.com",
  },
  {
    name: "Sarah Johnson",
    position: "Chief Operations Officer",
    image: "/images/team-2.jpg",
    bio: "Sarah oversees all operational aspects of our recycling facilities, ensuring efficiency, quality, and compliance with environmental standards.",
    linkedin: "#",
    twitter: "#",
    email: "sarah@metalcyclepro.com",
  },
  {
    name: "Michael Chen",
    position: "Chief Technology Officer",
    image: "/images/team-3.jpg",
    bio: "Michael leads our R&D team, developing innovative recycling technologies and processes that maximize resource recovery and minimize environmental impact.",
    linkedin: "#",
    twitter: "#",
    email: "michael@metalcyclepro.com",
  },
  {
    name: "Emily Rodriguez",
    position: "Global Sales Director",
    image: "/images/team-4.jpg",
    bio: "Emily manages our global sales network, building strong relationships with clients and expanding our presence in international markets.",
    linkedin: "#",
    twitter: "#",
    email: "emily@metalcyclepro.com",
  },
]

export default function TeamSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Meet Our <span className="text-primary">Leadership Team</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Experienced professionals dedicated to innovation and excellence in metal recycling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-80">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">{member.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href={member.linkedin}
                    className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
