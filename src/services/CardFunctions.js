// cardFunctions.js
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ROUTES from "../routes/ROUTES";

export const commonToastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const handleDeleteCard = async (id, dataFromServerFiltered, setDataFromServer, login) => {
  try {
    const cardToDelete = dataFromServerFiltered.find((card) => card._id === id);

    if (cardToDelete && cardToDelete.user_id === login.user._id) {
      if (window.confirm("Are you sure you want to permanently delete this card?")) {
        setDataFromServer((cDataFromServer) =>
          cDataFromServer.filter((card) => card._id !== id)
        );
        await axios.delete("/cards/" + id);
        toast.success(" ✔ Card Deleted Successfully!", commonToastConfig);
      }
    } else {
      toast.error("❗❗❗ You don't have permission to delete this card.", commonToastConfig);
    }
  } catch (error) {
    toast.error("❗❗❗ Something went wrong! Please try again later.", commonToastConfig);
  }
};

export const handleEditCard = (id, dataFromServerFiltered, navigate, login) => {
  const cardToEdit = dataFromServerFiltered.find((card) => card._id === id);

  if (cardToEdit && cardToEdit.user_id === login.user._id) {
    if (window.confirm("Do you want to edit this card?"))
      navigate(`${ROUTES.EDITCARD}/${id}`);
  } else {
    toast.error("❗❗❗ You can only edit your own cards.", commonToastConfig);
  }
};

export const handlePhoneNumberCard = (id, navigate) => {
  navigate(`${ROUTES.VIEWCARD}/${id}`);
};

export const handleClickCard = (id, navigate) => {
  navigate(`${ROUTES.VIEWCARD}/${id}`);
};

export const handleLikeCard = async (id, setDataFromServer) => {
  try {
    let { data } = await axios.patch("/cards/" + id);
    setDataFromServer((cDataFromServer) => {
      let cardIndex = cDataFromServer.findIndex((card) => card._id === id);
      if (cardIndex >= 0) {
        cDataFromServer[cardIndex] = data;
      }
      return [...cDataFromServer];
    });
    toast.success("✔ Liked the Card!", commonToastConfig);
  } catch (err) {
    toast.error("❗❗❗ Something went wrong! Please try again later.", commonToastConfig);
  }
};
