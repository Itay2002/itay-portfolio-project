import {
  ArrowUpRight,
  Award,
  BookOpen,
  Feather,
  Filter,
  HeartHandshake,
  MessageCircle,
  PenLine,
  Sparkles,
  UserRound
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  awards,
  brainPosts,
  identity,
  interviews,
  lifeEvents,
  navigation,
  poems,
  socialLinks,
  writingFilters
} from "./data/siteData";
import { Card } from "./components/Card.jsx";
import { FilterPills } from "./components/FilterPills.jsx";
import { Header } from "./components/Header.jsx";
import { Section } from "./components/Section.jsx";

const interviewFilters = ["All", ...new Set(interviews.map((item) => item.category))];

function App() {
  const [interviewFilter, setInterviewFilter] = useState("All");
  const [writingFilter, setWritingFilter] = useState("All");

  const filteredInterviews = useMemo(() => {
    if (interviewFilter === "All") return interviews;
    return interviews.filter((item) => item.category === interviewFilter);
  }, [interviewFilter]);

  const filteredWriting = useMemo(() => {
    if (writingFilter === "All") return brainPosts;
    return brainPosts.filter((item) => item.type === writingFilter);
  }, [writingFilter]);

  return (
    <>
      <div className="space-scene" aria-hidden="true">
        <span className="orbit orbit--one" />
        <span className="orbit orbit--two" />
        <span className="comet" />
      </div>
      <Header navigation={navigation} />
      <main>
        <section className="hero" id="top">
          <div className="hero__copy">
            <p className="eyebrow">{identity.title}</p>
            <h1>{identity.heroText}</h1>
            <p className="tagline">{identity.tagline}</p>
            <p className="location">{identity.location}</p>
            <p className="intro">{identity.intro}</p>
            <div className="hero__actions" aria-label="Primary actions">
              <a className="button button--primary" href="#start-here">
                <Sparkles size={17} aria-hidden="true" />
                Start here
              </a>
              <a className="button" href="#my-interviews">
                <MessageCircle size={17} aria-hidden="true" />
                See interviews
              </a>
            </div>
          </div>
          <div className="hero-card" aria-label="Site snapshot">
            <p className="hero-card__label">Personal internet home</p>
            <div className="hero-card__title">life, work, writing, community</div>
            <div className="hero-card__grid">
              {navigation.slice(1).map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <Section
          id="start-here"
          icon={UserRound}
          eyebrow="Start Here"
          title="A simple welcome."
          description="This site is a calm place to understand who I am, what I care about, and what I am slowly building in public."
        >
          <div className="welcome-panel">
            <p>
              I am Itay Gozalzani. I like building useful things, asking people good
              questions, learning in public, and connecting communities through stories.
            </p>
            <p>
              This is not meant to be a loud highlight reel. It is a living journal
              for the people, projects, interviews, posts, poems, and lessons that
              are shaping my path.
            </p>
          </div>
        </Section>

        <Section
          id="my-life"
          icon={HeartHandshake}
          eyebrow="My Life"
          title="A quiet timeline of growth."
          description="Highlights from life, community work, personal growth, and projects. This can expand into a richer story later."
        >
          <div className="timeline">
            {lifeEvents.map((event) => (
              <article className="timeline-card" key={event.title}>
                <span>{event.period}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="my-interviews"
          icon={MessageCircle}
          eyebrow="My Interviews"
          title="Conversations I want to remember."
          description="Interview cards are ready for people, dates, locations, lessons, and links."
        >
          <FilterPills
            label="Filter interviews"
            icon={Filter}
            options={interviewFilters}
            active={interviewFilter}
            onChange={setInterviewFilter}
          />
          <div className="card-grid">
            {filteredInterviews.map((interview) => (
              <Card key={`${interview.person}-${interview.date}`} title={interview.person} meta={interview.date}>
                <dl className="detail-list">
                  <div>
                    <dt>Location</dt>
                    <dd>{interview.location}</dd>
                  </div>
                  <div>
                    <dt>Lesson learned</dt>
                    <dd>{interview.lesson}</dd>
                  </div>
                </dl>
                <a className="text-link" href={interview.link}>
                  Interview link <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="my-awards"
          icon={Award}
          eyebrow="My Awards"
          title="Recognition, service, and small milestones."
          description="A humble place for awards and community moments without turning the site into a trophy wall."
        >
          <div className="card-grid compact">
            {awards.map((award) => (
              <article className={award.featured ? "card achievement-card achievement-card--featured" : "card achievement-card"} key={award.title}>
                <div className="card__top">
                  <span>{award.year}</span>
                  {award.featured ? <strong>Featured</strong> : null}
                </div>
                <h3>{award.title}</h3>
                <p>{award.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="my-brain"
          icon={BookOpen}
          eyebrow="My Brain"
          title="Writing, reflections, and ideas."
          description="A filterable home for essays, LinkedIn posts, social writing, reflections, and loose ideas."
        >
          <FilterPills
            label="Filter writing"
            icon={PenLine}
            options={writingFilters}
            active={writingFilter}
            onChange={setWritingFilter}
          />
          <div className="card-grid">
            {filteredWriting.map((post) => (
              <Card key={post.title} title={post.title} meta={post.type}>
                <p>{post.summary}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="poems"
          icon={Feather}
          eyebrow="Poems"
          title="A clean room for creative writing."
          description="Simple poem cards for quieter thoughts, lines, drafts, and creative work."
        >
          <div className="poem-grid">
            {poems.map((poem) => (
              <article className="poem-card" key={poem.title}>
                <p>{poem.status}</p>
                <h3>{poem.title}</h3>
                <blockquote>{poem.excerpt}</blockquote>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="social-links"
          icon={ArrowUpRight}
          eyebrow="Social Links"
          title="Where I am building in public."
          description="Stats are shown plainly: useful context, not a scoreboard."
        >
          <div className="social-grid">
            {socialLinks.map((social) => (
              <a className="social-card" href={social.href} key={social.platform}>
                <span>{social.platform}</span>
                <strong>{social.stat}</strong>
                <small>{social.note}</small>
              </a>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}

export default App;
