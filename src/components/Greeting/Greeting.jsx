const Greeting = () => {
  const currentHour = new Date().getHours();
  let greeting = "Good Morning!";

  if (currentHour > 12 && currentHour < 18) {
    greeting = "Good Afternoon!";
  } else if (currentHour > 18 && currentHour < 24) {
    greeting = "Good Evening!";
  }
  return <p>{greeting}</p>;
};
export default Greeting;
