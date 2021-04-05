import React, {Component} from "react";

export class aboutTheTest extends Component {
    render() {
        return (
            <div id="about-the-test" className="text-center">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1 section-title">
                        <h2>{this.props.data ? this.props.data.title : "Loading"}</h2>
                    </div>

                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 intro-text">
                                    <p>
                                        {this.props.data ? this.props.data.paragraph : "Loading"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default aboutTheTest;
