import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from 'material-ui/MenuItem';
import { withRouter } from 'react-router';

export class MenuItemLinkComponent extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        onTouchTap: PropTypes.func.isRequired,
        to: PropTypes.string.isRequired,
    };

    handleMenuTap = () => {
        this.props.history.push(this.props.to);
        this.props.onTouchTap();
    };
    render() {
        const {
            history, // eslint-disable-line no-unused-vars
            match, // eslint-disable-line no-unused-vars
            location, // eslint-disable-line no-unused-vars
            staticContext, // eslint-disable-line no-unused-vars
            ...props
        } = this.props;

        return <MenuItem {...props} onTouchTap={this.handleMenuTap} />;
    }
}

export default withRouter(MenuItemLinkComponent);
