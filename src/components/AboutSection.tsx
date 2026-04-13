import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Coffee } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const skills = [
  'React', 'TypeScript', 'Node.js', 'Next.js', 'PostgreSQL',
  'Tailwind CSS', 'GraphQL', 'AWS', 'Docker', 'Python',
  'Redis', 'Prisma',
];

const stats = [
  { icon: Code2, label: 'Years Experience', value: '6+' },
  { icon: Zap, label: 'Projects Delivered', value: '40+' },
  { icon: Palette, label: 'Design Systems', value: '12' },
  { icon: Coffee, label: 'Cups of Coffee', value: '∞' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3">// about me</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Building the web,{' '}
            <span className="text-gradient">one pixel at a time.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
              <p>
                Hey there! I'm Alex, a full-stack developer with over 6 years of experience
                building web applications that people actually enjoy using. I specialize in
                React ecosystems, cloud architecture, and turning complex problems into
                elegant, intuitive interfaces.
              </p>
              <p>
                After graduating from UC Berkeley with a degree in Computer Science, I spent
                three years at a YC-backed startup building their core platform from the
                ground up. Now I work with startups and agencies to ship products that scale.
              </p>
              <p>
                When I'm not coding, you'll find me hiking the Marin Headlands, experimenting
                with pour-over coffee techniques, or contributing to open-source projects.
                I believe great software is built at the intersection of engineering
                excellence and thoughtful design.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <p className="text-sm font-medium text-foreground mb-4">Tech I work with:</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary/80 text-secondary-foreground border border-border hover:border-primary/40 hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats + Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Profile image */}
            <div className="relative rounded-2xl overflow-hidden purple-glow">
              <img
                src="https://img.vibestack.site/s/developer%20workspace%20dark%20coding/600/400"
                alt="Alex Rivera's developer workspace"
                loading="lazy"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl border border-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <Icon size={20} className="text-primary mb-3" />
                  <p className="text-2xl font-bold text-foreground">{value}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
