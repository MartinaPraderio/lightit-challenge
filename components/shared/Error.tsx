interface Props {
  title?: string;
}

const Error = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl text-red-500">{title}</h1>
      </div>
    </div>
  );
};

export default Error;
