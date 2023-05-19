import { React, useContext } from "react"
import { Button, Checkbox, Form, Input } from 'antd';
import { GameContext } from "../App";

const Dashboard = () => {
  const { setSelectPlayer, setFormData } = useContext(GameContext)

  const onFinish = (values) => {
    setFormData(values)
    setSelectPlayer(true)
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
   return(
    <>
     <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="First Player"
      name="firstPlayer"
      rules={[
        {
          required: true,
          message: 'Please input your first player!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Second Player "
      name="secondPlayer"
      rules={[
        {
          required: true,
          message: 'Please input your second player !',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </>
   )
}

export default Dashboard