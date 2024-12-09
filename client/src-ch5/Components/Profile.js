import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import User from "./User";
const Profile = () => {
  const email = useSelector((state) => state.users.user.email);
  const navigate = useNavigate();
  //Retrieve the user details from Redux store.
const user = useSelector((state) => state.users.user);

// Create state variables for user input and assign initial values from the Redux store

const [userName, setuserName] = useState(user.name);
const [pwd, setpwd] = useState(user.password);
const [confirmPassword, setconfirmPassword] = useState(user.password);
const [profilePic, setprofilePic] = useState(user.profilePic);


  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, [email]);
  return (
    <Container fluid>
      <h1>Profile</h1>
      <Row>
        <Col md={2}>
          <User />
        </Col>
        <Col md={4}>
        Update Profile
          <Form>
            <Input type="file" name="profilePic" />
            <div className="appTitle"></div>
            Update Profile
            <FormGroup>
              <Label for="name">Name</Label>
              <Input id="name" name="name" placeholder="Name..." type="text" 
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
              id="email"
              name="email"
              placeholder="Email..."
              type="email"
              
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Password..."
              type="password"
              value={pwd}
              onChange={(e) => setpwd(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password..."
              type="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Button color="primary" className="button">
              Update Profile
            </Button>
          </FormGroup>
        </Form>

        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
