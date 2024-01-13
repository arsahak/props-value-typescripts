"use client";
import React from "react";

interface ChildComponentProps {
  sectionShow: any;
  setSectionShow: React.Dispatch<React.SetStateAction<any>>;
  formValue: any;
  setFormValue: React.Dispatch<React.SetStateAction<any>>;
}

type Form = {
  formValue: {
    user: string;
    password: string;
    userActive: boolean;
  };
};

const Subonesection: React.FC<ChildComponentProps> = ({
  sectionShow,
  setSectionShow,
  formValue,
  setFormValue,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Now you can use formData.inputValue and formData.checkboxValue as needed
    console.log("Form Data 42", formValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          User:
          <input
            type="text"
            name="user"
            value={formValue.user}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Password:
          <input
            type="text"
            name="password"
            value={formValue.password}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Checkbox:
          <input
            type="checkbox"
            name="userActive"
            checked={formValue.userActive}
            onChange={handleCheckboxChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setSectionShow(!sectionShow)}>next</button>
    </div>
  );
};

export default Subonesection;
