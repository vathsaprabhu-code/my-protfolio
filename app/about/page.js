import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>

      <p>
        I am an engineering student interested in programming,
        web development and technology.
      </p>

      <h2>Education</h2>

      <p>
        COMPUTER SCIENCE AND ENGINEERING
      </p>

      <Link href="/">
        Back to Home
      </Link>
    </div>
  );
}