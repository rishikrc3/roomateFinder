import React, { useState } from 'react';
import { Form, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
//import './profilePhotoUpload.css';

const ProfilePhotoUpload = () => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState('');

  const onFinish = async (values) => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found in local storage.');
      alert('Authorization token is missing. Please log in again.');
      return;
    }

    const formData = new FormData();
    formData.append('file', values.file.file.originFileObj);

    try {
      const response = await axios.post('http://localhost:8000/api/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      const fileUrl = `http://localhost:8000/files/${response.data.file.filename}`;
      console.log('Success:', response.data);
      setImageUrl(fileUrl);
      message.success('Profile photo uploaded successfully!');
    } catch (error) {
      if (error.response) {
        console.error('Error Response Data:', error.response.data);
        console.error('Error Response Status:', error.response.status);
        console.error('Error Response Headers:', error.response.headers);
        if (error.response.status === 401) {
          alert('Unauthorized: Invalid token. Please log in again.');
        } else {
          alert(`Error: ${error.response.data.message}`);
        }
      } else if (error.request) {
        console.error('Error Request:', error.request);
        alert('Network error. Please try again.');
      } else {
        console.error('Error Message:', error.message);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Upload Profile Photo</h2>
      <Form form={form} name="profile_photo_upload" onFinish={onFinish} className="form-content">
        <Form.Item
          label="Profile Photo"
          name="file"
          rules={[{ required: true, message: 'Please upload your profile photo!' }]}
        >
          <Upload name="file" listType="picture" maxCount={1} beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Select Photo</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="form-submit-button">
            Upload
          </Button>
        </Form.Item>
      </Form>
      {imageUrl && (
        <div className="uploaded-image-container">
          <h3>Uploaded Photo:</h3>
          <img src={imageUrl} alt="Profile" className="uploaded-image" />
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoUpload;
