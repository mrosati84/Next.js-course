import Link from "next/link";

function HomePage() {
  const projects = [
    {
      id: 1,
      name: "Project 1",
    },
    {
      id: 2,
      name: "Project 2",
    },
  ];

  return (
    <div>
      <h1>Home page</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/portfolio">Portfolio</Link>
      </p>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/portfolio/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
