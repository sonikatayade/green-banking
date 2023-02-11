import './NavBar.css';

function NavBar() {
    return <nav className='nav'>
        <ul>
            <li>
                <a href='/'>HOME</a>
            </li>
            <li>
                <a href='/101'>GREEN BANKING 101</a>
            </li>
            <li>
                <a href='/profiles'>STATE PROFILES</a>
            </li>
            <li>
                <a href='/resources'>RESOURCE LIBRARY</a>
            </li>
            <li>
                <a href='/about'>ABOUT</a>
            </li>
        </ul>
    </nav>
}

export default NavBar;