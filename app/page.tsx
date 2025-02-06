import Experiences from "./components/experiences";
import Projects from "./components/projects";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter underline underline-offset-8">
        Hi, I'm Haris.
      </h1>
      <p className="mb-4">
        {`I'm a technology enthusiast, currently exploring tech startups in Singapore. I'm a Final Year
        Business Analytics Student, looking to learn more about building software to solve interesting problems.
        Interested in the finance, health and e-commerce space.`}
      </p>
      <h1
        className="mb-8 text-2xl font-semibold tracking-tighter underline underline-offset-8
"
      >
        Experiences
      </h1>
      <Experiences />
      <h1 className="mb-8 mt-8 font text-2xl font-semibold tracking-tighter underline underline-offset-8">
        Projects
      </h1>
      <Projects />
    </section>
  );
}
