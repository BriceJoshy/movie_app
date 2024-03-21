import "./App.css";

const App = () => {
  const name = null;
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>annachi {isNameShowing ? name : "someone"}</h1>

      {name ? (
        <>test1</>
      ) : (
        <>
          <h1>test2</h1>
          <h1>test2</h1>
        </>
      )}
    </div>
  );
};

export default App;
