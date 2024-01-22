import React, { FunctionComponent } from 'react';
import NavBar from '@/components/ui/navBar/NavBar';
import {ChildrenComponent} from "@/utils/charts/types";


const BaseLayout: FunctionComponent<ChildrenComponent> = ({ children }) => {

  return (
    <>
      <NavBar />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
        </main>
    </>
  );
};

export default BaseLayout;
