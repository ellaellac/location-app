import "./Button.scss";

const Button = ({ className, onClick, BtnImg }) => {
  return (
    <button className={className} onClick={onClick}>
      <img className="button__img" src={BtnImg} alt={BtnImg} />
    </button>
  );
};
export default Button;
