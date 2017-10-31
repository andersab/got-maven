import React, { Component } from 'react';
import Section from 'lib/component/Section';
import Fragment from 'lib/component/Fragment';

export default class StyledFragment extends Component {

  render() {
    return (
      <Section>
        <h2>Build Lifecycle</h2>
        <Fragment effect="current-visible">
          <b>validate</b> the project is correct and all necessary info is provided
        </Fragment>
        <Fragment effect="current-visible">
          <b>compile</b> compile the source of the project
        </Fragment>
        <Fragment effect="current-visible">
          <b>test</b> test the compiled source code, tests do not require code packaged or deployed
        </Fragment>
        <Fragment effect="current-visible">
          <b>package</b> package the code into a distributable format
        </Fragment>
        <Fragment effect="current-visible">
          <b>verify</b> verify the quality of the artifact
        </Fragment>
        <Fragment effect="current-visible">
          <b>install</b> install into the local repository
        </Fragment>
        <Fragment effect="current-visible">
          <b>deploy</b> deploy to a remote repository for others consumption
        </Fragment>
      </Section>
    );
  }
}

