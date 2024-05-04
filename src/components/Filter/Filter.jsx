import React, { useEffect } from "react";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Filter.css";

const Filter = ({ data }) => {

  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [experience, setExperience] = useState(null);
   const keys = ["jobRole", "location", "minJdSalary"];

  useEffect(() => {
    setFilteredData([...data]);
  }, [data]);

  const maxOfMinExp = () => {
    let max = Number.MIN_VALUE;
    for (const ele of data) {
      if (ele?.minExp > max) {
        max = ele?.minExp;
      }
    }
    return max;
  };

  const fillArray = () => {
    const maxVal = maxOfMinExp();
    const filledArray = Array.from({ length: maxVal + 1 }, (_, index) => index);
    return filledArray;
};

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  useEffect(() => {
    setFilteredData(
      data?.filter((item) => {
        const filterMatches = Object.keys(filters).every(
          (key) => item[key] === filters[key]
        );
        const experienceMatches = !experience || item?.minExp === experience;

        return filterMatches && experienceMatches;
      })
    );
  }, [data, filters, experience]);

  // const separatedValues = keys.map(key => {
  //     return {
  //         label: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the label
  //         options: [...new Set(apiRes.map(obj => obj[key]))] // Use Set to remove duplicates
  //     };
  // });
  return (
    <>
      <div className="filter-container">
        {keys.map((key) => (
          <div key={key}>
            <Dropdown
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={filters[key]}
              options={[...new Set(data?.map((item) => item[key]))]?.map(
                (value) => ({
                  value: value,
                  label: value,
                })
              )}
              onChange={(e) => handleFilterChange(key, e.target.value)}
            />
          </div>
        ))}
        <Dropdown
          placeholder={"Experience"}
          value={experience}
          options={fillArray()}
          onChange={setExperience}
          isExperience
        />
        <ul>
          {filteredData?.map((item) => (
            <li key={item.jdUid}>
              <p>Company Name: {item.companyName}</p>
              <p>Job Role: {item.jobRole}</p>
              <p>Location: {item.location}</p>
              <p>Minimum Experience: {item?.minExp ? item?.minExp : 0}</p>
              <p>
                Minimum Salary:{" "}
                {item?.minJdSalary ? item?.minJdSalary + "Lac" : "NA"}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <input
        className="searchbar"
        type="text"
        placeholder="Search Company Name"
      ></input>
    </>
  );
};

export default Filter;


