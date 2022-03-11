import React, { useContext, createContext } from "react";
import StarRatings from "react-star-ratings";
import {
  Container,
  FoodImage,
  FoodPrice,
  FoodTitle,
  FoodButton,
  ButtonIcon,
  RatingValue,
  FoodDescription,
} from "./styles/card";
import cart from "../../Helper/Icons/shopping-cart-svgrepo-com.svg";

var cardContext = createContext();
function useCardContext() {
  var context = useContext(cardContext);
  if (!context) {
    throw new Error(
      "Child components of customCard can't be render outside customCard Component !"
    );
  }
  return context;
}

export default function FoodCard({ children, ...restProps }) {
  return (
    <cardContext.Provider value={{}}>
      <Container {...restProps}>{children}</Container>
    </cardContext.Provider>
  );
}
FoodCard.Image = function Image({ src, alt, ...restProps }) {
  var context = useCardContext(cardContext);

  return (
    <>
      <FoodImage src={src} alt={alt} {...restProps} />
    </>
  );
};
FoodCard.Name = function Name({ children, ...restProps }) {
  var context = useCardContext(cardContext);
  return <FoodTitle {...restProps}>{children}</FoodTitle>;
};
FoodCard.Price = function Price({ children, ...restProps }) {
  var context = useCardContext(cardContext);
  return <FoodPrice {...restProps}>{children}</FoodPrice>;
};
FoodCard.Rating = function Rating({ rating, ...restProps }) {
  var context = useCardContext(cardContext);
  return (
    <RatingValue {...restProps}>
      <StarRatings
        rating={parseInt(rating)}
        starRatedColor="orange"
        numberOfStars={5}
        starEmptyColor=" #d8d8d8"
        starDimension="15px"
        starSpacing="0px"
      />
    </RatingValue>
  );
};
FoodCard.Button = function Button({ children, ...restProps }) {
  var context = useCardContext(cardContext);
  return (
    <FoodButton {...restProps}>
      <ButtonIcon src={cart} />
      {children}
    </FoodButton>
  );
};
FoodCard.Description = function Description({ children, ...restProps }) {
  var context = useCardContext(cardContext);
  return <FoodDescription {...restProps}>{children}</FoodDescription>;
};
