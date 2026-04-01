import { Star } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

const testimonials = [
  { name: 'Sarah Mitchell', role: 'CTO, TechCorp Inc.', quote: 'MV Branding Strategy transformed our entire IT infrastructure. Their attention to security and scalability is unmatched.', rating: 5 },
  { name: 'David Chen', role: 'VP Engineering, DataFlow', quote: 'The team delivered our data cabling project ahead of schedule with exceptional quality. Truly enterprise-grade.', rating: 5 },
  { name: 'Amira Hassan', role: 'CISO, SecureBank', quote: 'Their security-first approach gave us complete peace of mind. We couldn\'t ask for a better infrastructure partner.', rating: 5 },
];

export default function TestimonialsSection() {
  return (
    <section className="py-8 bg-gradient-to-b from-yellow-50 via-white to-blue-50 relative overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-[80px]" />

      <div className="container mx-auto px-4 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-widest font-semibold mb-4 block bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
              Testimonials
            </span>

            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              What Our Clients Say
            </h2>

            <p className="text-gray-600 max-w-xl mx-auto">
              Don't just take our word for it — hear from the leaders who trust us
            </p>
          </div>
        </SectionWrapper>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <SectionWrapper key={t.name} delay={i * 120}>
              
              {/* 🌈 Gradient Border Card */}
              <div className="p-[1px] rounded-2xl bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 h-full">

                <div className="p-8 rounded-2xl bg-white h-full flex flex-col shadow-md hover:shadow-xl transition-all">

                  {/* ⭐ Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed flex-1 mb-6 italic">
                    "{t.quote}"
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-3">
                    
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {t.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {t.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {t.role}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}