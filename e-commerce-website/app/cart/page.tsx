"use client";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

export default function Cart() {
  const [cart, setCart] = useState<any[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [deliveryCharges] = useState(20);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(cartItems);
    setCart(cartItems);

    const updatedCart = cartItems.map((item: any) => ({
      ...item,
      quantity: item.quantity || 1, // Default to 1 if quantity is undefined
      price: parseFloat(item.price) || 0, // Ensure price is a valid number
    }));

    setCart(updatedCart);
  }, []);

  // Calculate subtotal
  useEffect(() => {
    const calculateSubtotal = () => {
      const total = cart.reduce((sum, item) => {
        const price = item.price; // `price` is already parsed in cart loading
        const quantity = item.quantity || 0; // Ensure `quantity` is valid
        return sum + price * quantity;
      }, 0);
      setSubtotal(total);
    };
    calculateSubtotal();
  }, [cart]);

  const handleDelete = (itemId: string) => {
    const updatedCart = cart.filter((item) => item._id !== itemId);
    setCart(updatedCart); // Update state
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncreaseQuantity = (itemId: string) => {
    const updatedCart = cart.map((item) =>
      item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecreaseQuantity = (itemId: string) => {
    const updatedCart = cart.map((item) =>
      item._id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    setCart([]);
    localStorage.removeItem("cart");
    setIsCheckout(false);
  };

  return (
    <div className="">
      <section className="lg:px-20 px-5 flex flex-col items-start min-h-screen mt-10">
        <div className="flex mb-8 items-center">
          <p className="text-3xl text-red-600 font-bold">Cart</p>
          <AiOutlineShoppingCart className="ml-2 h-7 w-7 text-rose-600" />
        </div>
        {cart.length > 0 ? (
          <div className="bg-white shadow-md lg:p-6 p-2 rounded flex flex-col gap-8 w-full mb-16">
            {cart.map((item: any, index: any) => (
              <div
                className="p-6 border-b border-b-gray-200 rounded-md bg-white"
                key={index}
              >
                <div className="flex flex-col lg:flex-row gap-5">
                  <div className="p-2 ring-1 ring-gray-100 rounded-md mx-auto">
                    <Link href={`/product-detail/${item.slug.current}`}>
                      <Image
                        src={item.imageUrl || item.image}
                        height={200}
                        width={200}
                        alt="cart"
                        className="priority"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col items-start justify-between w-full">
                    <div className="flex flex-col lg:flex-row items-start justify-between w-full">
                      <div className="flex flex-col">
                        <Link href={`/product-detail/${item.slug.current}`}>
                          <h3 className="font-bold text-2xl">{item.name}</h3>
                        </Link>
                        <p className="text-xl mt-4">
                          Price:{" "}
                          <span className="text-red-500 font-semibold text-2xl">
                            ${item.price}
                          </span>
                        </p>
                      </div>
                      {/* Delete button */}
                      <button onClick={() => handleDelete(item._id)}>
                        <MdDelete
                          className="text-red-500 h-8 w-8 lg:mt-0 mt-8 hover:scale-105
                      cursor-pointer"
                        />
                      </button>
                    </div>
                    <div className="flex justify-end w-full lg:-mt-0 -mt-7">
                      <div className="flex items-center">
                        <p className="text-xl">Quantity:</p>
                        <div className="ml-3 flex items-center">
                          <FaSquarePlus
                            onClick={() => handleIncreaseQuantity(item._id)}
                            className="lg:h-9 lg:w-9 h-8 w-8 text-green-500 hover:text-green-600 
                             hover:cursor-pointer"
                          />
                          <p className="text-xl lg:mx-4 mx-2">
                            {item.quantity}
                          </p>
                          <FaSquareMinus
                            onClick={() => handleDecreaseQuantity(item._id)}
                            className="lg:h-9 lg:w-9 h-8 w-8 text-red-500 hover:text-red-800
                            hover:cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Subtotal and Total */}
            <div className="p-6 border-b border-b-gray-200 rounded-md bg-white">
              <div className="flex gap-16">
                <div className="mb-5 flex flex-col gap-5">
                  <p className="text-lg">Subtotal: </p>
                  <p className="text-lg">Delivery Charges:</p>
                </div>
                <div className="mb-5 flex flex-col gap-5">
                  <p className="text-lg">${subtotal.toFixed(2)}</p>
                  <p className="text-lg">${deliveryCharges.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-0 gap-4 lg:items-center lg:justify-between justify-start">
                <h2 className="text-2xl font-bold flex items-center">
                  Total:{" "}
                  <span className="text-green-600 ml-36">
                    ${(subtotal + deliveryCharges).toFixed(2)}
                  </span>
                </h2>
                <button
                  onClick={handleCheckout}
                  className="w-40 h-14 bg-rose-500 rounded-md text-white text-lg hover:bg-rose-800"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-xl text-gray-500">Your cart is empty.</p>
        )}

        {(isCheckout || isOrderPlaced) && (
          <div
            className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex 
          items-center justify-center"
          >
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-1/3">
              {isOrderPlaced ? (
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Order Placed Successfully!
                  </h2>
                  <button
                    className="bg-rose-500 text-white px-4 py-2 rounded text-xl
                  hover:bg-rose-800"
                    onClick={() => setIsOrderPlaced(false)}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="p-2 relative">
                  <RxCross2
                    onClick={() => setIsCheckout(false)}
                    className="h-5 w-5 absolute top-0 right-0 hover:cursor-pointer"
                  />
                  <h2 className="text-xl font-bold mb-4">Checkout</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handlePlaceOrder();
                    }}
                  >
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      className="mb-4 p-2 w-full border rounded"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      className="mb-4 p-2 w-full border rounded"
                    />
                    <textarea
                      required
                      placeholder="Address"
                      className="mb-4 p-2 w-full border rounded"
                    ></textarea>
                    <input
                      type="tel"
                      required
                      placeholder="Phone"
                      className="mb-4 p-2 w-full border rounded"
                    />
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-2 rounded font-medium
                    text-xl hover:bg-green-800"
                    >
                      Place Order
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
