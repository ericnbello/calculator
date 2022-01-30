import React, {Component} from "react";

const currentYear = new Date().getFullYear();

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p>
                    Copyright &copy; { currentYear } - ericnbello 
                </p>
                <a href="https://github.com/ericnbello">
                    <img src="/github.svg" width="30" height="30"/>
                </a>
            </footer>
        )
    }
}

export default Footer;