import { createClient } from "@supabase/supabase-js";

const bucket = "naptastic";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;

const supabase = createClient(url, key);

export const uploadImage = async (image: File) => {
  const sanitizeFileName = (name: string) =>
    name.replace(/[^a-zA-Z0-9._-]/g, "_");

  const timestamp = Date.now();
  const newName = `${timestamp}-${sanitizeFileName(image.name)}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: "3600" });

  if (error) {
    console.error("Upload Error:", error.message);
    throw new Error("Image upload failed: " + error.message);
  }

  if (!data) throw new Error("Image upload failed");

  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
