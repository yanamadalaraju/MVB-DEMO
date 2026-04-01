import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 via-yellow-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT – FORM */}
          <div className="h-full rounded-2xl bg-white/70 backdrop-blur-lg border p-8 shadow-lg">

            {submitted ? (
              <div className="text-center py-16 flex flex-col justify-center h-full">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Message Sent!
                </h3>

                <p className="text-gray-600 mb-4">
                  Thank you for reaching out.
                </p>

                <Button
                  variant="outline"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      subject: "",
                      service: "",
                      message: "",
                    });
                  }}
                >
                  Send Again
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MessageSquare size={22} className="text-pink-500" />
                  Send Us a Message
                </h3>

                {/* NAME + EMAIL */}
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

                {/* PHONE + COMPANY */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Phone *</Label>
                    <Input
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Company</Label>
                    <Input
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div>
                  <Label>Subject *</Label>
                  <Input
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>

                {/* SERVICE DROPDOWN */}
                <div>
                  <Label>Select Service</Label>
                  <select
                    className="w-full mt-2 h-11 rounded-md border px-3"
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                  >
                    <option value="">Choose a service</option>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>Cloud Services</option>
                    <option>IT Consulting</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
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

                {/* BUTTON WITH YOUR GRADIENT */}
                <Button
                  type="submit"
                  className="w-full h-12 text-white font-semibold mt-4 
                  bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 
                  hover:opacity-90 transition-all duration-300"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>

              </form>
            )}
          </div>

          {/* RIGHT – INFO */}
          <div className="h-full rounded-2xl bg-white/70 backdrop-blur-lg border p-8 shadow-lg flex flex-col justify-between">

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Get in Touch 🚀
              </h3>

              <p className="text-gray-600 mb-6">
                We’re here to help you grow your business with the best solutions.
                Contact us anytime and our team will respond quickly.
              </p>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <Mail className="text-pink-500" />
                  <span>support@yourcompany.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-yellow-500" />
                  <span>+91 98765 43210</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-500" />
                  <span>Hyderabad, India</span>
                </div>

              </div>
            </div>

            <Button className="mt-6 text-white 
              bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500">
              Contact Now
            </Button>

          </div>

        </div>
      </div>
    </section>
  );
}