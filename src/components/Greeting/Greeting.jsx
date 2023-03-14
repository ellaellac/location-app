import "./Greeting.scss";
import morningImg from "../../assets/morning.png";
import afterrnoonImg from "../../assets/afternoon.png";
import eveningImg from "../../assets/sleeping.png";

const Greeting = () => {
  const currentHour = new Date().getHours();

  let greeting = "Good Morning!";
  let greetingImg = morningImg;

  if (currentHour > 12 && currentHour < 18) {
    greeting = "Good Afternoon!";
    greetingImg = afterrnoonImg;
  } else if (currentHour > 18 && currentHour < 24) {
    greeting = "Good Evening!";
    greetingImg = eveningImg;
  }
  return (
    <div className="greeting">
      <p className="greeting__text">{greeting}</p>
      <img className="greeting__img" src={greetingImg} alt={greetingImg} />
    </div>
  );
};
export default Greeting;
