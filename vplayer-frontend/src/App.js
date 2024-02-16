import HomePage from "./ui/features/homepage/HomePage";

function App() {
  let videos = []; // if recieved from backend application otherwise uses stub assets data in th homepage
  return (
    <div>
      <HomePage data={videos}></HomePage>
    </div>
  );
}
export default App;
