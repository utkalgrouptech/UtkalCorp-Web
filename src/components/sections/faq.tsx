"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of metal scrap do you accept?",
    answer:
      "We accept a wide range of metal scrap including copper, aluminum, iron, brass, stainless steel, and more. Our facilities are equipped to handle both ferrous and non-ferrous metals in various forms such as wires, pipes, sheets, and industrial scrap.",
  },
  {
    question: "How is the price of scrap metal determined?",
    answer:
      "Scrap metal prices are determined by several factors including the type of metal, current market rates, quality and purity of the scrap, processing requirements, and quantity. We offer competitive rates based on these factors and provide transparent pricing.",
  },
  {
    question: "Do you offer pickup services for large quantities?",
    answer:
      "Yes, we offer pickup services for businesses and industrial clients with large quantities of metal scrap. Our fleet of vehicles can accommodate various volumes, and we can arrange regular collection schedules based on your needs.",
  },
  {
    question: "What quality standards do your recycled metals meet?",
    answer:
      "Our recycled metals meet international quality standards including ASTM, ISO, and industry-specific requirements. We employ rigorous quality control processes to ensure our products meet or exceed the specifications required by our clients.",
  },
  {
    question: "How do you ensure environmental compliance in your recycling process?",
    answer:
      "We adhere to all local, state, and federal environmental regulations. Our facilities use advanced technologies to minimize environmental impact, and we have implemented comprehensive waste management systems. We are also certified by relevant environmental agencies and regularly undergo compliance audits.",
  },
  {
    question: "Can you provide documentation for regulatory compliance?",
    answer:
      "Yes, we provide all necessary documentation including certificates of recycling, destruction certificates, and environmental compliance reports. These documents can help your business meet regulatory requirements and support sustainability initiatives.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our metal recycling services and processes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
