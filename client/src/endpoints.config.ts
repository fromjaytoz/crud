const charRoute = "/character";

export default {
  allChars: process.env.REACT_APP_SERVER_URL + charRoute + "/all" ?? "",
  createChar: process.env.REACT_APP_SERVER_URL + charRoute + "/create" ?? "",
  deleteChar: process.env.REACT_APP_SERVER_URL + charRoute + "/delete" ?? "",
  updateChar: process.env.REACT_APP_SERVER_URL + charRoute + "/update" ?? "",
};
