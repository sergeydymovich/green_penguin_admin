import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_AMOUNT,
  FILTER_CATEGORY,
  FILTER_SUBCATEGORY,
  CHANGE_ACTIVE_PAGE,
  GET_PAGES_COUNT,
} from "../actions/products.actions";

const INITIAL_STATE = {
  productsArr: [],
  filterCategory: "",
  filterSubCategory: "",
  isLoading: false,
  pageSize: 8,
  totalAmount: 0,
  pages: 0,
  activePage: 0,
};

const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        productsArr: [...action.payload.products],
      };
    case CHANGE_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload.number,
      };
    case GET_PRODUCTS_AMOUNT:
      return {
        ...state,
        totalAmount: action.payload.amount,
      };
    case GET_PAGES_COUNT:
      return {
        ...state,
        pages: action.payload.count,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productsArr: [
          ...state.productsArr.filter((el) => el._id !== action.payload.id),
        ],
      };
    case FILTER_CATEGORY:
      return {
        ...state,
        filterCategory: action.payload.category,
        filterSubCategory: "",
        activePage: 0,
      };
    case FILTER_SUBCATEGORY:
      return {
        ...state,
        filterSubCategory: action.payload.subCategory,
        activePage: 0,
      };
    default:
      return state;
  }
};

export default products;
