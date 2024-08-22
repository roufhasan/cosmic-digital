const Container = ({ id, children }) => {
  return (
    <div id={id} className="mx-auto w-full max-w-[1920px] px-4 md:px-10">
      {children}
    </div>
  );
};

export default Container;
