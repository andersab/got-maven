

import React, { Component } from 'react';
import Section from 'lib/component/Section';
import Fragment from 'lib/component/Fragment';
//import Code from 'lib/component/Code';
const transition = 'fade';

export default class StyledFragment extends Component {

  render() {
    return (
      <Section transition={transition}>
        <h3>Dependency Management</h3>
        <Fragment>Restrict versions inside projects from parent pom</Fragment>
      </Section>
    );
  }
}
