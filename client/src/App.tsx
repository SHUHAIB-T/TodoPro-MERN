import { Routes, Route } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </Provider>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "black",
              color: "white",
            },
          },
          error: {
            style: {
              background: "black",
              color: "white",
            },
          },
        }}
      />
    </>
  );
}

export default App;
