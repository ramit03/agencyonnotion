import Image from "next/image";

function Header(){
    return(
        <nav className="topbar">
            <Image 
                src={'/icons/logo.svg'}
                width={85}
                height={85}
                alt="logo"
            />
        </nav>
    )
}
export default Header;