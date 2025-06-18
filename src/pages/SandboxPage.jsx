import React from "react";
import CountryList from "../sandbox/CountryList";
import Parent from "../sandbox/providersExample/Parent";
import MessageProvider from "../sandbox/providers/SpecialMessageProvider";
import { useCurrentUser } from "../users/providers/UserProvider";
import { Navigate } from "react-router-dom";

function SandboxPage() {
  const { user } = useCurrentUser();

  if (!user) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div>
      <MessageProvider>
        <Parent />
      </MessageProvider>
    </div>
  );
}

export default SandboxPage;
