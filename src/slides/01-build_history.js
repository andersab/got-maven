import React, { Component } from 'react';
import Section from 'lib/component/Section';
import Fragment from 'lib/component/Fragment';

export default class StyledFragment extends Component {

  render() {
    return (
      <Section>
        <h2>Build Tool History</h2>
        <Fragment>1977 Make</Fragment>
        <Fragment>1996 JDK</Fragment>
        <Fragment>2000 ant</Fragment>
        <Fragment><b><font color="green">2002 Maven 1.0</font></b></Fragment>
        <Fragment>2004 ivy</Fragment>
        <Fragment><b><font color="green">2005 Maven 2.0</font></b></Fragment>
        <Fragment>2008 Simple Build Tool (SBT)</Fragment>
        <Fragment><b><font color="green">2010 Maven 3.0</font></b></Fragment>
        <Fragment>2012 Gradle 1.0</Fragment>
      </Section>
    );
  }
}
