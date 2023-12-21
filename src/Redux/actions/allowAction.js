import { setConciliation } from "../slices/allowConciliationSlice";

export const allowAction = (save) => (dispatch) => {
  dispatch(setConciliation(save));
};
