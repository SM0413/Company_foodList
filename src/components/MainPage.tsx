import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";

const FirstDIV = styled.div`
  background-color: white;
`;

const TitleDIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bolder;
  font-size: 50px;
  margin-top: 1vh;
`;

const CalendarDIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EachCalendarUL = styled.ul`
  display: grid;
  margin: 10px;
  border-radius: 10px;
  min-width: 13%;
  min-height: 150px;
  place-items: center;
  border: 1px solid black;
`;

const EachCalendarLI = styled.li`
  display: block;
  margin: 0 10px;
  margin-top: 3px;
`;
interface Iapi {
  id: string;
  mainFood: string;
  sideFood1: string;
  sideFood2: string;
  sideFood3: string;
  soup: string;
  drink: string;
  salad: string;
  time: string;
  type: string;
  rice: string;
}

export function MainPage() {
  const [foods, setFoods] = useState<Iapi[]>([]);
  const client = useApolloClient();
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allFoods {
              id
              mainFood
              sideFood1
              sideFood2
              sideFood3
              soup
              drink
              salad
              time
              type
              rice
            }
          }
        `,
      })
      .then((result) => setFoods(result.data.allFoods));
  });
  return (
    <FirstDIV>
      <Helmet>
        <title>FoodList</title>
      </Helmet>
      <TitleDIV>
        <Title>08월</Title>
      </TitleDIV>
      <CalendarDIV>
        {foods.map((food) => (
          <Link to={food.id} state={{ foodDate: food.time }}>
            <EachCalendarUL>
              <EachCalendarLI key={food.id}>{food.id}</EachCalendarLI>
              <EachCalendarLI key={food.id}>{food.type}</EachCalendarLI>
              <EachCalendarLI key={food.id}>{food.time}</EachCalendarLI>
              <EachCalendarLI key={food.id}>{food.mainFood}</EachCalendarLI>
              <EachCalendarLI key={food.id}>{food.sideFood1}</EachCalendarLI>
              <EachCalendarLI key={food.id}>{food.sideFood2}</EachCalendarLI>
              <EachCalendarLI key={food.id}>{food.sideFood3}</EachCalendarLI>
              <EachCalendarLI key={food.id}>{food.rice}</EachCalendarLI>
              <EachCalendarLI key={food.id}>{food.soup}</EachCalendarLI>
              <EachCalendarLI key={food.id}>{food.drink}</EachCalendarLI>
              <EachCalendarLI key={food.id}>{food.salad}</EachCalendarLI>
            </EachCalendarUL>
          </Link>
        ))}
      </CalendarDIV>{" "}
    </FirstDIV>
  );
}
