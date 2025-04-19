import React from "react";
import Loading from "./Loading.js";
import Tours from "./Tours.js";
import "../styles/App.css";

const App = () => {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return <main id="main">{isLoading ? <Loading /> : <Tours />}</main>;
};
export default App;
