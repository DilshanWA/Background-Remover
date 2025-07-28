import { ChangeEvent, DragEvent } from 'react';

interface Props {
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDragDrop: (e: DragEvent<HTMLDivElement>) => void;
}

const UploadBox = ({ onFileChange, onDragDrop }: Props) => {
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => e.preventDefault();

  return (
    <div
      onDrop={onDragDrop}
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
        onChange={onFileChange}
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
  );
};

export default UploadBox;
