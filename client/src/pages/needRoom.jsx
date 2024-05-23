import React from "react";
import { Form, Input, InputNumber, Switch, Button, Select } from "antd";
import axios from "axios";

const { Option } = Select;

const RoomForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Form Values:", JSON.stringify(values)); // Log form values to the console

    const token = localStorage.getItem("token");
    console.log("Token:", token); // Log token to the console

    try {
      const response = await axios.post(
        "http://localhost:8000/api/rooms/",
        JSON.stringify(values), // Convert values to JSON string
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Ensure correct content type
          },
        }
      );
      console.log("Success:", response.data); // Log the success response
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Error Response Data:", error.response.data);
        console.error("Error Response Status:", error.response.status);
        console.error("Error Response Headers:", error.response.headers);
      } else if (error.request) {
        // Request was made but no response was received
        console.error("Error Request:", error.request);
      } else {
        // Something happened in setting up the request
        console.error("Error Message:", error.message);
      }
    }
  };

  return (
    <Form form={form} name="room_form" onFinish={onFinish}>
      <Form.Item
        label="Mess Name"
        name="messName"
        rules={[{ required: true, message: "Please input the mess name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Location"
        name="location"
        rules={[{ required: true, message: "Please input the location!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Looking For"
        name="lookingFor"
        rules={[{ required: true, message: "Please select an option!" }]}
      >
        <Select>
          <Option value="female">Female</Option>
          <Option value="male">Male</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Rent"
        name="rent"
        rules={[{ required: true, message: "Please input the rent!" }]}
      >
        <InputNumber min={0} />
      </Form.Item>

      <Form.Item
        label="Occupancy"
        name="occupancy"
        rules={[{ required: true, message: "Please input the occupancy!" }]}
      >
        <Select>
          <Option value="double">Double</Option>
          <Option value="triple">Triple</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Highlights" name="highlights">
        <Form.Item
          name={["highlights", "attachedWashroom"]}
          valuePropName="checked"
          noStyle
        >
          <Switch
            checkedChildren="Attached Washroom"
            unCheckedChildren="No Attached Washroom"
          />
        </Form.Item>
        <Form.Item
          name={["highlights", "marketNearby"]}
          valuePropName="checked"
          noStyle
        >
          <Switch
            checkedChildren="Market Nearby"
            unCheckedChildren="No Market Nearby"
          />
        </Form.Item>
        <Form.Item
          name={["highlights", "closeToMetroStation"]}
          valuePropName="checked"
          noStyle
        >
          <Switch
            checkedChildren="Close to Metro"
            unCheckedChildren="Not Close to Metro"
          />
        </Form.Item>
        <Form.Item
          name={["highlights", "publicTransportNearby"]}
          valuePropName="checked"
          noStyle
        >
          <Switch
            checkedChildren="Public Transport Nearby"
            unCheckedChildren="No Public Transport Nearby"
          />
        </Form.Item>
        <Form.Item
          name={["highlights", "noRestriction"]}
          valuePropName="checked"
          noStyle
        >
          <Switch
            checkedChildren="No Restriction"
            unCheckedChildren="Has Restriction"
          />
        </Form.Item>
        <Form.Item
          name={["highlights", "gymNearby"]}
          valuePropName="checked"
          noStyle
        >
          <Switch
            checkedChildren="Gym Nearby"
            unCheckedChildren="No Gym Nearby"
          />
        </Form.Item>
        <Form.Item
          name={["highlights", "housekeeping"]}
          valuePropName="checked"
          noStyle
        >
          <Switch
            checkedChildren="Housekeeping"
            unCheckedChildren="No Housekeeping"
          />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Amenities" name="amenities">
        <Form.Item name={["amenities", "tv"]} valuePropName="checked" noStyle>
          <Switch checkedChildren="TV" unCheckedChildren="No TV" />
        </Form.Item>
        <Form.Item name={["amenities", "wifi"]} valuePropName="checked" noStyle>
          <Switch checkedChildren="WiFi" unCheckedChildren="No WiFi" />
        </Form.Item>
        <Form.Item
          name={["amenities", "fridge"]}
          valuePropName="checked"
          noStyle
        >
          <Switch checkedChildren="Fridge" unCheckedChildren="No Fridge" />
        </Form.Item>
        <Form.Item
          name={["amenities", "kitchen"]}
          valuePropName="checked"
          noStyle
        >
          <Switch checkedChildren="Kitchen" unCheckedChildren="No Kitchen" />
        </Form.Item>
        <Form.Item
          name={["amenities", "powerBackup"]}
          valuePropName="checked"
          noStyle
        >
          <Switch
            checkedChildren="Power Backup"
            unCheckedChildren="No Power Backup"
          />
        </Form.Item>
        <Form.Item name={["amenities", "cook"]} valuePropName="checked" noStyle>
          <Switch checkedChildren="Cook" unCheckedChildren="No Cook" />
        </Form.Item>
        <Form.Item
          name={["amenities", "parking"]}
          valuePropName="checked"
          noStyle
        >
          <Switch checkedChildren="Parking" unCheckedChildren="No Parking" />
        </Form.Item>
        <Form.Item name={["amenities", "ac"]} valuePropName="checked" noStyle>
          <Switch checkedChildren="AC" unCheckedChildren="No AC" />
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RoomForm;
