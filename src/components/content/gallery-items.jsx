const Items = ({image}) => {
  return (
    <div className="w-full h-full overflow-hidden rounded-2xl shadow-[5px_5px_8px_0_#44444455] dark:shadow-none">
      <img src={image} alt={image} className="w-full h-full object-cover"/>
    </div>
  );
};

export { Items };
