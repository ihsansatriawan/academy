import React, { Fragment } from "react";
import { FamilyProvider, FamilyConsumer } from "./FamilyContext";
import Faker from 'faker';

export class Grandmother extends React.Component {
  state = {
    name: Faker.name.findName(),
    changeName: () => { this.changeLastName() },
  };

  changeLastName = () => {
    this.setState({ name: Faker.name.findName() })
  }

  render() {
    return (
      <FamilyProvider value={this.state}>
        <Mother />
      </FamilyProvider>
    );
  }
}

const Mother = () => {
  return <Child />;
};

const Child = () => {
  return <FamilyConsumer>
    {
      ({ name, changeName }) => {
        return (<Fragment>
          <p>{name}</p>
          <button onClick={changeName}>Ganti Nama Akuh!</button>
        </Fragment>)
      }
    }
  </FamilyConsumer>;
};
