import React from "react";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Filter.css";

const Filter = () => {
  const filterData = [
    {
      name: "Number Of Employee",
      options: [
        "1-10",
        "11-20",
        "21-50",
        "51-100",
        "101-200",
        "201-500",
        "500+",
      ],
    },
    {
      name: "Experience",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    { name: "Remote", options: ["Remote", "Hybrid", "In-office"] },
    {
      name: "Minimum Base Pay Salary",
      options: ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"],
    },
  ];

  /*{ name: 'Roles', options: [{category: 'ENGINEERING', options: ['Backend', 'Frontend', 'IOS', 'Flutter', 'React Native', 'Android', 'Tech Lead', 'Data Engineer', 'Data science', 'Computer Vision', 'Nlp', 'Deep-Learning']},
      {category: 'DESIGN', options: ['Graphic Designer']},
      {category: 'PRODUCT', options: ['Product Manager']},
      {category: 'OPERATIONS', options: ['Operation Manager', 'Founder Office / Chief of Staff']},
      {category: 'SALES', options: ['Development Representative', 'Account Executive', 'Account Manager']},
      {category: 'MARKETING', options: ['Digital Marketing', 'Growth Hacker']},
      {category: 'HR', opeions: ['Hr']},
      {category: 'FINANCE', options: ['finance']}] } */

  const [filters, setFilters] = useState({});

  const handleFilterChange = (event, filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: event.target.value,
    }));
  };

  return (
    <div className="filter-container">
      {filterData.map((filter) => (
        <div key={filter.name}>
          <Dropdown
            placeholder={filter.name}
            value={filters[filter.name]}
            options={filter.options.map((option) => ({
              value: option,
              label: option,
            }))}
            onChange={(e) => handleFilterChange(e, filter.name)}
          />
        </div>
      ))}
      <input
        className="searchbar"
        type="text"
        placeholder="Search Company Name"
      ></input>
    </div>
  );
};

export default Filter;

/*  {option.category ? <div> 
                <span>{option.category}</span>
                {suboptions.map((suboption) => (
                  <div key={option.value}>{option.label}</div>
                ))} */
