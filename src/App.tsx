import "./App.css";
import Card from "./components/card/Card";

function App() {
  return (
    <main>
      <header>
        <h1>Онлайн-подбор средств для лица</h1>
        <div>
          <h2>
            Пройдите короткий тест и получите список наиболее подходящих для вас
            косметических продуктов
          </h2>
        </div>
      </header>
      <Card></Card>
    </main>
  );
}

export default App;
