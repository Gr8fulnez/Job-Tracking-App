import Wrapper from "../assets/css/wrappers/SmallSidebar.js";
import {FaTimes} from 'react-icons/fa'
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";


const SmallSidebar = () => {
    const {showSidebar, toggleSidebar} = useAppContext()
    return <Wrapper>
        <div
            className={
                showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}>
            <div className="content">
                <button type="button" className="close-btn" onClick={() => { console.log('toggle sidebar') }}>
                 <FaTimes/>   
                </button>
                <header>
                    <Logo />
                </header>
               
            </div>
            </div>
    </Wrapper>
}

export default SmallSidebar