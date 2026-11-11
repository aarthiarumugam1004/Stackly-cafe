import { Link } from 'react-router-dom'
import {
  Coffee,
  Target,
  Eye,
  Heart,
  Leaf,
  Smile,
  Sparkles,
  ArrowDown,
  ArrowRight,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import { CAFE_MILESTONES } from '../data/testimonialsData'
import './AboutPage.css'

const PILLARS = [
  {
    icon: Coffee,
    title: 'Single-Origin Coffee Beans',
    description:
      'We cup over 40 micro-lots each harvest to select sweet, high-altitude Arabica beans roasted fresh three times weekly.',
  },
  {
    icon: Leaf,
    title: 'Fresh, Honest Ingredients',
    description:
      'Cultured French butter, organic oats, cold-pressed orchard fruit, and stone-baked sourdough make every bite memorable.',
  },
  {
    icon: Smile,
    title: 'Warm, Friendly Baristas',
    description:
      'Our hospitality team takes genuine pride in crafting each drink to your taste with unhurried, welcoming smiles.',
  },
  {
    icon: Heart,
    title: 'Comfort & Satisfaction',
    description:
      'Soft leather seating, soothing acoustics, and meticulous quality checks guarantee every visit ends in satisfaction.',
  },
]

export default function AboutPage() {
  const scrollToCraft = () => {
    const el = document.getElementById('craft-pillars')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Our Heritage & Passion"
        title="Crafted Around Warmth, Roast Mastery & Happy Moments"
        subtitle="Born from a love of slow mornings and honest ingredients, Stackly Cafe has grown from a small neighborhood roastery into a cherished gathering place."
        image="/images/cafe-interior.jpg"
      />

      {/* Story Split Section */}
      <section className="section">
        <div className="container about-story-grid">
          <div className="about-story-media">
            <img
              src="/images/barista-craft.jpg"
              alt="Stackly Cafe barista pouring latte art"
              className="about-main-photo"
            />
            <div className="about-experience-card">
              <strong>Since 2016</strong>
              <span>Serving handcrafted espresso &amp; bakery warmth</span>
            </div>
          </div>

          <div className="about-story-content">
            <span className="section-eyebrow">Company Story</span>
            <h2 className="section-title">From One 5kg Drum Roaster to Your Favorite Table</h2>
            <p>
              Stackly Cafe opened its oak doors in 2016 with a simple conviction: great
              coffee deserves time, warmth, and an unhurried table to enjoy it around. Our
              founders spent years visiting small family farms across Ethiopia and Colombia
              before launching our first neighborhood espresso bar.
            </p>
            <p>
              Every morning at 5:30 AM, our pastry ovens hum with cultured butter croissants
              and dark chocolate cakes while our head roaster dials in the day&apos;s
              espresso extraction to balance natural sweetness and velvety crema.
            </p>
            <div className="about-story-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={scrollToCraft}
              >
                Discover More <ArrowDown size={17} />
              </button>
              <Link to="/menu" className="btn btn-outline">
                Explore Our Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-beige">
        <div className="container mission-vision-grid">
          <article className="mv-card">
            <div className="mv-icon">
              <Target size={26} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To craft unforgettable coffee and bakery experiences using ethically sourced
              beans and wholesome local ingredients, served in an inviting atmosphere where
              every guest feels genuinely cared for.
            </p>
          </article>

          <article className="mv-card">
            <div className="mv-icon">
              <Eye size={26} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To be the heart of our community&apos;s daily rituals—bridging coffee farmers,
              skilled baristas, and neighbors through sustainable sourcing, culinary craft,
              and joyful moments around every cup.
            </p>
          </article>
        </div>
      </section>

      {/* Quality & Craftsmanship Pillars */}
      <section id="craft-pillars" className="section">
        <div className="container craft-layout">
          <div className="craft-left">
            <span className="section-eyebrow">
              <Sparkles size={15} /> Passion in Every Detail
            </span>
            <h2 className="section-title">Why Every Sip &amp; Bite Tastes Different</h2>
            <p className="section-subtitle" style={{ marginBottom: '26px' }}>
              Quality is never accidental—it lives in our freshly roasted beans, local
              orchard produce, smiling baristas, and the comfort of our sunlit space.
            </p>

            <div className="craft-photo-pair">
              <img
                src="/images/coffee-beans.jpg"
                alt="Freshly roasted Arabica coffee beans and pour-over dripper"
              />
              <img
                src="/images/cafe-interior.jpg"
                alt="Comfortable seating area at Stackly Cafe"
              />
            </div>
          </div>

          <div className="craft-pillars-grid">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div key={pillar.title} className="pillar-card">
                  <div className="pillar-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cafe Timeline */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-title">Milestones Along the Roast</h2>
            <p className="section-subtitle">
              Nearly a decade of perfecting pours, expanding our kitchen, and building
              lasting friendships.
            </p>
          </div>

          <div className="milestones-grid">
            {CAFE_MILESTONES.map((step) => (
              <div key={step.year} className="milestone-card">
                <span className="milestone-year">{step.year}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          <div className="about-bottom-cta">
            <Link to="/services" className="btn btn-accent">
              View Our Services <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

