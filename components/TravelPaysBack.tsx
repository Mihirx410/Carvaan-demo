/**
 * Travel That Pays You Back section component
 * Features 4 circular icons with process flow: Book > Earn > Redeem > Repeat
 */
import Image from 'next/image';

export default function TravelPaysBack() {
  const steps = [
    {
      title: 'Book',
      icon: (
        <Image
          src="/image1.png"
          alt="Booking icon"
          width={120}
          height={120}
          className="w-34 h-34 object-contain"
        />
      )
    },
    {
      title: 'Earn',
      icon: (
        <Image
          src="/image2_clock.png"
          alt="Earn icon"
          width={120}
          height={120}
          className="w-34 h-34 object-contain"
        />
      )
    },
    {
      title: 'Redeem',
      icon: (
        <Image
          src="/image3.png"
          alt="Redeem icon"
          width={120}
          height={120}
          className="w-34 h-34 object-contain"
        />
      )
    },
    {
      title: 'Repeat',
      icon: (
        <Image
          src="/image4.png"
          alt="Repeat icon"
          width={120}
          height={120}
          className="w-34 h-34 object-contain"
        />
      )
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#ae4a84] mb-20 uppercase">
          TRAVEL THAT PAYS YOU BACK.
        </h2>

        {/* Process Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-30">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
                {step.icon}
              </div>
              <p className="text-4xl font-semibold text-[#ae4a84] flex items-center gap-2">
                {step.title}
                {index < steps.length - 1 && (
                  <span className="text-3xl leading-none text-[#ae4a84]">→</span>
                )}
              </p>
            </div>
          ))}
        </div>

        <button
          className="mt-14 inline-flex items-center cursor-pointer underline justify-center rounded-full px-8 py-2 text-xl font-bold text-[#B04081]"
          style={{ backgroundColor: '#FFBD59'}}
        >
          Start Collecting Coins
        </button>
      </div>

    </section>
  );
}

