import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";
import styled from "styled-components";

const FristDIV = styled.div`
  display: grid;
  place-items: center;
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

const LoadingH1 = styled.h3`
  color: #d35400;
  font-weight: bold;
  display: grid;
  place-items: center;
`;

const CalendarDIV = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  max-width: 270px;
`;

const EachCalendarUL = styled.ul`
  display: grid;
  margin: 10px;
  border-radius: 10px;
  min-width: 100px;
  min-height: 200px;
  max-width: 200px;
  max-height: 300px;
  place-items: center;
  border: 1px solid black;
  :hover {
    color: #eab543;
  }
`;
const WaringDIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EachCalendarLI = styled.li`
  display: block;
  margin: 0 10px;
  margin-top: 3px;
`;

interface Iapi {
  id: string;
  date: string;
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
  waring: boolean;
  isTwo: boolean;
}

interface IState {
  foodDate: string;
}

export function FoodDetaile() {
  const date = new Date(Date.now());
  const [foods, setFoods] = useState<Iapi[]>([]);
  const client = useApolloClient();
  const location = useLocation();
  const state = location.state as IState;
  console.log(state);
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allFoods {
              id
              date
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
              waring
              isTwo
            }
          }
        `,
      })
      .then((result) => setFoods(result.data.allFoods));
  });
  return (
    <FristDIV>
      <Helmet>
        <title>FoodList</title>
      </Helmet>
      <TitleDIV>
        <Title>{date.getMonth() + 1}월</Title>
      </TitleDIV>
      {foods.length === 0 ? (
        <LoadingH1>
          API서버가 오프라인 입니다(가동시간 : 09:00 ~ 18:00)
        </LoadingH1>
      ) : (
        <CalendarDIV>
          <EachCalendarUL>
            {foods.map((food) =>
              state.foodDate === "월" &&
              (food.date === "월" || food.date === "월아") ? (
                <EachCalendarLI>{food.mainFood}</EachCalendarLI>
              ) : null
            )}
          </EachCalendarUL>
        </CalendarDIV>
      )}
    </FristDIV>
  );
}
