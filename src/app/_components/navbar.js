import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container nav-img" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Link className="navbar-brand nav-brand" href="/news">
            <span style={{fontWeight: "bold", fontSize: "24px"}}>tasbiya.news.in</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
