'use client';
import { motion } from 'framer-motion';
import { AccessTime, Public } from '@mui/icons-material';

export default function PressReleases() {
  const releases = [
    {
      title: 'Company Expands Global Recycling Facilities',
      date: 'April 15, 2025',
      summary: 'We are excited to announce the opening of two new plants focused on eco-efficient scrap processing.',
    },
    {
      title: 'Strategic Partnership in Aluminium Trading',
      date: 'March 02, 2025',
      summary: 'Our partnership with global trading firms will streamline logistics and pricing transparency.',
    },
    {
      title: 'Sustainability Report 2024 Released',
      date: 'January 25, 2025',
      summary: 'We’ve surpassed all recycling targets with 97% waste reuse efficiency across sites.',
    },
    {
      title: 'Sustainability Report 2024 Released',
      date: 'January 25, 2025',
      summary: 'We’ve surpassed all recycling targets with 97% waste reuse efficiency across sites.',
    },
    {
      title: 'Sustainability Report 2024 Released',
      date: 'January 25, 2025',
      summary: 'We’ve surpassed all recycling targets with 97% waste reuse efficiency across sites.',
    },
    {
      title: 'Sustainability Report 2024 Released',
      date: 'January 25, 2025',
      summary: 'We’ve surpassed all recycling targets with 97% waste reuse efficiency across sites.',
    },
  ];

  return (
    <main className="p-6 md:p-12 bg-gradient-to-tr from-gray-50 via-white to-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-700 relative inline-block">
        Press Releases
        <span className="block h-1 w-20 bg-blue-400 rounded-full mt-2 mx-auto"></span>
      </h1>
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {releases.map((item, i) => (
          <motion.article
            key={i}
            className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg border border-blue-100 cursor-pointer
                       hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 ease-in-out"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-3 hover:text-blue-900 transition-colors">
              {item.title}
            </h2>
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                <AccessTime fontSize="small" />
                <span>{item.date}</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                <Public fontSize="small" />
                <span>Global</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-md">{item.summary}</p>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
