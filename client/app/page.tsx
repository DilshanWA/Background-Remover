'use client';

import axios from 'axios';
import { useState, ChangeEvent, DragEvent } from 'react';
import ImagePreview from './components/ImagePreview';
import UploadBox from './components/UploadBox';
import OutputImage from './components/OutputImage';
import ActionButtons from './components/ActionButtons';

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

  const processFile = (file: File) => {
    setInputImagePreview(URL.createObjectURL(file));
    handleBackgroundRemoval(file);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDragDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      {isLoading && (
        <div className="text-center text-xl font-semibold animate-pulse text-indigo-600">
          Removing background...
        </div>
      )}

      {!isLoading && outputImageUrl ? (
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto p-6 items-center">
          <OutputImage imageUrl={outputImageUrl} />
          <ActionButtons outputImageUrl={outputImageUrl} />
        </div>
      ) : (
        !isLoading && (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full items-center">
            <ImagePreview imageUrl={inputImagePreview} />
            <UploadBox
              onFileChange={handleFileChange}
              onDragDrop={handleDragDrop}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Home;
