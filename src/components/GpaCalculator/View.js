import React, {Component} from 'react';

class View extends Component {
    render() {
        return (
            <div className="col-sm-6 offset-3">
                <table className="table table-bordered table-striped">
                    <caption>Results</caption>
                    <tbody>
                    {this.props.marks.map((item, index) =>
                        <tr key={index}>
                            <td className="text-capitalize font-weight-bold">{item.subject}</td>
                            <td>{item.mark}</td>
                        </tr>
                    )}
                    </tbody>
                    <tfoot>
                    <tr className="bg-success text-white">
                        <td className="font-weight-bold">GPA: {this.props.gpa}</td>
                        <td className="font-weight-bold">GRADE: {this.props.grade}</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default View;