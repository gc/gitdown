import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class App extends Component {
  state = {
    markdown: localStorage.getItem('markdown')
  }

  handleChange = (event) => {
    const markdown = event.target.value;
    localStorage.setItem('markdown', markdown);
    this.setState({markdown});
  }

  render() {
    return (
      <React.Fragment>
        <a className="link" href="https://github.com/gc/gitdown" target="_blank">Github</a> /
        <a className="link" href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Guide</a>
        <div bp="grid 6" className="App">
            <textarea value={this.state.markdown} onChange={this.handleChange} />
            <ReactMarkdown source={this.state.markdown} className="markdown-body"/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
