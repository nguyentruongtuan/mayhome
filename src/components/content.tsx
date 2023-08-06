export default function Content() {

  return (
    <main>

      <section className="relative">
        <div
          className="w-80 h-80 bg-color-blob absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full">
        </div>
        <div
          className="w-80 h-80 bg-color-secondary absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full">
        </div>
        <div className="container py-20">
          <div className="flex flex-col items-center z-20 md:flex-row">
            <div className="text-center mb-20 md:text-left md:w-1/2 md:pr-10">
              <h1 className="title">Sạc dự phòng năng lượng mặt trời</h1>
              <p className="leading-relaxed mb-10">Quên đi nỗi lo lắng trong những chuyến đi dài. Tại sao phải tạm dừng kết nối với bạn bè vì tiết kiệm pin. Thiết bị của bạn luôn phục
                vụ bạn mọi lúc.</p>

            </div>
            <div className="md:w-1/2">
              <img src="./img/hero.png" alt="Hero" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-primary-light">

        <div className="container py-20">
          <div className="text-center m-auto mb-20 md:w-1/2">
            <h4 className="font-bold text-color-secondary mb-4">Giá theo nhu cầu</h4>
            <h1 className="title">Rất nhiều sự lựa chọn về màu sắc và dung lượng</h1>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:px gap-12 md:gap-8 px-4 lg:px-8 md:px-6">
            <div className="border-2 border-solid border-color-gray rounded-2xl py-5 px-6 ">

              <img className="py-20 w-80 mx-auto" src="./img/hero.png" alt="Product 1" />

              <h3 className="text-x1 font-bold py-4">778.000 VND</h3>
              <p className="leading-relaxed text-color-white">
                <span className="font-bold text-color-secondary">Dung lượng:</span> 20000mA <br />
                <span className="font-bold text-color-secondary">Tấm năng lượng:</span> 6 miếng <br />
                <span className="font-bold text-color-secondary">Cổng sạc (đầu ra):</span> 1 usb-A 5w , 1 usb-A 11w <br />
                <span className="font-bold text-color-secondary">Cổng sạc thay thế (đầu vào):</span> 1 micro usb với chế độ tự
                ngắt khi đầy <br />
                <span className="font-bold text-color-secondary">Màu:</span> Cam / Đen
              </p>
              <div className="flex w-full mt-4">

                <button className="btn mx-auto">Đặt hàng</button>
              </div>

            </div>


            <div className="border-2 border-solid border-color-gray rounded-2xl py-5 px-6 ">

              <img className="py-20 w-80 mx-auto" src="./img/hero.png" alt="Product 1" />

              <h3 className="text-x1 font-bold py-4">778.000 VND</h3>
              <p className="leading-relaxed text-color-white">
                <span className="font-bold text-color-secondary">Dung lượng:</span> 20000mA <br />
                <span className="font-bold text-color-secondary">Tấm năng lượng:</span> 6 miếng <br />
                <span className="font-bold text-color-secondary">Cổng sạc (đầu ra):</span> 1 usb-A 5w , 1 usb-A 11w <br />
                <span className="font-bold text-color-secondary">Cổng sạc thay thế (đầu vào):</span> 1 micro usb với chế độ tự
                ngắt khi đầy <br />
                <span className="font-bold text-color-secondary">Màu:</span> Cam / Đen
              </p>
              <div className="flex w-full mt-4">

                <button className="btn mx-auto">Đặt hàng</button>
              </div>

            </div>


            <div className="border-2 border-solid border-color-gray rounded-2xl py-5 px-6 ">

              <img className="py-20 w-80 mx-auto" src="./img/hero.png" alt="Product 1" />

              <h3 className="text-x1 font-bold py-4">778.000 VND</h3>
              <p className="leading-relaxed text-color-white">
                <span className="font-bold text-color-secondary">Dung lượng:</span> 20000mA <br />
                <span className="font-bold text-color-secondary">Tấm năng lượng:</span> 6 miếng <br />
                <span className="font-bold text-color-secondary">Cổng sạc (đầu ra):</span> 1 usb-A 5w , 1 usb-A 11w <br />
                <span className="font-bold text-color-secondary">Cổng sạc thay thế (đầu vào):</span> 1 micro usb với chế độ tự
                ngắt khi đầy <br />
                <span className="font-bold text-color-secondary">Màu:</span> Cam / Đen
              </p>
              <div className="flex w-full mt-4">

                <button className="btn mx-auto">Đặt hàng</button>
              </div>

            </div>

          </div>
        </div>

      </section>


    </main >
  )
}