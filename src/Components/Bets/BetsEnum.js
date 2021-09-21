import React, { useState, useEffect } from "react";
import "./Betsup.css";
import { Link } from "react-router-dom";
import Ellipse1 from "../../assets/images/Ellipse1.png";
import { Button } from "antd";

const BetsEnum = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedOptions, setSelectedOptions] = useState({});

  const [selectedRange, setSelectedRange] = useState({});

  const handleOptions = (data) => {
    console.log(data);
    if (!data.options || data.options.length === 0) setDisable(false);
    setSelectedOptions({ ...data });
  };

  const handleRange = (data) => {
    setDisable(false);
    setSelectedRange({ ...data });
  };

  const [disable, setDisable] = useState(true);

  const queryData = props.location.query;

  useEffect(() => {
    if (
      queryData.data?.options?.length === 0 ||
      queryData.data?.bets?.length === 0
    ) {
      setDisable(false);
    }
  }, []);

  console.log(selectedOptions, selectedRange);

  return (
    <div className="Dashboard">
      <>
        <div className="betsup-flex">
          <div className="betset-card-flex">
            <div className="bet-flex">
              <div className="tearm-icon">
                <img src={Ellipse1} />
              </div>
              <div>
                <div>{queryData.label}</div>
              </div>
            </div>
            <div className="rating">
              <div className="bet-rate">
                <div className="rate-font">2 X</div>
              </div>
            </div>
          </div>
        </div>
        <div className="options-cont">
          {queryData.data.category === "NESTED_BET" ? (
            <>
              {queryData.data.bets &&
                queryData.data.bets.map((ele) => (
                  <div
                    className={
                      selectedOptions._id === ele._id
                        ? "options-sub-cont active"
                        : "options-sub-cont"
                    }
                    onClick={() => {
                      handleOptions(ele);
                    }}
                  >
                    {ele.range.from} to {ele.range.to} Overs
                  </div>
                ))}
            </>
          ) : (
            <>
              {queryData.data.options &&
                queryData.data.options.map((ele) => (
                  <div
                    className={
                      selectedOptions._id === ele._id
                        ? "options-sub-cont active"
                        : "options-sub-cont"
                    }
                    onClick={() => {
                      handleOptions(ele);
                    }}
                  >
                    {ele.label}
                  </div>
                ))}
            </>
          )}
        </div>
        {selectedOptions.options && selectedOptions.options.length > 0 && (
          <div>
            <h2>Select Runs range</h2>
            <div className="options-cont">
              {selectedOptions.options &&
                selectedOptions.options.length > 0 &&
                selectedOptions.options.map((ele) => (
                  <div
                    className={
                      selectedRange._id === ele._id
                        ? "options-sub-cont active"
                        : "options-sub-cont"
                    }
                    onClick={() => {
                      handleRange(ele);
                    }}
                  >
                    {ele.label}
                  </div>
                ))}
            </div>
          </div>
        )}
        <div style={{ textAlign: "center", paddingTop: "30px" }}>
          <Button
            style={{
              height: "50px",
              borderRadius: "10px",
              padding: "0 40px",
              fontSize: "20px",
            }}
            type="primary"
            disabled={disable}
          >
            <Link
              to={{
                pathname: `/set-bet/${props.match.params.id}`,
                query: {
                  title: queryData.title,
                  data: queryData.data,
                  apiData: {
                    betType: queryData.title,
                    range:
                      queryData.data.category === "NESTED_BET"
                        ? selectedOptions._id
                        : "",
                    key:
                      queryData.data.category === "NESTED_BET"
                        ? selectedRange.key
                        : selectedOptions._id,
                    value: "",
                    label: queryData.label,
                  },
                  label: queryData.label,
                },
              }}
            >
              Next
            </Link>
          </Button>
        </div>
      </>
    </div>
  );
};

export default BetsEnum;
