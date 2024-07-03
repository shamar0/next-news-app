import Link from "next/link";


export default function Navbar() {
  return (
   <>
    <nav className="navbar bg-body-tertiary" >
  <div className="container nav-img" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>, 
    <Link className="navbar-brand nav-brand" href="/news">
      <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="Bootstrap" width="150" height="70"/>
    </Link>
  </div>
   </nav>
   </>
  )
}
