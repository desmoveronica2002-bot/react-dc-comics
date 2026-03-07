import dcLogo from '/dc-logo.png'


export default function AppHeader (){


    // logica
    const page_title = 'DC';





    // markup che si vede in pagina
    return (
        <header className='container'>
            <img src={dcLogo} alt=""/>

            <nav>
                <a href='' className='active'>CHARACTERS</a>
                <a href=''>COMICS</a>
                <a href=''>MOVIES</a>
                <a href=''>TV</a>
                <a href=''>GAMES</a>
                <a href=''>COLLECTIBLES</a>
                <a href=''>VIDEOS</a>
                <a href=''>FANS</a>
                <a href=''>NEWS</a>
                <a href=''>SHOP</a>
            </nav>
        </header>
    )

}