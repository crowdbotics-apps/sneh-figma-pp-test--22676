import axios from "axios"
import {
  CONNECTOR_SNEH_USERNAME,
  CONNECTOR_SNEH_PASSWORD
} from "react-native-dotenv"
const connectorSneh = axios.create({
  baseURL: "https://abc.com",
  auth: {
    username: CONNECTOR_SNEH_USERNAME,
    password: CONNECTOR_SNEH_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function connector_sneh_get_details_read(payload) {
  return connectorSneh.get(`/details`, { params: { id: payload.id } })
}
export const apiService = { connector_sneh_get_details_read }
