import React, { useState, useEffect } from "react";
import axios from "axios";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import ListItem from "./ListItem";

export function DatePicker() {
  const [showList, setShowList] = useState(false);
  const [limit, setLimit] = useState("");
  const [list, setList] = useState([]);
  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  });
  const API = `https://api.spacexdata.com/v3/launches${limit}`;

  const toggleShow = () => setShowList(!showList);
  const getData = () => {
    axios.get(API).then((result) => {
      console.log(result.data);
      setList(result.data);
    }, []);
  };

  const search = () => {
    toggleShow();
    getData();
  };

  const reset = () => {
    setLimit("");
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
              minDate={addDays(new Date(), -10)}
              maxDate={new Date()}
              direction="vertical"
              scroll={{ enabled: true }}
              ranges={[state.selection]}
            />
          </div>
          <button className="button" onClick={() => search()}>
            Search
          </button>
        </div>
      ) : null}
      {showList ? (
        <div>
          {list.map((item) => {
            return (
              <>
                <ListItem name={item.mission_name} />
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
