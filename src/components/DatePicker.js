import React, { useState, useEffect } from "react";
import axios from "axios";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import ListItem from "./ListItem";

export function DatePicker() {
  const [showList, setShowList] = useState(false);
  const [limit, setLimit] = useState("");
  const [list, setList] = useState([]);
  const [dates, setDates] = useState("");
  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  });
  const API = `https://api.spacexdata.com/v3/launches${limit}${dates}`;

  const toggleShow = () => setShowList(!showList);
  const getData = () => {
    axios.get(API).then((result) => {
      console.log(result.data);
      setList(result.data);
    }, []);
  };

  const handleDates = (state) => {
    let formattedStartDate = state.selection.startDate
      .toISOString()
      .split("T")[0];
    let formattedEndDate = state.selection.endDate.toISOString().split("T")[0];
    console.log(formattedStartDate);
    console.log(formattedEndDate);
    setDates(`start=${formattedStartDate}&end=${formattedEndDate}`);
    console.log({ dates });
    if (limit.length > 0 && dates.length > 0) {
      setDates(`&${dates}`);
    }
    if (limit.length < 1) {
      setDates("?" + dates);
    }
  };

  const search = (state) => {
    handleDates(state);
    toggleShow();
    console.log(API);
    getData();
  };

  const reset = () => {
    setLimit("");
    setDates("");
    toggleShow();
  };

  useEffect(() => {
    setShowList(false);
    //getData();
  }, []);

  return (
    <div>
      {!showList ? (
        <div>
          <button
            alt="This is a good idea because there might be a lot of results"
            className="button"
            onClick={() => setLimit("?limit=10")}
          >
            Limit 10
          </button>
          <div>
            <DateRangePicker
              onChange={(item) => setState({ ...state, ...item })}
              months={1}
              minDate={addDays(new Date(), -300)}
              maxDate={addDays(new Date(), 900)}
              direction="vertical"
              scroll={{ enabled: true }}
              ranges={[state.selection]}
            />
          </div>
          <button className="button" onClick={() => search(state)}>
            Search
          </button>
        </div>
      ) : null}
      {showList ? (
        <div>
          {list.map((item) => {
            return (
              <>
                <ListItem key={item.flight_number} name={item.mission_name} />
              </>
            );
          })}
          <button className="button" onClick={() => reset()}>
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}
