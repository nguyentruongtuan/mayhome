

type CardDetail = {
  caption: string,
  content: string,
}

type CardContent = {
  title: string,
  details: CardDetail[]
}

export default function Card(data: { content: CardContent }) {
  const content = data.content

  return (

    <div className="border-2 border-solid border-color-gray rounded-2xl py-5 px-6 ">

      <img className="py-20 w-80 mx-auto" src="./img/hero.png" alt="Product 1" />

      <h3 className="text-x1 font-bold py-4">{content.title}</h3>
      <p className="leading-relaxed text-color-white">
        {content.details.map((content) => (<><span className="font-bold text-color-secondary">{content.caption}</span> {content.content} <br /></>))}

      </p>
      <div className="flex w-full mt-4">

        <button className="btn mx-auto">Đặt hàng</button>
      </div>

    </div>

  )
}