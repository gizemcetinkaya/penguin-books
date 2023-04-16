interface NotFoundProps {
  message?: string;
}

const NotFound = ({ message = "Page not found" }: NotFoundProps) => {
  return (
    <div className="flex w-full bg-gray-100">
      <div className="bg-white w-full mb-4">
        <p className="text-md font-medium">{message}</p>
      </div>
    </div>
  );
};

export default NotFound;