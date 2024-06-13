const App = () => {
  return (
    <div>
      <p>Hello React</p>
      <ul>
        <li>sddd</li>
        <li>ggf</li>
        <li>gggh</li>
        <li>dda</li>
      </ul>
      <p>Hello {username}</p>
      <h1>Hello Tiny your test {username1}</h1>
      <img src={Urlimg} alt="cat" width={250} />
    </div>
  );
};
const Urlimg =
  "https://i.pinimg.com/originals/81/6d/a5/816da533638aee63cfbd315ea24cccbd.jpg";
const username1 = 3 + 4 + 6;
const username = "COrel Farell";
export default App;
