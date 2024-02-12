import axios from "axios";
import ROUTES from "../../routes/ROUTES";

export const handleDeleteCard = async (id, dataFromServerFiltered, setDataFromServer, login, toast) => {
    try {
        const cardToDelete = dataFromServerFiltered.find(
          (card) => card._id === id
        );
        if (cardToDelete && cardToDelete.user_id === login.user._id) {
          if (window.confirm("Are you sure you want to delete this card?")) {
            setDataFromServer((cDataFromServer) =>
              cDataFromServer.filter((card) => card._id !== id)
            );
            await axios.delete("/cards/" + id);
            toast.success(" ✔ Delete Successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        } else {
          toast.error(
            "❗❗❗ Something`s Wrong ! Only The Creator of the card Can Delete !",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        }
      } catch (error) {
        toast.error("❗❗❗ Something went wrong! Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };

export const handleEditCard = (id, dataFromServerFiltered, navigate, login, toast) => {
    const cardToEdit = dataFromServerFiltered.find((card) => card._id === id);
    if (cardToEdit && cardToEdit.user_id === login.user._id) {
      if (window.confirm("Are you sure you want to delete this card?"))
        navigate(`${ROUTES.EDITCARD}/${id}`);
    } else {
      toast.error(
        "❗❗❗ Something`s Wrong ! Only The Creator of the card Can Edit !",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

export const handlePhoneNumberCard = (id, navigate) => {
    navigate(`${ROUTES.VIEWCARD}/${id}`);
};

export const handleClickCard = (id, navigate) => {
    navigate(`${ROUTES.VIEWCARD}/${id}`);
};


export const handleLikeCard = async (id, setDataFromServer, toast) => {
    try {
        let { data } = await axios.patch("/cards/" + id);
        setDataFromServer((cDataFromServer) => {
          let cardIndex = cDataFromServer.findIndex((card) => card._id === id);
          if (cardIndex >= 0) {
            cDataFromServer[cardIndex] = data;
          }
          return [...cDataFromServer];
        });
        toast.success( "✔ Like Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (err) {
      }
    };
