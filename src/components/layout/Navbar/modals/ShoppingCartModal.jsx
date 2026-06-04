import { X,  Trash2 } from "lucide-react";
import { useState } from "react";
import { BluetoothConnected } from "lucide-react";

export default function ShoppingCartModal({ isOpen, onClose, items = [] }) {
  const [cartItems, setCartItems] = useState(items);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed bebas tracking-wider inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="flex-1  bg-transparent backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Cart Panel */}
      <div className="w-full max-w-md  border-l backdrop-blur-lg  flex flex-col shadow-lg/30 ">
        {/* Header */}
        <div className="flex items-center justify-between backdrop-blur-xl  p-6 border-b-4 ">
          <h2 className="text-2xl flex items-center gap-2">
          Your Cart <BluetoothConnected icon={faCartArrowDown} size="lg" />
          </h2>
          <button
            onClick={onClose}
            className=" cursor-pointer hover:text-foreground transition-colors  "
          >
            <BluetoothConnected icon={faCircleXmark} size="lg"  />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <BluetoothConnected icon={faCartPlus} bounce size="lg" />
              <p className="text-muted-foreground mb-6">Your cart is empty</p>
              <button
                onClick={onClose}
                className="bg-blue-300 text-white shadow-lg/30 px-6 py-2 rounded-lg cursor-pointer hover:opacity-90 transition-opacity "
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-background rounded-lg border border-border"
                >
                  {/* Image */}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      ${item.price}
                    </p>

                    {/* Qty Control */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-2 py-1 bg-border rounded hover:bg-secondary transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 bg-border rounded hover:bg-secondary transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-red-500 transition-colors p-2"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-border  p-6 space-y-4">
            <div className="flex items-center justify-between text-lg font-bold">
              <span className="text-foreground">Total:</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-primary text-background py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer">
              Checkout
            </button>

            <button
              onClick={onClose}
              className="w-full bg-background border border-border text-foreground py-3 rounded-lg font-semibold hover:bg-secondary transition-colors cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
