import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-[450px_1fr] gap-10 md:gap-0 px-6 py-10 md:px-[60px] md:py-[40px]">
      {/* Left Section: Hero Text */}
      <section className="flex flex-col justify-center md:pr-[40px]">
        <span className="text-[14px] text-brand-gold uppercase tracking-[3px] mb-[15px] block">
          Turning Ideas into Art
        </span>
        <h1 className="font-playfair text-[40px] md:text-[52px] leading-[1.1] mb-[20px] font-normal">
          Handmade Resin & Texture Art
        </h1>
        <p className="text-[15px] leading-[1.6] text-[#555] mb-[35px]">
          Arts by Priya is a creative studio specializing in premium resin and texture artwork. 
          Each piece is handcrafted with passion and meticulous attention to detail, 
          transforming spaces into personal galleries of elegance.
        </p>
        <a
          href="https://wa.me/919272547515"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-black text-white px-[35px] py-[18px] text-[13px] uppercase tracking-[2px] rounded-[4px] w-fit shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:bg-brand-gold transition-colors"
        >
          Order via WhatsApp
        </a>
      </section>

      {/* Right Section: Visual Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] min-h-[500px] md:min-h-0">
        <div className="bg-white rounded-[12px] relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[rgba(197,160,89,0.1)] flex flex-col justify-end p-[20px] bg-gradient-to-br from-[#eecda3] to-[#ef629f] min-h-[200px]">
          <div className="absolute top-[15px] right-[15px] w-[40px] h-[40px] border border-brand-gold rounded-full opacity-30"></div>
          <span className="bg-white/90 px-[15px] py-[10px] rounded-[4px] text-[12px] font-semibold tracking-[1px] uppercase w-fit text-brand-black">
            Resin Masterpieces
          </span>
        </div>
        <div className="bg-white rounded-[12px] relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[rgba(197,160,89,0.1)] flex flex-col justify-end p-[20px] bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] min-h-[200px]">
          <div className="absolute top-[15px] right-[15px] w-[40px] h-[40px] border border-brand-gold rounded-full opacity-30"></div>
          <span className="bg-white/90 px-[15px] py-[10px] rounded-[4px] text-[12px] font-semibold tracking-[1px] uppercase w-fit text-brand-black">
            Texture Canvas Art
          </span>
        </div>
        <div className="bg-white rounded-[12px] relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[rgba(197,160,89,0.1)] flex flex-col justify-end p-[20px] bg-gradient-to-br from-[#134e5e] to-[#71b280] opacity-90 min-h-[200px]">
          <div className="absolute top-[15px] right-[15px] w-[40px] h-[40px] border border-brand-gold rounded-full opacity-30"></div>
          <span className="bg-white/90 px-[15px] py-[10px] rounded-[4px] text-[12px] font-semibold tracking-[1px] uppercase w-fit text-brand-black">
            Bridal Mehendi
          </span>
        </div>
        <div className="bg-white rounded-[12px] relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[rgba(197,160,89,0.1)] flex flex-col justify-end p-[20px] bg-gradient-to-br from-[#ff9a9e] to-[#fecfef] min-h-[200px]">
          <div className="absolute top-[15px] right-[15px] w-[40px] h-[40px] border border-brand-gold rounded-full opacity-30"></div>
          <span className="bg-white/90 px-[15px] py-[10px] rounded-[4px] text-[12px] font-semibold tracking-[1px] uppercase w-fit text-brand-black">
            Custom Gifts
          </span>
        </div>
      </section>
    </div>
  );
}
