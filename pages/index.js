import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

const projects = [
  {
    title: 'Chromatic Reverie',
    medium: 'Immersive XR short film',
    year: '2024',
    description:
      'A synesthetic voyage through neon-drenched alleyways where analog jazz collides with spatial audio and reactive projections.',
    highlights: ['XR cinema', 'Spatial sound', 'Projection mapping'],
  },
  {
    title: 'Nocturne Protocol',
    medium: 'Live audiovisual performance',
    year: '2023',
    description:
      'Glitched noir storytelling for stage: generative visuals pulse with a bespoke modular score, controlled in real time.',
    highlights: ['Generative systems', 'Modular synth score', 'Real-time control'],
  },
  {
    title: 'Photon Baptism',
    medium: 'Experimental short + installation',
    year: '2023',
    description:
      'Fragmented memories projected inside a fog-filled room. Visitors navigate light corridors guided by voiceover fragments.',
    highlights: ['Immersive installation', 'Fog architecture', 'Narrative design'],
  },
  {
    title: 'Signal Ghosts',
    medium: 'Interactive web film',
    year: '2022',
    description:
      'A branching noir mystery that rewires itself per viewer, weaving archived radio drama with modern motion capture.',
    highlights: ['Interactive narrative', 'WebGL', 'Performance capture'],
  },
];

const processPhases = [
  {
    title: 'Interrogation',
    caption: 'Every case begins with an interrogation. We surface themes, textures, and technology to frame the scene.',
  },
  {
    title: 'Worldbuild',
    caption:
      'We prototype atmospheres: lighting studies, sound sketches, glitch typography. The noir palette is dialed in early.',
  },
  {
    title: 'Circuitry',
    caption:
      'Pipelines fuse cinema, code, and sound. Unreal, TouchDesigner, custom shaders, Foley sessions—wired for live iteration.',
  },
  {
    title: 'Premiere',
    caption:
      'We stage the experience: physical install, streamed performance, gallery reveal, or web drop with immersive collateral.',
  },
];

const frequencies = [
  {
    label: 'Studio Signal',
    value: 'contact@astranoir.studio',
  },
  {
    label: 'Encrypted Drop',
    value: 'matrix.to/#/@astranoir:signal',
  },
  {
    label: 'Press Kit',
    value: 'astranoir.studio/press',
  },
];

export default function Index({ globalData }) {
  return (
    <Layout>
      <SEO
        title={`${globalData.name} · ${globalData.blogTitle}`}
        description="Personal website for Astra Noir Studio—futuristic film-noir multimedia projects, immersive installations, and live glitch performances."
      />
      <Navigation />

      <main className="flex-1 w-full space-y-24 pt-16 pb-20">
        <section id="intro" className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="overline">Futuristic Film-Noir Atelier</span>
              <h1 className="glitch text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight" data-glitch={globalData.name}>
                {globalData.name}
              </h1>
              <p className="max-w-2xl text-base text-white/70 sm:text-lg">
                We craft multimedia experiences where rain-soaked alleyways meet holographic futures—cinema, live visuals, and interactive stories infused with cyberpunk glitches.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#showcase" className="btn-noir">
                View Showcase
              </a>
              <a href="#contact" className="btn-outline">
                Book a Screening
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">Current Mode</p>
                <p className="text-lg font-semibold text-primary">Neo-Noir / XR</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">Latest Premiere</p>
                <p className="text-lg font-semibold text-primary">Chromatic Reverie</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">Operating Cities</p>
                <p className="text-lg font-semibold text-primary">Berlin · Tokyo</p>
              </div>
            </div>
          </div>

          <div className="noir-panel flex flex-col gap-8">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/50">
              <span>Case File // 07</span>
              <span>{globalData.blogTitle}</span>
            </div>
            <div className="space-y-4">
              <h2 className="glitch-sm text-2xl" data-glitch="Visual Evidence">
                Visual Evidence
              </h2>
              <p className="text-sm text-white/70">
                Cinematic investigations across screens, stages, and headsets. Every project is documented with noir stills, mood audio, and pipeline breakdowns to keep collaborators synced.
              </p>
            </div>
            <ul className="grid gap-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary shadow-[0_0_12px_rgba(102,247,255,0.8)]" />
                <span>Hybrid workflows bridging Unreal Engine, TouchDesigner, and bespoke shader rigs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full  bg-[rgba(255,79,216,0.85)] shadow-[0_0_12px_rgba(255,79,216,0.8)]" />
                <span>Story worlds anchored by film-noir narratives, reimagined with luminous cybernetic twists.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary/80" />
                <span>Soundtracks crafted with analog synths and on-location Foley to thicken the atmosphere.</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="showcase" className="space-y-12">
          <div className="space-y-4">
            <span className="overline">Showcase</span>
            <h2 className="section-title glitch-sm" data-glitch="Neon-Drenched Narratives">
              Neon-Drenched Narratives
            </h2>
            <p className="max-w-3xl text-base text-white/70">
              Each production is a dossier of noir fragments—rain, chrome, malfunctioning memories—stitched together through experimental cinematography and interactive technology.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="noir-card p-8 lg:p-10">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/40">
                  <span>{project.medium}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="mt-6 text-2xl uppercase tracking-[0.18em] text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm text-white/70">{project.description}</p>
                <ul className="mt-6 flex flex-wrap gap-3 text-[0.6rem] uppercase tracking-[0.3em] text-primary/80">
                  {project.highlights.map((item) => (
                    <li key={item} className="rounded-full border border-primary/40 px-3 py-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="space-y-10">
          <div className="space-y-4">
            <span className="overline">Process</span>
            <h2 className="section-title glitch-sm" data-glitch="Noir Workflow">
              Noir Workflow
            </h2>
            <p className="max-w-2xl text-base text-white/70">
              From first interrogation to final premiere, our workflow keeps the shadows rich and the signals strong.
            </p>
          </div>

          <div className="noir-panel grid gap-10 md:grid-cols-2">
            {processPhases.map((phase) => (
              <div key={phase.title} className="space-y-3">
                <h3 className="text-xl uppercase tracking-[0.2em] text-primary">{phase.title}</h3>
                <p className="text-sm text-white/70">{phase.caption}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-12">
          <div className="space-y-4">
            <span className="overline">Contact</span>
            <h2 className="section-title glitch-sm" data-glitch="Transmit a Signal">
              Transmit a Signal
            </h2>
            <p className="max-w-2xl text-base text-white/70">
              Screenings, residencies, festivals, collaborations. Share the brief, the logline, or the mood board—we will tune the frequency.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="noir-panel space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl uppercase tracking-[0.28em] text-primary">Availability</h3>
                <p className="text-sm text-white/70">
                  Booking limited to two major productions per quarter to preserve bespoke attention. Remote concept sessions available across time zones.
                </p>
              </div>
              <ul className="grid gap-4 text-sm text-white/75">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary/80" />
                  <span>Festival premieres, gallery installations, and experiential marketing launches.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full  bg-[rgba(255,79,216,0.75)]" />
                  <span>Creative direction, cinematography, sound design, and technical direction as a single studio.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary/60" />
                  <span>On-site deployments supported with live monitoring dashboards and rapid iteration.</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:contact@astranoir.studio" className="btn-noir">
                  Compose Transmission
                </a>
                <a href="https://astranoir.studio/press" className="btn-outline" target="_blank" rel="noreferrer">
                  Press Assets
                </a>
              </div>
            </div>

            <div className="noir-panel space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl uppercase tracking-[0.28em] text-primary">Frequencies</h3>
                <p className="text-sm text-white/70">
                  Alternative channels for encrypted briefs, screeners, and high-resolution deliverables.
                </p>
              </div>
              <ul className="space-y-6">
                {frequencies.map((frequency) => (
                  <li key={frequency.label} className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                      {frequency.label}
                    </p>
                    <p className="text-base font-semibold text-primary">{frequency.value}</p>
                  </li>
                ))}
              </ul>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                Monitoring 09:00–22:00 CET · Response within 24 hours
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 text-center text-xs uppercase tracking-[0.4em] text-white/40">
        {globalData.footerText}
      </footer>
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
