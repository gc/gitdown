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

  link(text, link) {
    return (
      <a className="link" href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.link('Github', 'https://github.com/gc/gitdown')} /
        {this.link('Guide', 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet')}
        <div bp="grid 6" className="App">
            <textarea value={this.state.markdown} onChange={this.handleChange} />
            <ReactMarkdown source={this.state.markdown} className="markdown-body"/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
