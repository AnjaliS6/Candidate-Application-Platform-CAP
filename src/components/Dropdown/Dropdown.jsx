import { useState } from "react";
import "./Dropdown.css";

function Dropdown({
  value,
  options,
  onChange,
  setExperience,
  placeholder,
  isExperience,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (optionValue) => {
    onChange({ target: { value: optionValue } });
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {isExperience ? (
          <span>{value ? value : placeholder}</span>
        ) : (
          <span>
            {value
              ? options?.find((option) => option?.value === value)?.label
              : placeholder}
          </span>
        )}
        <div className="arrow-icon-container">
          |
          <svg
            height="20"
            width="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            className="css-8mmkcg"
            style={{ marginTop: "2px" }}
          >
            <path
              fill="#aaa"
              d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
            ></path>
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options
            ?.sort((a, b) => a?.value - b?.value)
            ?.map((option, idx) => {
              return isExperience ? (
                <div
                  key={idx}
                  onClick={() => {
                    setExperience(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </div>
              ) : option?.value ? (
                <div key={idx} onClick={() => handleOptionClick(option?.value)}>
                  {option?.label}
                </div>
              ) : null;
            })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
