import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PoliceStationList } from "./policeStation/PoliceStationList";
import { PoliceStationCreate } from "./policeStation/PoliceStationCreate";
import { PoliceStationEdit } from "./policeStation/PoliceStationEdit";
import { PoliceStationShow } from "./policeStation/PoliceStationShow";
import { OutletList } from "./outlet/OutletList";
import { OutletCreate } from "./outlet/OutletCreate";
import { OutletEdit } from "./outlet/OutletEdit";
import { OutletShow } from "./outlet/OutletShow";
import { OutletSurveyList } from "./outletSurvey/OutletSurveyList";
import { OutletSurveyCreate } from "./outletSurvey/OutletSurveyCreate";
import { OutletSurveyEdit } from "./outletSurvey/OutletSurveyEdit";
import { OutletSurveyShow } from "./outletSurvey/OutletSurveyShow";
import { ProvinceList } from "./province/ProvinceList";
import { ProvinceCreate } from "./province/ProvinceCreate";
import { ProvinceEdit } from "./province/ProvinceEdit";
import { ProvinceShow } from "./province/ProvinceShow";
import { SurveyList } from "./survey/SurveyList";
import { SurveyCreate } from "./survey/SurveyCreate";
import { SurveyEdit } from "./survey/SurveyEdit";
import { SurveyShow } from "./survey/SurveyShow";
import { AlcoholConsumptionSurveyList } from "./alcoholConsumptionSurvey/AlcoholConsumptionSurveyList";
import { AlcoholConsumptionSurveyCreate } from "./alcoholConsumptionSurvey/AlcoholConsumptionSurveyCreate";
import { AlcoholConsumptionSurveyEdit } from "./alcoholConsumptionSurvey/AlcoholConsumptionSurveyEdit";
import { AlcoholConsumptionSurveyShow } from "./alcoholConsumptionSurvey/AlcoholConsumptionSurveyShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LP Surveys"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PoliceStation"
          list={PoliceStationList}
          edit={PoliceStationEdit}
          create={PoliceStationCreate}
          show={PoliceStationShow}
        />
        <Resource
          name="Outlet"
          list={OutletList}
          edit={OutletEdit}
          create={OutletCreate}
          show={OutletShow}
        />
        <Resource
          name="OutletSurvey"
          list={OutletSurveyList}
          edit={OutletSurveyEdit}
          create={OutletSurveyCreate}
          show={OutletSurveyShow}
        />
        <Resource
          name="Province"
          list={ProvinceList}
          edit={ProvinceEdit}
          create={ProvinceCreate}
          show={ProvinceShow}
        />
        <Resource
          name="Survey"
          list={SurveyList}
          edit={SurveyEdit}
          create={SurveyCreate}
          show={SurveyShow}
        />
        <Resource
          name="AlcoholConsumptionSurvey"
          list={AlcoholConsumptionSurveyList}
          edit={AlcoholConsumptionSurveyEdit}
          create={AlcoholConsumptionSurveyCreate}
          show={AlcoholConsumptionSurveyShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
