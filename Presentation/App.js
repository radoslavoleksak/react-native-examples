import React, { Component }  from 'react';
import { View } from 'react-native';

import { HelloWorldApp } from './src/001_LearnTheBasics';

import { Bananas } from './src/002_Props';
import { LotsOfGreetings } from './src/002_Props';

import { Blink } from './src/003_State';

import { LotsOfStyles } from './src/004_Style';

import { FixedDimensionsBasics } from './src/005_HeightAndWidth';
import { FlexDimensionsBasics } from './src/005_HeightAndWidth';

import { FlexDirectionBasics } from './src/006_LayoutWithFlexbox';
import { JustifyContentBasics } from './src/006_LayoutWithFlexbox';
import { AlignItemsBasics } from './src/006_LayoutWithFlexbox';

import { PizzaTranslator } from './src/007_HandlingTextInput';

import { ButtonBasics } from './src/008_HandlingTouches';
import { Touchables } from './src/008_HandlingTouches';

import { IScrolledDownAndWhatHappenedNextShockedMe } from './src/009_UsingAScrollView';

import { FlatListBasics } from './src/010_UsingListViews';
import { SectionListBasics } from './src/010_UsingListViews';

import { FetchExample } from './src/011_Networking';

import { ChatRoom } from './src/099_Bonus';

export default class App extends Component {

  render() {
    // return (
    //   <HelloWorldApp />
    // )

    // return (
    //   <Bananas />
    // )
    // return (
    //   <LotsOfGreetings />
    // )

    // return (
    //   <Blink />
    // )

    // return (
    //   <LotsOfStyles />
    // )

    // return (
    //   <FixedDimensionsBasics />
    // )
    // return (
    //   <FlexDimensionsBasics />
    // )

    // return (
    //   <FlexDirectionBasics />
    // )
    // return (
    //   <JustifyContentBasics />
    // )
    // return (
    //   <AlignItemsBasics />
    // )

    // return (
    //   <PizzaTranslator />
    // )

    // return (
    //   <ButtonBasics />
    // )
    // return (
    //   <Touchables />
    // )

    // return (
    //   <IScrolledDownAndWhatHappenedNextShockedMe />
    // )

    // return (
    //   <FlatListBasics />
    // )
    // return (
    //   <SectionListBasics />
    // )

    // return (
    //   <FetchExample />
    // )
 
    return (
      <ChatRoom />
    )
  }
}