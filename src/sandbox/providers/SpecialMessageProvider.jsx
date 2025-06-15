import { createContext } from "react";

//step 1: create the context
const MessageContext = createContext();

//step 2: create the provider
export default function MessageProvider({ children }) {
  const specialMessage = "SPECIAL";

  return <MessageContext.Provider>{children}</MessageContext.Provider>;
}

//step 3: create custom hook for using the context (optional)
