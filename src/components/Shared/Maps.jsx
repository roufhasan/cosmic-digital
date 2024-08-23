const Maps = () => {
  return (
    <>
      <h2 className="mb-10 mt-20 text-center text-4xl font-medium capitalize text-gray-800">
        Explore our office location
      </h2>
      <div className="relative h-0 min-h-96 overflow-hidden pb-[30%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21211.076179867152!2d-122.41479430894383!3d37.78897722476493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806415f06bdf%3A0xf048a8b5bd7b0cf3!2sGoogle%20San%20Francisco%20-%20345%20Spear%20St!5e0!3m2!1sen!2sbd!4v1724403409096!5m2!1sen!2sbd"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute left-0 top-0 h-full max-h-[500px] w-full max-w-[1920px] rounded-lg border-none"
        ></iframe>
      </div>
    </>
  );
};

export default Maps;
