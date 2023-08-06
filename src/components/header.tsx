import logo from '../logo.svg';

const Header = () => {

  return (
    <header>

      <nav className="container flex justify-between items-center">
        <div className="w-20 py-5">
          <a href="#home"> <img className="hidden lg:flex lg:w-20 " src="./logo192.png" /></a>
          <a href="#home"> <img className="lg:hidden w-10 " src="./logo192.png" /></a>
        </div>
        <div>
          <ul className="hidden lg:flex items-center space-x-6">
            <li><a href="#contact-us">Liên hệ</a></li>
          </ul>
        </div>


        <div className="lg:hidden cursor-pointer">
          <i className="fa-solid fa-bars"> </i>
        </div>

        <div id="menu" className="hidden bg-color-primary-dark h-[100vh] absolute  inset-0">
          <ul className="h-full grid place-items-center py-20">
            <li><a className="hover:text-color-secondary ease-in duration-200" href="#contact-us">Liên hệ</a></li>
          </ul>
        </div>

      </nav>
    </header>
  )

}

export default Header