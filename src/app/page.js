import Image from "next/image";
import Header from '../Components/Header'
import SectionHeaders from "../app/Sectionheader";
import Hero from "@/Components/HEro";
import HomemEnu from "@/Components/HomemEnu";
export default function Home() {
  return (
    <>
      
     <Hero/>
     <HomemEnu/>
     
      <section className="text-center my-16">
        <SectionHeaders SubHeader={'Our Story'} MainHeader={'About Us'} />
        <div className="flex flex-col gap-4 text-gray-500 max-w-md mx-auto mt-4">
          <p className=" ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero commodi ad unde consequuntur est quo, explicabo corporis reiciendis fugiat asperiores sed. Minus atque iusto veniam error? Iure voluptas assumenda aliquid!</p>
          <p className=" ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero commodi ad unde consequuntur est quo, explicabo corporis reiciendis fugiat asperiores sed. Minus atque iusto veniam error? Iure voluptas assumenda aliquid!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rerum.</p>
        </div>
      </section>
      <section className="my-8 text-center">
        <SectionHeaders  SubHeader={"Dont\'t Hesitate"}
          MainHeader={"Contact Us"} />
          <div className="mt-4">
            <a className="text-4xl text-gray-500 underline" href="ph:+923400462714">+92 400 462 714</a>
          </div>
      </section>
     
    </>
  );
}
