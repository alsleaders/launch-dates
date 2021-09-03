import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import React, { useState, useEffect } from "react";

export function DatePicker() {
  const [list, setList] = useState([]);
  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  });

  const API = "https://api.spacexdata.com/v4/launches";

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launches").then((response) => {
      console.log(response);
    });
  });

  return (
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
      <button>Search</button>
    </div>
  );
}
