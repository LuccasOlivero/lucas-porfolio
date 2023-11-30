import WorkLinks from "./WorkLinks";

function Work() {
  return (
    <>
      <WorkLinks
        name="Oslo Bank"
        type="project"
        techStack="React, Tailwind CSS."
      />
      <WorkLinks
        name="South Studio"
        type="work"
        techStack="React, Styled Components, Framer Motion."
      />
    </>
  );
}

export default Work;
