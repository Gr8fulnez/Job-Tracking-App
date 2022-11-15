import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "../components/Logo.js";
import Wrapper from "../assets/css/wrappers/BigSidebar";

const BigSidebar = () => {
    const {showSidebar} = useAppContext()
  return (
    <Wrapper>
          <div
              className={
                  showSidebar ? "sidebar-container" : 'sidebar-container'
              }
          >
              <div className="content">
                  <header>
                      <Logo />
                  </header>
                  <NavLinks/>
              </div>

          </div>

    </Wrapper>
  );
};
export default BigSidebar;
