import { FC } from "react";
import Image from "next/image";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";

const testimonials = [
  {
    name: "Sarah Parker",
    company: "Pasific Ocean",
    role: "Head of Design",
    quote:
      "He's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Angel's Share",
    role: "Founder",
    quote:
      "He transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Naxos Creative",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. He brought lots of fresh perspectives and innovative solutions.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {
  return (
    <section
      id="testimonials"
      className="py-12 bg-stone-200 font-sans text-black"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md"
            >
              <Image
                src={testimonial.image.src}
                alt={testimonial.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full mx-auto mb-4"
                style={{
                  objectPosition: `center ${testimonial.imagePositionY * 100}%`,
                }}
              />
              <h3 className="text-xl font-semibold text-center">
                {testimonial.name}
              </h3>
              <p className="text-center text-gray-600">
                {testimonial.role} at {testimonial.company}
              </p>
              <p className="mt-4 text-gray-700">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
