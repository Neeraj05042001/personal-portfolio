"use client";

import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [visitorData, setVisitorData] = useState(null);

  useEffect(() => {
    const fetchVisitor = async () => {
      const response = await fetch("/api/visitor");
      const data = await response.json();
      setVisitorData(data);
    };
    fetchVisitor();
  }, []);

  if (!visitorData) return null;

  return (
    <div>
      <p>
        {visitorData.returning ? "Welcome Back!" : "Welcome!"} You are the{" "}
        <b>{visitorData.count}th visitor</b>
      </p>
    </div>
  );
};

export default VisitorCounter;
