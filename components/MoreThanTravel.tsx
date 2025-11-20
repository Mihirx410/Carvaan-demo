import Image from "next/image";

export default function MoreThanTravel() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[680px] overflow-visible">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/3rd.png"
            alt="Travelers overlooking mountains"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* TEXT BLOCK */}
        <div className="relative max-w-[1350px] mx-auto px-0 pt-36 z-[5]">

          <h2 className="text-[58px] md:text-[72px] leading-[1.72] text-white font-semibold 
                         drop-shadow-[0_10px_35px_rgba(0,0,0,1)] max-w-[900px]">
            More Than Travel.
            <br />
            A Marketplace That Works for You.
          </h2>
        </div>

        {/* FIRST BOX — NOW VISIBLE + OVERLAPPING */}
        <div
          className="absolute left-0   right-0 z-[10]"
          style={{ bottom: "-40px" }}
        >
          <div className="max-w-[1350px] mx-auto px-0">
            <div
               className="w-full max-w-[900px] rounded-full bg-[#d9bfdc] text-[#4d2456]
                          px-6 sm:px-10 lg:px-14 py-6 text-base md:text-lg font-semibold 
                         shadow-[0_25px_45px_rgba(0,0,0,0.25)]"
            >
              One Place. Zero Stress. Compare providers in one click.
            </div>
          </div>
        </div>
      </section>

      {/* WHITE SECTION */}
      <section className="bg-white pt-[60px] pr-[0px] pb-20">
         <div className="max-w-[1350px] mx-auto px-0">
           <div className="flex flex-col gap-3">
             <div className="w-full max-w-[900px] rounded-full bg-[#b04081] text-white px-6 sm:px-10 lg:px-14 py-6 text-base md:text-lg font-semibold shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
               Trips for Everyone. Friends, Couples, Families, Solo.
             </div>
             <div className="w-full max-w-[880px] rounded-full bg-[#f7b74c] text-[#5c2d4d] px-6 sm:px-10 lg:px-14 py-6 text-base md:text-lg font-semibold shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
               Carvaan Coins. Every booking = future savings.
             </div>
           </div>
         </div>
      </section>
    </>
  );
}
