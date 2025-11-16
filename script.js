body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f5f5f5;
}

.header {
    background: #ff9d00;
    padding: 15px;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
}

.search-box {
    padding: 10px;
    background: #fff;
}

.search-box input {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
}

.product-container {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

.product-card {
    background: white;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
}

.product-card img {
    width: 100%;
    border-radius: 8px;
}

.title {
    font-size: 14px;
    margin-top: 5px;
    font-weight: bold;
}

.price {
    color: green;
    font-size: 16px;
    margin-top: 5px;
}

.old-price {
    text-decoration: line-through;
    color: red;
    font-size: 12px;
}

.btn-area {
    margin-top: 8px;
    display: flex;
    gap: 5px;
}

.btn {
    flex: 1;
    padding: 8px;
    border: none;
    border-radius: 6px;
    color: white;
    font-size: 13px;
}

.cart-btn {
    background: #0046ff;
}

.order-btn {
    background: #ff3a3a;
}
