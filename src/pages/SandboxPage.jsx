import React from "react";
import CountryList from "../sandbox/CountryList";
import Parent from "../sandbox/providersExample/Parent";
import MessageProvider from "../sandbox/providers/SpecialMessageProvider";

function SandboxPage() {
  return (
    <div>
      <MessageProvider>
        <Parent />
      </MessageProvider>
    </div>
  );
}

export default SandboxPage;
