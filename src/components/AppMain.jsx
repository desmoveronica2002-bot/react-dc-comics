import dcLogo from '/dc-logo-bg.png'


export default function AppMain (){

        return (

        <main>
            <section>
                 <div className='sfondoCartone'></div>
            </section>


            <section>
                <div className="nero pt-5 pb-5">
                    <div className="container">

                        <h2 className="text-white">{'--> content goes here <--'}</h2>
            
                    </div>
                 </div>                
            </section>


            <section>
                <div className="azzurro pt-5 pb-5">
                   <div className="container">
                       <div className="row text-white">

                           <div className="col d-flex align-items-center gap-4">
                               <img src="/buy-comics-digital-comics.png" className="piccola" />
                               <h3 className="scritte_piccole">DIGITAL COMICS</h3>
                           </div>
                           <div className="col d-flex align-items-center gap-4">
                               <img src="/buy-comics-merchandise.png" className="piccola"/>
                               <h3 className="scritte_piccole">DC MERCHANDISE</h3>
                            </div>
                            <div className="col d-flex align-items-center gap-4">
                               <img src="/buy-comics-shop-locator.png" className="piccola" />
                               <h3 className="scritte_piccole">SUBSCRIPTION</h3>
                            </div>
                            <div className="col d-flex align-items-center gap-4">
                               <img src="/buy-comics-subscriptions.png" className="piccola" />
                               <h3 className="scritte_piccole">COMIC SHOP LOCATOR</h3>
                            </div>
                            <div className="col d-flex align-items-center gap-4">
                               <img src="/buy-dc-power-visa.svg" className="piccola" />
                               <h3 className="scritte_piccole">DC POWER VISA</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="sfondo_img">
                    <div className="container pt-4">
                       <div className="row g-0">

     
                            <div className="col-6">
                                <div className="row g-0">

                                    <div className="col-auto p-1">
                                        <ul>
                                            <li><h2 className="pb-2 text-white">DC COMICS</h2></li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>

                                            <li className="pt-3 pb-3 text-white"><h2>SHOP</h2></li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                        </ul>
                                    </div>

                                    <div className="col-auto p-1">
                                        <ul>
                                            <li><h2 className="pb-2 text-white">DC COMICS</h2></li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                        </ul>
                                    </div>

                                    <div className="col-auto p-1">
                                        <ul>
                                            <li><h2 className="pb-2 text-white">SITES</h2></li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                            <li>uuuuu</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>


      
                            <div className="col-6 d-flex justify-content-center align-items-center posizione_relativa">
                                <img className="tagliata_centrata" src={dcLogo} alt="DC Logo" />
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            
        </main>


    )

}