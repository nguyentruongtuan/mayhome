export default function Hero() {

  return (
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
  )
}