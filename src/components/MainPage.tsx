import styled from "styled-components";
import { Helmet } from "react-helmet";
import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";
import { Tuesday } from "./foodDay/Tuesday";
import { Monday } from "./foodDay/Monday";
import { Wednesday } from "./foodDay/Wednesday";
import { Friday } from "./foodDay/Friday";
import { Thursday } from "./foodDay/Thursday";

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

const WhatWeek = styled.span`
  display: flex;
  justify-content: center;
  color: #cad3c8;
`;

const LoadingH1 = styled.h3`
  color: #d35400;
  font-weight: bold;
  display: grid;
  place-items: center;
`;

const DayDIV = styled.div`
  display: flex;
  margin: 10px 20px;
  justify-content: center;
`;

const MealTimeDIV = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;

const Breakfast = styled.span`
  margin-top: 130px;
  font-size: 30px;
  display: block;
`;
const Lunch = styled.span`
  margin-top: 180px;
  font-size: 30px;
  display: block;
`;
const Dinner = styled.span`
  margin-top: 180px;
  font-size: 30px;
  display: block;
`;

interface Iapi {
  id: string;
}

export function MainPage() {
  const date = new Date(Date.now());
  const [foods, setFoods] = useState<Iapi[]>([]);
  const client = useApolloClient();
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allFoods {
              id
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
        <Title>{date.getMonth() + 1}월</Title>
      </TitleDIV>
      <WhatWeek>8월 9일 ~ 9월 2일</WhatWeek>
      {foods.length === 0 ? (
        <LoadingH1>
          API서버가 오프라인 입니다(가동시간 : 09:00 ~ 18:00)
        </LoadingH1>
      ) : null}
      <DayDIV>
        {foods.length === 0 ? null : (
          <MealTimeDIV>
            <Breakfast>아침</Breakfast>
            <Lunch>점심</Lunch>
            <Dinner>저녁</Dinner>
          </MealTimeDIV>
        )}
        <Monday />
        <Tuesday />
        <Wednesday />
        <Thursday />
        <Friday />
      </DayDIV>
    </FirstDIV>
  );
}
