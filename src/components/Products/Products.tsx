import CreateProduct from '@/components/CreateProduct'
import { ProductsData } from '@/DummyData'


interface Category {
  Title: string;
}


export default function Products({Title}:Category) {
  return (
    <div className="w-[98%] h-[335px] bg-[var(--white-bg)] mx-auto mt-2 flex flex-col">
    <p className="text-black font-semibold w-full h-fit p-4 text-xl">{Title}</p>
      <main className="w-max-full flex items-start justify-between mx-4 gap-2">
        {ProductsData.map((product) => (
          <CreateProduct image={product.image} title={product.title} tagline={product.tagline} key={product.id} />
        ))}

      </main>
    </div>
  );
}
