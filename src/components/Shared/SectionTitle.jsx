const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="my-32 text-center">
      <p className="text-sm font-semibold uppercase text-lime-500">
        {subTitle}
      </p>
      <h2 className="mt-2.5 text-4xl font-semibold capitalize text-gray-800">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
