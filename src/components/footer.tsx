export default function Footer() {

  return (<footer>
    <div className="bg-color-primary-dark relative">
      <div className="container py-10">
        <div className="grid gap-10 md:grid-cols-3 pb-10">
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Về sản phẩm</h4>
            <p className="leading-relaxed">Dành cho các bác đam mê xê dịch không có thời gian sạc điện thoại hoặc ở những
              nơi không có điện thì nên tậu 1 em, đảm
              bảo thích mê.</p>
            <div className="flex gap-5 items-center">
              <p>Follow Us</p>
              <a href="https://www.facebook.com/Trendy.st0110" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook-f cursor-pointer hover:text-color-secondary">

                </i>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Newsletter</h4>
            <p className="leading-relaxed">Nhận thông tin về sản phẩm mới</p>
            <div className="flex items-center">
              <input type="text" className="w-3/4 text-color-gray bg-color-white p-2 lg:p-3 rounded-l-md focus:outline-none"
                placeholder="Enter Your Email" />

              <button type="submit" className="bg-color-secondary px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90">
                <i className="fa-solid fa-chevron-right text-color-primary"></i>
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Thông Tin liên hệ </h4>
            <p className="leading-relaxed">
              Email: <a href="mailto:denny.truongnguyen@gmail.com">denny.truongnguyen@gmail.com</a>  <br />
              Hot line: <a href="tel:0793442254">0793442254 </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-10 border-t border-color-gray">
          <p>2023 &copy; Mayhome. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  )
}