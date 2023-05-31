import NavItem from "./item";


const Navbar = () => {
    return (
        <>
            <nav>
                <NavItem name="Index" url="/" />
                <NavItem name="Car" url="/car" />
                <NavItem name="CarCategory" url="/car_category" />
                <NavItem name="Client" url="/client" />
                <NavItem name="Scheduling" url="/scheduling" />
                <NavItem name="WashingService" url="/washing_service" />
            </nav>

        </>
    )
}

export default Navbar;