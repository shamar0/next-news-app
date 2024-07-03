import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../../public/style.css'

export default function Footer() {
  return (
    <div className="footer mt-5 py-5  text-white" >
    <div className="container" >
      <div className="row">
        <div className="col-md-4" style={{marginTop:"0.6rem"}}>
          <div className="footer-logo">
            <img src="https://assets.inshorts.com/website_assets/images/logo_footer.png" alt="Inshorts Logo" />
          </div>
        </div>
        <div className="col-md-4">
          <Link href="/contact"  className="footer-logo"><img src="https://assets.inshorts.com/website_assets/images/contact_icon.png"></img></Link>
        </div>
        <div className="col-md-4 text-center">
          <div className="social-icons">
            <Link href="https://facebook.com" target="_blank" className="text-white" style={{margin: "0 10px",  fontSize: "1.8em"}}><i className="fab fa-facebook-f"></i></Link>
            <Link href="https://twitter.com" target="_blank" className="text-white" style={{margin: "0 10px",  fontSize: "1.8em"}}><i className="fab fa-twitter"></i></Link>
            <Link href="https://linkedin.com" target="_blank" className="text-white" style={{margin: "0 10px",  fontSize: "1.8em"}}><i className="fab fa-linkedin-in"></i></Link>
          </div>
        </div>
      </div>
      <div className="row mt-3 ">
        <div className="col-md-4">
          <p>Inshorts <span style={{fontWeight:"150"}}>Pte. Ltd. &copy;COPYRIGHT 2024</span></p>
        </div>
        <div className="col-md-4" style={{marginLeft:"0.7rem"}}>
          <Link href="/terms" style={{textDecoration:"none",fontWeight:"150"}} className="text-white"> Terms & conditions</Link>
          <br />
          <Link href="/privacy" style={{textDecoration:"none",fontWeight:"150"}} className="text-white"> Privacy Policies</Link>
        </div>
      </div>
    </div>
  </div>
    
  )
}
