import React, { Component } from 'react';

class Entry extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="col-sm-6 offset-3">
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <td>
                            <select ref={this.props.subjectRef} className="form-control text-capitalize">
                                {this.props.subjects.map(subject =>
                                    <option key={subject} value={subject}>{subject}</option>
                                )}
                            </select>
                        </td>
                        <td>
                            <input ref={this.props.markRef} type="text" className="form-control"/>
                        </td>
                        <td>
                            <button className="btn btn-primary" onClick={this.props.onClick}>Add</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Entry;