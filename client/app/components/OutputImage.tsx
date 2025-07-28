interface Props {
  imageUrl: string;
}

const OutputImage = ({ imageUrl }: Props) => {
  return (
    <div
      className="rounded-3xl bg-gray-100 shadow-md p-6 flex justify-center items-center aspect-square w-full max-w-sm"
      style={{
        backgroundImage: `
          linear-gradient(45deg, #e5e7eb 25%, transparent 25%),
          linear-gradient(-45deg, #e5e7eb 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #e5e7eb 75%),
          linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)`,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        backgroundColor: '#ffffff'
      }}
    >
      <img
        src={imageUrl}
        alt="Processed Output"
        className="rounded-xl object-contain h-full"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};

export default OutputImage;
