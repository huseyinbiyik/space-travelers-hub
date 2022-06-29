const missonsApiUrl = "https://api.spacexdata.com/v3/missions";

const SHOW_MISSIONS = "space-travelers-hub/missions/missions";

export const showMissions = (data) => ({
  type: SHOW_MISSIONS,
  data,
});

const filterMissions = (data) => {
  const missions = data.map((mission) => ({
    id: mission.id,
    mission_name: mission.mission_name,
    description: mission.description,
    img: mission.flickr_images[0],
  }));
  return showMissions(missions);
};