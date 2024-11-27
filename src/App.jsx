import "./App.scss";

function App() {
  return (
    <>
      <main>
        <div></div>
        <div className="logo">
          <h1>白金瑪麗</h1>
        </div>

        <h2>已蒐集到店家清單</h2>

        <p>10/12 Bar Mood</p>
        <p>11/29 To Infinity and Beyond</p>
        <div className="main-btn">
          <button className="btn1">點這集點</button>
        </div>
        <div className="three-btn">
          <button className="btn2">LINE POINTS 兌換</button>
          <button className="btn3">活動店家</button>
          <button className="btn4">已集點店家</button>
        </div>
      </main>
      <footer>
        <img src="/footer.png" alt="footer" className="footer" />
      </footer>
    </>
  );
}

export default App;
