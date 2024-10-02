import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Cart({ items, removeFromCart, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          width: "90%",
          maxWidth: "1200px",
          maxHeight: "90vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#f8f9fa",
            borderBottom: "1px solid #dee2e6",
            height: "3.6rem",
          }}
        >
          <h2 style={{ margin: 0 }}>Carrinho</h2>
          <button
            style={{
              fontSize: "1.5rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: 0,
              lineHeight: 1,
            }}
            className="close-button"
            onClick={onClose}
          >
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div
          style={{
            padding: "1rem",
            overflowY: "auto",
            flexGrow: 1,
          }}
        >
          {items.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid #dee2e6",
                    padding: "1rem",
                    textAlign: "center",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  className="cart-item"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain",
                      marginBottom: "0.5rem",
                    }}
                    className="cart-item-image"
                  />
                  <h4 style={{ margin: "0.5rem 0" }}>{item.name}</h4>
                  <p
                    style={{
                      fontWeight: "bold",
                      margin: "0.5rem 0",
                    }}
                    className="cart-item-price"
                  >
                    {item.price}
                  </p>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="btn btn-danger"
                    style={{
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      padding: "0.375rem 0.75rem",
                      borderRadius: "0.25rem",
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
