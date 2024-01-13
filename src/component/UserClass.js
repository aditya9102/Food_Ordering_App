import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        following: "Default",
      },
    };
    // console.log(this.props.name + "Child Contructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child CompnentDidMount");
    // API call
    const data = await fetch("https://api.github.com/users/aditya9102");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }

  componentDidUpdate() {
    // console.log("component Did Update");
  }
  componentWillUnmount() {
    // console.log("component will unmount");
  }

  render() {
    // console.log(this.props.name + "Child Render");

    const { name, following, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>{name}</h2>
        <h2>{following}</h2>
      </div>
    );
  }
}

export default UserClass;
