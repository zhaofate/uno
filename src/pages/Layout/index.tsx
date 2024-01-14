import { Outlet } from "react-router-dom";
import LayoutSvg from "../../components/layouts/LayoutSvg";
import "./index.scss";

const Layout = () => {
  return (
    <>
      <div className="contain">
        <div className="left">
          <LayoutSvg />
        </div>
        <div className="right">
          <div className="form">
          <svg viewBox="0 0 200 30">
            <text x="0" y="75%">
              {" "}
              UNO{" "}
            </text>
          </svg>
          <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
