import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { Layout } from "./common/componenets/Layout/Layout";
import { GridComponent } from "./common/componenets/GridComponent";

export default function App() {
  return <Layout children={<GridComponent />} />;
}
