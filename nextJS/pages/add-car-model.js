import Layout from '../components/Layout';
import Container from '../components/Container';
import React, { Component } from 'react';
import Select from 'react-select';


const Options = [
    { value: 'Audi', label: 'Audi', instanceId: '1' },
    { value: 'Bentley', label: 'Bentley', instanceId: '1' },
    { value: 'Buggati', label: 'Buggati', instanceId: '1' }
];

class CarModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: null,
            code: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.checkFormValidation = this.checkFormValidation.bind(this);
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    checkFormValidation(type, e) {

    }

    handleOnSelect(selectedOption) {
        this.setState({ model: selectedOption })
    }

    onSubmit() {
        event.preventDefault();
        let { model, code } = this.state;
        console.log(model, code);
    }

    render() {

        return <Layout title={'CarModel'}>
            <Container>
                <div className="card shadow p-1 mb-6 bg-white rounded" style={{ width: '30rem', margin: '50px auto' }}>
                    <div className="card-body" style={{ backgroundColor: 'white' }}>
                        <h3 className="card-title text-center">Add Car</h3>
                        <div className='row'>
                            <form style={{ margin: '20px auto', width: '400px' }}>
                                <div className="form-group">
                                    <label>Manufacturer</label>
                                    <select className="form-control" id="exampleFormControlSelect1" onChange={(e)=>{console.log(e.target.value)}}>
                                        <option>Audi</option>
                                        <option>Audi</option>
                                        <option>Audi</option>
                                        <option>Audi</option>
                                        <option>Audi</option>
                                    </select>
                                    {this.state.invalidName ? <small style={{ color: 'red' }}>
                                        <ul style={{ listStyle: 'none', padding: '0px' }}>
                                            <li>* This is not a valid name</li>
                                        </ul></small> : null}
                                </div>
                                <div className="form-group">
                                    <label>Model Code</label>
                                    <input type="text" className="form-control" onChange={(e) => {
                                        this.setState({ code: e.target.value });
                                        this.checkFormValidation('country', e);
                                    }} placeholder="Enter country" />
                                </div>

                                <button className="btn btn-primary" onClick={this.onSubmit.bind(this)} style={{ width: '400px' }}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>

            </Container>
        </Layout>;
    }
}

export default CarModel;