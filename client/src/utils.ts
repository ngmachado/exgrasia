import { TileType } from 'common-types';

export const tileTypeToColor = {
  [TileType.UNKNOWN]: 'grey',
  [TileType.WATER]: 'blue',
  [TileType.LAND]: 'green',
};
