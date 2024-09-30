import {Outlet, Link} from 'react-router-dom';

export default function Layout() {
    


    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-teriary">
                    <div className="container-fluid">
                        <a href="https://localhost:7240/" className="navbar-brand pacifico-regular">Snack Overflow</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>   
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1 justify-content-end">
                                <li className="nav-item">
                                    <a href="https://localhost:7240/" className="nav-link text-dark" >Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href='https://localhost:7240/menu' className="nav-link text-dark" >Menu</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/reservation" className="nav-link text-dark" >Reservation</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container">
                <main role="main" className="pb-3">
                    <Outlet/>
                </main>
            </div>

    <footer className="border-top footer text-primary">
        <div className="container d-flex align-items-center justify-content-between">
            <span>&copy; 2024 - Snack Overflow </span>
            <a className='text-primary' href='https://localhost:7240/Admin/login'>Admin</a>
        </div>
    </footer>
        </>
    )
} 