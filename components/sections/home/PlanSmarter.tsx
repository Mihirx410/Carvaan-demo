import Image from 'next/image';

const steps = [
  { label: 'Best Squad Trips Under ₹10K' },
  { label: 'Top Captain-Led Adventures for 2025' },
  { label: 'Why Group Travel Works Better' },
];

export default function PlanSmarter() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#ae4a84] uppercase text-center mb-24">
          PLAN SMARTER. TRAVEL BETTER.
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-lg h-[460px]">
              {/* Card 1: masked photo only */}
              <div
                className="absolute z-30 shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
                style={{
                  left: '12px',
                  top: '60px',
                  width: '420px',
                  height: '360px',
                  transform: 'rotate(-4deg)',
                  WebkitMaskImage: 'url(/border1.png)',
                  maskImage: 'url(/border1.png)',
                  WebkitMaskSize: '100% 100%',
                  maskSize: '100% 100%',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                }}
              >
                <div className="relative w-full h-full">
                  <Image src="/explore.png" alt="Large inside photo" fill className="object-cover" />
                </div>
              </div>

              {/* Card 2: masked photo only (right side) */}
              <div
                className="absolute z-40 drop-shadow-lg"
                style={{
                  right: '8px',
                  top: '6px',
                  width: '170px',
                  height: '130px',
                  transform: 'none',
                  WebkitMaskImage: 'url(/border2.png)',
                  maskImage: 'url(/border2.png)',
                  WebkitMaskSize: '100% 100%',
                  maskSize: '100% 100%',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                }}
              >
                <div className="relative w-full h-full">
                  <Image src="/explore2.png" alt="Small ticket inner photo" fill className="object-cover" />
                </div>
              </div>

              {/* Foreground balloon in front */}
              <Image src="/ballon.png" alt="Hot air balloon" width={96} height={148} className="absolute -right-3 bottom-5 drop-shadow-lg z-50" />
            </div>
            <button className="mt-8 inline-flex items-center underline rounded-full bg-[#b04081] text-white px-10 py-3 text-lg font-bold shadow-[0px_18px_35px_rgba(176,64,129,0.35)]">
              Explore Travel Guides
            </button>
          </div>

          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div key={step.label} className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#f3b806] text-[#b04081] flex items-center justify-center font-extrabold text-xl shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1 bg-[#f7b74c] rounded-full shadow-[0px_20px_35px_rgba(0,0,0,0.08)] px-6 py-3">
                  <p className="text-lg font-semibold text-[#5c2d4d]">{step.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

