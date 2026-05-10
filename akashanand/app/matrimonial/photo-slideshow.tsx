"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";

export type SlideshowSlide = {
  src: StaticImageData;
  alt: string;
  label?: string;
  position?: string;
};

type PhotoSlideshowProps = {
  slides: SlideshowSlide[];
};

export function PhotoSlideshow({ slides }: PhotoSlideshowProps) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const count = slides.length;

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (count <= 1) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(goNext, 5500);
    return () => window.clearInterval(id);
  }, [count, goNext]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  if (count === 0) return null;

  const current = slides[index];
  const handleTouchEnd = (x: number) => {
    if (touchStart === null) return;
    const distance = touchStart - x;
    if (Math.abs(distance) > 48) {
      if (distance > 0) goNext();
      if (distance < 0) goPrev();
    }
    setTouchStart(null);
  };

  return (
    <div className="min-w-0 max-w-full rounded-2xl border border-[#e8dacb]/90 bg-[#fffdf9]/96 p-2 shadow-[0_26px_70px_rgba(83,56,39,0.16)] sm:rounded-[2rem] sm:p-3 md:p-4">
      <div
        className="group relative min-w-0 overflow-hidden rounded-xl bg-[#f4eee8] sm:rounded-[1.5rem]"
        onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
        onTouchEnd={(event) =>
          handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)
        }
      >
        <button
          type="button"
          aria-label="Open photo gallery fullscreen"
          onClick={() => setIsOpen(true)}
          className="block w-full min-w-0 cursor-zoom-in touch-manipulation text-left"
        >
          {/* Mobile: slightly shorter portrait (4:5) for faces; lg: taller (3:4) */}
          <div className="relative aspect-[4/5] w-full min-h-[220px] sm:aspect-[3/4] sm:min-h-0 lg:aspect-[3/4]">
            <Image
              key={current.src.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              placeholder="blur"
              className={`object-cover transition duration-700 ease-out group-hover:scale-[1.02] ${current.position ?? "object-center"}`}
              priority={index === 0}
            />
          </div>
        </button>

        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-2 sm:p-4">
          <span className="rounded-full border border-white/30 bg-white/76 px-2.5 py-1.5 text-[11px] font-semibold text-[#4b352a] shadow-sm backdrop-blur-md sm:text-xs">
            {index + 1} / {count}
          </span>
          <span className="max-w-[55%] rounded-full border border-white/30 bg-[#2d211b]/46 px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-sm backdrop-blur-md sm:max-w-none sm:text-xs">
            Tap to enlarge
          </span>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#261b17]/88 via-[#261b17]/35 to-transparent p-3 pt-16 text-white sm:p-5 sm:pt-24">
          <p className="text-sm font-semibold leading-snug sm:text-base">
            {current.label ?? `Photo ${index + 1}`}
          </p>
          <p className="mt-0.5 text-xs leading-snug text-white/78 sm:text-sm">
            Swipe or use arrows · opens fullscreen
          </p>
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 top-1/2 z-10 grid h-12 w-12 min-h-[48px] min-w-[48px] -translate-y-1/2 touch-manipulation place-items-center rounded-full border border-white/50 bg-white/85 text-2xl font-semibold text-[#3a2a24] shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b6a4d] sm:left-3 sm:h-11 sm:w-11"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 top-1/2 z-10 grid h-12 w-12 min-h-[48px] min-w-[48px] -translate-y-1/2 touch-manipulation place-items-center rounded-full border border-white/50 bg-white/85 text-2xl font-semibold text-[#3a2a24] shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b6a4d] sm:right-3 sm:h-11 sm:w-11"
            >
              ›
            </button>
          </>
        )}
      </div>

      {count > 1 ? (
        <nav
          className="-mx-0.5 mt-3 flex snap-x snap-mandatory gap-2 overflow-x-auto overflow-y-hidden px-0.5 pb-2 pt-1 sm:mt-4"
          style={{ WebkitOverflowScrolling: "touch" }}
          aria-label="Photo thumbnails"
        >
          {slides.map((slide, i) => (
            <button
              key={slide.src.src}
              type="button"
              aria-current={i === index ? true : undefined}
              aria-label={`Show photo ${i + 1}: ${slide.label ?? slide.alt}`}
              onClick={() => setIndex(i)}
              className={`relative aspect-[4/5] w-[4.5rem] shrink-0 snap-center overflow-hidden rounded-xl border-2 transition duration-300 touch-manipulation min-[400px]:w-[5.25rem] sm:w-24 ${
                i === index
                  ? "border-[#8d5f45] opacity-100 shadow-[0_0_0_2px_rgba(141,95,69,0.2)]"
                  : "border-[#eadfd4] opacity-70 hover:opacity-100 active:opacity-100"
              }`}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                sizes="96px"
                placeholder="blur"
                className={`object-cover ${slide.position ?? "object-center"}`}
              />
            </button>
          ))}
        </nav>
      ) : null}

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery lightbox"
          className="fixed inset-0 z-[100] grid bg-[#16110f]/92 p-3 backdrop-blur-md sm:p-6"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative mx-auto flex h-full min-h-0 w-full max-w-5xl flex-col gap-3 sm:gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 text-white">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  {current.label ?? `Photo ${index + 1}`}
                </p>
                <p className="text-xs text-white/68">
                  {index + 1} of {count}
                </p>
              </div>
              <button
                type="button"
                aria-label="Close photo gallery"
                onClick={() => setIsOpen(false)}
                className="grid h-12 w-12 shrink-0 touch-manipulation place-items-center rounded-full border border-white/18 bg-white/10 text-2xl text-white transition hover:bg-white/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                ×
              </button>
            </div>

            <div
              className="relative min-h-0 flex-1 overflow-hidden rounded-2xl bg-black/20"
              onTouchStart={(event) =>
                setTouchStart(event.touches[0]?.clientX ?? null)
              }
              onTouchEnd={(event) =>
                handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)
              }
            >
              <Image
                key={`lightbox-${current.src.src}`}
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                placeholder="blur"
                className="object-contain object-center"
              />

              {count > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label="Previous photo"
                    onClick={goPrev}
                    className="absolute left-2 top-1/2 grid h-12 w-12 min-h-[48px] min-w-[48px] -translate-y-1/2 touch-manipulation place-items-center rounded-full border border-white/20 bg-white/12 text-3xl text-white backdrop-blur-md transition hover:bg-white/22 sm:left-4"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next photo"
                    onClick={goNext}
                    className="absolute right-2 top-1/2 grid h-12 w-12 min-h-[48px] min-w-[48px] -translate-y-1/2 touch-manipulation place-items-center rounded-full border border-white/20 bg-white/12 text-3xl text-white backdrop-blur-md transition hover:bg-white/22 sm:right-4"
                  >
                    ›
                  </button>
                </>
              ) : null}
            </div>

            <nav
              className="flex max-w-full snap-x snap-mandatory gap-2 overflow-x-auto overflow-y-hidden pb-1"
              style={{ WebkitOverflowScrolling: "touch" }}
              aria-label="Lightbox thumbnails"
            >
              {slides.map((slide, i) => (
                <button
                  key={`lightbox-thumb-${slide.src.src}`}
                  type="button"
                  aria-current={i === index ? true : undefined}
                  aria-label={`Show photo ${i + 1} in gallery`}
                  onClick={() => setIndex(i)}
                  className={`relative h-16 w-14 shrink-0 snap-center overflow-hidden rounded-xl border-2 touch-manipulation transition sm:h-[4.5rem] sm:w-16 ${
                    i === index
                      ? "border-white opacity-100"
                      : "border-white/18 opacity-55 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt=""
                    fill
                    sizes="64px"
                    placeholder="blur"
                    className={`object-cover ${slide.position ?? "object-center"}`}
                  />
                </button>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
