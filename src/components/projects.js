import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/nfwWjNp/screenshot.png) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              This is React js based Frontend.Where i worked on React Js,Bootstrap,Css.
            </CardText>
            <CardActions border>
              <a href="https://github.com/payal-dot/learngit" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
              <a href="https://reactprod-resume.herokuapp.com/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
    </div>
     )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
		{/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/1KTh4DG/php.png) center / cover'}} >Php/Laravel #2</CardTitle>
            <CardText>
              I have worked on Backend Developer.
            </CardText>
            <CardActions border>
              <a href="https://upsinverter.com/utl/" rel="noopener noreferrer" target="_blank">
              <Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
		</div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
		{/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/YLDTTd5/wordpress.png) center / cover'}} >Wordpress Project #3</CardTitle>
            <CardText>
              This is a Wordpress Based Project.Where i worked on REST Api in PHP.
            </CardText>
            <CardActions border>
              <a href="https://upsinverter.com/utl/" rel="noopener noreferrer" target="_blank">
              <Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
		</div>
      )
    }
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Php/Laravel</Tab>
          <Tab>Wordpress</Tab>
         
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
