import React from 'react'
import optimizely from '@optimizely/optimizely-sdk'

class Optimizely extends React.Component {
  constructor() {
    super()

    this.state = {
      variation: 'Optimizely',
      userId: 'demo-user-5-'
    }
  }

  componentDidMount() {
    let url = 'https://cdn.optimizely.com/json/11116229115.json';

    window.fetch(url, { mode: 'cors' })
      .then((response) => response.json())
      .then((datafile) => {
        this.optimizelyClientInstance = optimizely.createInstance({ datafile: datafile })
      });
  }

  trackMyConversion = () => {
    this.optimizelyClientInstance.track('my_conversion', this.state.userId);
  }

  runTest = () => {
    for (let i = 0; i < 100; i++) {
      this.variation = this.optimizelyClientInstance.activate('my_experiment', this.state.userId + i);

      // run track randomly by determining true or false randomly
      if (Math.floor(Math.random() * 2)) {
        this.optimizelyClientInstance.track('my_conversion', this.state.userId + i);
      }
    }
  }

  render() {
    return (
      <div>
        <p>Your current variation: {this.state.variation}</p>
      </div>
    )
  }
}

export default Optimizely
