import React, { Component } from 'react';
import Section from 'lib/component/Section';
import Fragment from 'lib/component/Fragment';

export default class StyledFragment extends Component {

  render() {
    return (
      <Section>
        <h3>Build Lifecycle</h3>
        <Fragment >
          <b><font color="red">validate</font></b> the project is correct and all necessary info is provided
        </Fragment>
        <Fragment >
          <b><font color="red">compile</font></b> compile the source of the project
        </Fragment>
        <Fragment >
          <b><font color="red">test</font></b> test the compiled source code, tests do not require code packaged or deployed
        </Fragment>
        <Fragment >
          <b><font color="red">package</font></b> package the code into a distributable format
        </Fragment>
        <Fragment >
          <b><font color="red">verify</font></b> verify the quality of the artifact
        </Fragment>
        <Fragment >
          <b><font color="red">install</font></b> install into the local repository
        </Fragment>
        <Fragment >
          <b><font color="red">deploy</font></b> deploy to a remote repository for others consumption
        </Fragment>
      </Section>
    );
  }
}

