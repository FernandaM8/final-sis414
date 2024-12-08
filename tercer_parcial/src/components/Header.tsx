import Link from "next/link";

const Header = () => {
    return (
        <nav>
            <h1>MisiTECH</h1>
            <ul>
                <li>
                    <Link href="#">menu</Link>
                </li>
                <li>
                    <Link href="#">inicio</Link>
                </li>
                <li>
                    <Link href="/client">productos</Link>
                </li>
                <li>
                    <Link href="/admin">servicios</Link>
                </li>
                <li>
                    <Link href="#">contactos</Link>
                </li>
            </ul>
            <div>
                <button className="form-btn btn2">Iniciar Sesión</button>
                <button className="form-btn">Registrarse</button>
            </div>
        </nav>
    )
}
export default Header;