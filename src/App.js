import React, { Component } from 'react';
import Banner from './Banner.png';
import ClubLogo from './ClubLogo.png';
import Placeholder from './Placeholder.jpg';
import {
  Button,
  ButtonGroup,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <div className="App">

        <div className="Banner">
          <img src={Banner}/>
        </div>

        <div className="Taskbar">
          <ButtonGroup>
            <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Home</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Calendar</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>About</Button>
          </ButtonGroup>
        <div>


  </div>
        </div>

        <div className="Content">
          1447 Bussman Hall Tuesday 12-2pm

          <div className="pictures">
            placeholder for pictures
            <img src={Placeholder} />
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.src}
              >
                <img src={Placeholder} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
              </CarouselItem>
              <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.src}
              >
                <img src={Placeholder} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
              </CarouselItem>
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          </div>
        </div>

        <div className="Bottom Bar">
          <img src={ClubLogo} />
        </div>

        <div className="Copyright">
          COPYRIGHT NO STEALING
        </div>

      </div>
    );
  }
}

export default App;
