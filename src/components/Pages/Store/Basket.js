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

     // Sayı artırmaq & azaltma
    changeCount: (id,o) => 
      set((state) => {
      const currentEl = state.basket.find((p) => p.id===id)
      if(o === "+"){
        currentEl.count += 1;
      }
      else if(o === "-"){
        if(currentEl.count>1){
        currentEl.count -= 1;}
       
      }
      currentEl.totalPrice=currentEl.count * currentEl.price
       // LocalStorage-ə yeni basket-i yaz
    localStorage.setItem("basket", JSON.stringify([...state.basket]))
      return{
        basket:[...state.basket]
      }
      
    }),
    // Məhsulu səbətdən silmək
  removeProduct: (id) =>
    set((state) => {
      const newBasket = state.basket.filter((product) => product.id !== id);
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return { basket: newBasket };
    }),
   
}));

export default UseBasket;
