import { gql, useQuery } from '@apollo/client';
import { Table } from 'antd';
import React from 'react';
import FormAdd from './FormAdd';

const GET_FRUITS = gql`
  query GetFruits {
    fruits {
      id
      scientific_name
      tree_name
      fruit_name
      family
      origin
      description
      bloom
      maturation_fruit
      life_cycle
      climatic_zone
    }
  }
`;

const Home = () => {
  const { loading, data, refetch } = useQuery(GET_FRUITS);

  const dataSource = data?.fruits.map((fruit, i) => ({
    key: i,
    ...fruit,
  }));

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Scientific Name',
      dataIndex: 'scientific_name',
      key: 'scientific_name',
    },
    {
      title: 'Tree Name',
      dataIndex: 'tree_name',
      key: 'tree_name',
    },
    {
      title: 'Fruit Name',
      dataIndex: 'fruit_name',
      key: 'fruit_name',
    },
    {
      title: 'Family',
      dataIndex: 'family',
      key: 'family',
    },
    // {
    //   title: 'Origin',
    //   dataIndex: 'origin',
    //   key: 'origin',
    // },
    // {
    //   title: 'Description',
    //   dataIndex: 'description',
    //   key: 'description',
    // },
    // {
    //   title: 'Bloom',
    //   dataIndex: 'bloom',
    //   key: 'bloom',
    // },
    // {
    //   title: 'Maturation Fruit',
    //   dataIndex: 'maturation_fruit',
    //   key: 'maturation_fruit',
    // },
    // {
    //   title: 'Life Cycle',
    //   dataIndex: 'life_cycle',
    //   key: 'life_cycle',
    // },
    // {
    //   title: 'Climatic Zone',
    //   dataIndex: 'climatic_zone',
    //   key: 'climatic_zone',
    // },
  ];

  return (
    <div className="container">
      <FormAdd fruits={dataSource} refetch={refetch} />
      <Table loading={loading} columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default Home;

// const styles = StyleSheet.create({});
