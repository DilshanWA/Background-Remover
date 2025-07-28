interface Props {
  imageUrl: string | null;
}

const ImagePreview = ({ imageUrl }: Props) => {
  return (
    <div className="rounded-3xl bg-white shadow-md p-4 flex justify-center items-center aspect-square">
      {imageUrl ? (
        <img src={imageUrl} alt="Preview" className="rounded-xl object-contain h-full" />
      ) : (
        <div className="text-center my-6">
          <p className="text-3xl font-extrabold text-gray-800">
            Remove Image <br /> Background
          </p>
          <p className="text-gray-500 text-lg mt-2">
            100% Automatically and 
            <span className="bg-yellow-300 text-black font-semibold px-2 py-1 rounded ml-2">
              Free
            </span>
          </p>
        </div>

      )}
    </div>
  );
};

export default ImagePreview;
