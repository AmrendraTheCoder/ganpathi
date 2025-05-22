import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ChevronRight, Printer, Zap, Palette } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  beforeImage: string;
  afterImage: string;
}

const ServicesShowcase = () => {
  const [sliderValues, setSliderValues] = useState<Record<string, number>>({
    offset: 50,
    uv: 50,
    traditional: 50,
  });

  const services: ServiceProps[] = [
    {
      title: "Offset Printing",
      description:
        "Our state-of-the-art offset printing delivers exceptional quality for high-volume projects. Perfect for brochures, catalogs, and marketing materials with consistent color reproduction and crisp details.",
      icon: <Printer className="h-8 w-8" />,
      beforeImage:
        "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=800&q=80",
    },
    {
      title: "UV Printing",
      description:
        "UV printing technology provides vibrant colors and instant drying for stunning results on various materials. Ideal for premium business cards, packaging, and specialty items requiring durability and visual impact.",
      icon: <Zap className="h-8 w-8" />,
      beforeImage:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80",
    },
    {
      title: "Traditional Printing",
      description:
        "Our traditional printing services combine time-tested techniques with modern efficiency. Perfect for letterheads, envelopes, forms, and classic printed materials that require reliability and cost-effectiveness.",
      icon: <Palette className="h-8 w-8" />,
      beforeImage:
        "https://images.unsplash.com/photo-1611722022726-1b9b7e0ec694?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1611722022159-4e87875a2c4d?w=800&q=80",
    },
  ];

  const handleSliderChange = (value: number[], serviceType: string) => {
    setSliderValues((prev) => ({
      ...prev,
      [serviceType]: value[0],
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Printing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With over 10 years of experience, we deliver exceptional printing
            solutions tailored to your specific needs.
          </p>
        </motion.div>

        <Tabs defaultValue="offset" className="w-full">
          <TabsList className="grid grid-cols-3 mb-12 max-w-3xl mx-auto">
            {services.map((service) => (
              <TabsTrigger
                key={service.title.toLowerCase()}
                value={service.title.toLowerCase().split(" ")[0]}
                className="flex items-center gap-2 py-3"
              >
                {service.icon}
                <span className="hidden md:inline">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => {
            const serviceKey = service.title.toLowerCase().split(" ")[0];
            const sliderValue = sliderValues[serviceKey];

            return (
              <TabsContent
                key={serviceKey}
                value={serviceKey}
                className="focus-visible:outline-none focus-visible:ring-0"
              >
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  <Card className="overflow-hidden border-none shadow-lg">
                    <CardContent className="p-0 relative">
                      <div className="relative w-full h-[400px] overflow-hidden">
                        {/* Before image */}
                        <div
                          className="absolute top-0 left-0 h-full"
                          style={{
                            width: `${sliderValue}%`,
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={service.beforeImage}
                            alt={`${service.title} before printing`}
                            className="object-cover w-[800px] h-full"
                          />
                          <div className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                            Before
                          </div>
                        </div>

                        {/* After image */}
                        <div
                          className="absolute top-0 right-0 h-full"
                          style={{
                            width: `${100 - sliderValue}%`,
                            left: `${sliderValue}%`,
                          }}
                        >
                          <img
                            src={service.afterImage}
                            alt={`${service.title} after printing`}
                            className="object-cover w-[800px] h-full"
                            style={{ marginLeft: `-${sliderValue}%` }}
                          />
                          <div className="absolute top-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                            After
                          </div>
                        </div>

                        {/* Slider handle */}
                        <div
                          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                          style={{ left: `${sliderValue}%` }}
                        >
                          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <ChevronRight className="rotate-180 w-4 h-4 text-gray-600" />
                            <ChevronRight className="w-4 h-4 text-gray-600" />
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <Slider
                          defaultValue={[50]}
                          value={[sliderValue]}
                          onValueChange={(value) =>
                            handleSliderChange(value, serviceKey)
                          }
                          max={100}
                          step={1}
                          className="my-4"
                        />
                        <p className="text-sm text-center text-gray-500">
                          Drag slider to compare before and after
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <motion.div variants={itemVariants} className="space-y-6">
                    <div className="inline-flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
                      {service.icon}
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Experience the difference with our premium{" "}
                      {service.title.toLowerCase()} services
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 my-4">
                      <img
                        src="https://images.unsplash.com/photo-1581077968324-35e569d132b7?w=300&q=80"
                        alt={`${service.title} sample 1`}
                        className="rounded-lg shadow-md w-full h-32 object-cover"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?w=300&q=80"
                        alt={`${service.title} sample 2`}
                        className="rounded-lg shadow-md w-full h-32 object-cover"
                      />
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Superior color accuracy and consistency",
                        "Fast turnaround times to meet your deadlines",
                        "Expert craftsmanship with attention to detail",
                        "Competitive pricing without compromising quality",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="mt-1 rounded-full bg-green-100 p-1">
                            <svg
                              className="h-4 w-4 text-green-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </motion.div>
    </section>
  );
};

export default ServicesShowcase;
