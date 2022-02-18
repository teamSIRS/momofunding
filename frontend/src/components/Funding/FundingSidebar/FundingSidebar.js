import PayCard from "./PayCard";
import { Sidebar } from "./styles";

export const FundingSidebar = (props) => (
  <Sidebar>
    <PayCard
      props = {props}
    />
  </Sidebar>
);
