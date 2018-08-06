import React from 'react'
import optimizely from '@optimizely/optimizely-sdk'

class Optimizely extends React.Component {
  constructor() {
    super()

    this.state = {
      variation: 'Optimizely'
    }
  }

  componentDidMount() {
    var optimizelyClientInstance;
    var url = 'https://cdn.optimizely.com/json/11116229115.json';

    window.fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((datafile) => {
        optimizelyClientInstance = optimizely.createInstance({ datafile: datafile })

        var variation = optimizelyClientInstance.activate('my_experiment', 'Agatha-71875c482b1b');
        optimizelyClientInstance.track('my_conversion', 'Agatha-71875c482b1b');

        // var variation = optimizelyClientInstance.activate('my_experiment', 'Mahesha-aee098f6454a');
        // optimizelyClientInstance.track('my_conversion', 'Mahesha-aee098f6454a');

        if (variation === 'control') {
          this.setState({
            variation: 'control'
          })
        } else if (variation === 'treatment') {
          this.setState({
            variation: 'treatment'
          })
        }

      });
  }

  render() {
    return (
      <div>{this.state.variation}</div>
    )
  }
}

export default Optimizely
