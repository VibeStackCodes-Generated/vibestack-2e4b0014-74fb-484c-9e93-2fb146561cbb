import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Lumina Analytics',
    description:
      'A real-time analytics dashboard for SaaS companies. Features live user tracking, funnel visualization, and custom report generation with sub-second query performance.',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Redis', 'D3.js'],
    image: 'analytics%20dashboard%20dark%20theme',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Verdant Marketplace',
    description:
      'A sustainable goods e-commerce platform connecting eco-conscious consumers with verified green brands. Includes AI-powered product recommendations and carbon footprint tracking.',
    tags: ['Next.js', 'Prisma', 'Stripe', 'AWS', 'OpenAI'],
    image: 'ecommerce%20website%20modern%20green',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'SyncBoard',
    description:
      'A collaborative whiteboard app with real-time multiplayer editing, infinite canvas, and smart shape recognition. Built for remote design teams who need to brainstorm fast.',
    tags: ['React', 'WebSockets', 'Canvas API', 'Node.js'],
    image: 'whiteboard%20collaboration%20app%20ui',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Pulse Fitness',
    description:
      'A fitness tracking mobile-first web app with workout logging, progress charts, social challenges, and integration with wearable devices via Bluetooth Web API.',
    tags: ['React Native', 'GraphQL', 'MongoDB', 'Chart.js'],
    image: 'fitness%20app%20dark%20modern%20ui',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3">// projects</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Things I've{' '}
            <span className="text-gradient">built.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            A selection of projects I've worked on — from SaaS platforms to creative tools.
            Each one taught me something new.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={`https://img.vibestack.site/s/${project.image}/600/400`}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground text-xs">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-md bg-secondary/60 text-muted-foreground border border-border font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-border hover:border-primary/50 hover:bg-primary/10 text-foreground gap-2"
                    asChild
                  >
                    <a href={project.liveUrl}>
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-muted-foreground hover:text-foreground gap-2"
                    asChild
                  >
                    <a href={project.githubUrl}>
                      <Github size={14} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
