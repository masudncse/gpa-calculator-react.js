import React, {Component} from 'react';
import _ from 'lodash';
import './App.css';
import Entry from './components/GpaCalculator/Entry';
import View from './components/GpaCalculator/View';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subjects: ['bangla', 'mathematics', 'english'],
            marks: [],
            gpa: 0,
            grade: 'N/A'
        };

        this.subject = React.createRef();
        this.mark = React.createRef();
    }

    handleAdd = e => {
        let mark = {
            subject: this.subject.current.value,
            mark: parseFloat(this.mark.current.value)
        };

        let joined = this.state.marks.concat(mark);
        this.setState({marks: joined});
    };

    getGpa = e => {
        let result = 0;
        if (this.state.marks.length > 0) {
            this.state.marks.map((item) =>
                result += item.mark
            );
            result = (result / this.state.marks.length);
        }
        return result;
    };

    getGrade = e => {
        let gpa = this.getGpa();
        let grade = '';
        if (gpa > 0) {
            if (gpa >= 80) {
                grade = 'A+';
            } else {
                grade = 'N/A';
            }
        }

        return grade;
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevState.marks !== this.state.marks){
            this.setState({
                gpa: this.getGpa(),
                grade: this.getGrade()
            });
        }
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <Entry
                            subjects={this.state.subjects}
                            subjectRef={this.subject}
                            markRef={this.mark}
                            onClick={this.handleAdd}/>
                        <View
                            marks={this.state.marks}
                            gpa={this.state.gpa}
                            grade={this.state.grade}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
