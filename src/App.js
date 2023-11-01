  import { useState } from "react";
import {
  Avatar,
  Button,
  Form,
  FormGroup,
  FormItem,
  Input,
  Label,
  Grid,
  ShellBar,
  ShellBarItem,
} from "@ui5/webcomponents-react";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    linkedinid: "",
    organization: "",
  });

  let dataArray = [];

  const onSubmitClick = () => {
    console.log(data);
    alert(`${data.name}:${data.email}:${data.linkedinid}:${data.organization}`);
    dataArray.push(data);
    console.log(dataArray);
  };

  return (
    <>
      <ShellBar
        logo={<img src="/favicon.ico" alt="logo" />}
        profile={<Avatar icon="employee" />}
        primaryTitle="SAP TechEd 2023 - Women In Tech"
      >
        <ShellBarItem src="sap-icon://add" text="Add" />
      </ShellBar>
      <div data-layout-indent="XL4 L4 M4 S4" data-layout-span="XL4 L4 M4 S4">
      
        </div>
      <div data-layout-indent="XL4 L4 M4 S4"></div>
      <Grid>
        <div data-layout-indent="XL3 L3 M3 S3" data-layout-span="XL6 L6 M6 S6">
        {<img src="/WIT_logo.jpeg" alt="wit_logo" />}
          <Form
            backgroundDesign="Transparent"
            columnsL={1}
            columnsM={1}
            columnsS={1}
            columnsXL={2}
            labelSpanL={4}
            labelSpanM={2}
            labelSpanS={12}
            labelSpanXL={4}
            style={{
              alignItems: "center",
              paddingTop: "40px",
            }}
            titleText=" "
          >
            <FormGroup>
              <FormItem label={<Label>Name</Label>}>
                <Input
                  style={{ width: "100%" }}
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </FormItem>
              <FormItem label={<Label>Email</Label>}>
                <Input
                  style={{ width: "100%" }}
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </FormItem>
              <FormItem label={<Label>LinkedInId</Label>}>
                <Input
                  style={{ width: "100%" }}
                  value={data.linkedinid}
                  onChange={(e) => setData({ ...data, linkedinid: e.target.value })}
                />
              </FormItem>
              <FormItem label={<Label>Organization</Label>}>
                <Input
                  style={{ width: "100%" }}
                  value={data.organization}
                  onChange={(e) => setData({ ...data, organization: e.target.value })}
                />
              </FormItem>
            </FormGroup>
          </Form>
        </div>
        <div data-layout-indent="XL3 L3 M3 S3"></div>
        <div data-layout-indent="XL3 L3 M3 S3" data-layout-span="XL6 L6 M6 S6">
          <Button onClick={onSubmitClick}>Submit</Button>
        </div>
      </Grid>
    </>
  );
}

export default App;
