const missonsApiUrl = "https://api.spacexdata.com/v3/missions";

const SHOW_MISSIONS = "space-travelers-hub/missions/missions";

export const showMissions = (data) => ({
  type: SHOW_MISSIONS,
  data,
});