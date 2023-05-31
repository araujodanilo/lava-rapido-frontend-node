
interface NavItemProps {
    name: string;
    url: string;
}

const NavItem = (props: NavItemProps) => {
    return (
        <a href={props.url}>{props.name}</a>
    )
}

export default NavItem;