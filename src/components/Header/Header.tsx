import Image from 'next/image'
import logo from '@public/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import { headerList } from "@/DummyData"


export default function Header() {

    return (
        <div className="h-[67px] bg-[var(--white-bg)] py-[12px] px-[28px]">
            <main className="w-full h-full flex items-center justify-between pl-16">
             <Image src={logo} alt={"logo image"} height={20} width={100}/>
              <form className="flex items-center justify-left bg-[var(--search-bg)] h-full w-[660px] px-5 ml-10">
                <button type="submit" className="z-50 text-black">
               <SearchIcon />
                </button>
                <input type="text" name="search" placeholder="Search for Products, Brands and More"  className="bg-[var(--search-bg)] pl-2 "/>
              </form>

              <div className="h-full flex items-center justify-evenly w-[560px] ">
                {headerList.map((list) => (
                  <div className="h-full w-fit flex items-center justify-center gap-2" key={list.id}>
                    {list.icon}
                  <p className="text-black">{list.title}</p>
                </div>))}
              </div>

            </main>
        </div>
    );
}


