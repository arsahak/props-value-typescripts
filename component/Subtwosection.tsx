import React from "react";

interface ChildComponentProps {
  sectionShow: any; // Replace 'any' with the actual type of your data
  setSectionShow: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the actual type of your data
  formValue: any;
}

type Form = {
  formValue: {
    user: string;
    password: string;
    userActive: boolean;
  };
};

const Subtwosection: React.FC<ChildComponentProps> = ({
  sectionShow,
  setSectionShow,
  formValue,
}) => {
  return (
    <div>
      Check form value{" "}
      <div>
        user name : {formValue.user}, password: {formValue.password},
        userActive: {formValue.userActive}
      </div>
    </div>
  );
};

export default Subtwosection;
