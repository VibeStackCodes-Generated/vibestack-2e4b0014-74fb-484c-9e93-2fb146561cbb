import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! I\'ll get back to you soon.', {
      description: `Thanks for reaching out, ${formData.name}!`,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3">// contact</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Let's work{' '}
            <span className="text-gradient">together.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Have a project in mind or just want to chat? Drop me a message and I'll
            get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary/50 h-12"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary/50 h-12"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Message</label>
              <Textarea
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-card border-border focus:border-primary/50 resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8"
            >
              <Send size={16} />
              Send Message
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-6 rounded-xl bg-card border border-border">
              <Mail size={20} className="text-primary mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <a
                href="mailto:alex@rivera.dev"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                alex@rivera.dev
              </a>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <MapPin size={20} className="text-primary mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="text-foreground font-medium">San Francisco, CA</p>
              <p className="text-sm text-muted-foreground">Open to remote work worldwide</p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border purple-glow">
              <p className="text-foreground font-medium mb-2">Quick response</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I typically respond within a few hours during business days.
                For urgent inquiries, feel free to reach out on LinkedIn.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
