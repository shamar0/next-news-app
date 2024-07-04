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
          </div>
        </div>
        <div className="col-md-4">
          <Link href="/contact"  className="footer-logo"></Link>
        </div>
        <div className="col-md-4 text-center">
          <div className="social-icons">
          <Link href="https://leetcode.com/u/tasbiya/" target="_blank" className="text-white" style={{margin: "0 10px",  fontSize: "1.8em"}}><i class="fab fa-hackerrank"></i></Link>
            <Link href="https://github.com/tasbiya02" target="_blank" className="text-white" style={{margin: "0 10px",  fontSize: "1.8em"}}><i className="fab fa-github"></i></Link>
            <Link href="https://www.linkedin.com/in/tasbiya-21ba2a23a/" target="_blank" className="text-white" style={{margin: "0 10px",  fontSize: "1.8em"}}><i className="fab fa-linkedin-in"></i></Link>
          </div>
        </div>
      </div>
      <div className="row mt-3 ">
        <div className="col-md-4">
          <p>tasbiya <span style={{fontWeight:"150"}}>Pte. Ltd. &copy;COPYRIGHT 2024</span></p>
        </div>
      </div>
    </div>
  </div>
    
  )
}
