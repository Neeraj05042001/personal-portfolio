"use client";

import { useState } from "react";
import ButtonCopy from "../smoothui/button-copy";
import { ConfettiFireworks } from "./confettiFire";

const CopyButton = () => {
 
  const handleCopy = async () => {
    // Simulate async copy operation
    await navigator.clipboard.writeText("nk05661@gmail.com");
   
    
  };

 
  return (
    <div className="flex  items-center justify-center gap-3  ">
      <ConfettiFireworks>
        <ButtonCopy duration={2000} loadingDuration={1000} onCopy={handleCopy} />
      <h4 className="">nk05661@gmail.com</h4>
      </ConfettiFireworks>
    </div>
  );
};

export default CopyButton;
