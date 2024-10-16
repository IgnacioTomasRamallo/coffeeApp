export const Button = (props) => {
  const { textButton, buttonActive, className} = props;

  return (
    <>
      {buttonActive ? (
        <button className={className}>{textButton}</button>
      ) : (
        <button className={'text-[#FEF7EE]'}>{textButton}</button>
      )}
    </>
  );
};
