import HourGlass from "../../assets/hourglass.svg";
import CheckMark from "../../assets/checkMark.svg";
import LightningBolt from "../../assets/lightning.svg";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="cardMain-container">
      {data?.map((card, idx) => (
        <div className="card-container" key={idx}>
          <div className="card-badge">
            <img src={HourGlass} alt="hourglass-icon" />
            <span>Posted 13 days ago</span>
          </div>
          <div className="card-header">
            <img className="logo" src={card?.logoUrl} alt="logo" />
            <div className="card-header-content">
              <span className="card-company-name">{card?.companyName}</span>
              <span className="card-job-roles">{card?.jobRole}</span>
              <span className="card-location">{card?.location}</span>
            </div>
          </div>

          <div>
            <div className="salary-container">
              <span>
                Estimated Salary: {card?.salaryCurrencyCode}
                {card?.minJdSalary ? card?.minJdSalary : 0} -{" "}
                {card?.maxJdSalary}
              </span>
              <img src={CheckMark} alt="check-icon" />
            </div>
            <span>About Company:</span>
            <div className="about-us">About us</div>
            <span>{card?.jobDetailsFromCompany}</span>
            <div className="experience-container">
              <span style={{ color: "gray" }}>Minimum Experience</span>
              <span style={{ color: "#000000a3" }}>
                {card?.minExp ? card?.minExp : 0} years
              </span>
            </div>
          </div>
          <div>
            <a
              className="easy-apply-btn"
              href="https://weekday.works"
              target="_blank"
            >
              <img src={LightningBolt} alt="lightning-icon" />
              Easy Apply
            </a>
            <a className="unlock-referral-btn" href="#">
              Unlock referral asks
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
