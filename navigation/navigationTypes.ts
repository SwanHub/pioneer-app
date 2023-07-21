import { Founder } from '../store/store';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Pioneers: undefined;
  Meetups: undefined;
  Posts: undefined;
  Codex: undefined;
  Profile: { founder: Founder };
};
  

export type PioneersScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Pioneers'
>;

export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
