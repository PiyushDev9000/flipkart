import Header from "@/components/Header/Header";
import CategoryList from '@/components/CategoryList/CategoryList'
import Slider from '@/components/Slider/Slider'
import Products from '@/components/Products/Products'
import Products2 from '@/components/Products/Products2'
import Products3 from '@/components/Products/Products3'


export default function Home() {
    return (
      <div>
        <Header />
        <CategoryList />
        <Slider />
        <Products Title={"Best of Electronics"} />
        <Products Title={"Beauty, Food, Toys & More"} />
        <Products2 Title={"Best Gadgets"} />
        <div className="w-[98%] gap-2 mx-auto mt-2 flex h-[620px]">
          <Products3 Title={"Winter Essentials"} />
          <Products3 Title={"Home Decor"} />
          <Products3 Title={"Gifts for All Occasions"} />
        </div>
      </div>
    );
}
