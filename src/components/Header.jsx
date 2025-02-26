import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <><nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
            <div className="container-fluid">
                <NavLink to="#" className="navbar-brand">
                    <i className="bi bi-camera-reels"></i> MovieHunt
                </NavLink>
                {/*The button that toggles is typically defined in Bootstrap to style the button specifically for toggling the navigation bar on smaller screens.*/}
                {/*The data-bs-toggle is a Bootstrap data attribute that specifies the button will toggle the collapse behavior. In this context, it is used to show or hide the navigation bar when the button is clicked. and data-bs-target attributes are used to specify the target element that the button will toggle.*/}
                <button className="navbar-toggler" type="button"

                    data-bs-toggle="collapse" data-bs-target='#menu'>
                    {/*this class typically adds an icon or visual indication (like a hamburger icon) that the button is a toggle for the navigation bar*/}
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/*The classes collapse and navbar-collapse are used in Bootstrap to manage the collapsible behavior of the navigation bar on smaller screens.*/}
                <div className='collapse navbar-collapse' id="menu">
                    <ul className='navbar-nav me-auto'>
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">Home</NavLink></li>
                        <li className="nav-item">
                            <NavLink to='/movies/top' className="nav-link">Top Rated</NavLink></li>
                        <li className="nav-item">
                            <NavLink to='/movies/popular' className="nav-link">Popular</NavLink></li>
                        <li className="nav-item">
                            <NavLink to='/movies/upcoming' className="nav-link">Upcoming</NavLink></li>
                    </ul>
                    <form action='#'>
                        <input type='text' className='form-control form-control-sm' placeholder='Search.....' />
                    </form>
                </div>
            </div>
        </nav>
            </> 
    );
};

 
