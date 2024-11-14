import Image from 'next/image'
import { Categories } from "@/DummyData"

export default function CategoryList () {

  return (
    <div className="w-[98%] h-[130px] bg-[var(--white-bg)] mx-auto mt-2">
      <main className="w-[95%] h-full flex items-center justify-evenly mx-auto">
        {Categories.map((category) => (
          <div className="flex items-center flex-col cursor-pointer" key={category.id}>
            <Image src={category.Image} alt={category.title}  height={50} />
            <p className="text-black text-[14px]">{category.title}</p>
          </div>
        ))}
      </main>
    </div>
  )
}
