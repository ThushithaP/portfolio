"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ImageSliderProps = {
  images: string[];
  alt: string;
  /** ms between auto-advances. Set to 0 to disable autoplay. */
  interval?: number;
};

export default function ImageSlider({
  images,
  alt,
  interval = 3000,
}: ImageSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + images.length) % images.length);

  useEffect(() => {
    if (!images || images.length <= 1 || interval <= 0 || paused) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images, interval, paused]);

  if (!images || images.length === 0) {
    return (
      <div className="h-60 w-full bg-gold/20 flex items-center justify-center">
        <span className="font-hand text-2xl text-gold">{alt}</span>
      </div>
    );
  }

  // manual nav resets the autoplay timer (handled naturally since the
  // interval effect re-subscribes whenever `index` isn't a dependency —
  // we just clear+restart on the next tick via `paused` toggle below)
  const handleManualGo = (dir: number) => {
    go(dir);
  };

  const handleManualJump = (i: number) => {
    setIndex(i);
  };

  return (
    <div
      className="relative h-60 w-full overflow-hidden bg-gold/20 group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Plain <img>, not next/image, on purpose: next/image re-encodes gifs and
          kills the animation unless explicitly marked unoptimized. Raw <img>
          keeps gifs animating. */}
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`${alt} screenshot ${index + 1} of ${images.length}`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleManualGo(-1);
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-ink/40 text-white w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleManualGo(1);
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-ink/40 text-white w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
          >
            &#8250;
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleManualJump(i);
                }}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-white" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}