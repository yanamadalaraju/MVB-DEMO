import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Shield, Globe, ArrowRight, MessageSquare, Calendar, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import SectionWrapper from '@/components/SectionWrapper';
import NetworkBackground from '@/components/NetworkBackground';
import { z } from 'zod';
import datacenterImg from '@/assets/hero-datacenter.jpg';
import GoogleMapSection from '@/components/ContactCompo/GoogleMapSection';
import { Users } from "lucide-react";
import SupportPage from '@/components/ContactCompo/SupportPage';
import FaqPage from '@/components/ContactCompo/FaqPage';
import ContactSection from '@/components/ContactCompo/ContactSection';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  company: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, 'Message is required').max(2000),
});

const contactMethods = [
  {
    label: "Office Address",
    value: "MV Business Solutions Pvt Ltd.",
    desc: "P.N.Shetty Complex, Akshaya Vana, Akshayanagar, Bengaluru, Karnataka",
    icon: MapPin,
    color: "blue",
  },
  {
    label: "Call Us",
    value: "+91 96865 21214",
    desc: "Monday - Saturday: 9am - 5pm | Sunday: Closed",
    icon: Phone,
    color: "green",
  },
  {
    label: "Working Hours",
    value: "Open Today",
    desc: "09:00 am – 05:00 pm",
    icon: Clock,
    color: "magenta",
  },
];

const supportFeatures = [
  { 
  icon: Users, 
  title: 'Client-Centric Approach', 
  desc: 'We tailor every solution to match your unique business goals and growth plans.', 
  color: 'green' as const 
},
  { icon: Shield, title: 'Secure Communication', desc: 'All communications are encrypted and confidential.', color: 'magenta' as const },
  { icon: Globe, title: 'Global Reach', desc: 'Supporting clients across 15+ countries.', color: 'green' as const },
  { icon: Headphones, title: 'Dedicated Support', desc: 'Personalized account manager for every client.', color: 'blue' as const },
];

const faqs = [
  { q: 'Where is Head office Located?', a: 'We are HQ is Bangalore and our services are available in Bangalore, Hyderabad, Chennai and Mumbai.' },
  { q: 'Why should we look at MV?', a: 'We are client centric for innovative, needed and adaptive technologies. We focus on understanding your business needs with Experienced, skilled & Certified team. Project Management for quality & timely deliveries. ' },
  { q: 'Do you consultancy, Design and Integration?', a: 'Yes we provide all the 3 services for Data Cabling/ICT, Networks and Security, Complete IT Infrastructure.' },
  { q: 'What is your standard response time?', a: 'We offer Next Business Day Services, if needed we take remote and telephonic support in the same day.' },
];

const bgMap = { blue: 'bg-mv-blue/10', magenta: 'bg-mv-magenta/10', green: 'bg-mv-green/10' };
const textMap = { blue: 'text-mv-blue', magenta: 'text-mv-magenta', green: 'text-mv-green' };
const borderMap = { blue: 'border-mv-blue/20', magenta: 'border-mv-magenta/20', green: 'border-mv-green/20' };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <>
      {/* Hero */}
      {/* <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={datacenterImg} alt="Contact background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>
        <NetworkBackground />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionWrapper>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-mv-green font-semibold mb-6 block">Contact Us</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-[0.95]">
                Let's Build <span className="gradient-text-animate">Together</span>
              </h1>
             <p className="text-xl text-muted-foreground leading-relaxed">
  Ready to transform your IT infrastructure? Get in touch.
</p>

<p className="text-sm text-muted-foreground leading-relaxed mt-6 max-w-2xl mx-auto">
  Let us tailor a service package that meets your needs. 
  Tell us a little about your business, and we will get back to you 
  with some ideas as soon as possible.
</p>
            </div>
          </SectionWrapper>
        </div>
      </section> */}


      {/* <section
  className="relative py-32 overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url("https://i.pinimg.com/1200x/bd/4e/19/bd4e190799cc452420811bfeab994ea4.jpg")` }}
>

  <div className="absolute inset-0 bg-black/60"></div>

  <NetworkBackground />

  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    <SectionWrapper>
      <div className="text-center max-w-3xl mx-auto">

        <span className="text-xs uppercase tracking-widest text-white font-semibold mb-6 block">
          Contact Us
        </span>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-[0.95]">
          Let's Build <span className="gradient-text-animate">Together</span>
        </h1>

        <p className="text-xl text-gray-200 leading-relaxed">
          Ready to transform your IT infrastructure? Get in touch.
        </p>

        <p className="text-sm text-gray-300 leading-relaxed mt-6 max-w-2xl mx-auto">
          Let us tailor a service package that meets your needs.
          Tell us a little about your business, and we will get back to you
          with some ideas as soon as possible.
        </p>

      </div>
    </SectionWrapper>
  </div>

    </section> */}

    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden text-white mt-4">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url("https://i.pinimg.com/1200x/bd/4e/19/bd4e190799cc452420811bfeab994ea4.jpg")`,
    }}
  />

  {/* Bright Gradient Overlay (Same as First Section) */}
  <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-yellow-400/70 to-blue-600/80" />

  {/* Optional animated network background */}
  <NetworkBackground />

  {/* Content */}
  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    <SectionWrapper>
      <div className="text-center max-w-3xl mx-auto">

        <span className="text-xs uppercase tracking-widest text-white font-semibold mb-6 block">
          Contact Us
        </span>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-[0.95]">
          Let's Build{" "}
          <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
            Together
          </span>
        </h1>

        <p className="text-xl text-white/90 leading-relaxed">
          Ready to transform your IT infrastructure? Get in touch.
        </p>

        <p className="text-sm text-white/80 leading-relaxed mt-6 max-w-2xl mx-auto">
          Let us tailor a service package that meets your needs.
          Tell us a little about your business, and we will get back to you
          with some ideas as soon as possible.
        </p>

      </div>
    </SectionWrapper>
  </div>

</section>
      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((item, i) => (
              <SectionWrapper key={item.label} delay={i * 100}>
                <div className={`p-8 rounded-2xl glass-premium premium-card text-center h-full border-t-2 ${borderMap[item.color]}`}>
                  <div className={`w-14 h-14 rounded-xl ${bgMap[item.color]} flex items-center justify-center mx-auto mb-5`}>
                    <item.icon size={24} className={textMap[item.color]} />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{item.label}</h3>
                  <p className={`${textMap[item.color]} font-semibold mb-1`}>{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
        
<section className="py-20">
  <div className="container mx-auto px-4 lg:px-8">
    <SectionWrapper>
      <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden glass-premium gradient-border">

        
        <div className="p-10">
          {submitted ? (
            <div className="text-center py-16 animate-float-up">
              <div className="w-20 h-20 rounded-full gradient-brand flex items-center justify-center mx-auto mb-6 glow-brand">
                <CheckCircle size={40} className="text-white" />
              </div>
              <h3 className="text-3xl font-black text-foreground mb-4">
                Message Sent!
              </h3>
              <p className="text-muted-foreground text-lg mb-2">
                Thank you for reaching out.
              </p>
              <Button
                className="magnetic-btn"
                variant="outline"
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    message: "",
                  });
                }}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare size={24} className="text-primary" />
                <h3 className="text-2xl font-black text-foreground">
                  Send Us a Message
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="mt-2 h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="mt-2 h-12"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="mt-2"
                />
              </div>

              <Button
                type="submit"
                className="w-full gradient-brand text-white h-14 font-bold"
              >
                <Send size={18} /> Send Message
              </Button>
            </form>
          )}
        </div>

      
        <div className="h-[500px] w-full">
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            src="https://www.google.com/maps?q=17.3850,78.4867&z=15&output=embed"
            allowFullScreen
          />
        </div>
      </div>
    </SectionWrapper>
  </div>
</section>
        </div>
      </section> */}


      {/* ================= CONTACT FORM SECTION ================= */}
  {/* <section className="py-20">
  <div className="container mx-auto px-4 lg:px-8">
    <SectionWrapper>

      <div className="grid lg:grid-cols-2 gap-8">

       
        <div className="h-full rounded-2xl glass-premium gradient-border p-8 shadow-lg">

          {submitted ? (
            <div className="text-center py-16 flex flex-col justify-center h-full">
              <div className="w-20 h-20 rounded-full gradient-brand flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Message Sent!
              </h3>
              <p className="text-muted-foreground mb-4">
                Thank you for reaching out.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    message: "",
                  });
                }}
              >
                Send Again
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 h-full flex flex-col justify-between">

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MessageSquare size={22} className="text-primary" />
                 Send Us a Message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name *</Label>
                    <Input
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Email *</Label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <Label>Message *</Label>
                  <Textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full gradient-brand text-white h-12 font-semibold mt-4"
              >
                <Send size={18} /> Send Message
              </Button>

            </form>
          )}
        </div>

        
        <div className="h-full rounded-2xl bg-white/70 backdrop-blur-lg border p-8 shadow-lg flex flex-col justify-between">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Get in Touch 🚀
            </h3>

            <p className="text-muted-foreground mb-6">
              We’re here to help you grow your business with the best solutions. 
              Contact us anytime and our team will respond quickly.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Mail className="text-primary" />
                <span>support@yourcompany.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-primary" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-primary" />
                <span>Hyderabad, India</span>
              </div>

            </div>
          </div>

          <Button className="mt-6 gradient-brand text-white">
            Contact Now
          </Button>

        </div>

      </div>

    </SectionWrapper>
  </div>
  </section> */}


  

{/* ================= FULL WIDTH MAP SECTION ================= */}
  <section className="w-full">
  <div className="w-full h-[500px]">
    <iframe
      title="Google Map"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      src="https://www.google.com/maps?q=17.3850,78.4867&z=15&output=embed"
      allowFullScreen
    />
  </div>
  </section>

    <ContactSection />

  
      

      

      {/* Support Features */}
      {/* <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-foreground mb-4">World-Class Support</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">We're committed to being there when you need us most</p>
            </div>
          </SectionWrapper>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportFeatures.map((item, i) => (
              <SectionWrapper key={item.title} delay={i * 80}>
                <div className={`p-8 rounded-2xl glass-premium premium-card text-center h-full border-t-2 ${borderMap[item.color]}`}>
                  <div className={`w-12 h-12 rounded-xl ${bgMap[item.color]} flex items-center justify-center mx-auto mb-4`}>
                    <item.icon size={22} className={textMap[item.color]} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section> */}


     <SupportPage />

      {/* FAQ */}
      {/* <section className="py-28 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-[400px] h-[400px] rounded-full bg-mv-magenta/5 blur-[80px]" />
        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">Quick answers to common questions about our services</p>
            </div>
          </SectionWrapper>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <SectionWrapper key={i} delay={i * 80}>
                <div
                  className="rounded-2xl glass-premium premium-card overflow-hidden cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-center justify-between p-6">
                    <h4 className="font-semibold text-foreground pr-4">{faq.q}</h4>
                    <ArrowRight size={18} className={`text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-90' : ''}`} />
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-muted-foreground px-6 pb-6 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section> */}

      <FaqPage />

    </>
  );
}
