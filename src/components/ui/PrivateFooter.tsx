import React from "react";

const PrivateFooter = () => {
  return (
    <div className="mt-10 text-gray-500 text-sm text-center">
      <p>Terms of Use | Privacy Notice</p>
      <p>© {new Date().getFullYear()} Grace Link. All rights reserved.</p>
    </div>
  );
};

export default PrivateFooter;
