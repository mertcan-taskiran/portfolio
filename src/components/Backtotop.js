import React, { Component } from 'react';

class BackToTop extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ isVisible: true });
    } else {
      this.setState({ isVisible: false });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  addBounce() {
    document.getElementById('icon').classList.add('fa-bounce');
  }
  
  removeBounce() {
    document.getElementById('icon').classList.remove('fa-bounce');
  }

  render() {
    const { isVisible } = this.state;

    return (
      isVisible && (
        <button id='color-bg-4' className="btn back-to-top" onMouseOver={this.addBounce} onMouseOut={this.removeBounce} onClick={this.scrollToTop}>
          <i className="fa-solid fa-jet-fighter-up text-light" id="icon"></i>
        </button>
      )
    );
  }
}

export default BackToTop;
