import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export type TestimonialRow = {
  _id: string;
  studentName: string;
  batch?: string;
  course?: string;
  quote: string;
  photo?: string;
  rating?: number;
  videoUrl?: string;
};

function extractYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1) || null;
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    const m = u.pathname.match(/\/embed\/([^/]+)/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

export function TestimonialsCarousel({ items }: { items: TestimonialRow[] }) {
  const list = items.length ? items : [];

  if (!list.length) {
    return (
      <p className="text-center text-textSecondary">
        Student stories will appear here once testimonials are published.
      </p>
    );
  }

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      loop={list.length > 1}
      autoplay={{ delay: 6500, disableOnInteraction: true, pauseOnMouseEnter: true }}
      pagination={{ clickable: true, dynamicBullets: true }}
      breakpoints={{
        640: { slidesPerView: 1.15, spaceBetween: 20 },
        900: { slidesPerView: 2, spaceBetween: 24 },
        1200: { slidesPerView: 2.2, spaceBetween: 28 },
      }}
      className="testimonial-swiper !pb-14"
    >
      {list.map((t) => {
        const yt = t.videoUrl ? extractYouTubeId(t.videoUrl) : null;
        const thumb = yt ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg` : null;
        return (
          <SwiperSlide key={t._id} className="!h-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-borderSoft bg-white shadow-card transition hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(26,60,143,0.12)]"
            >
              <div className="relative aspect-[16/9] bg-gradient-to-br from-primary/90 to-dark">
                {thumb ? (
                  <img src={thumb} alt="" className="h-full w-full object-cover opacity-90" loading="lazy" decoding="async" />
                ) : t.photo ? (
                  <img src={t.photo} alt="" className="h-full w-full object-cover opacity-90" loading="lazy" decoding="async" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-white/40">
                    <Star className="h-16 w-16" aria-hidden />
                  </div>
                )}
                {t.videoUrl ? (
                  <a
                    href={t.videoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="absolute inset-0 flex items-center justify-center bg-black/30 transition hover:bg-black/45"
                    aria-label={`Watch video testimonial from ${t.studentName}`}
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-lg">
                      <Play className="ml-1 h-8 w-8 fill-current" aria-hidden />
                    </span>
                  </a>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-accent/30">
                    {t.photo ? (
                      <img src={t.photo} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-section text-lg font-bold text-primary">
                        {t.studentName.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-heading text-lg font-bold text-primary">{t.studentName}</p>
                    <p className="text-sm text-textSecondary">
                      {t.course || "B.Com"}
                      {t.batch ? ` · Batch ${t.batch}` : ""}
                    </p>
                    {typeof t.rating === "number" ? (
                      <div className="mt-1 flex items-center gap-1 text-amber-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.round(t.rating!) ? "fill-current" : "text-borderSoft"}`}
                            aria-hidden
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
                <blockquote className="mt-4 flex-1 font-display text-lg italic leading-relaxed text-primary md:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">Success story</p>
              </div>
            </motion.div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
