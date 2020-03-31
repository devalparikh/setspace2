import React, { Component } from "react";
import Modal from "react-responsive-modal";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  CardDeck
} from "reactstrap";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    //     this.state = {exercises: []};
    this.state = {
      open: false
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { open } = this.state;

    return (
      <div>
        <h3
          style={{
            paddingLeft: 40,
            paddingTop: 20,
            fontWeight: 700,
            fontSize: 50
          }}
        >
          Trending Now
        </h3>

        <CardDeck style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 20 }}>
          <Card>
            <CardImg top width="100%" src={require("./../imgs/bg1.jpg")} />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>

              <Button
                onClick={this.onOpenModal}
                style={{ backgroundColor: "black" }}>
                Details
              </Button>

              <Modal open={open} onClose={this.onCloseModal} center>
              <Card>
            <CardImg top width="100%" src={require("./../imgs/bg1.jpg")} />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>

            </CardBody>
          </Card>
              </Modal>
            </CardBody>
          </Card>

          <Card>
            <CardImg top width="100%" src={require("./../imgs/bg234.jpg")} />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
              <Button style={{ backgroundColor: "black" }}>Details</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src={require("./../imgs/bg4.jpg")} />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
              <Button style={{ backgroundColor: "black" }}>Details</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src={require("./../imgs/bg1.jpg")} />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
              <Button style={{ backgroundColor: "black" }}>Details</Button>
            </CardBody>
          </Card>
        </CardDeck>

        <CardDeck style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 40 }}>
          <Card>
            <CardImg top width="100%" src={require("./../imgs/bg1.jpg")} />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
              <Button style={{ backgroundColor: "black" }}>Details</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src={require("./../imgs/bg234.jpg")} />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
              <Button style={{ backgroundColor: "black" }}>Details</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src={require("./../imgs/bg4.jpg")} />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
              <Button style={{ backgroundColor: "black" }}>Details</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src={require("./../imgs/bg1.jpg")} />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
              <Button style={{ backgroundColor: "black" }}>Details</Button>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
