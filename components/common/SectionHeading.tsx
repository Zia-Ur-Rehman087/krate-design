import IconArrow from "../icons/IconArrow";

const SectionHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="flex gap-1 items-center ">
      <IconArrow />
      <h2 className="text-base font-bold sm:text-lg">{heading}</h2>
    </div>
  );
};

export default SectionHeading;
