import * as React from 'react';
import { ImageProps, ViewProps } from 'react-native';
import { ThemeShape } from '../types';
import { AvatarIcon } from './Avatar';

export interface CardContentProps extends ViewProps {
}

export interface CardActionsProps extends ViewProps {
  children: React.ReactNode;
}

export interface CardCoverProps extends ImageProps {
  theme?: ThemeShape;
}

export interface CardTitleProps extends ViewProps {
  title: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  subtitle?: React.ReactNode;
  subtitleStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  left?: (props: { size:number }) => React.ReactNode;
  right?: (props: { size:number }) => React.ReactNode;
}

export interface CardProps {
  elevation?: number;
  onPress?: () => any;
  children: React.ReactNode;
  style?: any;
  theme?: ThemeShape;
  testID?: string;
}

export declare class Card extends React.Component<CardProps> {
  static Content: React.ComponentType<CardContentProps>;
  static Actions: React.ComponentType<CardActionsProps>;
  static Cover: React.ComponentType<CardCoverProps>;
  static Title: React.ComponentType<CardTitleProps>;
}
