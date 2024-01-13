"use client";
import React, { useState } from "react";
import Subonesection from "./Subonesection";
import Subtwosection from "./Subtwosection";
import DarkMap from "./DarkMap";

const Mainform: React.FC = () => {
  const [sectionShow, setSectionShow] = useState(true);
  const [formValue, setFormValue] = useState({
    user: "",
    password: "",
    userActive: false,
  });

  return (
    <div>
      {sectionShow ? (
        <Subonesection
          sectionShow={sectionShow}
          setSectionShow={setSectionShow}
          formValue={formValue}
          setFormValue={setFormValue}
        />
      ) : (
        <Subtwosection
          sectionShow={sectionShow}
          setSectionShow={setSectionShow}
          formValue={formValue}
        />
      )}
    </div>
  );
};

export default Mainform;
