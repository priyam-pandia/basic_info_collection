import { useState } from "react";
import {
  Avatar,
  Button,
  Form,
  FormGroup,
  FormItem,
  Input,
  Label,
  TextArea,
  Grid,
  ShellBar,
  ShellBarItem,
} from "@ui5/webcomponents-react";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const onSubmitClick = () => {
    console.log(data);
    alert(`${data.name}:${data.email}:${data.comment}`);
  };

  return (
    <>
      <ShellBar
        logo={<img src="/favicon.ico" alt="logo" />}
        profile={<Avatar icon="employee" />}
        primaryTitle="Data Collection"
      >
        <ShellBarItem src="sap-icon://add" text="Add" />
      </ShellBar>
      <Grid>
        <div data-layout-indent="XL3 L3 M3 S3" data-layout-span="XL6 L6 M6 S6">
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
            titleText="Title of the Form"
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
              <FormItem label={<Label>Comment</Label>}>
                <TextArea
                  style={{ width: "100%" }}
                  placeholder=""
                  rows={5}
                  value={data.comment}
                  onChange={(e) =>
                    setData({ ...data, comment: e.target.value })
                  }
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
