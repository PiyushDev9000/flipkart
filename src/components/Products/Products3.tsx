import CreateProduct from '@/components/CreateProduct';
import { ProductsData2 } from '@/DummyData';


interface Category {
  Title: string;
}

export default function Products3({ Title }: Category) {
  return (
      <div className="flex-[1] w-2/5 bg-[var(--white-bg)]">
        <p className="text-black font-semibold w-full h-fit p-4 text-xl">{Title}</p>
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
  );
}
