import UserClass from "./UserClass";
import { Component } from "react";
import userContext from "../utils/userContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User
          <userContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </userContext.Consumer>
        </div>
        <h2>This is Namaste React</h2>
        <UserClass name={"First"} location={"Pune Class"} />
      </div>
    );
  }
}

export default About;
