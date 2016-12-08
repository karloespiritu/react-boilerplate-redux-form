/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Link } from 'react-router';
import { Header, Button } from 'semantic-ui-react';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <Header as="h1">Semantic UI Header Component</Header>
          <Button primary>Semantic UI Primary Button</Button>
          <Button secondary>Semantic UI Secondary Button</Button>
          <h1>
            <Link to="/login"><FormattedMessage {...messages.link} /></Link>
          </h1>
        </div>
      </div>
    );
  }
}
