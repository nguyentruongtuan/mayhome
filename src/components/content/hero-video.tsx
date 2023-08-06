export default function HeroVideo() {

  return (

    <section className="relative bg-color-primary-light">
      <div
        className="w-80 h-80 bg-color-blob absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full">
      </div>
      <div
        className="w-80 h-80 bg-color-secondary absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full">
      </div>
      <div className="container py-20">
        <div className="flex flex-col items-center z-20 md:flex-row">
          <div className="text-center mb-20 md:text-left md:w-1/2 md:pr-10">
            <h1 className="title">Dễ dàng sử dụng </h1>
            <p className="leading-relaxed mb-10">Với 1 thao tác đơn giản bạn có thể nạp lại pin bên cạnh cốc cafe hoặc cả lúc di chuyển. Tích hợp đèn ở mặt sau hỗ trợ chuyến đi.</p>

          </div>
          <div className="md:w-1/2 justify-center flex">
            <iframe width="315" height="560"
              src="https://www.youtube.com/embed/rIKIi7XkH54"
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture;
web-share"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}