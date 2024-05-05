import { useState, useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Card from "../Card/Card";
import "./Filter.css";

const Filter = ({ data }) => {
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [experience, setExperience] = useState(0);
  const [search, setSearch] = useState("");
  const keys = [
    {
      label: "Roles",
      code: "jobRole",
    },
    {
      label: "Location",
      code: "location",
    },
    { label: "Minimum Base Pay Salary", code: "minJdSalary" },
  ];

  useEffect(() => {
    setFilteredData([...data]);
  }, [data]);

  const minExpArray = () => {
    let maxVal = Number.MIN_VALUE;
    for (const ele of data) {
      if (ele?.minExp > maxVal) {
        maxVal = ele?.minExp;
      }
    }

    const filledArray = Array.from({ length: maxVal }, (_, index) => index + 1);
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
        const searchMatches =
          !item?.companyName ||
          item?.companyName?.toLowerCase()?.includes(search?.toLowerCase());
        return filterMatches && experienceMatches && searchMatches;
      })
    );
  }, [data, filters, experience, search]);

  return (
    <>
      <div className="filter-container">
        {keys?.map((key, idx) => (
          <div key={idx}>
            <Dropdown
              placeholder={key?.label}
              value={filters[key?.code]}
              options={[...new Set(data?.map((item) => item[key?.code]))]?.map(
                (value) => ({
                  value: value,
                  label: value,
                })
              )}
              onChange={(e) => handleFilterChange(key?.code, e?.target?.value)}
            />
          </div>
        ))}
        <Dropdown
          placeholder="Experience"
          value={experience}
          options={minExpArray()}
          setExperience={setExperience}
          isExperience
        />
        <input
          autoFocus
          type="search"
          placeholder="Search Company Name"
          className="searchbox"
          value={search}
          onChange={(e) => setSearch(e?.target?.value)}
        />
        {Object?.keys(filters).length || search || experience ? (
          <button
            onClick={() => {
              setFilters({});
              setExperience(0);
              setSearch("");
            }}
            className="clear-btn"
          >
            Clear filters <span className="cross-icon">x</span>
          </button>
        ) : null}
      </div>

      <Card data={filteredData} />
    </>
  );
};

export default Filter;
