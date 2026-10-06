import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav>
        <h2>My Portfolio</h2>

        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <main>
        <Image
          src="/photo.jpg"
          alt="My Profile Photo"
          width={200}
          height={200}
        />

        <h1>Hello, I'm Vathsa</h1>

        <h2>Engineering Student & Web Developer</h2>

        <p>
          Welcome to my portfolio. I am interested in web development,
          programming and learning new technologies.
        </p>

        <Link href="/about">
          <button>About Me</button>
        </Link>
      </main>
    </div>
  );
}