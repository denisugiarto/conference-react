import React, { useEffect, useState } from "react";
import Section from "../UI/Section";
import "./Schedule.scss";
import SelectButton from "./SelectButton";
import TableSchedule from "./TableSchedule";
import axios from "axios";

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    axios
      .get("/data/schedule.json")
      .then((res) => setSchedules(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Section className="bg-light" title="Программа мероприятий">
      <div className="mt-3 mt-lg-6">
        <SelectButton />
        <TableSchedule schedulesList={schedules} />
      </div>
    </Section>
  );
};

export default Schedule;
