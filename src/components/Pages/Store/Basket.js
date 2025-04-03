import { create } from "zustand";

const UseBasket = create((set) => ({
  basket: JSON.parse(localStorage.getItem("basket")) || [],

  addNewProduct: (product) =>
    set((state) => {
      // Yeni məhsul ilə yeni basket array-i yarat
      const newBasket = [product, ...state.basket];

      // LocalStorage-ə yeni basket-i yaz
      localStorage.setItem("basket", JSON.stringify(newBasket));

      // Basketi yenilə
      return { basket: newBasket };
    }),
}));

export default UseBasket;
