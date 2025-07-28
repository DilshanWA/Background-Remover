interface Props {
  imageUrl: string | null;
}

const ImagePreview = ({ imageUrl }: Props) => {
  return (
    <div className="rounded-3xl bg-white shadow-md p-4 flex justify-center items-center aspect-square">
      {imageUrl ? (
        <img src={imageUrl} alt="Preview" className="rounded-xl object-contain h-full" />
      ) : (
        <div className="text-gray-400 text-center">
          <p className="text-lg">Image Preview</p>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
