import React, { Component } from 'react';

class View extends Component {
    render() {
        return (
            <div className="col-sm-6 offset-3">
                <table className="table">
                    <caption>Results</caption>
                    <tbody>
                        {this.props.marks.map((item, index) =>
                            <tr key={index}>
                                <td className="text-capitalize font-weight-bold w-50">{item.subject}</td>
                                <td>{item.mark}</td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr className="text-white">
                            <td className="font-weight-bold bg-info w-50">GPA: {this.props.gpa}</td>
                            <td className="font-weight-bold bg-success">GRADE: {this.props.grade}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default View;