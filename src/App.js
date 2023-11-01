import { useState, useEffect } from "react";
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
  MessageStrip,
} from "@ui5/webcomponents-react";
import { CSVLink } from "react-csv";
import feedbackData from "./data/feedback.json";

const baseUrl = "http://localhost:8000";

function App() {
  const initialState = {
    name: "",
    email: "",
    linkedinId: "",
    organization: "",
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    linkedinId: "",
    organization: "",
  });

  const [alertMessage, setAlertMessage] = useState({
    isHidden: true,
    message: "",
    type: "Positive",
  });

  const [feedbacks, setFeedbacks] = useState([]);

  const headers = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "LinkedIn Id", key: "linkedinId" },
    { label: "Organization", key: "organization" },
  ];

  useEffect(() => {
    if (!alertMessage.isHidden) {
      const timeout = setTimeout(() => {
        setAlertMessage({
          isHidden: true,
          message: "",
          type: "Positive",
        });
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [alertMessage.isHidden]);

  const onSubmitClick = () => {
    if (Object.keys(data).some((dataKey) => data[dataKey].length === 0)) {
      setAlertMessage({
        isHidden: false,
        message: "Please enter all the data",
        type: "Negative",
      });
      return;
    }
    setFeedbacks([...feedbacks, data]);
    fetch(baseUrl + "/feedbacks", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((response) => {
        if (response.ok) {
          setAlertMessage({
            isHidden: false,
            message: "Successfully saved your feedback",
            type: "Positive",
          });
        }
      })
      .catch((error) => {
        setAlertMessage({ isHidden: false, message: "Something went wrong" });
        console.log(error.message);
      });
    setData(initialState);
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
              paddingTop: "100px",
            }}
            titleText={<img src="/WIT_logo.jpeg" alt="wit_logo" />}
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
              <FormItem label={<Label>LinkedIn ID</Label>}>
                <Input
                  style={{ width: "100%" }}
                  value={data.linkedinId}
                  onChange={(e) =>
                    setData({ ...data, linkedinId: e.target.value })
                  }
                />
              </FormItem>
              <FormItem label={<Label>Organization</Label>}>
                <Input
                  style={{ width: "100%" }}
                  value={data.organization}
                  onChange={(e) =>
                    setData({ ...data, organization: e.target.value })
                  }
                />
              </FormItem>
            </FormGroup>
          </Form>
        </div>
        <div data-layout-indent="XL3 L3 M3 S3"></div>
        <div data-layout-indent="XL3 L3 M3 S3" data-layout-span="XL6 L6 M6 S6">
          <Button onClick={onSubmitClick} style={{ margin: "10px" }}>
            Submit
          </Button>
          <CSVLink
            headers={headers}
            data={feedbackData.feedbacks}
            filename={"feedbacks.csv"}
          >
            <Button>Export Data</Button>
          </CSVLink>
        </div>
        <div data-layout-indent="XL3 L3 M3 S3"></div>
      </Grid>
      <Grid>
        <div data-layout-indent="XL3 L3 M3 S3" data-layout-span="XL6 L6 M6 S6">
          {!alertMessage.isHidden && (
            <MessageStrip
              style={{
                margin: "20px",
              }}
              design={alertMessage.type}
              onClose={() =>
                setAlertMessage({
                  isHidden: true,
                  message: "",
                  type: "Positive",
                })
              }
            >
              {alertMessage.message}
            </MessageStrip>
          )}
        </div>
      </Grid>
    </>
  );
}

export default App;
