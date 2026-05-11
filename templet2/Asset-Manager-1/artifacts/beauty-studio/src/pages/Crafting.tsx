import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

/* All crafting images: sewing, embroidery, fabric, handmade accessories */
const projects = [
  {
    tag: "Popular",
    title: "Custom Accessories",
    desc: "Handcrafted bags, headbands, hair accessories, and jewelry made to match your aesthetic.",
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=700&q=80",
  },
  {
    tag: "Bespoke",
    title: "Personalized Gifts",
    desc: "Thoughtful, handmade gifts for weddings, baby showers, birthdays, and milestones.",
    img: "https://images.unsplash.com/photo-1513201099705-a9746072f043?w=700&q=80",
  },
  {
    tag: "Home",
    title: "Textiles & Decor",
    desc: "Cushion covers, wall art, table runners, and decorative items with a personal touch.",
    img: "https://images.unsplash.com/photo-1616048056617-93b94a339009?w=700&q=80",
  },
  {
    tag: "Events",
    title: "Event Decor",
    desc: "Centerpieces, garlands, welcome signs, and custom elements that make your event unforgettable.",
    img: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=700&q=80",
  },
  {
    tag: "Artisan",
    title: "Embroidery",
    desc: "Custom embroidery on garments, bags, and linens — a detail that makes all the difference.",
    img: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=700&q=80",
  },
  {
    tag: "Special",
    title: "Children's Keepsakes",
    desc: "Soft toys, quilts, and embroidered pieces that become treasured family heirlooms.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
  },
];

const steps = [
  { num: "01", title: "Consultation", desc: "We explore your vision together — materials, timeline, and budget all mapped out from the start." },
  { num: "02", title: "Design", desc: "Our studio creates a concept and material plan, presented for your approval before any work begins." },
  { num: "03", title: "Creation", desc: "Skilled hands bring your vision to life, with updates shared along the way." },
  { num: "04", title: "Delivery", desc: "Your finished piece is presented beautifully — ready to be gifted, worn, or displayed with pride." },
];

/* Gallery — 8 unique crafting images (sewing, fabric, handcraft) */
const gallery = [
  { img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=700&q=80", alt: "Embroidery close-up" },
  { img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=700&q=80", alt: "Thread spools" },
  { img: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=700&q=80", alt: "Craft table setup" },
  { img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=700&q=80", alt: "Sewing at machine" },
  { img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80", alt: "Colorful fabric sewing" },
  { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80", alt: "Handcraft project" },
  { img: "https://images.unsplash.com/photo-1547656382-10b30a6a5aab?w=700&q=80", alt: "Macrame textile art" },
  { img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&q=80", alt: "Gift wrapping handmade" },
];

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget"),
  details: z.string().min(20, "Please describe your project in at least 20 characters"),
});
type FormData = z.infer<typeof schema>;

export default function Crafting() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", projectType: "", budget: "", details: "" },
  });

  function onSubmit(data: FormData) {
    console.log(data);
    toast({ title: "Inquiry Sent!", description: "We'll be in touch within 1–2 business days to discuss your project." });
    form.reset();
  }

  return (
    <PageTransition>
      <div className="w-full pt-[72px]">

        {/* ── Hero — split with sewing/crafting image ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
          <div className="relative overflow-hidden min-h-[50vh] lg:min-h-auto">
            <img
              src="https://cdn.create.vista.com/api/media/medium/167331540/stock-photo-woman-hands-sewing-for-finish-a-quilt"
              alt="Crafting Studio — woman sewing patchwork quilt fabric"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/10 to-transparent" />
          </div>
          <div className="gradient-warm flex flex-col justify-center px-10 md:px-16 py-20">
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <p className="eyebrow mb-5">Handcrafted with Love</p>
              <h1 className="font-serif text-6xl md:text-7xl font-light leading-tight mb-6">
                Crafting<br />Studio
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
                Bespoke creative projects — embroidery, custom accessories, textiles, and gifts — where your imagination meets our skilled craftsmanship.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#inquiry"
                  className="inline-flex items-center h-12 px-8 rounded-full gradient-primary text-white text-sm font-medium shadow-terracotta hover:opacity-90 transition-opacity"
                  data-testid="crafting-hero-inquire"
                >
                  Start a Project
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center h-12 px-8 rounded-full border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
                >
                  See Our Work
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Crafting intro strip ── */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { img: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&q=80", label: "Embroidery" },
                { img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80", label: "Thread & Fiber" },
                { img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80", label: "Accessories" },
                { img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", label: "Fabric Work" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative aspect-square rounded-2xl overflow-hidden group"
                >
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <p className="absolute bottom-3 left-4 font-serif text-white text-lg font-light">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <p className="eyebrow mb-4">What We Make</p>
              <h2 className="font-serif text-5xl md:text-6xl font-light">Project Types</h2>
              <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-[15px] leading-relaxed">
                Every project starts with your idea. We turn it into something tangible, beautiful, and entirely yours.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-card rounded-3xl border border-border overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-card-warm"
                  data-testid={`project-${i}`}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 inline-flex items-center h-7 px-3 rounded-full bg-primary text-primary-foreground text-[11px] font-medium tracking-wide">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-2xl font-light mb-3">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-28 gradient-warm">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-20">
              <p className="eyebrow mb-4">How It Works</p>
              <h2 className="font-serif text-5xl md:text-6xl font-light">Our Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center"
                >
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+36px)] right-[-50%] h-px bg-border" />
                  )}
                  <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-5">
                    <span className="font-serif text-2xl text-primary font-light">{step.num}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-light mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery — 8 images ── */}
        <section className="py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-20">
              <p className="eyebrow mb-4">Portfolio</p>
              <h2 className="font-serif text-5xl md:text-6xl font-light">Project Gallery</h2>
            </div>
            <div className="grid grid-cols-12 gap-4 auto-rows-[220px]">
              {gallery.map((item, i) => {
                const spans = [
                  "col-span-12 md:col-span-6 row-span-2",
                  "col-span-6 md:col-span-3 row-span-1",
                  "col-span-6 md:col-span-3 row-span-1",
                  "col-span-6 md:col-span-3 row-span-1",
                  "col-span-6 md:col-span-3 row-span-1",
                  "col-span-12 md:col-span-4 row-span-1",
                  "col-span-6 md:col-span-4 row-span-1",
                  "col-span-6 md:col-span-4 row-span-1",
                ];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className={`${spans[i]} rounded-2xl overflow-hidden`}
                    data-testid={`crafting-gallery-${i}`}
                  >
                    <img src={item.img} alt={item.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Pricing note ── */}
        <section className="py-20 bg-muted border-y border-border">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="eyebrow mb-5">Transparent Pricing</p>
            <h2 className="font-serif text-4xl font-light mb-6">How Pricing Works</h2>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              Each project is unique, so pricing is always confirmed after consultation. Small accessory pieces typically start at <strong className="text-foreground">$45</strong>, while large custom or event pieces range from <strong className="text-foreground">$150 – $800+</strong>. A 50% deposit secures your project slot.
            </p>
          </div>
        </section>

        {/* ── Inquiry Form ── */}
        <section id="inquiry" className="py-28 bg-background">
          <div className="max-w-2xl mx-auto px-6 md:px-10">
            <div className="text-center mb-14">
              <p className="eyebrow mb-4">Get Started</p>
              <h2 className="font-serif text-5xl font-light">Start Your Project</h2>
              <p className="text-muted-foreground mt-4 text-[15px]">Tell us your vision and we'll be in touch to schedule a consultation.</p>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-card-warm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Name</FormLabel>
                        <FormControl><Input placeholder="Jane Doe" {...field} data-testid="crafting-name" className="rounded-xl" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Email</FormLabel>
                        <FormControl><Input placeholder="jane@example.com" type="email" {...field} data-testid="crafting-email" className="rounded-xl" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="projectType" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl><SelectTrigger className="rounded-xl" data-testid="crafting-type"><SelectValue placeholder="Select" /></SelectTrigger></FormControl>
                          <SelectContent>
                            <SelectItem value="accessories">Custom Accessories</SelectItem>
                            <SelectItem value="home-decor">Home Decor & Textiles</SelectItem>
                            <SelectItem value="gifts">Personalized Gifts</SelectItem>
                            <SelectItem value="event-decor">Event Decor</SelectItem>
                            <SelectItem value="childrens">Children's Keepsakes</SelectItem>
                            <SelectItem value="embroidery">Embroidery</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="budget" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Budget Range</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl><SelectTrigger className="rounded-xl" data-testid="crafting-budget"><SelectValue placeholder="Select" /></SelectTrigger></FormControl>
                          <SelectContent>
                            <SelectItem value="under-100">Under $100</SelectItem>
                            <SelectItem value="100-250">$100 – $250</SelectItem>
                            <SelectItem value="250-500">$250 – $500</SelectItem>
                            <SelectItem value="500-plus">$500+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="details" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Project Details</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe your project idea, materials, colors, event date..." rows={5} {...field} data-testid="crafting-details" className="rounded-xl resize-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <button type="submit" className="w-full h-12 rounded-full gradient-primary text-white text-sm font-medium shadow-terracotta hover:opacity-90 transition-opacity" data-testid="crafting-submit">
                    Submit Inquiry
                  </button>
                </form>
              </Form>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
