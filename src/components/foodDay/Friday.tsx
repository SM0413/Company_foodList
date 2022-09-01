import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CalendarDIV = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  max-width: 270px;
`;

const DaySpan = styled.span`
  display: grid;
  place-items: center;
  font-size: 30px;
  color: #3b3b98;
  :hover {
    color: #b33771;
  }
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

const WaringSpan = styled.span`
  color: red;
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

export function Friday() {
  const [foods, setFoods] = useState<Iapi[]>([]);
  const client = useApolloClient();
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
    <CalendarDIV>
      {foods.length === 0 ? null : (
        <Link to={"dayDetaile"} state={{ foodDate: "금" }}>
          <DaySpan>금</DaySpan>
        </Link>
      )}
      {foods.length === 0
        ? null
        : foods.map((food, index) =>
            food.date === "금" ||
            (food.date === "금아" && food.isTwo !== false) ||
            (food.date === "금점" && food.isTwo === true) ? (
              <Link key={index} to={food.date} state={{ foodTime: food.time }}>
                <EachCalendarUL>
                  <WaringDIV>
                    <EachCalendarLI key={"을지로"}>
                      <WaringSpan>
                        {food.waring === true || food.isTwo === true
                          ? "여기를 클릭해서 메뉴를 확인 해 주세요"
                          : null}
                      </WaringSpan>
                    </EachCalendarLI>
                  </WaringDIV>
                  <EachCalendarLI key={food.type}>
                    {food.date === "금" ? food.type : null}
                  </EachCalendarLI>
                  <EachCalendarLI key={food.mainFood}>
                    {food.date === "금" ? food.mainFood : null}
                  </EachCalendarLI>
                  <EachCalendarLI key={food.sideFood1}>
                    {food.date === "금" ? food.sideFood1 : null}
                  </EachCalendarLI>
                  <EachCalendarLI key={food.sideFood2}>
                    {food.date === "금" ? food.sideFood2 : null}
                  </EachCalendarLI>
                  <EachCalendarLI key={food.sideFood3}>
                    {food.date === "금" ? food.sideFood3 : null}
                  </EachCalendarLI>
                  <EachCalendarLI key={food.rice}>
                    {food.date === "금" ? food.rice : null}
                  </EachCalendarLI>
                  <EachCalendarLI key={food.soup}>
                    {food.date === "금" ? food.soup : null}
                  </EachCalendarLI>
                  <EachCalendarLI key={food.drink}>
                    {food.date === "금" ? food.drink : null}
                  </EachCalendarLI>
                  <EachCalendarLI key={food.salad}>
                    {food.date === "금" ? food.salad : null}
                  </EachCalendarLI>
                </EachCalendarUL>
              </Link>
            ) : null
          )}
    </CalendarDIV>
  );
}
