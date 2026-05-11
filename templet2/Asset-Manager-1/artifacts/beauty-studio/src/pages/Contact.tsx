import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiInstagram, SiFacebook, SiPinterest } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type FormData = z.infer<typeof schema>;

const hours = [
  { day: "Monday", time: "9:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
  { day: "Thursday", time: "9:00 AM – 7:00 PM" },
  { day: "Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "10:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  function onSubmit(data: FormData) {
    console.log(data);
    toast({ title: "Message Sent!", description: "Thank you for reaching out. We'll get back to you within 1 business day." });
    form.reset();
  }

  return (
    <PageTransition>
      <div className="w-full pt-[72px]">

        {/* ── Hero — split with studio image ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          <div className="relative overflow-hidden min-h-[40vh] lg:min-h-auto">
            <img
              src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=1000&q=85"
              alt="Multifaceted Queen studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/25" />
          </div>
          <div className="gradient-warm flex flex-col justify-center px-10 md:px-16 py-20">
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <p className="eyebrow mb-5">We'd Love to Hear From You</p>
              <h1 className="font-serif text-6xl md:text-7xl font-light leading-tight mb-6">
                Get<br />in Touch
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
                Book an appointment, ask a question, or just say hello. We respond within one business day.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <MapPin className="w-4 h-4" />, value: "142 Magnolia Lane, Suite 4\nCharleston, SC 29403" },
                  { icon: <Phone className="w-4 h-4" />, value: "(555) 234-5678" },
                  { icon: <Mail className="w-4 h-4" />, value: "hello@multifacetedqueen.com" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Form + Info ── */}
        <section className="py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <p className="eyebrow mb-4">Send a Message</p>
                <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">Book or Enquire</h2>
                <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-card-warm">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Full Name</FormLabel>
                            <FormControl><Input placeholder="Jane Doe" {...field} data-testid="contact-name" className="rounded-xl" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Email</FormLabel>
                            <FormControl><Input placeholder="jane@example.com" type="email" {...field} data-testid="contact-email" className="rounded-xl" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Phone (Optional)</FormLabel>
                            <FormControl><Input placeholder="(555) 000-0000" type="tel" {...field} data-testid="contact-phone" className="rounded-xl" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="service" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Service</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl><SelectTrigger className="rounded-xl" data-testid="contact-service"><SelectValue placeholder="Select a service" /></SelectTrigger></FormControl>
                              <SelectContent>
                                <SelectItem value="cut">Haircut & Styling</SelectItem>
                                <SelectItem value="color">Color & Highlights</SelectItem>
                                <SelectItem value="bridal">Bridal Package</SelectItem>
                                <SelectItem value="crafting">Custom Crafting</SelectItem>
                                <SelectItem value="alterations">Clothing Alterations</SelectItem>
                                <SelectItem value="general">General Inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Your Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us about your appointment needs or anything else..." rows={5} {...field} data-testid="contact-message" className="rounded-xl resize-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <button type="submit" className="w-full h-12 rounded-full gradient-primary text-white text-sm font-medium shadow-terracotta hover:opacity-90 transition-opacity" data-testid="contact-submit">
                        Send Message
                      </button>
                    </form>
                  </Form>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-2 flex flex-col gap-8"
              >
                {/* Studio Hours */}
                <div>
                  <p className="eyebrow mb-5">Studio Hours</p>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card-warm">
                    {hours.map((h, i) => (
                      <div
                        key={h.day}
                        className={`flex justify-between items-center px-5 py-3.5 text-sm ${i < hours.length - 1 ? "border-b border-border" : ""} ${h.time === "Closed" ? "opacity-40" : ""}`}
                        data-testid={`hours-${h.day.toLowerCase()}`}
                      >
                        <span className="font-medium text-foreground">{h.day}</span>
                        <span className={h.time === "Closed" ? "text-muted-foreground" : "text-primary font-medium"}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-2xl overflow-hidden border border-border relative h-52 shadow-card-warm">
                  <img
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=75"
                    alt="Location map"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background/95 backdrop-blur-sm rounded-2xl px-5 py-3.5 text-center shadow-terracotta">
                      <MapPin className="w-5 h-5 text-primary mx-auto mb-1" />
                      <p className="font-serif text-sm font-light">142 Magnolia Lane, Suite 4</p>
                      <p className="text-xs text-muted-foreground">Charleston, SC 29403</p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <p className="eyebrow mb-4">Follow Along</p>
                  <div className="flex flex-col gap-3">
                    {[
                      { icon: <SiInstagram className="w-4 h-4" />, handle: "@multifacetedqueen", href: "https://instagram.com", label: "Instagram", testid: "contact-instagram" },
                      { icon: <SiFacebook className="w-4 h-4" />, handle: "@multifacetedqueen", href: "https://facebook.com", label: "Facebook", testid: "contact-facebook" },
                      { icon: <SiPinterest className="w-4 h-4" />, handle: "@multifacetedqueen", href: "https://pinterest.com", label: "Pinterest", testid: "contact-pinterest" },
                    ].map(s => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                        data-testid={s.testid}
                      >
                        <div className="w-8 h-8 rounded-full border border-border group-hover:border-primary/40 flex items-center justify-center transition-colors">
                          {s.icon}
                        </div>
                        <span className="text-sm">{s.handle} on {s.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
