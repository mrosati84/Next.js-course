import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>Home page</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
    </div>
  );
}

export default HomePage;
