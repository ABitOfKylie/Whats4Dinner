import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// import { friendOptions } from '../common'
ethnicOptions = [
  {
    text: 'American',
    value: 'American'
  },
  {
    text: 'Asian',
    value: 'Asian'
  },
  {
    text: 'Indian',
    value: 'Indian'
  },
  {
    text: 'Italian',
    value: 'Italian'
  },
  {
    text: 'Mexican',
    value: 'Mexican'
  }
];


const DropdownEthnic = () => (
	this.state= {
      ethnicOptions
    },
  <Dropdown placeholder='Select Type of Food' fluid selection options={this.state} />
);

export default DropdownEthnic;

*************************Alt 2 ***** until line 135
class Box extends React.Component {
  constructor() {
    super();
    this.state = {
      checkDevice: {
        "iPhone 4": false,
        "iPhone 5": false,
        "iPhone 6": false,
        "iPhone 7": false,
        "iPhone 8": false,
        "iPhone X": false
      },
      checkCountry: {
        US: false,
        UK: false,
        JP: false
      }
    };
  }

  componentDidMount() {
    $(document).ready(function() {
      $("#device").material_select();
    });
    $(this.countrySelect)
      .on("change", () => {
        let checkCountry = {
          US: false,
          UK: false,
          JP: false
        };
        let val = $(this.countrySelect).val();
        console.log(val);
        val.forEach(x => {
          checkCountry[x] = true;
        });
        this.setState({ checkCountry });
      })
      .material_select();
  }

  render() {
    const { checkCountry } = this.state;
    const countryVal = Object.keys(checkCountry).filter(x => checkCountry[x]);
    return (
      <div className="card" style={{ width: 900, margin: "auto" }}>
        <form className="row">
          <div className="col s6">
            <div className="input-field">
              <select
                ref={countrySelect => (this.countrySelect = countrySelect)}
                value={countryVal}
                multiple
                id="country"
                onChange={console.log}
              >
                <option value="" disabled>
                  Choose your option
                </option>
                <option value="US">US</option>
                <option value="UK">UK</option>
                <option value="JP">JP</option>
              </select>
              <label>Country</label>
            </div>
          </div>
          <div className="col s6">
            <div className="input-field">
              <select value="" multiple id="device">
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="1">iPhone 4</option>
                <option value="2">iPhone 5</option>
                <option value="3">iPhone 6</option>
                <option value="4">iPhone 7</option>
                <option value="5">iPhone 8</option>
                <option value="6">iPhone X</option>
              </select>
              <label>Devices</label>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col s6">
            <pre>{JSON.stringify(this.state.checkCountry, null, 2)}</pre>
          </div>
          <div className="col s6">
            <pre>{JSON.stringify(this.state.checkDevice, null, 2)}</pre>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Box />, document.getElementById("root"));
