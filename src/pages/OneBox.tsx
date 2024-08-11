import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import SubView from "../components/SubView";
import MainPage from "../components/MainPage";


function OneBox() {
    const Navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    useEffect(()=>{
        if(!token){
            Navigate("/login");
        }
        if(token){
            localStorage.setItem("token", `Bearer ${token}`);
        }
    }, [token]);

    const [selectedComponenet, setSelectedComponenet] =useState(null);

    const handleMenuItemClick = (path:any) => {
        setSelectedComponenet(path);
    }

    if (selectedComponenet === null) {
        return (
          <div className="h-screen w-screen dark:bg-black bg-white pl-14">
            <SideBar onMenuItemClick={handleMenuItemClick} />
            <TopBar />
            <SubView />
          </div>
        );
      }
    
      return (
        <div className="h-screen w-screen dark:bg-black bg-white pl-14">
          <SideBar onMenuItemClick={handleMenuItemClick} />
          <TopBar />
          <div>
            {/* Render the selected component */}
            {selectedComponenet === "/" && <SubView />}
            {selectedComponenet === "/search" && <SubView />}
            {selectedComponenet === "/mail" && <SubView />}
            {selectedComponenet === "/send" && <SubView />}
            {selectedComponenet === "/stack" && <SubView />}
            {selectedComponenet === "/inbox" && <MainPage />}
            {selectedComponenet === "/stacks" && <SubView />}
          </div>
        </div>
      )

}

export default OneBox;

