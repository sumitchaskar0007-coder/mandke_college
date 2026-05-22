import type { UploadApiResponse } from "cloudinary";
import { cloudinary } from "../config/cloudinary.js";

export function uploadBufferToCloudinary(
  buffer: Buffer,
  options: { folder: string; resource_type?: "image" | "raw" | "auto"; public_id?: string }
): Promise<UploadApiResponse> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: options.folder,
        resource_type: options.resource_type || "image",
        public_id: options.public_id,
      },
      (err, result) => {
        if (err || !result) return reject(err || new Error("Upload failed"));
        return resolve(result);
      }
    );
    stream.end(buffer);
  });
}

/** WebP thumb URL from secure_url */
export function cloudinaryThumbWebp(secureUrl: string, width = 400): string {
  return secureUrl.replace("/upload/", `/upload/c_thumb,w_${width},f_webp,q_auto/`);
}
