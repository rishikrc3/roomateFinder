import React from "react";
import { Form, Input, InputNumber, Button, Select } from "antd";
import axios from "axios";
import "./needRoom.css";

const { Option } = Select;

const RoomForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found in local storage.");
      alert("Authorization token is missing. Please log in again.");
      return;
    }

    console.log("Form Values:", JSON.stringify(values));
    console.log("Token:", token);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/requirements",
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
        if (error.response.status === 401) {
          alert("Unauthorized: Invalid token. Please log in again.");
        }
      } else if (error.request) {
        console.error("Error Request:", error.request);
      } else {
        console.error("Error Message:", error.message);
      }
    }
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Create a Room Requirement</h2>
      <Form
        form={form}
        name="room_form"
        onFinish={onFinish}
        className="form-content"
      >
        <Form.Item
          label="Preferrred Location"
          name="location"
          rules={[{ required: true, message: "Please input the location!" }]}
        >
          <Input className="form-input" />
        </Form.Item>

        <Form.Item
          label="Affordable Rent"
          name="rent"
          rules={[{ required: true, message: "Please input the rent!" }]}
        >
          <InputNumber min={0} className="form-input" />
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

        <Form.Item
          label="Looking For"
          name="lookingFor"
          rules={[{ required: true, message: "Please select an option!" }]}
        >
          <Select className="form-input">
            <Option value="Female">Female</Option>
            <Option value="Male">Male</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Preference Stream"
          name="preferenceStream"
          rules={[{ required: true, message: "Please input the preference stream!" }]}
        >
          <Input className="form-input" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input the description!" }]}
        >
          <Input.TextArea rows={4} className="form-input" />
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
