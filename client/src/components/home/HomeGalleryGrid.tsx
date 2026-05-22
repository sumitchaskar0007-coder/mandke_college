import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export type GalleryItem = {
  _id: string;
  thumbnailUrl?: string;
  imageUrl?: string;
  category?: string;
  eventName?: string;
  title?: string;
  date?: string;
};

export type GalleryCategory = {
  label: string;
  value: string;
};

const DEFAULT_CATEGORIES: GalleryCategory[] = [
  { label: "Campus activities", value: "campus-activities" },
  { label: "Student achievements", value: "student-achievements" },
  { label: "Workshops", value: "workshops" },
  { label: "Celebrations", value: "celebrations" },
];

function optimizeImageUrl(url: string): string {
  if (!url || !url.includes("res.cloudinary.com")) return url;
  if (url.includes("/upload/")) {
    return url.replace("/upload/", "/upload/c_limit,w_900,f_webp,q_auto/");
  }
  return url;
}

export function HomeGalleryGrid({ items, categories = DEFAULT_CATEGORIES }: { items: GalleryItem[]; categories?: GalleryCategory[] }) {
  if (!items.length) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, i) => (
          <motion.div
            key={category.value}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="flex min-h-[220px] items-end rounded-btn bg-gradient-to-br from-primary via-[#0b2556] to-accent p-4 shadow-card"
          >
            <p className="font-heading text-lg font-bold text-white">{category.label}</p>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, i) => (
          <motion.div
            key={category.value}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            viewport={{ once: true }}
            className="rounded-btn border border-borderSoft bg-white p-4 shadow-card"
          >
            <p className="font-heading text-base font-bold text-primary">{category.label}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">
              {items.filter((item) => item.category === category.value).length} moments
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 columns-2 gap-4 sm:columns-3 md:columns-4">
        {items.map((g, i) => {
          const src = optimizeImageUrl(g.thumbnailUrl || g.imageUrl || "");
          const label = g.title || g.eventName || "Campus moment";
          return (
            <motion.div
              key={g._id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.04, 0.3) }}
              viewport={{ once: true }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-btn bg-dark shadow-card"
            >
              <img
                src={src}
                alt={label}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-heading text-sm font-bold text-white md:text-base">{label}</p>
                {g.date ? (
                  <p className="text-xs text-white/80">{new Date(g.date).toLocaleDateString()}</p>
                ) : null}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function GallerySectionFooter() {
  return (
    <div className="mt-10 flex justify-center">
      <Link
        to="/gallery"
        className="inline-flex min-h-[48px] items-center gap-2 rounded-btn border-2 border-primary bg-white px-8 py-3.5 text-base font-bold text-primary shadow-card transition hover:bg-section"
      >
        Open interactive gallery <ExternalLink className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}
