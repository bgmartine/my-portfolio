import profileImg from "@/assets/image.jpg";

export default function About() {
  return (
    <section className="about">
      <div style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        alignItems: "center"
      }}>
        <img
          src={profileImg}
          alt="Briana"
          style={{
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 6px 14px rgba(0,0,0,0.1)"
          }}
        />
        <div style={{ flex: 1, minWidth: "260px" }}>
          <h1 style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>About Me ✨</h1>
          <p>
            Hi, my name is <strong>Briana Martinez</strong> I’m a Computer Science graduate
  currently pursuing my MBA, bringing both technical depth and business perspective.
  I’m excited to grow into technical project management and product leadership roles,
  where I can translate complex requirements into clear roadmaps and drive projects
  that create lasting value.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Outside of my career, I enjoy exploring coffee shops ☕, capturing moments through
  photography 📸, and going on long walks with my dog, Mylo 🐾. I believe in balancing
  hard work with creativity and mindfulness, which inspires the way I approach both
  projects and life.
          </p>
          <p style={{ marginTop: "1rem" }}>
            My goal is to grow into a leader who bridges technology and business, creating tools that are both functional and impactful.
          </p>
        </div>
      </div>
    </section>
  );
}
