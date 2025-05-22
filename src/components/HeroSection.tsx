import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Ganpathi Overseas",
  subtitle = "Premium Printing Services with 10+ Years of Excellence in Lucknow",
  ctaText = "Explore Our Services",
  onCtaClick = () => {},
  backgroundImage = "https://images.unsplash.com/photo-1589996448606-27d38c70f3bc?w=1920&q=80",
}: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 h-[120%] w-full"
        initial={{ y: 0 }}
        animate={{ y: -50 }}
        transition={{
          repeat: 0,
          duration: 20,
          ease: "linear",
        }}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80">
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Logo */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="h-24 w-24 rounded-full bg-white p-4">
                <div className="flex h-full items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  GO
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mb-8 text-xl text-gray-200 md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {subtitle}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={onCtaClick}
                className="bg-primary px-8 py-6 text-lg font-semibold hover:bg-primary/90"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm font-medium text-white">
            Scroll Down
          </span>
          <div className="h-10 w-6 rounded-full border-2 border-white p-1">
            <motion.div
              className="h-2 w-2 rounded-full bg-white"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
