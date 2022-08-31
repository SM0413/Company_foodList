import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

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
  display: block;
  display: flexbox;
  justify-content: center;
  align-items: center;
`;

const EachCalendarUL = styled.ul`
  display: grid;
  margin: 5px;
  border-radius: 10px;
  min-width: 13%;
  min-height: 150px;
  place-items: center;
  border: 1px solid black;
`;

const EachCalendarLI = styled.li`
  display: block;
`;
// interface Iapi {
//   id: number;
//   mainFood: String;
//   sideFood1: String;
//   sideFood2: String;
//   sideFood3: String;
//   soup: String;
//   salad: String;
//   drink: String;
// }

const foodAPI = {
  id: Date.now(),
  mainFood: "제육볶음",
  sideFood1: "김치",
  sideFood2: "오이",
  sideFood3: "젓갈",
  soup: "미역국",
  salad: "기본샐러드",
  drink: "누룽지",
};

export function MainPage() {
  return (
    <FirstDIV>
      <Helmet>
        <title>FoodList</title>
      </Helmet>
      <TitleDIV>
        <Title>08월</Title>
      </TitleDIV>
      <CalendarDIV>
        <Link to={foodAPI.mainFood} state={{ foodDate: foodAPI.id }}>
          <EachCalendarUL>
            <EachCalendarLI as="span"> 1 </EachCalendarLI>
            <EachCalendarLI>{foodAPI.mainFood}</EachCalendarLI>
            <EachCalendarLI>{foodAPI.sideFood1}</EachCalendarLI>
            <EachCalendarLI>{foodAPI.sideFood2}</EachCalendarLI>
            <EachCalendarLI>{foodAPI.sideFood3}</EachCalendarLI>
            <EachCalendarLI>{foodAPI.soup}</EachCalendarLI>
            <EachCalendarLI>{foodAPI.salad}</EachCalendarLI>
            <EachCalendarLI>{foodAPI.drink}</EachCalendarLI>
          </EachCalendarUL>
        </Link>
      </CalendarDIV>{" "}
    </FirstDIV>
  );
}
