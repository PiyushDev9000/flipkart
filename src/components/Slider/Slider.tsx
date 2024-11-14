"use client"
import Image from 'next/image'
import Banner1 from "@public/Banner1.png"
import Banner2 from "@public/Banner2.png"
import Banner3 from "@public/Banner3.png"
import {  useEffect,useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion } from 'framer-motion';

export default function Slider() {
  const banners = [Banner1, Banner2, Banner3]
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [direction, setDirection] = useState<"left" | "right">("right");

  const Increment = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  // Function to decrement the index manually
  const Decrement = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      Increment();
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="w-[98%] h-[222px] bg-[var(--white-bg)] mx-auto mt-2 flex items-center relative">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
        transition={{ duration: 0.5 }}
        className="absolute"
      >
        <Image src={banners[currentIndex]} alt="logo" height={265} className="cursor-pointer" />
      </motion.div>
        <div
          onClick={Decrement}
          className="h-[88px] w-[40px] flex items-center justify-center bg-[var(--white-bg)] absolute top-1/2 transform -translate-y-1/2 left-0 ">
          <ArrowBackIosIcon style={{ color: 'black' }}  />
        </div>
        <div
          onClick={Increment}
          className="h-[88px] w-[40px] flex items-center justify-center bg-[var(--white-bg)] absolute top-1/2 transform -translate-y-1/2 right-0 ">
          <ArrowForwardIosIcon style={{ color: 'black' }}  />
        </div>
    </div>
);
}

