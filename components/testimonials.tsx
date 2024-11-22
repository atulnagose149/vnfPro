import Image, { StaticImageData } from "next/image";
// Importing images from the public/photo directory
import img1 from "@/public/photo/1.jpg";
import img2 from "@/public/photo/2.jpg";
import img3 from "@/public/photo/3.jpg";
import img4 from "@/public/photo/4.jpg";
import img5 from "@/public/photo/5.jpg";
import img6 from "@/public/photo/6.jpg";
import img7 from "@/public/photo/7.jpg";
import SWA1 from "@/public/SWA-1.svg";
import SWA2 from "@/public/SWA-2.svg";

const photos = [img1, img2, img3, img4, img5, img6, img7];

export default function Testimonials() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        {/* Section header */}
        {/* <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-indigo-300">
            Photo Collage
          </h2>
        </div> */}

        {/* Cards */}
        <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div key={index} className="group">
              <ImageCard img={photo} />
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-indigo-300">
            Upcoming Projects
          </h1>
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-indigo-300">
            Title - Chasing Shadows
          </h2>
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-indigo-300">
            Synopsis
          </h2>
          <p className="text-lg text-indigo-200/65"></p>
        </div>

        {/* SWA Images Section */}
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative rounded-lg overflow-hidden bg-gray-800">
              <Image
                className="w-full object-cover"
                src={SWA1}
                alt="SWA-1"
                width={800}
                height={500}
              />
            </div>
            <div className="relative rounded-lg overflow-hidden bg-gray-800">
              <Image
                className="w-full object-cover"
                src={SWA2}
                alt="SWA-2"
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageCard({ img }: { img: StaticImageData }) {
  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-800">
      <Image
        className="w-full object-cover"
        src={img}
        alt="Photo"
        width={500}
        height={300}
      />
    </div>
  );
}
