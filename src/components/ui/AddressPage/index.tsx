import "./Address.scss";

interface IProps {
  address: string;
  title: string;
  color?: "white" | "cyan";
}

const AddressPage = ({ address, title, color = "cyan" }: IProps) => {
  return (
    <div className="text-center mb-10">
      <h2
        className={`text-3xl font-bold ${
          color === "white"
            ? "text-[var(--color-white)]"
            : "text-[var(--color-primary)]"
        }`}
      >
        {address}
      </h2>
      <p className="text-[var(--color-gray-dark)] mt-2 text-sm">{title}</p>
      <div className="w-16 h-1 bg-[var(--color-primary)] rounded-full mx-auto mt-4" />
    </div>
  );
};

export default AddressPage;
