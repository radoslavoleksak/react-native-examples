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

export default class App extends Component {
  render() {
    return (
      <View>
        <HelloWorldApp />

        <Bananas />
        <LotsOfGreetings />

        <Blink />

        <LotsOfStyles />

        <FixedDimensionsBasics />
        <FlexDimensionsBasics />

        <FlexDirectionBasics />
        <JustifyContentBasics />
        <AlignItemsBasics />

        <PizzaTranslator />

        <ButtonBasics />
        <Touchables />

        <IScrolledDownAndWhatHappenedNextShockedMe />

        <FlatListBasics />
        <SectionListBasics />

        <FetchExample />
      </View>
    );
  }
}