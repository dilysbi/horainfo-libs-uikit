# 👨‍🚀👨‍🚀👨‍🚀 HoraInfo UIkit

[![Version](https://img.shields.io/npm/v/@horainfo-libs/uikit)](https://www.npmjs.com/package/@horainfo-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@horainfo-libs/uikit)](https://www.npmjs.com/package/@horainfo-libs/uikit)

Horainfo UIkit is a set of React components and hooks used to build pages on Horainfo's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add horainfo-libs-uikit`

## Setup

### Theme

Before using Horainfo UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'horainfo-libs-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'horainfo-libs-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://Horainfo.github.io/Horainfo-uikit/)

#### Info from pankageswap
