import Image, { StaticImageData } from 'next/image';

interface CreateProductProps {
  image: string | StaticImageData; 
  title: string;
  tagline: string;
}

export default function CreateProduct({ image, title, tagline }: CreateProductProps) {
  return (
    <div className="w-[200px] h-[252px] border-2 rounded-xl flex flex-col items-center justify-evenly">
      <div className="w-[186px] h-[186px] overflow-hidden flex items-center justify-center">
        <Image src={image} alt="product image" width={186} height={186} className="object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-black text-lg">{title}</p>
        <p className="text-black font-bold text-lg">{tagline}</p>
      </div>
    </div>
  );
}
