import React from "react";
import { HelmetProvider } from "react-helmet-async";
import GeneralLayout from "../layouts/GeneralLayout";

const RootProvider = ({ children }) => {
  return (
    <HelmetProvider>
      <GeneralLayout>
        {children}
      </GeneralLayout>


    </HelmetProvider>
  );
};

export default RootProvider;
