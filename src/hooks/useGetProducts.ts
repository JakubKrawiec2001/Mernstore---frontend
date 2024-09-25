import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SelectedProductContext } from "../context/selectedProductContext";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const { setLoading } = useContext(SelectedProductContext);

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await axios.get(
        "https://mernstore-backend.onrender.com/product"
      );
      setLoading(false);
      setProducts(fetchedProducts.data.products);
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};
