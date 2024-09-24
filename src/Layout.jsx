import {Outlet, NavLink, Link} from 'react-router-dom';

export default function Layout() {
    


    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white">
                    <div className="container-fluid">
                        <a to="/" className="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">Snack Overflow</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <a href="https://localhost:7240/" className="nav-link text-dark" >Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href='https://localhost:7240/menu' className="nav-link text-dark" >Menu</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/reservation" className="nav-link text-dark" >Reservation</Link>
                                </li>
                                <li className="nav-item">
                                    <a href='https://localhost:7240/privacy' className="nav-link text-dark" >Privacy</a>
                                </li>
                                <li className="nav-item">
                                    <a href='https://localhost:7240/admin' className="nav-link text-dark" >Admin</a>
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

            <footer className="border-top footer text-muted">
                <div className="container">
                    &copy; 2024 - RestaurantBookingFrontend - <a asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
                </div>
            </footer>
        </>
    )
} 