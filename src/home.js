import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Button, Container, Grid, Header, Segment } from "semantic-ui-react";
import { getOS } from "./openlink";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Segment basic>
          <Container>
            <Grid textAlign="center" centered>
              <Grid.Row>
                <Grid.Column width={12} textAlign="center">
                  <Header as="h1">{getOS()}</Header>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Button fluid size="huge">
                    Instagram
                  </Button>
                  <Button fluid size="huge">
                    Phone Number
                  </Button>
                  <Button fluid size="huge">
                    Facebook
                  </Button>
                  <Button fluid size="huge">
                    Twitter
                  </Button>
                  <Button fluid size="huge">
                    Snapchat
                  </Button>
                  <Button fluid size="huge">
                    LinkedIn
                  </Button>
                  <Button fluid size="huge">
                    Email
                  </Button>
                  <Button fluid size="huge">
                    Youtube
                  </Button>
                  <Button fluid size="huge">
                    TikTok
                  </Button>
                  <Button fluid size="huge">
                    SoundCloud
                  </Button>
                  <Button fluid size="huge">
                    Spotify
                  </Button>
                  <Button fluid size="huge">
                    Apple Music
                  </Button>
                  <Button fluid size="huge">
                    Venmo
                  </Button>
                  <Button fluid size="huge">
                    Cash App
                  </Button>
                  <Button fluid size="huge">
                    Paypal
                  </Button>
                  <Button fluid size="huge">
                    WhatsApp
                  </Button>
                  <Button fluid size="huge">
                    Twitch
                  </Button>
                  <Button fluid size="huge">
                    Custom Link
                  </Button>
                  <Button fluid size="huge">
                    Website Link
                  </Button>
                  <Button fluid size="huge">
                    Business Address
                  </Button>
                  <Button fluid size="huge">
                    Line Number
                  </Button>
                  <Button fluid size="huge">
                    Kakaotalk
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}
