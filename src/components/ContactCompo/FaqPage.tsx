// import React, { useState } from "react";
// import SectionWrapper from "@/components/SectionWrapper";
// import { Plus, Minus } from "lucide-react";

// const faqs = [
//   {
//     q: "Where is Head office Located?",
//     a: "Our HQ is in Bangalore and our services are available in Bangalore, Hyderabad, Chennai and Mumbai.",
//   },
//   {
//     q: "Why should we look at MV?",
//     a: "We are client centric for innovative and adaptive technologies. We focus on understanding your business needs with an experienced, skilled and certified team. Our project management ensures quality and timely delivery.",
//   },
//   {
//     q: "Do you provide consultancy, design and integration?",
//     a: "Yes, we provide all three services for Data Cabling/ICT, Networks and Security, and Complete IT Infrastructure.",
//   },
//   {
//     q: "What is your standard response time?",
//     a: "We offer Next Business Day services. If needed, we provide remote and telephonic support on the same day.",
//   },
// ];

// export default function FaqPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   return (
//     <section className="py-28 relative overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute left-0 top-0 w-[400px] h-[400px] rounded-full bg-mv-magenta/10 blur-[120px]" />

//       <div className="container mx-auto px-4 lg:px-8">

//         {/* Title */}
//         <SectionWrapper>
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-black text-foreground mb-4">
//               Frequently Asked Questions
//             </h2>

//             <p className="text-muted-foreground max-w-lg mx-auto">
//               Quick answers to common questions about our services
//             </p>
//           </div>
//         </SectionWrapper>

//         {/* FAQ List */}
//         <div className="max-w-2xl mx-auto space-y-4">

//           {faqs.map((faq, i) => (

//             <SectionWrapper key={i} delay={i * 80}>

//               <div
//                 className="rounded-2xl glass-premium premium-card overflow-hidden border border-border cursor-pointer"
//                 onClick={() => setOpenFaq(openFaq === i ? null : i)}
//               >

//                 {/* Question */}
//                 <div className="flex items-center justify-between p-6">

//                   <h4 className="font-semibold text-foreground pr-4">
//                     {faq.q}
//                   </h4>

//                   {openFaq === i ? (
//                     <Minus size={20} className="text-primary" />
//                   ) : (
//                     <Plus size={20} className="text-primary" />
//                   )}

//                 </div>

//                 {/* Answer */}
//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${
//                     openFaq === i
//                       ? "max-h-40 opacity-100"
//                       : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   <p className="text-sm text-muted-foreground px-6 pb-6 leading-relaxed">
//                     {faq.a}
//                   </p>
//                 </div>

//               </div>

//             </SectionWrapper>

//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Where is Head office Located?",
    a: "Our HQ is in Bangalore and our services are available in Bangalore, Hyderabad, Chennai and Mumbai.",
  },
  {
    q: "Why should we look at MV?",
    a: "We are client centric for innovative and adaptive technologies. We focus on understanding your business needs with an experienced, skilled and certified team. Our project management ensures quality and timely delivery.",
  },
  {
    q: "Do you provide consultancy, design and integration?",
    a: "Yes, we provide all three services for Data Cabling/ICT, Networks and Security, and Complete IT Infrastructure.",
  },
  {
    q: "What is your standard response time?",
    a: "We offer Next Business Day services. If needed, we provide remote and telephonic support on the same day.",
  },
];

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-white via-pink-50/30 to-yellow-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">

      {/* Background Glow Elements - Updated with new colors */}
      <div className="absolute left-0 top-0 w-[400px] h-[400px] rounded-full bg-pink-600/20 blur-[120px] animate-pulse" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-yellow-400/20 blur-[120px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Title */}
        <SectionWrapper>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold mb-4 block bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
              Got Questions?
            </span>
            
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
           
              <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
                   Frequently Asked{" "} Questions
              </span>
            </h2>

            <p className="text-muted-foreground max-w-lg mx-auto text-lg">
              Quick answers to common questions about our services
            </p>
          </div>
        </SectionWrapper>

        {/* FAQ List */}
        <div className="max-w-2xl mx-auto space-y-4">

          {faqs.map((faq, i) => (
            <SectionWrapper key={i} delay={i * 80}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl glass-premium overflow-hidden border border-border/50 hover:border-pink-500/30 transition-all duration-300"
              >
                <div
                  className="flex items-center justify-between p-6 cursor-pointer group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <h4 className={`font-semibold text-foreground pr-4 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:via-yellow-400 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent ${
                    openFaq === i ? 'bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent' : ''
                  }`}>
                    {faq.q}
                  </h4>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFaq === i 
                      ? 'bg-gradient-to-r from-pink-600 to-yellow-400' 
                      : 'bg-gradient-to-r from-pink-600/10 to-yellow-400/10 group-hover:from-pink-600/20 group-hover:to-yellow-400/20'
                  }`}>
                    {openFaq === i ? (
                      <Minus size={18} className="text-white" />
                    ) : (
                      <Plus size={18} className="text-pink-500 group-hover:text-pink-600" />
                    )}
                  </div>
                </div>

                {/* Answer with animation */}
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="relative">
                        {/* Decorative gradient line */}
                        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600" />
                        
                        <p className="text-sm text-muted-foreground px-6 pb-6 pt-4 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </SectionWrapper>
          ))}

        </div>

        {/* Additional CTA */}
        <SectionWrapper delay={400}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-600/10 via-yellow-400/10 to-blue-600/10 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 group cursor-pointer">
              <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-yellow-400 bg-clip-text text-transparent">
                Still have questions?
              </span>
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-600 to-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-xs">→</span>
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Contact our team
              </span>
            </div>
          </div>
        </SectionWrapper>

      </div>
    </section>
  );
}