import Image from "next/image";

 

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-indigo-200 to-purple-200 flex items-center justify-center p-10">
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl w-full">
        {/* Card 1 */}
        <div className="card w-full md:w-96 bg-white shadow-xl border border-indigo-300 hover:shadow-indigo-600 transition-shadow duration-300 rounded-xl flex flex-col">
          <figure className="px-16 pt-8">
            <Image
              src="/images/rehan.jpg"
              width={200}
              height={200}
              alt="রেহান উদ্দিন"
              className="rounded-full shadow-lg border-4 border-indigo-300"
            />
          </figure>
          <div className="card-body flex flex-col items-center text-center p-8 flex-grow">
            <h2 className="card-title text-indigo-800 text-3xl font-extrabold mb-3">
              রেহান উদ্দিন
            </h2>
            <p className="text-gray-700 text-lg font-medium leading-relaxed mb-6">
              প্রশাসক <br />১ নং রামগড় ইউনিয়ন পরিষদ
            </p>
            <div className="mt-auto">
              <div className="badge badge-outline text-indigo-700 border-indigo-500 text-lg px-5 py-3">
                উপজেলা আইসিটি অফিসার, রামগড়, খাগড়াছড়ি <br />
                মোবাইল: ০১৬৭৪-১৯৪১৪২
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card w-full md:w-96 bg-white shadow-xl border border-indigo-300 hover:shadow-indigo-600 transition-shadow duration-300 rounded-xl flex flex-col">
          <figure className="px-16 pt-8">
            <Image
              src="/images/mizan.jpg"
              width={200}
              height={200}
              alt="মোঃ মিজানুর রহমান"
              className="rounded-full shadow-lg border-4 border-indigo-300"
            />
          </figure>
          <div className="card-body flex flex-col items-center text-center p-8 flex-grow">
            <h2 className="card-title text-indigo-800 text-3xl font-extrabold mb-3">
              মোঃ মিজানুর রহমান
            </h2>
            <p className="text-gray-700 text-lg font-medium leading-relaxed mb-6">
              ইউপি প্রশাসনিক কর্মকর্তা <br />১ নং রামগড় ইউনিয়ন পরিষদ <br />
              রামগড়, খাগড়াছড়ি
            </p>
            <div className="mt-auto">
              <div className="badge badge-outline text-indigo-700 border-indigo-500 text-lg px-5 py-3">
                মোবাইল: ০১৭৩১-৮৯৬৮০৫
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card w-full md:w-96 bg-white shadow-xl border border-indigo-300 hover:shadow-indigo-600 transition-shadow duration-300 rounded-xl flex flex-col">
          <figure className="px-16 pt-8">
            <Image
              src="/images/sukanto.jpg"
              width={200}
              height={200}
              alt="সুকান্ত শর্মা"
              className="rounded-full shadow-lg border-4 border-indigo-300"
            />
          </figure>
          <div className="card-body flex flex-col items-center text-center p-8 flex-grow">
            <h2 className="card-title text-indigo-800 text-3xl font-extrabold mb-3">
              সুকান্ত শর্মা
            </h2>
            <p className="text-gray-700 text-lg font-medium leading-relaxed mb-6">
              হিসাব সহকারী কাম কম্পিউটার অপারেটর <br />১ নং রামগড় ইউনিয়ন পরিষদ
              <br />
              রামগড়, খাগড়াছড়ি
            </p>
            <div className="mt-auto">
              <div className="badge badge-outline text-indigo-700 border-indigo-500 text-lg px-5 py-3">
                মোবাইল: ০১৭৩১-৪২৭৬৫৭
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
