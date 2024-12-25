"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ImageInput = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const name = "image";

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="mb-4">
      <Label htmlFor={name} className="capitalize mb-2">
        Image
      </Label>
      <div className="flex-col">
        <Input
          id={name}
          name={name}
          type="file"
          required
          accept="image/*"
          className="max-w-xs"
          onChange={handleImageChange}
        />
        {preview && (
          <div className="mt-4">
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 rounded-md object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageInput;
