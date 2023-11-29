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
      <WorkLinks
        name="NewBody gym"
        type="work"
        techStack="React, Tailwind CSS."
      />
      <WorkLinks
        name="3xBet"
        type="project"
        techStack="React, TypeScript, Tailwind CSS, Framer Motion."
      />
      {/* <WorkLinks name="test" type="test" techStack="test test test test test" /> */}
      <WorkLinks
        name="Ushuaia Visión"
        type="work"
        techStack="React, TypeScript, Styled Components."
      />
    </>
  );
}

export default Work;
