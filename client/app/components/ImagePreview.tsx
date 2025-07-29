import Image from 'next/image';

interface Props {
  imageUrl: string | null;
}

const ImagePreview = ({ imageUrl }: Props) => {
  return (
    <div className="rounded-3xl bg-white shadow-md p-4 flex justify-center items-center aspect-square">
      {imageUrl ? (
        <img src={imageUrl} alt="Preview" className="rounded-xl object-contain h-full" />
      ) : (
        <div className="relative w-50 h-80 my-6 bg-[url('/images/background.png')] bg-cover bg-center">
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
