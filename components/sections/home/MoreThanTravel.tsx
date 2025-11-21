import Image from "next/image";

export default function MoreThanTravel() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[720px] overflow-visible">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/3rd.png"
            alt="Travelers overlooking mountains"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* HEADLINE */}
        <div className="relative max-w-[1380px] mx-auto px-6 pt-40 z-[5]">
          <p className="uppercase tracking-[0.55em] text-white/80 text-xs mb-3">
            More Than Travel
          </p>

          <h2 className="text-[60px] md:text-[72px] leading-[1.1] text-white font-semibold drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            More Than Travel.
            <br />
            A Marketplace That Works
            <br />
            for You.
          </h2>
        </div>

        {/* FIRST (PURPLE-LIGHT) BOX */}
        <div
          className="absolute left-0 z-[12]"
          style={{ bottom: "-55px" }}
        >
          <div
            className="px-14 py-8 text-2xl font-semibold shadow-[0_25px_55px_rgba(0,0,0,0.18)] rounded-r-2xl"
            style={{
              width: "1220px",
              backgroundColor: "#d9bfdc",
              color: "#4d2456",
            }}
          >
            <div className="text-center">
              One Place. Zero Stress.
              <br />
              Compare providers in one click.
            </div>
          </div>
        </div>
      </section>

      {/* WHITE SECTION */}
      <section className="bg-white pt-[65px] pb-24">
        <div className="flex flex-col gap-0">

          {/* SECOND BOX */}
          <div
            className="px-14 py-8 text-2xl font-semibold shadow-[0_25px_55px_rgba(0,0,0,0.15)] rounded-r-2xl"
            style={{
              width: "1050px",
              backgroundColor: "#b04081",
              color: "#ffffff",
              marginTop: "-10px"
            }}
          >
            <div className="text-center">
              Trips for Everyone.
              <br />
              Friends, Couples, Families, Solo.
            </div>
          </div>

          {/* THIRD BOX */}
          <div
            className="px-14 py-8 text-2xl font-semibold shadow-[0_25px_55px_rgba(0,0,0,0.15)] rounded-r-2xl"
            style={{
              width: "900px",
              backgroundColor: "#f7b74c",
              color: "#5c2d4d",
              marginTop: "-10px"
            }}
          >
            <div className="text-center">
              Carvaan Coins.
              <br />
              Every booking = future savings.
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
