import dcLogo from '/dc-logo.png'


export default function AppHeader (){


    return (
        <header className="container pt-3 pb-4">
            <div className="d-flex align-items-center justify-content-between">

                <img src={dcLogo} alt="" />

                <nav className="d-flex gap-3 fw-bold">
                    <a className="nav-link active" href="#">CHARACTERS</a>
                    <a className="nav-link" href="#">COMICS</a>
                    <a className="nav-link" href="#">MOVIES</a>
                    <a className="nav-link" href="#">TV</a>
                    <a className="nav-link" href="#">GAMES</a>
                    <a className="nav-link" href="#">COLLECTIBLES</a>
                    <a className="nav-link" href="#">VIDEOS</a>
                    <a className="nav-link" href="#">FANS</a>
                    <a className="nav-link" href="#">NEWS</a>
                    <a className="nav-link" href="#">SHOP</a>
                </nav>

            </div>
        </header>
    )
}