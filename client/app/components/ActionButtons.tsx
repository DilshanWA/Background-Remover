import { ChangeEvent, DragEvent } from 'react';

interface Props {
  outputImageUrl: string;
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ActionButtons = ({ outputImageUrl, onFileChange }: Props) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = outputImageUrl;
    link.download = 'background-removed.png';
    link.click();
  };

  return (
    <div className="flex-1 text-center md:text-left">
      <div className="flex justify-center md:justify-start gap-4">
        <button
          onClick={handleDownload}
          className="min-w-[140px] h-11 px-6 py-2 bg-gray-200 text-black rounded-full font-semibold text-sm"
        >
          Download
        </button>

        {/* Hidden file input */}
        <label className="min-w-[140px] h-11 px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold text-sm flex items-center justify-center cursor-pointer">
          Add more file
          <input type="file" onChange={onFileChange} className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default ActionButtons;
