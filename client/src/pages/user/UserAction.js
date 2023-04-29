import { loginUser } from "../../utils/AxiosHelper";
import { toast } from "react-toastify";

export const UserLogin = (frmDt) => async (dispatch) => {
 
  
  const { status, message } = await loginUser(frmDt);;

  console.log(status, message)
  //show react toastify
  toast[status](message);



};


// export const getAdminUserProfile =  () => async (dispatch) => {
//   //axios to get user with session token

//   const {status, admin} = await fetchAdminProfile()
//   if(status === "success" && admin?._id){
//     dispatch(setUser(admin));
//   }
// }






