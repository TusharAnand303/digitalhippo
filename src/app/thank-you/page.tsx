import Image from "next/image";

const ThankyouPage = () => {
  return (
    <main className="relative lg:min-h-full">
      <div className=" hidden md:block h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
        <Image
          fill
          src="/checkout-thank-you.jpg"
          className="h-full w-full object-cover object-center"
          alt="checkout image"
        />
      </div>
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
          <div className="lg:col-start-2">
            <h1 className="text-sm font-medium text-green-500">
              Order Successful
            </h1>
            <p className="mt-2 text-4xl font-bol text-gray-900 sm:text-5xl tracking-tight">
              Thanks for ordering
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankyouPage;
