import Link from "next/link";

function Home() {
  return (
    <div className="wrapper">
      <h1>Velkommen til nettstedet ditt</h1>
      <nav>
        <ul>
          <li>
            <Link href="/api/quiz" passHref>
              Gå til Spørsmål og Svar
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
