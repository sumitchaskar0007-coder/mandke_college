import multer from "multer";

const maxImage = 10 * 1024 * 1024;
const maxPdf = 25 * 1024 * 1024;

export const uploadImagesMemory = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: maxImage, files: 24 },
  fileFilter: (_req, file, cb) => {
    const ok = /^(image\/jpeg|image\/jpg|image\/png|image\/webp)$/i.test(file.mimetype);
    if (!ok) return cb(new Error("Only JPG, PNG, and WebP images are allowed"));
    cb(null, true);
  },
});

export const uploadPdfMemory = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: maxPdf },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype !== "application/pdf") return cb(new Error("Only PDF files are allowed"));
    cb(null, true);
  },
});
