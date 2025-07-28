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
          <img src={require('../../public/bg _image.png')} className="w-20 h-20"/>
        </div>

      )}
    </div>
  );
};

export default ImagePreview;
