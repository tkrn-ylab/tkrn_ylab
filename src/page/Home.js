import { Link } from "react-router-dom";
export const Home = () => {
    return (
      
      <div>
        <h1>Home</h1>
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Link to="/page3">Page3</Link>
        <br />
        <Link to="/page4">Page4</Link>
      </div>
    );
  };
  