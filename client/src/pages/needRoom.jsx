import React from "react";
import { Form, Input, InputNumber, Switch, Button, Select } from "antd";
import axios from "axios";
import "./needRoom.css";

const { Option } = Select;

const RoomForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Form Values:", JSON.stringify(values));
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/rooms/",
        JSON.stringify(values),
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", response.data);
      window.location.href = "/success";
    } catch (error) {
      if (error.response) {
        console.error("Error Response Data:", error.response.data);
        console.error("Error Response Status:", error.response.status);
        console.error("Error Response Headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error Request:", error.request);
      } else {
        console.error("Error Message:", error.message);
      }
    }
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Create a Room</h2>
      <Form
        form={form}
        name="room_form"
        onFinish={onFinish}
        className="form-content"
      >
        <Form.Item
          label="Mess Name"
          name="messName"
          rules={[{ required: true, message: "Please input the mess name!" }]}
        >
          <Input className="form-input" />
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please input the location!" }]}
        >
          <Input className="form-input" />
        </Form.Item>

        <Form.Item
          label="Looking For"
          name="lookingFor"
          rules={[{ required: true, message: "Please select an option!" }]}
        >
          <Select className="form-input">
            <Option value="female">Female</Option>
            <Option value="male">Male</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Rent"
          name="rent"
          rules={[{ required: true, message: "Please input the rent!" }]}
        >
          <InputNumber min={0} className="form-input" />
        </Form.Item>

        <Form.Item
          label="Occupancy"
          name="occupancy"
          rules={[{ required: true, message: "Please input the occupancy!" }]}
        >
          <Select className="form-input">
            <Option value="double">Double</Option>
            <Option value="triple">Triple</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Contact No."
          name="contactNo"
          rules={[
            { required: true, message: "Please input your contact number!" },
            { pattern: /^[0-9]{10}$/, message: "Contact number must be 10 digits long!" }
          ]}
        >
          <Input className="form-input" />
        </Form.Item>


        <Form.Item label="Highlights" name="highlights">
          <div className="form-switch-group">
            <Form.Item
              name={["highlights", "attachedWashroom"]}
              valuePropName="checked"
              noStyle
            >
              <Switch
                checkedChildren="Attached Washroom"
                unCheckedChildren="No Attached Washroom"
                className="form-switch"
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
                className="form-switch"
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
                className="form-switch"
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
                className="form-switch"
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
                className="form-switch"
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
                className="form-switch"
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
                className="form-switch"
              />
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item label="Amenities" name="amenities">
          <div className="form-switch-group">
            <Form.Item
              name={["amenities", "tv"]}
              valuePropName="checked"
              noStyle
            >
              <Switch
                checkedChildren="TV"
                unCheckedChildren="No TV"
                className="form-switch"
              />
            </Form.Item>
            <Form.Item
              name={["amenities", "wifi"]}
              valuePropName="checked"
              noStyle
            >
              <Switch
                checkedChildren="WiFi"
                unCheckedChildren="No WiFi"
                className="form-switch"
              />
            </Form.Item>
            <Form.Item
              name={["amenities", "fridge"]}
              valuePropName="checked"
              noStyle
            >
              <Switch
                checkedChildren="Fridge"
                unCheckedChildren="No Fridge"
                className="form-switch"
              />
            </Form.Item>
            <Form.Item
              name={["amenities", "kitchen"]}
              valuePropName="checked"
              noStyle
            >
              <Switch
                checkedChildren="Kitchen"
                unCheckedChildren="No Kitchen"
                className="form-switch"
              />
            </Form.Item>
            <Form.Item
              name={["amenities", "powerBackup"]}
              valuePropName="checked"
              noStyle
            >
              <Switch
                checkedChildren="Power Backup"
                unCheckedChildren="No Power Backup"
                className="form-switch"
              />
            </Form.Item>
            <Form.Item
              name={["amenities", "cook"]}
              valuePropName="checked"
              noStyle
            >
              <Switch
                checkedChildren="Cook"
                unCheckedChildren="No Cook"
                className="form-switch"
              />
            </Form.Item>
            <Form.Item
              name={["amenities", "parking"]}
              valuePropName="checked"
              noStyle
            >
              <Switch
                checkedChildren="Parking"
                unCheckedChildren="No Parking"
                className="form-switch"
              />
            </Form.Item>
            <Form.Item
              name={["amenities", "ac"]}
              valuePropName="checked"
              noStyle
            >
              <Switch
                checkedChildren="AC"
                unCheckedChildren="No AC"
                className="form-switch"
              />
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="form-submit-button"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RoomForm;
