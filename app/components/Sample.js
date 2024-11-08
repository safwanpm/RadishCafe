import React from 'react'

function Sample() {
  return (
 
  <>
   <div className="py-20 px-8 flex flex-col items-center justify-center bg-white">
  <div className="text-center">
    <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black inline-block pb-2" data-aos="fade-down">
      What people <span className="text-blue">Say</span>
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-gray-300 mt-2"></span>
    </h2>
  </div>

  {/* Grid Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-10 w-full max-w-4xl">
    {/* Testimonial Card 1 */}
    <div 
    data-aos="fade-right"
    className="relative p-8 bg-gray-100 rounded-lg shadow-lg">
      <div className="absolute -top-4 left-4 text-5xl text-blue font-bold">“</div>
      <div className="text-center">
        <p className="text-lg text-gray-600">
          "Radish  is the perfect spot for a quick coffee or a hearty meal. The ambiance is warm, and the staff make you feel like family. I’ll be back for sure!"
        </p>
        <p className="mt-4 font-semibold">ANNA K.</p>
        <p className="text-sm text-gray-500">REGULAR CUSTOMER</p>
      </div>
      <div className="absolute -bottom-4 right-4 text-5xl text-blue font-bold">”</div>
    </div>

    {/* Testimonial Card 2 */}
    <div
    data-aos="fade-left"
    className="relative p-8 bg-gray-100 rounded-lg shadow-lg">
      <div className="absolute -top-4 left-4 text-5xl text-blue font-bold">“</div>
      <div className="text-center">
        <p className="text-lg text-gray-600">
          "The food at Radish is simply amazing! Every dish feels carefully prepared with fresh ingredients. It’s my favorite café in town!"
        </p>
        <p className="mt-4 font-semibold">MARK T.</p>
        <p className="text-sm text-gray-500">FOOD CRITIC</p>
      </div>
      <div className="absolute -bottom-4 right-4 text-5xl text-blue font-bold">”</div>
    </div>
  </div>

  {/* Optional Carousel Arrows */}
  {/* <div className="flex space-x-4 mt-6">
    <button className="p-2 bg-orange-500 text-white rounded-full">←</button>
    <button className="p-2 bg-orange-500 text-white rounded-full">→</button>
  </div> */}
</div>



  
  </>
  )
}

export default Sample