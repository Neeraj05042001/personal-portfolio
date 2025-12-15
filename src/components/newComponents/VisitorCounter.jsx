"use client";

import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [visitorData, setVisitorData] = useState(null);

  useEffect(() => {
    const fetchVisitor = async () => {
      const response = await fetch("../../app/api/visitor");
      const data = await response.json();
      setVisitorData(data);
    };
    fetchVisitor();
  }, []);

  console.log(visitorData);
  if (!visitorData) return null;
  return (
    <div className="">
      <p>
        {visitorData.returning ? "Welcome Back" : "Welcome!"} You are the
        <b>{data.count}th visitor</b>
      </p>
    </div>
  );
};

export default VisitorCounter;
