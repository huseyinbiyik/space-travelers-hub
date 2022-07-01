import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import store from "../redux/configureStore";
import Missions from "./../components/Missions";
import missionsReducer, {
  showMissions,
  joinMission,
  leaveMission,
} from "../redux/missions/missions";
import testDataMissions from "./testdatamissions";

describe("Mission", () => {
  it("should render mission component", () => {
    const missions = render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );
    expect(Missions).toMatchSnapshot();
  });

  it("Should update the state with API data", () => {
    expect(
      missionsReducer(testDataMissions, showMissions(testDataMissions))
    ).toEqual(testDataMissions);
  });

  it("Should update the state with correct id to reserved: true", () => {
    const mission_id = "9D1B7E0";
    expect(missionsReducer(testDataMissions, joinMission(mission_id))).toEqual(
      testDataMissions.map((d) =>
        d.id === mission_id ? { ...d, reserved: true } : d
      )
    );
  });

  it("Should update the state with correct id to reserved: false", () => {
    const mission_id = "F4F83DE";
    expect(missionsReducer(testDataMissions, leaveMission(mission_id))).toEqual(
      testDataMissions.map((d) =>
        d.id === mission_id ? { ...d, reserved: false } : d
      )
    );
  });
});
