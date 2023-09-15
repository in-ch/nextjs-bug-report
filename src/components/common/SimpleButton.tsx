interface Props {
  text: string;
  onClick?: () => void;
}

const SimpleButton = ({ text, onClick }: Props) => {
  return (
    <button
      type="button"
      className="bg-white border border-gray-300 hover:bg-black hover:text-white hover:border-black px-4 py-1 rounded-md transition-colors duration-300 ease-in-out"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SimpleButton;
