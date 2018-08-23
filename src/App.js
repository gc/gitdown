import React, { Component, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';

class App extends Component {
  state = {
    markdown: localStorage.getItem('markdown') || `# Title`
  }

  handleChange = (e) => {
    const markdown = e.target.value;
    localStorage.setItem('markdown', markdown);
    this.setState({ markdown });
  }

  link(text, link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  }

  render() {
    return (
      <Fragment>
        <div style={{ position: 'absolute', top: 5, left: 5, fontSize: 14 }}>
          {this.link('Github', 'https://github.com/gc/gitdown')} /
          {this.link('Guide', 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet')}
        </div>
        <div style={{ display: 'flex', height: '100%' }}>
            <textarea style={{ height: '100%', width: '35%' }} value={this.state.markdown} onChange={this.handleChange} />
            <ReactMarkdown source={this.state.markdown} className="md"/>
        </div>
      </Fragment>
    );
  }
}

export default App;
