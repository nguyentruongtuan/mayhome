
const Header = () => {

  return (
    <header>

      <nav className="container flex justify-between items-center">
        <div className="hidden lg:flex w-20 py-5">
          <a href="#home"> <img className="hidden lg:flex lg:w-20 " src="./logo192.png" /></a>
        </div>
        <div>
          <ul className="hidden lg:flex items-center space-x-6">
            <li><a href="tel:0793442254">Liên hệ</a></li>
          </ul>
        </div>


      </nav>
    </header>
  )

}

export default Header