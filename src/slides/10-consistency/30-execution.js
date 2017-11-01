import React, { Component } from 'react';
import Section from 'lib/component/Section';
import Fragment from 'lib/component/Fragment';

export default class StyledFragment extends Component {
  render() {
    return (
      <Section>
        <h3>Execution</h3>
        <p>I know how to build any maven project...</p>
        <Fragment effect="shrink">
          <font color="lightgreen">Clean Project   </font>
            $ mvn clean
        </Fragment>
        <Fragment effect="shrink">
          <font color="lightgreen">Compile Project   </font>
            $ mvn compile
        </Fragment>
        <Fragment effect="shrink">
          <font color="lightgreen">Test Project   </font>
            $ mvn test
        </Fragment>
        <Fragment effect="shrink">
          <font color="lightgreen">Package Project   </font>
            $ mvn package
        </Fragment>
        <Fragment effect="shrink">
          <font color="lightgreen">Install Project   </font>
            $ mvn install
        </Fragment>
        <Fragment effect="current-visible">
          <font color="lightgreen">Put it all together   </font>
            $ mvn clean install
        </Fragment>
      </Section>
    );
  }
}

