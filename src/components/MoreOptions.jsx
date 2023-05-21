// IMPORT CORE PACKAGES
import React, { useState } from 'react';
// IMPORT MUI COMPONENTS
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InfoIcon from '@mui/icons-material/Info';
// IMPORT USER DEFINED COMPONENTS
import MoreOptionsMenu from './MoreOptionsMenu';
import ColabIcon from '../assets/icons/ColabIcon';
// IMPORT VARIABLES
import {
    COLAB_LINK,
    COLAB_LINK_COMPARISONS
} from '../constants/variables';

const options = [
  {
    name: 'Source Code',
    icon: ColabIcon,
    link: COLAB_LINK,
  },
  {
    name:'Model Comparisons',
    icon: ColabIcon,
    link:COLAB_LINK_COMPARISONS
  }
];

const MoreOptions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'more-options' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="more-options"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        >

        <MoreOptionsMenu options={options} />

      </Menu>
    </div>
  );
};

export default MoreOptions;
