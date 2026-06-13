import { motion } from 'framer-motion'
import '../styles/Journal.css'

const featured = {
  title: 'The Art of the Abaya: A Story of Reinvention',
  excerpt: 'From its origins as a symbol of modesty to its current status as a global fashion statement, the abaya has undergone a remarkable journey — and Shelby Atelier has been part of every chapter.',
  category: 'Culture & Craft',
  date: 'December 2024',
  readTime: '8 min read',
  gradient: 'linear-gradient(160deg, #1a1510 0%, #2d2218 50%, #1a1510 100%)',
}

const articles = [
  {
    id: 1,
    title: 'Fabric Diaries: Why We Chose Italian Silk',
    excerpt: 'Our sourcing journey took us from Dubai to Milan — here\'s what we discovered about the fabric that defines our signature abayas.',
    category: 'Behind the Scenes',
    date: 'November 2024',
    readTime: '5 min read',
    gradient: 'linear-gradient(160deg, #3d2b1f 0%, #5c3d28 50%, #2d1f12 100%)',
  },
  {
    id: 2,
    title: 'Dressing for Power: The New Language of Modest Fashion',
    excerpt: 'The global rise of modest fashion is not a trend — it is a movement. We explore how Shelby Atelier fits into this evolving story.',
    category: 'Editorial',
    date: 'October 2024',
    readTime: '6 min read',
    gradient: 'linear-gradient(160deg, #1a1a2a 0%, #2d2d3d 50%, #1a1a2a 100%)',
  },
  {
    id: 3,
    title: 'Resort Ready: Building Your Holiday Wardrobe',
    excerpt: 'Travel in luxury this season. Our style director curates the perfect resort wardrobe for your next sun-drenched escape.',
    category: 'Style Guide',
    date: 'September 2024',
    readTime: '4 min read',
    gradient: 'linear-gradient(160deg, #c8b4a0 0%, #e8d8c8 50%, #b8a090 100%)',
  },
  {
    id: 4,
    title: 'Inside the Atelier: A Day in Our Dubai Studio',
    excerpt: 'Step behind the curtain and witness the meticulous process that brings each Shelby Atelier piece to life.',
    category: 'Behind the Scenes',
    date: 'August 2024',
    readTime: '7 min read',
    gradient: 'linear-gradient(160deg, #0d0b08 0%, #1a1510 50%, #0d0b08 100%)',
  },
  {
    id: 5,
    title: 'Embroidery: The Language of Our Craft',
    excerpt: 'Every motif tells a story. Our master embroiderers share the symbolism woven into each piece they create.',
    category: 'Culture & Craft',
    date: 'July 2024',
    readTime: '6 min read',
    gradient: 'linear-gradient(160deg, #2d1f12 0%, #3d2b1f 50%, #1a1208 100%)',
  },
  {
    id: 6,
    title: 'How to Style an Abaya for Every Occasion',
    excerpt: 'From board meetings to beach evenings — our definitive guide to abaya styling for the modern woman.',
    category: 'Style Guide',
    date: 'June 2024',
    readTime: '5 min read',
    gradient: 'linear-gradient(160deg, #c8a870 0%, #e8c890 50%, #b89860 100%)',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
}

export default function Journal() {
  return (
    <main className="journal-page">
      <div className="page-hero">
        <div className="page-hero-bg" style={{ background: 'linear-gradient(135deg, #0d0b08 0%, #1a1510 50%, #2d2218 100%)' }} />
        <div className="page-hero-content">
          <motion.span
            className="section-label"
            style={{ color: 'var(--color-gold)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Stories & Insights
          </motion.span>
          <motion.h1
            style={{ color: 'var(--color-ivory)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Journal
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(255,251,247,0.7)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Culture, craft, and the world of Shelby Atelier
          </motion.p>
        </div>
      </div>

      {/* Featured */}
      <section className="journal-featured">
        <motion.div
          className="featured-article"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="featured-image" style={{ background: featured.gradient }}>
            <span className="featured-label">Featured</span>
          </div>
          <div className="featured-content">
            <div className="article-meta">
              <span className="article-category">{featured.category}</span>
              <span className="article-divider">·</span>
              <span className="article-date">{featured.date}</span>
              <span className="article-divider">·</span>
              <span className="article-read">{featured.readTime}</span>
            </div>
            <h2 className="featured-title">{featured.title}</h2>
            <p className="featured-excerpt">{featured.excerpt}</p>
            <button className="read-more-btn">Read Article</button>
          </div>
        </motion.div>
      </section>

      {/* Articles Grid */}
      <section className="journal-grid-section">
        <div className="journal-grid">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              className="article-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="article-image" style={{ background: article.gradient }} />
              <div className="article-content">
                <div className="article-meta">
                  <span className="article-category">{article.category}</span>
                  <span className="article-divider">·</span>
                  <span className="article-read">{article.readTime}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <span className="article-date-small">{article.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
