# react-damn-simple-grid

## Installation & Usage

```
npm install --save react-damn-simple-grid
```

```
import React from 'react'
import Grid from 'react-damn-simple-grid'

const App = () => (
  <Grid>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
  </Grid>
)
```

with custom props:

```
import React from 'react';
import Grid from 'react-damn-simple-grid'

const App = () => (
  <Grid itemsPerRow={3} xSpace={3} verticalSpace={25}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
  </Grid>
)
```

## Props

|               | default | description                    |
| ------------- | ------- | ------------------------------ | 
| `itemsPerRow` | 4       | Number of item per row         |
| `xSpace`      | 1       | Horizontal space between items |
| `ySpace`      | 20      | Vertical Space between items   |
