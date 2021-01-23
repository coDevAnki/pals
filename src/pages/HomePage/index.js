import React from "react";
import { ReactComponent as YourSvg } from "../../assets/undraw_people_search_wctu.svg";
import { useAuthState } from "../../context";
import { ContactsUI } from "../../layout";

const HomePage = () => {
  const authState = useAuthState();
  return (
    <div>
      {authState.currentUser ? (
        <ContactsUI />
      ) : (
        <>
          <YourSvg style={{ width: "500px", height: "500px" }} />
          <div>not logged in</div>
        </>
      )}
    </div>
  );
};

export default HomePage;
