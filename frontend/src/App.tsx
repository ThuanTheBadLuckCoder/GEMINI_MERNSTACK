
import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import { useAuth } from "./context/AuthContext";
function App() {
  const auth = useAuth();

  return (
    <main>
      <Routes>
          <Route path="/chat" element={<Chat />} />
      </Routes>
    </main>
  );
}

export default App;