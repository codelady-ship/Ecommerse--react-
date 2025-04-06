import React, { useEffect, useState } from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import UseBasket from '../Store/Basket';
import { FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify'; // ToastContainer və toast import edirik


const Basket = () => {
    const [basketTotal, setBasketTotal] = useState(0);
    const { basket, changeCount, removeProduct } = UseBasket(); // zustand

    useEffect(() => {
        let sum = 0;
        basket.forEach(({ totalPrice }) => {
            sum += totalPrice;
        });
        setBasketTotal(sum);
    }, [basket]);

    // Toastify ilə silmə əməliyyatı
    const handleRemoveProduct = (id) => {
        // Toastify istifadə edərək istifadəçidən təsdiq soruşuruq
        toast.warn('Are you sure you want to remove this item?', {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: false,
            draggable: true,
            progress: undefined,
            onClose: () => {
                removeProduct(id);
            }
        });
    };

    return (
        <div>
            <Header />
            <h2 className="text-3xl font-bold ml-[45%] my-4 text-green-600">My Basket</h2>

            {basket.length === 0 ? (
                <p className="ml-[45%] my-4 text-red-600 ">Basket is empty</p>  // basket boş olarsa
            ) : (
                <div className="container py-4 px-[15%]">
                    {basket.map(({ count, description, title, images, id, price }) => {
                        // TotalPrice hər məhsul üçün doğru şəkildə hesablanır
                        const totalPrice = price * count;

                        return (
                            <div key={id} className="border p-4 my-5">
                                <div className="flex flex-col sm:flex-row sm:items-center lg:flex-wrap">
                                    <img
                                        src={images[0]} alt={title}
                                        className="object-cover rounded lg:w-50 lg:mx-2"
                                    />
                                    <div className='ml-0 sm:ml-5 sm:w-1/2 lg:mb-13'>
                                        <h3 className="font-semibold text-2xl">{title}</h3>
                                        <p className=" text-2xl font-light overflow-hidden line-clamp-3 sm:w-50 md:w-60 lg:w-110 ">{description}</p>
                                    </div>

                                    <div className='flex flex-col gap-2 lg:mx-[-20px]'>
                                        <p className="font-bold text-2xl text-green-800">Price: ${price}</p>

                                        <p className="font-bold text-2xl text-black">Count: 
                                            <button className="bg-green-600 text-white rounded-[50%] w-[30px] h-[30px] mx-2"
                                                onClick={() => changeCount(id, "-")}>
                                                -
                                            </button>
                                            {count}
                                            <button className="bg-green-600 text-white rounded-[50%] w-[30px] h-[30px] ml-2"
                                                onClick={() => changeCount(id, "+")}>
                                                +
                                            </button>
                                        </p>

                                        {/* Hesablanmış ümumi qiyməti göstəririk */}
                                        <p className=" font-bold text-red-800 text-2xl">Total: ${totalPrice}</p>

                                        {/* Məhsulu səbətdən silmək üçün ikon */}
                                        <FaTrash className="text-3xl lg:ml-55 mt-5 text-red-600 cursor-pointer" onClick={() => handleRemoveProduct(id)} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    <div className="mt-5 flex justify-between">
                        <button className="bg-green-600 text-white py-2 px-4 rounded"
                        onClick={() => buyit(id)}>Buy now</button>
                        <div className=" font-bold text-green-800 text-2xl"> Total: ${basketTotal}</div>
                    </div>
                </div>
            )}

            <Footer />
            
            {/* ToastContainer komponentini burda istifadə edirik */}
            <ToastContainer className="w-100 h-100 p-15 mt-50"/>
        </div>
    );
};

export default Basket;
