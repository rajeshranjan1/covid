import React, { Component } from 'react'
import './BackToTop.scss'

class BackToTop extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isVisible : false
        }
    }

    componentDidMount() {
        const scrollComponent = this;
        document.addEventListener("scroll", function(e) {
        scrollComponent.toggleVisibility();
        });
    }
    

    toggleVisibility() {
        if (window.pageYOffset > 300) {
          this.setState({
            is_visible: true
          });
        } else {
          this.setState({
            is_visible: false
          });
        }
     }

    scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

    render() {
        const { is_visible } = this.state
        return (
            <>
            { is_visible &&
                 (<div onClick={this.scrollToTop} className="backToTop">
                    Back To Top
                </div>)  }
            </>
        )
    }
}

export default BackToTop