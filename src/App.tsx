import { Header } from "./components/Header";
import { TodoBox } from "./components/TodoBox";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="wrapper">
          <TodoBox />
        </div>
      </main>
    </div>
  );
}
