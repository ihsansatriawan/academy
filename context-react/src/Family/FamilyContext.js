import React from "react";

const FamilyContext = React.createContext({
  name: "default",
  changeName: () => {}
});

export const FamilyProvider = FamilyContext.Provider;
export const FamilyConsumer = FamilyContext.Consumer;
