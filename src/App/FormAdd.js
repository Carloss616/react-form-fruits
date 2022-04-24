import { gql, useMutation } from '@apollo/client';
import { Button, Form, Input, Row } from 'antd';
import React from 'react';

const ADD_FRUIT = gql`
  mutation AddFruit(
    $id: ID!
    $scientific_name: String!
    $tree_name: String!
    $fruit_name: String!
    $family: String!
    $origin: String!
    $description: String!
    $bloom: String!
    $maturation_fruit: String!
    $life_cycle: String!
    $climatic_zone: String!
  ) {
    addFruit(
      id: $id
      scientific_name: $scientific_name
      tree_name: $tree_name
      fruit_name: $fruit_name
      family: $family
      origin: $origin
      description: $description
      bloom: $bloom
      maturation_fruit: $maturation_fruit
      life_cycle: $life_cycle
      climatic_zone: $climatic_zone
    ) {
      id
      fruit_name
    }
  }
`;

const FormAdd = ({ fruits, refetch }) => {
  const [addFruit, { loading }] = useMutation(ADD_FRUIT);

  const onFinish = async ({ fruit_name }) => {
    console.log({ fruit_name });

    const response = await addFruit({
      variables: {
        id: `${fruits.length + 1}`,
        scientific_name: '',
        tree_name: '',
        fruit_name,
        family: '',
        origin: '',
        description: '',
        bloom: '',
        maturation_fruit: '',
        life_cycle: '',
        climatic_zone: '',
      },
    });

    if (response) {
      console.log({ response });

      refetch();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="add-fruit"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Fruta" name="fruit_name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item>
        <Row justify="center">
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            disabled={loading}
          >
            Submit
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default FormAdd;
