import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const connector_sneh_get_details_read = createAsyncThunk(
  "connector_sneh_response_get_Details/connector_sneh_get_details_read",
  async payload => {
    const response = await apiService.connector_sneh_get_details_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const connector_sneh_response_get_DetailsSlice = createSlice({
  name: "connector_sneh_response_get_Details",
  initialState,
  reducers: {},
  extraReducers: {
    [connector_sneh_get_details_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [connector_sneh_get_details_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [connector_sneh_get_details_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  connector_sneh_get_details_read,
  slice: connector_sneh_response_get_DetailsSlice
}
