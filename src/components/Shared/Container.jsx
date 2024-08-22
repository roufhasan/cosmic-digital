const Container = ({ children }) => {
  return (
    <section className="mx-auto w-full max-w-[1920px] px-4 sm:px-2 md:px-10">
      {children}
    </section>
  );
};

export default Container;
