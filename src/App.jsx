import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import FishContainer from "./components/FishContainer/FishContainer";
import Header from "./components/Header/Header";
import { toast } from "react-hot-toast";
import { addToLS, removeFromLS } from "./components/Utils/localStorage";
import Footer from "./components/Footer/Footer";

function App() {
  const [isActive, setIsActive] = useState(true);
  const [newFish, setNewFish] = useState([]);
  const [price, setPrice] = useState(0);

  const handleDelete = (id, money) => {
    const remainingFishes = newFish.filter((fish) => fish.ID !== id);
    toast.success("Succesfully Removed From Cart", {
      duration: 3000,
      position: "bottom right",
      className: "h-20 font-bold",
    });
    setNewFish(remainingFishes);
    removeFromLS(id);
    setPrice((prev) => prev - money);
  };

  const handleAddToCart = (fish) => {
    const isExist = newFish.find((f) => f.ID === fish.ID);
    if (isExist) {
      toast.error("Can Not Add A Cart twice!!!", {
        duration: 2000,
        position: "right-top",

        style: {},
        className: "h-20",

        iconTheme: {
          primary: "#F44336",
          secondary: "#FFCDD2",
        },

        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },

        removeDelay: 1000,
      });
    } else {
      setNewFish([...newFish, fish]);
      addToLS(fish.ID);
      setPrice((prev) => prev + fish.price);
      toast.success("Successfully Added To The Cart,Sir!!!", {
        duration: 2000,
        position: "right top",

        className: "h-20 font-bold",
      });
    }
  };

  const handleActiveState = (status) => {
    if (status === "available") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <>
      <Header price={price} newFish={newFish}></Header>
      <Banner></Banner>

      <FishContainer
        handleDelete={handleDelete}
        handleAddToCart={handleAddToCart}
        handleActiveState={handleActiveState}
        isActive={isActive}
        newFish={newFish}
        setNewFish={setNewFish}
        setPrice={setPrice}
      ></FishContainer>
      <Footer></Footer>
    </>
  );
}

export default App;
