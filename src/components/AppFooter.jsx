import fBook from '/footer-facebook.png'
import peri from '/footer-periscope.png'
import pinterest from '/footer-pinterest.png'
import tW from '/footer-twitter.png'
import yT from '/footer-youtube.png'

export default function AppFooter (){

    return (
        <footer>
            
            <div className="grigio pt-4 pb-4">
                <div className="container">

                    <div className="row">
                        <div className="col-6">
                            <button className="bottone text-white p-2">SING-UP-NOW!</button>
                        </div>

                        <div className="col-6 d-flex align-items-center">
                            <h2 className="mb-0 me-3 dimensione fw-bold ms-5 ps-5">FOLLOW US</h2> 
                            <img className="p-2" src={fBook} alt="Facebook" />
                            <img className="p-2" src={tW} alt="Twitter" />
                            <img className="p-2" src={yT} alt="YouTube" />
                            <img className="p-2" src={pinterest} alt="Pinterest" />
                            <img className="p-2" src={peri} alt="Periscope" />
                        </div>
                    </div>
            
                </div>
            </div>

        </footer>
    )


}