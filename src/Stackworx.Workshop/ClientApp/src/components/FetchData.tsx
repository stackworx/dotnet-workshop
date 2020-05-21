import React, {Component} from 'react';

export class FetchData extends Component<
  {},
  {forcasts: unknown[]; loading: boolean}
> {
  static displayName = FetchData.name;

  constructor(props: {}) {
    super(props);
    // @ts-ignore
    this.state = {forecasts: [], loading: true};
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  // @ts-ignore
  static renderForecastsTable(forecasts) {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts
            // @ts-ignore
            .map((forecast) => (
              <tr key={forecast.date}>
                <td>{forecast.date}</td>
                <td>{forecast.temperatureC}</td>
                <td>{forecast.temperatureF}</td>
                <td>{forecast.summary}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }

  render() {
    // @ts-ignore
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      // @ts-ignore
      FetchData.renderForecastsTable(this.state.forecasts)
    );

    return (
      <div>
        <h1 id="tabelLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    // @ts-ignore
    this.setState({forecasts: data, loading: false});
  }
}
