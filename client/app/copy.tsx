'use client';

import axios from 'axios';
import { ChangeEvent, DragEvent, useState } from 'react';

const Home = () => {
  const [inputImagePreview, setInputImagePreview] = useState<string | null>(null);
  const [outputImageUrl, setOutputImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleBackgroundRemoval = async (file: File) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/remove-background`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          responseType: 'blob',
        }
      );

      const blob = new Blob([res.data], { type: 'image/png' });
      const url = URL.createObjectURL(blob);
      setOutputImageUrl(url);
    } catch (err) {
      console.error('Background removal failed:', err);
      alert('Failed to remove background');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setInputImagePreview(URL.createObjectURL(file));
      handleBackgroundRemoval(file);
    }
  };

  const handleDragDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setInputImagePreview(URL.createObjectURL(file));
      handleBackgroundRemoval(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDownload = () => {
    if (outputImageUrl) {
      const link = document.createElement('a');
      link.href = outputImageUrl;
      link.download = 'background-removed.png';
      link.click();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      {isLoading && (
        <div className="text-center text-xl font-semibold animate-pulse text-indigo-600">
          Removing background...
        </div>
      )}

      {!isLoading && outputImageUrl ? (
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full items-center">
          <div className="rounded-3xl bg-white shadow-md p-4 flex justify-center items-center aspect-square">
            <img
              src={outputImageUrl}
              alt="Processed Output"
              className="rounded-xl object-contain h-full"
              style={{ background: 'transparent' }}
            />
          </div>
          <div className="text-center">
            <a
              href={outputImageUrl}
              download="background-removed.png"
              className="px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold"
            >
              Download Image
            </a>
          </div>
        </div>
      ) : (
        !isLoading && (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full items-center">
            {/* Left preview */}
            <div className="rounded-3xl bg-white shadow-md p-4 flex justify-center items-center aspect-square">
              {inputImagePreview ? (
                <img
                  src={inputImagePreview}
                  alt="Preview"
                  className="rounded-xl object-contain h-full"
                />
              ) : (
                <div className="text-gray-400 text-center">
                  <p className="text-lg">Image Preview</p>
                </div>
              )}
            </div>

            {/* Upload Box */}
            <div
              onDrop={handleDragDrop}
              onDragOver={handleDragOver}
              className="border-2 border-dashed border-gray-300 p-6 rounded-3xl text-center shadow-md"
            >
              <p className="text-xl font-bold">Drag and Drop image</p>
              <p className="text-lg text-indigo-600 font-semibold cursor-pointer underline mt-1">
                or browse to upload.
              </p>

              <input
                type="file"
                accept="image/png, image/jpeg, image/webp"
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
              />

              <label htmlFor="fileInput">
                <div className="mt-4 inline-block px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold cursor-pointer">
                  Upload your photo
                </div>
              </label>

              <p className="text-sm text-gray-500 mt-2">
                File must be JPEG, JPG, PNG or WebP and up to 40MB
              </p>

              <div className="flex items-center justify-center mt-4 space-x-3 text-sm text-gray-600">
                <span className="flex items-center">
                  <span className="text-pink-500 text-xl mr-1">✔</span> Free to use
                </span>
                <span className="flex items-center">
                  <span className="text-pink-500 text-xl mr-1">✔</span> No credit card required
                </span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Home;
