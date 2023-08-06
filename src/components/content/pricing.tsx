import Card from "../items/card"

export default function Pricing() {

  const products = [
    {
      id: 1,
      title: "561,000 VND",
      details: [
        {
          caption: "Dung lượng:",
          content: "10000mA",
        }, {
          caption: "Tấm năng lượng:",
          content: "3 miếng",
        }, {
          caption: "Cổng sạc (đầu ra):",
          content: "1 usb-A 5w , 1 usb-A 11w",
        }, {
          caption: "Cổng sạc thay thế (đầu vào):",
          content: "1 micro usb với chế độ tự ngắt khi đầy",
        }, {
          caption: "Màu:",
          content: "Cam / Đen",
        },
      ]
    },
    {
      id: 2,
      title: "736,000 VND",
      details: [
        {
          caption: "Dung lượng:",
          content: "20000mA",
        }, {
          caption: "Tấm năng lượng:",
          content: "4 miếng",
        }, {
          caption: "Cổng sạc (đầu ra):",
          content: "1 usb-A 5w , 1 usb-A 11w",
        }, {
          caption: "Cổng sạc thay thế (đầu vào):",
          content: "1 micro usb với chế độ tự ngắt khi đầy",
        }, {
          caption: "Màu:",
          content: "Cam / Đen",
        },
      ]
    },
    {
      id: 3,
      title: "778.000 VND",
      details: [
        {
          caption: "Dung lượng:",
          content: "20000mA",
        }, {
          caption: "Tấm năng lượng:",
          content: "5 miếng",
        }, {
          caption: "Cổng sạc (đầu ra):",
          content: "1 usb-A 5w , 1 usb-A 11w",
        }, {
          caption: "Cổng sạc thay thế (đầu vào):",
          content: "1 micro usb với chế độ tự ngắt khi đầy",
        }, {
          caption: "Màu:",
          content: "Cam / Đen",
        },
      ]
    },
    {
      id: 4,
      title: "897,000 VND",
      details: [
        {
          caption: "Dung lượng:",
          content: "20000mA",
        }, {
          caption: "Tấm năng lượng:",
          content: "6 miếng",
        }, {
          caption: "Cổng sạc (đầu ra):",
          content: "1 usb-A 5w , 1 usb-A 11w",
        }, {
          caption: "Cổng sạc thay thế (đầu vào):",
          content: "1 micro usb với chế độ tự ngắt khi đầy",
        }, {
          caption: "Màu:",
          content: "Cam / Xanh / Đen",
        },
      ]
    }
  ]


  return (
    <section className="bg-color-primary-light">

      <div className="container py-20">
        <div className="text-center m-auto mb-20 md:w-1/2">
          <h4 className="font-bold text-color-secondary mb-4">Giá theo nhu cầu</h4>
          <h1 className="title">Rất nhiều sự lựa chọn về màu sắc và dung lượng</h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:px gap-12 md:gap-8 px-4 lg:px-8 md:px-6">

          {products.map(p => (<Card key={p.id} content={p} />))}


        </div>
      </div>

    </section>

  )
}