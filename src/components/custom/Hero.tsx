import { Video } from "lucide-react";
import { Button } from "../ui/button";
import { HeroVideoDialog } from "../ui/hero-video-dialog";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-16 sm:mt-20 lg:mt-28 space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
        From Idea to Presentation in Minutes
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-2xl text-center">
        Create stunning presentations with ease using our AI-powered platform.
        Transform your ideas into impactful visuals in minutes. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          Watch Video
          <Video className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
        <Button className="text-sm sm:text-base">Get Started</Button>
      </div>

      <div className="relative max-w-4xl w-full mt-8 sm:mt-12">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-4">
          How it works
        </h1>
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
};

export default Hero;
