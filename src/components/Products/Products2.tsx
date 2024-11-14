import CreateProduct from '@/components/CreateProduct'
import { ProductsData2 } from '@/DummyData'
import cover from '@public/cover.png'
import Image from 'next/image'

interface Category {
  Title: string
}

export default function Products2({ Title }: Category) {
  return (
    <div className="w-[98%] gap-2 mx-auto mt-2 flex h-[625px]">
      <div className="flex-[1] w-2/5 bg-[var(--white-bg)]">
        <p className="text-black font-semibold w-full h-fit p-4 text-xl">
          {Title}
        </p>
        <main className="grid grid-cols-2 gap-2 mx-4">
          {ProductsData2.map((product) => (
            <CreateProduct
              image={product.image}
              title={product.title}
              tagline={product.tagline}
              key={product.id}
            />
          ))}
        </main>
      </div>
      <div className="flex-[2] h-[625px] overflow-hidden">
        <Image
          src={cover}
          alt="cover"
          height={5000}
          width={2000}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
