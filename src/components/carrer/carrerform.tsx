import {
  Briefcase,
  ShieldCheck,
  Users,
  GraduationCap,
} from "lucide-react";

export function CareerContent() {
  const benefits = [
    {
      icon: Briefcase,
      title: "Career Growth",
      desc: "Enhance your career by working on diverse industrial projects and gaining valuable experience.",
    },
    {
      icon: ShieldCheck,
      title: "Safety & Quality",
      desc: "We maintain the highest standards of safety, quality, and professional excellence.",
    },
    {
      icon: Users,
      title: "Team Culture",
      desc: "Work with experienced professionals in a collaborative and supportive environment.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      desc: "Continuous learning opportunities to improve your skills and grow professionally.",
    },
  ];

  return (
    <section className="py-10 md:py-16">

      {/* About Career */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-amber-500 uppercase tracking-[5px] mb-3">
          Join Our Team
        </p>

        <h2 className="text-4xl font-bold text-gray-900 mb-5">
          Build Your Career With Utkal Corporation
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          At Utkal Corporation, we believe our people are our greatest strength.
          Join us to work on challenging projects, develop your skills, and grow
          your career with an innovative industrial organization.
        </p>
      </div>


      {/* Why Join Us Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {benefits.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              p-6
              border border-gray-200
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition duration-300
            "
          >

            <div className="
              w-14 h-14
              rounded-2xl
              bg-amber-100
              flex items-center justify-center
              mb-5
            ">
              <item.icon className="w-7 h-7 text-amber-600" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-7 text-sm">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}